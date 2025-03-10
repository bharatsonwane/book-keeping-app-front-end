import React, { Fragment } from "react";
import _ from "lodash";
import { InputColorWithLabel } from "src/components/inputComponents/InputColorWithLabel";
import { InputDateTimePicker } from "src/components/inputComponents/InputDateTimePicker";
import { InputSelectDropdown } from "src/components/inputComponents/InputSelectDropdown";
import { InputSwitchWithLable } from "src/components/inputComponents/InputSwitchWithLable";
import { InputTextareaWithLabel } from "src/components/inputComponents/InputTextareaWithLabel";
import { InputTextWithLabel } from "src/components/inputComponents/InputTextWithLabel";
import { useDispatch, useSelector } from "react-redux";
import { formFieldDataUpdateAction, formFieldValidationAction } from "src/slice/bookKeeping";
import { getValidationErrorForFieldForZod } from "src/helper/validationZodHelper";

function SchemaFormFieldRender(props) {
  const {
    node,
    value,
    isAllTouched = false,
    touched = false,
    errorMessage = "",
    onBlur = () => {},
    onChange = () => {},
  } = props;

  if (node.type === "color") {
    return (
      <InputColorWithLabel
        key={`${node.dataMappingName}_${node.type}`}
        label={node.label}
        placeholder={node.placeholder}
        tooltipText={node.tooltipText}
        type={node.type}
        name={node.dataMappingName}
        readOnly={node.readOnly}
        className={node.className}
        isSmallScreen={node.isSmallScreen}
        value={value}
        isAllTouched={isAllTouched}
        touched={touched}
        errorMessage={errorMessage}
        onBlur={onBlur}
        onChange={onChange}
      />
    );
  } else if (node.type === "date") {
    return (
      <InputDateTimePicker
        key={`${node.dataMappingName}_${node.type}`}
        label={node.label}
        tooltipText={node.tooltipText}
        name={node.dataMappingName}
        value={value}
        isAllTouched={isAllTouched}
        className={node.className}
        isSmallScreen={node.isSmallScreen}
        touched={touched}
        errorMessage={errorMessage}
        onBlur={onBlur}
        onChange={onChange}
      />
    );
  } else if (node.type === "switch") {
    return (
      <InputSwitchWithLable
        key={`${node.dataMappingName}_${node.type}`}
        label={node.label}
        placeholder={node.placeholder}
        tooltipText={node.tooltipText}
        type={node.type}
        name={node.dataMappingName}
        readOnly={node.readOnly}
        className={node.className}
        isSmallScreen={node.isSmallScreen}
        value={value}
        isAllTouched={isAllTouched}
        touched={touched}
        errorMessage={errorMessage}
        onBlur={onBlur}
        onChange={onChange}
      />
    );
  } else if (node.type === "text" || node.type === "number") {
    return (
      <InputTextWithLabel
        key={`${node.dataMappingName}_${node.type}`}
        label={node.label}
        placeholder={node.placeholder}
        tooltipText={node.tooltipText}
        type={node.type}
        name={node.dataMappingName}
        readOnly={node.readOnly}
        className={node.className}
        isSmallScreen={node.isSmallScreen}
        value={value}
        isAllTouched={isAllTouched}
        touched={touched}
        errorMessage={errorMessage}
        onBlur={onBlur}
        onChange={onChange}
      />
    );
  } else if (node.type === "textarea") {
    return (
      <InputTextareaWithLabel
        key={`${node.dataMappingName}_${node.type}`}
        label={node.label}
        placeholder={node.placeholder}
        tooltipText={node.tooltipText}
        type={node.type}
        name={node.dataMappingName}
        readOnly={node.readOnly}
        className={node.className}
        isSmallScreen={node.isSmallScreen}
        value={value}
        isAllTouched={isAllTouched}
        touched={touched}
        errorMessage={errorMessage}
        onBlur={onBlur}
        onChange={onChange}
      />
    );
  } else if (node.type === "select") {
    return (
      <InputSelectDropdown
        key={`${node.dataMappingName}_${node.type}`}
        loading={node.loading}
        label={node.label}
        placeholder={node.placeholder}
        tooltipText={node.tooltipText}
        type={node.type}
        name={node.dataMappingName}
        readOnly={node.readOnly}
        className={node.className}
        isSmallScreen={node.isSmallScreen}
        value={value}
        options={node.options}
        isMultilingual={node.isMultilingual}
        isAllTouched={isAllTouched}
        touched={touched}
        errorMessage={errorMessage}
        onBlur={onBlur}
        onChange={onChange}
      />
    );
  }

  return <></>;
}

function SchemaFieldRenderer({ node }) {
  const dispatch = useDispatch();

  const formDataObject = useSelector(
    (state) => state.bookKeeping.formDataObject
  );
  const formValidationObject = useSelector(
    (state) => state.bookKeeping.formValidation
  );

  const handleInputChange = (e) => {
    dispatch(
      formFieldDataUpdateAction({
        name: e.target.name,
        value: e.target.value,
      })
    );
  };

  const handleBlurChange = async (e, item) => {
    console.log("onblur", e.target.value, item);
    // /** field validation */
    const {dataMappingName, errorMessage} = await getValidationErrorForFieldForZod(item, e.target.value);
    dispatch(
      formFieldValidationAction({
        dataMappingName: dataMappingName,
        errorMessage: errorMessage,
        touched: true,
      })
    );
  };

  const value = node.dataMappingName
    ? _.get(formDataObject, node.dataMappingName, "")
    : null;

  if (node.name === "taxes.percentage") {
    console.log("value", value);
  }

  const isAllTouched = formValidationObject?.isAllTouched;

  const errorMessage = node.dataMappingName
    ? _.get(formValidationObject, `errorMessage.${node.dataMappingName}`, "")
    : "";

  const isTouched = node.dataMappingName
    ? _.get(formValidationObject, `touched[${node.dataMappingName}]`, false)
    : false;

  return (
    <Fragment>
      {node.childrenType === "formField" || node.childrenType === "field" ? (
        <Fragment>
          {node.children?.map((childNode) => (
            <SchemaFieldRenderer
              node={childNode}
              formDataObject={formDataObject}
              formValidationObject={formValidationObject}
            />
          ))}
        </Fragment>
      ) : node.type === "section" ? (
        <div
          key={`${node.label}_${node.type}`}
          style={{
            width: "100%",
            flex: "0 0 100%",
            marginTop: 10,
            textAlign: "left",
          }}
        >
          <div style={{ fontSize: 16, fontWeight: "600" }}>{node.label}</div>
          <div className="row">
            {node.children.map((childNode) => (
              <SchemaFieldRenderer
                node={childNode}
                formDataObject={formDataObject}
                formValidationObject={formValidationObject}
              />
            ))}
          </div>
        </div>
      ) : (
        <SchemaFormFieldRender
          node={node}
          value={value}
          isAllTouched={isAllTouched}
          touched={isTouched}
          errorMessage={errorMessage}
          onBlur={(e) => handleBlurChange(e, node)}
          onChange={handleInputChange}
        />
      )}
    </Fragment>
  );
}

export default SchemaFieldRenderer;
