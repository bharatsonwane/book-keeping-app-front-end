export const foodDetailSchema = {
  name: "foodDetailSchema",
  label: "Food Detail Schema",
  type: "schema",
  version: "1.0",
  defaultQueryName: "getFoodDetailById",
  children: [
    {
      type: "section",
      label: "",
      children: [
        {
          type: "headingWithButton",
          label: "Save",
          onClick: () => {
            console.log("Save");
          },
        },
      ],
    },
    {
      type: "section",
      label: "",
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
                  dataMappingName: "name",
                  validationType: "string",
                  validations: [
                    {
                      type: "min",
                      params: [3, "Must be at least 3 characters"],
                    },
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
                  dataMappingName: "id",
                  validationType: "string",
                  validations: [
                    {
                      type: "min",
                      params: [3, "Must be at least 3 characters"],
                    },
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
                  dataMappingName: "category",
                  readOnly: false,
                  isMultilingual: false,
                  isShowInTable: true,
                },
                {
                  label: "Cuisine",
                  type: "text",
                  dataMappingName: "cuisine",
                  validationType: "string",
                  validations: [
                    {
                      type: "min",
                      params: [3, "Must be at least 3 characters"],
                    },
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
                  dataMappingName: "preparationTime",
                  readOnly: false,
                  isMultilingual: false,
                },
                {
                  label: "Description",
                  type: "textarea",
                  dataMappingName: "description",
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
          type: "tab", // it may be section, subsection, tab
          children: [
            {
              label: "Ingredient List",
              type: "section",
              isArray: true,
              dataMappingName: "ingredients",
              children: [
                {
                  label: "Ingredient Name",
                  type: "text",
                  dataMappingName: "name",
                  readOnly: false,
                  isMultilingual: false,
                },
                {
                  label: "Quantity",
                  type: "text",
                  dataMappingName: "quantity",
                  readOnly: false,
                  isMultilingual: false,
                },
                {
                  label: "Unit",
                  type: "text",
                  dataMappingName: "unit",
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
          isArray: true,
          dataMappingName: "instructions",
          children: [
            {
              label: "Steps",
              type: "section",
              children: [
                {
                  label: "Step Number",
                  type: "number",
                  dataMappingName: "stepNumber",
                  readOnly: false,
                  isMultilingual: false,
                },
                {
                  label: "Step Description",
                  type: "textarea",
                  dataMappingName: "stepDescription",
                  readOnly: false,
                  isMultilingual: false,
                },
              ],
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
          $[name],
          $[category],
          $[cuisine],
          $[preparationTime],
          $[description]
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
        name: "Paneer Butter Masala",
        category: "Vegetarian",
        cuisine: "Indian",
        preparationTime: 40,
        description:
          "A rich and creamy curry made with paneer in a tomato-butter base.",

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
          name = $[name],
          category = $[category],
          cuisine = $[cuisine],
          "preparationTime" = $[preparationTime],
          description = $[description]
        WHERE id = $[id];

        -- Update nutrition table
        UPDATE nutrition SET
          calories = $[nutrition.calories],
          protein = $[nutrition.protein],
          carbohydrates = $[nutrition.carbohydrates],
          fats = $[nutrition.fats],
          vitamins = $[nutrition.vitamins]
        WHERE "foodId" = $[id];

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
        id: 1,
        name: "Updated Paneer Butter Masala",
        category: "Vegetarian",
        cuisine: "Indian",
        preparationTime: 45,
        description: "A rich tomato-based curry with paneer and butter.",

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
