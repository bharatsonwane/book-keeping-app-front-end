import React, { useEffect, useMemo, useState } from "react";
import {
  getInitialSchemaValueObject,
  getInitialTabLabel,
  getTabDataAndParentTabLabelByName,
} from "src/helper/schemaHelper";
import SchemaTabRenderer from "../../../components/schemaRender/SchemaTabRenderer";
import { useSelector, useDispatch } from "react-redux";
import {
  addBookkeepingEntryAction,
  getBookkeepingSchemaDetailsAction,
  getSchemaByNameAction,
  validateAllFormFieldAction,
} from "src/redux/thunks/bookKeeping";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import {
  formFieldDataUpdateAction,
  formFieldValidationAction,
  updateFormObject,
} from "src/redux/slice/bookKeeping";
import SchemaComponentRenderer from "src/components/schemaRender/SchemaComponentRenderer";
import { getValidationErrorForFieldWithZod } from "src/helper/zodValidationHelper";

function SchemaMainRenderer() {
  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const formDataObject = useSelector(
    (state) => state.bookKeeping.formDataObject
  );

  const formValidationObject = useSelector(
    (state) => state.bookKeeping.formValidation
  );

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
      const responseData = await dispatch(
        getSchemaByNameAction({ schemaName: params.schemaName })
      ).unwrap();

      const schemaData = responseData.data;

      setSchema(schemaData);

      const initialData = getInitialSchemaValueObject(schemaData);

      dispatch(updateFormObject(initialData));

      const tabLabel = getInitialTabLabel(schemaData);
      setSelectedTabLabel(tabLabel);
    } catch (error) {}
  };

  const handleChangeLanguage = (selectedLanguage) => {
    setLanguageData({ ...languageData, selectedLanguage });
  };

  const handleInputChange = (event) => {
    dispatch(
      formFieldDataUpdateAction({
        name: event.target.name,
        value: event.target.value,
      })
    );
  };

  const handleBlurChange = async (e, item) => {
    /** field validation */
    const { dataMappingName, errorMessage } =
      await getValidationErrorForFieldWithZod(item, e.target.value);
    dispatch(
      formFieldValidationAction({
        dataMappingName: dataMappingName,
        errorMessage: errorMessage,
        touched: true,
      })
    );
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
    } catch (error) {
      console.error("form validation error", error);
    }
  };

  console.log("bharat", schema);

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

      {schema && tabData && (
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
              <SchemaComponentRenderer
                sqlQueryList={schema?.sqlQueryList}
                node={tabData}
                languageData={languageData}
                dataObject={formDataObject}
                formValidationObject={formValidationObject}
                handleChangeLanguage={handleChangeLanguage}
                handleInputChange={handleInputChange}
                handleBlurChange={handleBlurChange}
              />
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default SchemaMainRenderer;
