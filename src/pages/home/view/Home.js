import React from "react";
import { useParams } from "react-router-dom";
import UiEntitesLayout from "src/layouts/entity";
import SchemaMainRenderer from "src/pages/bookKeeping/form/SchemaMainRenderer";
import { useGetDataByIdQuery, useGetSchemaByNameQuery } from "../../../redux/api/entitties.api";
import SchemaComponentRenderer from "src/components/schemaRender/SchemaComponentRenderer";

const foodListSchema = {
  name: "foodListSchema",
  label: "Food List Schema",
  type: "schema",
  version: "1.0",
  defaultQueryName: "getFoodList",
  dataMappingName: "",
  children: [
    {
      type: "heading",
      label: "Food List",
    },
    {
      type: "addButton",
      label: "Add User's",
      schemaName: "foodDetailSchema",
      action: {
        onClick: "navigate",
        navigationPath: "/need-to-add-navigation-path",
      },
    },
    {
      type: "table",
      onRowClick: {
        navigationPath: "/.../.../..../..",
        schemaName: "",
      },
      children: [
        {
          type: "tableColum",
          name: "id",
          label: "Id",
        },
        {
          type: "tableColum",
          name: "name",
          label: "Food Name",
        },
        {
          type: "tableColum",
          name: "category",
          label: "Food category",
        },
        {
          type: "tableColum",
          name: "cuisine",
          label: "Cuisine",
        },
        {
          type: "tableColum",
          name: "calories",
          label: "Calories",
        },
      ],
    },
  ],
  sqlQueryList: [
    {
      queryName: "getFoodList",
      query: `
        SELECT
          f.id,
          f.name,
          f.category,
          f.cuisine,
          n.calories
        FROM food f
        LEFT JOIN nutrition n ON n."foodId" = f.id;
        `,
    },
  ],
};

const foodListData = [
  {
    id: 1,
    name: "Food 1",
    category: "Category 1",
    cuisine: "Cuisine 1",
    calories: 100,
  },
  {
    id: 2,
    name: "Food 2",
    category: "Category 2",
    cuisine: "Cuisine 2",
    calories: 200,
  },
  {
    id: 3,
    name: "Food 3",
    category: "Category 3",
    cuisine: "Cuisine 3",
    calories: 300,
  },
];

const Home = () => {
  const params = useParams();

  const { data: schemaInfo } = useGetSchemaByNameQuery(
    { name: params.schemaName },
    { skip: !params.schemaName }
  );
  const schemaData = schemaInfo?.data || {}


  const sqlQueryList = schemaData?.sqlQueryList || [];
  const defaultQueryName = schemaData?.defaultQueryName || "";
  const defaultQueryObject = sqlQueryList.find((ele) => ele.queryName === defaultQueryName);

  const { data: nData } = useGetDataByIdQuery(
    { query: defaultQueryObject?.query },
    { skip: !defaultQueryObject?.query }
  );

  console.log("nData", nData)


  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
    >
      <SchemaComponentRenderer
        node={schemaData}
        sqlQueryList={schemaData?.sqlQueryList || []}
        dataObject={nData || {}}
        formValidationObject={{}}
      />
    </div>
  );
};

export default Home;
