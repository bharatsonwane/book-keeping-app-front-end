import React, { Fragment } from "react";
import _ from "lodash";
import { InputColorWithLabel } from "src/components/inputComponents/InputColorWithLabel";
import { InputDateTimePicker } from "src/components/inputComponents/InputDateTimePicker";
import { InputSelectDropdown } from "src/components/inputComponents/InputSelectDropdown";
import { InputSwitchWithLable } from "src/components/inputComponents/InputSwitchWithLable";
import { InputTextareaWithLabel } from "src/components/inputComponents/InputTextareaWithLabel";
import { InputTextWithLabel } from "src/components/inputComponents/InputTextWithLabel";
import { useDispatch, useSelector } from "react-redux";
import {
  formFieldDataUpdateAction,
  formFieldValidationAction,
} from "src/redux/slice/bookKeeping";
import { getValidationErrorForFieldWithZod } from "src/helper/zodValidationHelper";

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

const RenderMultilingualField = ({
  node,
  prevNode,
  languageData,
  handleChangeLanguage = () => {},
}) => {
  if (node?.isMultilingual && (!prevNode || !prevNode?.isMultilingual)) {
    return (
      <div
        key={`multilingualTabStart_${node.dataMappingName}`}
        style={{ margin: "6px" }}
        className="d-flex product-profile-navbar align-items-center border-0"
      >
        <div className="fw-bold me-3">Language</div>
        <div id="navbarProductProfile">
          <ul className="nav nav-pills">
            {languageData?.languageList?.map((item, index) => (
              <React.Fragment key={index}>
                <li className="nav-item">
                  <a
                    className="nav-link fw-normal"
                    role="button"
                    data-tabselect={
                      item.value == languageData?.selectedLanguage
                    }
                    onClick={() => handleChangeLanguage(item.value)}
                  >
                    {item.label}
                  </a>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    );
  } else if (!node?.isMultilingual && prevNode?.isMultilingual) {
    return (
      <div
        key={`multilingualTabEnd_${node.dataMappingName}`}
        style={{ marginBottom: "16px" }}
      ></div>
    );
  }

  return <></>;
};

function SchemaFieldRenderer({
  node,
  prevNode,
  languageData,
  handleChangeLanguage = () => {},
}) {
  const dispatch = useDispatch();

  const formDataObject = useSelector(
    (state) => state.bookKeeping.formDataObject
  );
  const formValidationObject = useSelector(
    (state) => state.bookKeeping.formValidation
  );

  const name = (() => {
    if (node.isMultilingual) {
      return `${node.dataMappingName}.${languageData.selectedLanguage}`;
    }
    return node.dataMappingName;
  })();

  const value = (() => {
    if (node.isMultilingual) {
      return _.get(
        formDataObject,
        `${node.dataMappingName}.${languageData.selectedLanguage}`,
        ""
      );
    }
    return _.get(formDataObject, node.dataMappingName, "");
  })();

  const isAllTouched = formValidationObject?.isAllTouched;

  const errorMessage = node.dataMappingName
    ? _.get(formValidationObject, `errorMessage.${node.dataMappingName}`, "") ||
      formValidationObject?.errorMessage?.[node.dataMappingName]
    : "";

  const isTouched = node.dataMappingName
    ? _.get(formValidationObject, `touched[${node.dataMappingName}]`, false)
    : false;

  const handleInputChange = (e) => {
    dispatch(
      formFieldDataUpdateAction({
        name: name,
        value: e.target.value,
      })
    );
  };

  const handleBlurChange = async (e, item) => {
    // /** field validation */
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

  return (
    <Fragment>
      <RenderMultilingualField
        key={`multilingualTab_${node.dataMappingName}`}
        node={node}
        prevNode={prevNode}
        languageData={languageData}
        handleChangeLanguage={handleChangeLanguage}
      />

      {node.type === "tab" ? (
        <Fragment>
          {node.children?.map((childNode, index, list) => (
            <SchemaFieldRenderer
              key={`${childNode.type}_${childNode.label}_${index}`}
              node={childNode}
              prevNode={index > 0 ? list[index - 1] : null}
              languageData={languageData}
              handleChangeLanguage={handleChangeLanguage}
              formDataObject={formDataObject}
              formValidationObject={formValidationObject}
              isMultilingual={false}
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
            {node.children.map((childNode, index, list) => (
              <SchemaFieldRenderer
                key={`${childNode.type}_${childNode.label}_${index}`}
                node={childNode}
                prevNode={index > 0 ? list[index - 1] : null}
                languageData={languageData}
                handleChangeLanguage={handleChangeLanguage}
                formDataObject={formDataObject}
                formValidationObject={formValidationObject}
                isMultilingual={false}
              />
            ))}
          </div>
        </div>
      ) : (
        <SchemaFormFieldRender
          key={`${node.type}_${node.label}`}
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
