import React, { useEffect, useMemo, useState } from "react";
import {
  getInitialSchemaValueObject,
  getInitialTabLabel,
  getTabDataAndParentTabLabelByName,
} from "src/helper/schemaHelper";
import SchemaTabRenderer from "../../../components/schemaRender/SchemaTabRenderer";
import SchemaFieldRenderer from "../../../components/schemaRender/SchemaFieldRenderer";
import { useSelector, useDispatch } from "react-redux";
import {
  addBookkeepingEntryAction,
  getBookkeepingSchemaDetailsAction,
  validateAllFormFieldAction,
} from "src/thunks/bookKeeping";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { updateFormObject } from "src/slice/bookKeeping";
import foodSchema from "src/helper/schema/foodSchema";

const foodDetailSchema = {
  name: "foodDetailSchema",
  label: "Food Detail Schema",
  type: "schema",
  version: "1.0",
  children: [
    {
      queryName: "getFoodDetailById",
      label: "Food Details",
      type: "parentTab",
      children: [
        {
          label: "Basic Information",
          type: "tab",
          children: [
            {
              label: "Food Name",
              type: "text",
              dataMappingName: "food.name",
              validationType: "string",
              validations: [
                { type: "min", params: [3, "Must be at least 3 characters"] },
                {
                  type: "max",
                  params: [50, "Must be at most 50 characters"],
                },
                { type: "trim" },
              ],
              readOnly: false,
              isMultilingual: false,
              isShowInTable: true,
            },
            {
              label: "Food ID",
              type: "text",
              dataMappingName: "food.id",
              validationType: "string",
              validations: [
                { type: "min", params: [3, "Must be at least 3 characters"] },
                {
                  type: "max",
                  params: [50, "Must be at most 50 characters"],
                },
                { type: "trim" },
              ],
              readOnly: false,
              isMultilingual: false,
              isShowInTable: true,
            },
            {
              label: "Category",
              type: "select",
              options: [
                { label: "Vegetarian", value: "Vegetarian" },
                { label: "Non-Vegetarian", value: "Non-Vegetarian" },
                { label: "Vegan", value: "Vegan" },
              ],
              dataMappingName: "food.category",
              readOnly: false,
              isMultilingual: false,
              isShowInTable: true,
            },
            {
              label: "Cuisine",
              type: "text",
              dataMappingName: "food.cuisine",
              validationType: "string",
              validations: [
                { type: "min", params: [3, "Must be at least 3 characters"] },
                {
                  type: "max",
                  params: [50, "Must be at most 50 characters"],
                },
                { type: "trim" },
              ],
              readOnly: false,
              isMultilingual: false,
              isShowInTable: true,
            },
            {
              label: "Preparation Time",
              type: "number",
              dataMappingName: "food.preparationTime",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Description",
              type: "textarea",
              dataMappingName: "food.description",
              readOnly: false,
              isMultilingual: true,
            },
          ],
        },
        {
          label: "Nutritional Information",
          type: "tab",
          children: [
            {
              label: "Calories",
              type: "number",
              dataMappingName: "nutrition.calories",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Protein",
              type: "number",
              dataMappingName: "nutrition.protein",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Carbohydrates",
              type: "number",
              dataMappingName: "nutrition.carbohydrates",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Fats",
              type: "number",
              dataMappingName: "nutrition.fats",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Vitamins",
              type: "textarea",
              dataMappingName: "nutrition.vitamins",
              readOnly: false,
              isMultilingual: false,
            },
          ],
        },
      ],
    },
    {
      label: "Ingredients",
      type: "tab",
      children: [
        {
          label: "Ingredient List",
          type: "section",
          children: [
            {
              label: "Ingredient Name",
              type: "text",
              dataMappingName: "ingredients.name",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Quantity",
              type: "text",
              dataMappingName: "ingredients.quantity",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Unit",
              type: "text",
              dataMappingName: "ingredients.unit",
              readOnly: false,
              isMultilingual: false,
            },
          ],
        },
      ],
    },
    {
      label: "Cooking Instructions",
      type: "tab",
      children: [
        {
          label: "Steps",
          type: "section",
          children: [
            {
              label: "Step Description",
              type: "textarea",
              dataMappingName: "instructions.steps",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Step Number",
              type: "number",
              dataMappingName: "instructions.stepNumber",
              readOnly: false,
              isMultilingual: false,
            },
          ],
        },
      ],
    },
  ],
  sqlQueryList: [
    {
      queryName: "getFoodDetailById",
      query: `
          SELECT 
            f.id,
            f.name,
            f.category,
            f.cuisine,
            f."preparationTime",
            f.description,
              
            jsonb_build_object(
              'calories', n.calories,
              'protein', n.protein,
              'carbohydrates', n.carbohydrates,
              'fats', n.fats,
              'vitamins', n.vitamins
            ) AS nutrition,
              
            (
              SELECT jsonb_agg(
                jsonb_build_object(
                  'name', i.name,
                  'quantity', i.quantity,
                  'unit', i.unit
                )
              )
              FROM ingredients i
              WHERE i."foodId" = f.id
            ) AS ingredients,
              
            (
              SELECT jsonb_agg(
                jsonb_build_object(
                  'stepNumber', ins."stepNumber",
                  'stepDescription', ins."stepDescription"
                )
                ORDER BY ins."stepNumber"
              )
              FROM instructions ins
              WHERE ins."foodId" = f.id
            ) AS instructions
              
          FROM food f
          LEFT JOIN nutrition n ON n."foodId" = f.id
          WHERE f.id = $[id];
        `,
      sampleDataValue: {
        id: 16,
      },
    },
    {
      queryName: "saveFoodDetail",
      query: `
          DO $$
          DECLARE
            new_food_id INTEGER;
          BEGIN
            -- Insert into food and store id
            INSERT INTO food (
              name,
              category,
              cuisine,
              "preparationTime",
              description
            ) VALUES (
              $[food.name],
              $[food.category],
              $[food.cuisine],
              $[food.preparationTime],
              $[food.description]
            )
            RETURNING id INTO new_food_id;
  
            -- Insert into nutrition
            INSERT INTO nutrition (
              "foodId", calories, protein, carbohydrates, fats, vitamins
            ) VALUES (
              new_food_id,
              $[nutrition.calories],
              $[nutrition.protein],
              $[nutrition.carbohydrates],
              $[nutrition.fats],
              $[nutrition.vitamins]
            );
  
            -- Insert ingredients
            INSERT INTO ingredients ("foodId", name, quantity, unit) VALUES
            $<bulk:ingredients(new_food_id, $[name], $[quantity], $[unit])>;
  
            -- Insert instructions
            INSERT INTO instructions ("foodId", "stepNumber", "stepDescription") VALUES
            $<bulk:instructions(new_food_id, $[stepNumber], $[stepDescription])>;
          END $$;
        `,
      sampleDataValue: {
        food: {
          name: "Paneer Butter Masala",
          category: "Vegetarian",
          cuisine: "Indian",
          preparationTime: 40,
          description:
            "A rich and creamy curry made with paneer in a tomato-butter base.",
        },
        nutrition: {
          calories: 450,
          protein: 12,
          carbohydrates: 30,
          fats: 25,
          vitamins: "A, B12, D",
        },
        ingredients: [
          { name: "Paneer", quantity: "200", unit: "grams" },
          { name: "Butter", quantity: "2", unit: "tbsp" },
          { name: "Tomatoes", quantity: "3", unit: "pieces" },
          { name: "Cream", quantity: "0.5", unit: "cup" },
          { name: "Spices", quantity: "1", unit: "tbsp" },
        ],
        instructions: [
          {
            stepNumber: 1,
            stepDescription: "Heat butter in a pan and sauté onions.",
          },
          {
            stepNumber: 2,
            stepDescription: "Add tomato puree and cook until oil separates.",
          },
          {
            stepNumber: 3,
            stepDescription: "Add paneer and cook for 10 minutes.",
          },
          {
            stepNumber: 4,
            stepDescription: "Stir in cream and garnish with coriander.",
          },
        ],
      },
    },
    {
      queryName: "updateFoodDetail",
      query: `
          DO $$
          BEGIN
            -- Update food table
            UPDATE food SET
              name = $[food.name],
              category = $[food.category],
              cuisine = $[food.cuisine],
              "preparationTime" = $[food.preparationTime],
              description = $[food.description]
            WHERE id = $[food.id];
  
            -- Update nutrition table
            UPDATE nutrition SET
              calories = $[nutrition.calories],
              protein = $[nutrition.protein],
              carbohydrates = $[nutrition.carbohydrates],
              fats = $[nutrition.fats],
              vitamins = $[nutrition.vitamins]
            WHERE "foodId" = $[food.id];
  
            -- Update ingredients
            $<multiUpdate:ingredients(
              UPDATE ingredients SET
                name = $[name],
                quantity = $[quantity],
                unit = $[unit]
              WHERE id = $[id]
            )>
  
            -- Update instructions
            $<multiUpdate:instructions(
              UPDATE instructions SET
                "stepNumber" = $[stepNumber],
                "stepDescription" = $[stepDescription]
              WHERE id = $[id]
            )>
          END $$;
        `,
      sampleDataValue: {
        food: {
          id: 1,
          name: "Updated Paneer Butter Masala",
          category: "Vegetarian",
          cuisine: "Indian",
          preparationTime: 45,
          description: "A rich tomato-based curry with paneer and butter.",
        },
        nutrition: {
          calories: 480,
          protein: 14,
          carbohydrates: 32,
          fats: 28,
          vitamins: "A, B12, D",
        },
        ingredients: [
          { id: 10, name: "Paneer", quantity: "250", unit: "grams" },
          { id: 11, name: "Butter", quantity: "3", unit: "tbsp" },
          { id: 12, name: "Tomatoes", quantity: "4", unit: "pieces" },
        ],
        instructions: [
          {
            id: 21,
            stepNumber: 1,
            stepDescription: "Heat butter and sauté onions.",
          },
          {
            id: 22,
            stepNumber: 2,
            stepDescription: "Add tomato puree and cook well.",
          },
          {
            id: 23,
            stepNumber: 3,
            stepDescription: "Add paneer, simmer, and finish with cream.",
          },
        ],
      },
    },
  ],
};

function SchemaMainRenderer() {
  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const formDataObject = useSelector(
    (state) => state.bookKeeping.formDataObject
  );

  console.log("formDataObject", formDataObject);

  const [schema, setSchema] = useState(null);

  const [selectedTabLabel, setSelectedTabLabel] = useState("");

  const [languageData, setLanguageData] = useState({
    selectedLanguage: "en",
    languageList: [
      { label: "English", value: "en" },
      { label: "Finnish", value: "fi" },
    ],
  });

  useEffect(() => {
    getSchema();
  }, []);

  const { tabData, parentTabLabel } = useMemo(() => {
    if (selectedTabLabel) {
      const { tabData, parentTabLabel } = getTabDataAndParentTabLabelByName(
        schema,
        selectedTabLabel
      );
      return { tabData, parentTabLabel };
    }
    return { tabData: null, parentTabLabel: null };
  }, [selectedTabLabel]);

  const getSchema = async () => {
    try {
      const responseData = foodDetailSchema;

      setSchema(responseData);

      const initialData = getInitialSchemaValueObject(responseData);

      dispatch(updateFormObject(initialData));

      const tabLabel = getInitialTabLabel(responseData);
      setSelectedTabLabel(tabLabel);
    } catch (error) {}
  };

  const handleChangeLanguage = (selectedLanguage) => {
    setLanguageData({ ...languageData, selectedLanguage });
  };

  const handleSubmit = async () => {
    try {
      const response = await dispatch(
        validateAllFormFieldAction({
          formDataObject,
          schema,
        })
      ).unwrap();
      console.log("response", response);

      if (Object.keys(response).length > 0) {
        return;
      }

      await dispatch(
        addBookkeepingEntryAction({
          schemaId: params.id,
          entryData: formDataObject,
        })
      );

      navigate(`/app/bookkeeping/schema/${params.id}/list`);

      console.log("formDataObject", formDataObject);
    } catch (error) {
      console.error("form validation error", error);
    }
  };

  return (
    <div
      className="product-profile detail-tab col-xl-9 col-xxl-8 col-sm-12"
      style={{ width: "100%", height: "100%" }}
    >
      <div
        className={`p-2 container-fluid d-flex flex-row justify-content-between bg-primary text-white`}
        style={{ alignItems: "center" }}
      >
        {/* add button */}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            handleSubmit();
          }}
          sx={{ background: "white", color: "black", height: "40px" }}
        >
          Add Entry
        </Button>
        <h4>Bookkeeping Add New Entry</h4>
        <div className="w-20"></div>
      </div>

      {schema && (
        <React.Fragment>
          <SchemaTabRenderer
            schema={schema}
            selectedTabLabel={selectedTabLabel}
            parentTabLabel={parentTabLabel}
            setSelectedTabLabel={setSelectedTabLabel}
          />

          <div
            className="product-profile--content"
            style={{
              minHeight: 300,
              maxHeight: "calc(100vh - 250px)",
              overflowY: "auto",
            }}
          >
            <div className="row">
              {!!tabData && (
                <SchemaFieldRenderer
                  node={tabData}
                  languageData={languageData}
                  handleChangeLanguage={handleChangeLanguage}
                />
              )}
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default SchemaMainRenderer;
