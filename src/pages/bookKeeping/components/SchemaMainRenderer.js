import React, { useEffect, useMemo, useState } from "react";
import {
  getInitialTabName,
  getTabDataAndParentTabNameByName,
} from "src/helper/schemaHelper";
import SchemaTabRenderer from "../../../components/schemaRender/SchemaTabRenderer";
import SchemaFieldRenderer from "../../../components/schemaRender/SchemaFieldRenderer";
import { getValidationErrorForSchemaWithZod } from "src/helper/zodValidationHelper";
import { useSelector, useDispatch } from "react-redux";
import { validateAllFormFieldAction } from "src/thunks/bookKeeping";

function SchemaMainRenderer({ schema }) {
  const dispatch = useDispatch();

  const formDataObject = useSelector(
    (state) => state.bookKeeping.formDataObject
  );

  const [selectedTabName, setSelectedTabName] = useState("");

  const [languageData, setLanguageData] = useState({
    selectedLanguage: "en",
    languageList: [
      { label: "English", value: "en" },
      { label: "Finnish", value: "fi" },
    ],
  });

  const { tabData, parentTabName } = useMemo(() => {
    if (selectedTabName) {
      const { tabData, parentTabName } = getTabDataAndParentTabNameByName(
        schema,
        selectedTabName
      );

      return { tabData, parentTabName };
    }
    return { tabData: null, parentTabName: null };
  }, [selectedTabName]);

  useEffect(() => {
    const tabName = getInitialTabName(schema);
    setSelectedTabName(tabName);
  }, [schema?.schemaName, schema?.version]);

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
    } catch (error) {
      console.error("form validation error", error);
    }
  };

  return (
    <div
      className="product-profile detail-tab col-xl-9 col-xxl-8 col-sm-12"
      style={{ width: "100%", height: "100%" }}
    >
      <button onClick={() => handleSubmit()}>Submit</button>

      <SchemaTabRenderer
        schema={schema}
        selectedTabName={selectedTabName}
        parentTabName={parentTabName}
        setSelectedTabName={setSelectedTabName}
      />

      <div className="product-profile--content" style={{ minHeight: 300 }}>
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
    </div>
  );
}

export default SchemaMainRenderer;
