export  const foodDetailSchema = {
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
          label: "Food Detail",
          onCreate: {
            queryName: "saveFoodDetail",
          },
          onUpdate: {
            queryName: "updateFoodDetail",
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
              children: [
                {
                  type: "arrayItem",
                  dataMappingName: "ingredients",
                  children: [
                    {
                      label: "Ingredient Name",
                      type: "text",
                      childDataMappingName: "name",
                      readOnly: false,
                      isMultilingual: false,
                    },
                    {
                      label: "Quantity",
                      type: "text",
                      childDataMappingName: "quantity",
                      readOnly: false,
                      isMultilingual: false,
                    },
                    {
                      label: "Unit",
                      type: "text",
                      childDataMappingName: "unit",
                      readOnly: false,
                      isMultilingual: false,
                    },
                  ],
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
                  type: "arrayItem",
                  dataMappingName: "instructions",
                  children: [
                    {
                      label: "Step Number",
                      type: "number",
                      childDataMappingName: "stepNumber",
                      readOnly: false,
                      isMultilingual: false,
                    },
                    {
                      label: "Step Description",
                      type: "textarea",
                      childDataMappingName: "stepDescription",
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
          'id', n.id,
          'calories', n.calories,
          'protein', n.protein,
          'carbohydrates', n.carbohydrates,
          'fats', n.fats,
          'vitamins', n.vitamins
        ) AS nutrition,
          
        (
          SELECT jsonb_agg(
            jsonb_build_object(
              'id', i.id,
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
              'id', ins.id,
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
      WHERE f.id = $[data.id];
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
          $[data.name],
          $[data.category],
          $[data.cuisine],
          $[data.preparationTime],
          $[data.description]
        )
        RETURNING id INTO new_food_id;

        -- Insert into nutrition
        INSERT INTO nutrition (
          "foodId", calories, protein, carbohydrates, fats, vitamins
        ) VALUES (
          new_food_id,
          $[data.nutrition.calories],
          $[data.nutrition.protein],
          $[data.nutrition.carbohydrates],
          $[data.nutrition.fats],
          $[data.nutrition.vitamins]
        );

                  -- Insert ingredients (using mixed syntax: new_food_id is local variable, item properties from array)
        INSERT INTO ingredients ("foodId", name, quantity, unit) VALUES
        $<bulk:$[data.ingredients](new_food_id, $[item.name], $[item.quantity], $[item.unit])>;

        -- Insert instructions (using mixed syntax: new_food_id is local variable, item properties from array)
        INSERT INTO instructions ("foodId", "stepNumber", "stepDescription") VALUES
        $<bulk:$[data.instructions](new_food_id, $[item.stepNumber], $[item.stepDescription])>;
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
          name = $[data.name],
          category = $[data.category],
          cuisine = $[data.cuisine],
          "preparationTime" = $[data.preparationTime],
          description = $[data.description]
        WHERE id = $[data.id];

        -- Update nutrition table
        UPDATE nutrition SET
          calories = $[data.nutrition.calories],
          protein = $[data.nutrition.protein],
          carbohydrates = $[data.nutrition.carbohydrates],
          fats = $[data.nutrition.fats],
          vitamins = $[data.nutrition.vitamins]
        WHERE "foodId" = $[data.id];

        -- Bulk CUD ingredients (using mixed syntax: root data ID + item properties)
        $<bulkCudByKey:$[data.ingredients],[item.id](
          INSERT INTO ingredients ("foodId", name, quantity, unit) 
          VALUES ($[data.id], $[item.name], $[item.quantity], $[item.unit])
        |
          UPDATE ingredients SET
            name = $[item.name],
            quantity = $[item.quantity],
            unit = $[item.unit]
          WHERE id = $[item.id]
        )>

        -- Bulk CUD instructions (using mixed syntax: root data ID + item properties)
        $<bulkCudByKey:$[data.instructions],[item.id](
          INSERT INTO instructions ("foodId", "stepNumber", "stepDescription") 
          VALUES ($[data.id], $[item.stepNumber], $[item.stepDescription])
        |
          UPDATE instructions SET
            "stepNumber" = $[item.stepNumber],
            "stepDescription" = $[item.stepDescription]
          WHERE id = $[item.id]
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
          { id: 10, name: "Paneer", quantity: "250", unit: "grams" },     // UPDATE existing (has id)
          { id: 11, name: "Butter", quantity: "3", unit: "tbsp" },       // UPDATE existing (has id)
          { id: 12, isDeleteForQuery: true },                            // DELETE existing (has id + delete flag)
          { name: "Heavy Cream", quantity: "0.5", unit: "cup" },         // INSERT new (no id)
          { name: "Garam Masala", quantity: "1", unit: "tsp" },          // INSERT new (no id)
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
            isDeleteForQuery: true,                                      // DELETE existing instruction
          },
          {
            stepNumber: 4,
            stepDescription: "Garnish with fresh coriander and serve hot.",
          },
        ],
      },
    },
    
  ],
};
