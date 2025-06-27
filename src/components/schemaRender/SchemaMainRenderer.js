import React, { useEffect, useState } from "react";
import _ from "lodash";
import {
  getInitialSchemaValueObject,
  SCHEMA_CONSTANT,
} from "src/helper/schemaHelper";
import { useDispatch } from "react-redux";
import {
  getDataByQueryAction,
  getSchemaByNameAction,
} from "src/redux/thunks/bookKeeping";
import { useNavigate, useParams } from "react-router-dom";
import { SchemaComponentRenderer } from "src/components/schemaRender/SchemaComponentRenderer";
import {
  getValidationErrorForFieldWithZod,
  getValidationErrorForSchemaWithZod,
} from "src/helper/zodValidationHelper";
import { foodDetailSchema } from "src/helper/schema/foodSchema";

function SchemaMainRenderer() {
  /**
   * actionType: create, update, view
   * schemaName: schema name
   * id: id of the record
   */
  const { schemaName, actionType, id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [schema, setSchema] = useState(null);

  const [schemaMetadata, setSchemaMetadata] = useState({
    formReadOnly: actionType === SCHEMA_CONSTANT.VIEW ? true : false,
    selectedLanguage: "en",
    languageList: [
      // { label: "English", value: "en" },
      // { label: "Finnish", value: "fi" },
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
      const responseData = await dispatch(
        getSchemaByNameAction({ schemaName: schemaName })
      ).unwrap();

      const schemaData = responseData.data;
      // const schemaData = foodDetailSchema;

      setSchema(schemaData);

      const sqlQueryList = schemaData?.sqlQueryList || [];
      const defaultQueryName = schemaData?.defaultQueryName || "";
      const defaultQueryObject = sqlQueryList.find(
        (ele) => ele.queryName === defaultQueryName
      );

      if (defaultQueryObject && id) {
        const responseData = await dispatch(
          getDataByQueryAction({
            query: defaultQueryObject.query,
            dataValue: { id: id },
          })
        ).unwrap();
        setFormDataObject(responseData.data[0]);
      } else {
        const initialData = getInitialSchemaValueObject(schemaData);

        setFormDataObject(initialData);
      }
    } catch (error) {}
  };

  const handleChangeLanguage = (selectedLanguage) => {
    setSchemaMetadata({
      ...schemaMetadata,
      selectedLanguage,
    });
  };

  const handleInputChange = (event, nodeItem) => {
    const { name, value } = event.target;
    const newFormDataObject = _.cloneDeep(formDataObject || {});
    _.set(newFormDataObject, `${name}`, value);
    setFormDataObject(newFormDataObject);
  };

  const handleBlurChange = async (e, nodeItem) => {
    /** field validation */
    const { dataMappingName, errorMessage } =
      await getValidationErrorForFieldWithZod(nodeItem, e.target.value);

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

  const handleActionTrigger = (e, nodeItem) => {
    if (e.actionType === SCHEMA_CONSTANT.LANGUAGE_CHANGE) {
      handleChangeLanguage(e.target.value);
    } else if (e.actionType === SCHEMA_CONSTANT.onChange) {
      handleInputChange(e, nodeItem);
    } else if (e.actionType === SCHEMA_CONSTANT.onBlur) {
      handleBlurChange(e, nodeItem);
    } else if (e.actionType === SCHEMA_CONSTANT.onClick) {
      handleSubmit();
    }
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
              minHeight: 400,
              maxHeight: "calc(100vh - 250px)",
            }}
          >
            <div className="row">
              <SchemaComponentRenderer
                schemaMetadata={schemaMetadata}
                sqlQueryList={schema?.sqlQueryList}
                node={schema}
                dataObject={formDataObject}
                formValidationObject={formValidationObject}
                handleActionTrigger={handleActionTrigger}
              />
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default SchemaMainRenderer;
