import React, { useEffect, useMemo, useState } from "react";
import _ from "lodash";
import {
  getInitialSchemaValueObject,
  getInitialTabLabel,
  getTabDataAndParentTabLabelByName,
} from "src/helper/schemaHelper";
import { useDispatch } from "react-redux";
import { getSchemaByNameAction } from "src/redux/thunks/bookKeeping";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import {
  SchemaComponentRenderer,
  SchemaTabRenderer,
} from "src/components/schemaRender/SchemaComponentRenderer";
import {
  getValidationErrorForFieldWithZod,
  getValidationErrorForSchemaWithZod,
} from "src/helper/zodValidationHelper";

function SchemaMainRenderer() {
  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [schema, setSchema] = useState(null);

  const [selectedTabLabel, setSelectedTabLabel] = useState("");

  const [languageData, setLanguageData] = useState({
    selectedLanguage: "en",
    languageList: [
      { label: "English", value: "en" },
      { label: "Finnish", value: "fi" },
    ],
  });

  const [formDataObject, setFormDataObject] = useState(null);

  const [formValidationObject, setFormValidationObject] = useState({
    isAllTouched: false,
    touched: {},
    errorMessage: {},
    errorFieldList: [],
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

      setFormDataObject(initialData);

      const tabLabel = getInitialTabLabel(schemaData);
      setSelectedTabLabel(tabLabel);
    } catch (error) {}
  };

  const handleChangeLanguage = (selectedLanguage) => {
    setLanguageData({ ...languageData, selectedLanguage });
  };

  const handleInputChange = (event) => {
    debugger;
    const { name, value } = event.target;
    const newFormDataObject = _.cloneDeep(formDataObject || {});
    _.set(newFormDataObject, `${name}`, value);
    setFormDataObject(newFormDataObject);
  };

  const handleBlurChange = async (e, item) => {
    /** field validation */
    const { dataMappingName, errorMessage } =
      await getValidationErrorForFieldWithZod(item, e.target.value);

    const newFormValidationObject = _.cloneDeep(formValidationObject);

    _.set(newFormValidationObject.touched, `${dataMappingName}`, true);

    if (errorMessage) {
      _.set(
        newFormValidationObject.errorMessage,
        `${dataMappingName}`,
        errorMessage
      );
    } else {
      _.set(newFormValidationObject.errorMessage, `${dataMappingName}`, "");
    }

    setFormValidationObject(newFormValidationObject);
  };

  const handleValidateAllFormField = async () => {
    try {
      const response = await getValidationErrorForSchemaWithZod(
        schema,
        formDataObject
      );

      const newFormValidationObject = {
        ...formValidationObject,
        isAllTouched: true,
        errorMessage: response,
      };

      setFormValidationObject(newFormValidationObject);

      return newFormValidationObject;
    } catch (error) {}
  };

  const handleSubmit = async () => {
    try {
      const formValidationObject = await handleValidateAllFormField();

      if (Object.keys(formValidationObject.errorMessage).length > 0) {
        return;
      }

      //  save data to db api call

      //  navigate to back page
      navigate(-1);
    } catch (error) {}
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
        <h4>Add New Entry</h4>
        <div className="w-20"></div>
      </div>

      {schema && tabData && formDataObject && (
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
