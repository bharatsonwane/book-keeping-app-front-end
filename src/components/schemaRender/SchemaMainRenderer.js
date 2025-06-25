import React, { useEffect, useState } from "react";
import _ from "lodash";
import { getInitialSchemaValueObject } from "src/helper/schemaHelper";
import { useDispatch } from "react-redux";
import { getSchemaByNameAction } from "src/redux/thunks/bookKeeping";
import { useNavigate, useParams } from "react-router-dom";
import { SchemaComponentRenderer } from "src/components/schemaRender/SchemaComponentRenderer";
import {
  getValidationErrorForFieldWithZod,
  getValidationErrorForSchemaWithZod,
} from "src/helper/zodValidationHelper";
import { foodDetailSchema } from "src/helper/schema/foodSchema";

function SchemaMainRenderer() {
  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [schema, setSchema] = useState(null);

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

  const getSchema = async () => {
    try {
      // const responseData = await dispatch(
      //   getSchemaByNameAction({ schemaName: params.schemaName })
      // ).unwrap();

      // const schemaData = responseData.data;

      setSchema(foodDetailSchema);

      const initialData = getInitialSchemaValueObject(foodDetailSchema);

      setFormDataObject(initialData);
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
      className="col-xl-9 col-xxl-8 col-sm-12"
      style={{ width: "100%", height: "100%" }}
    >
      {schema && formDataObject && (
        <React.Fragment>
          <div
            style={{
              minHeight: 300,
              maxHeight: "calc(100vh - 250px)",
              overflowY: "auto",
            }}
          >
            <div className="row">
              <SchemaComponentRenderer
                sqlQueryList={schema?.sqlQueryList}
                node={schema}
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
