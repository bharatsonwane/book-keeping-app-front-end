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
      const responseData = foodSchema;

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
