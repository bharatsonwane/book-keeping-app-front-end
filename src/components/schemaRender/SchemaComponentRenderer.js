import React, { Fragment } from "react";
import _ from "lodash";
import { InputColorWithLabel } from "src/components/inputComponents/InputColorWithLabel";
import { InputDateTimePicker } from "src/components/inputComponents/InputDateTimePicker";
import { InputSelectDropdown } from "src/components/inputComponents/InputSelectDropdown";
import { InputSwitchWithLable } from "src/components/inputComponents/InputSwitchWithLable";
import { InputTextareaWithLabel } from "src/components/inputComponents/InputTextareaWithLabel";
import { InputTextWithLabel } from "src/components/inputComponents/InputTextWithLabel";
import Header from "../uiComponents/header";
import TableComponent from "../uiComponents/tableComponent";
import { AddButton } from "../uiComponents/AddButton";

function SchemaFormFieldRender(props) {
  const {
    node,
    dataObject = {},
    formValidationObject = {},
    languageData = {},
    onChange = (dataMappingName, value) => {},
    onBlur = (dataMappingName, value) => {},
  } = props;

  const name = (() => {
    if (node.isMultilingual) {
      return `${node.dataMappingName}.${languageData.selectedLanguage}`;
    }
    return node.dataMappingName;
  })();

  const value = (() => {
    if (node.isMultilingual) {
      return _.get(
        dataObject,
        `${node.dataMappingName}.${languageData.selectedLanguage}`,
        ""
      );
    } else if (node.dataMappingName) {
      return _.get(dataObject, node.dataMappingName, "");
    } else {
      return dataObject;
    }
  })();

  const isAllTouched = formValidationObject?.isAllTouched;
  const touched = formValidationObject?.touched;

  const errorMessage = node.dataMappingName
    ? _.get(formValidationObject, `errorMessage.${node.dataMappingName}`, "") ||
      formValidationObject?.errorMessage?.[node.dataMappingName]
    : "";

  const isTouched = node.dataMappingName
    ? _.get(formValidationObject, `touched[${node.dataMappingName}]`, false)
    : false;


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
  } else if (node.type === "heading") {
    return <Header label={node.label} />;
  } else if (node.type === "table") {
    return <TableComponent node={node} value={value} />;
  } else if (node.type === "addButton") {
    return <AddButton node={node} />;
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

function SchemaComponentRenderer({
  sqlQueryList = [],
  node,
  prevNode,
  languageData,
  dataObject = {},
  formValidationObject = {},
  handleChangeLanguage = () => {},
  handleInputChange = () => {},
  handleBlurChange = () => {},
}) {
  return (
    <Fragment>
      <RenderMultilingualField
        key={`multilingualTab_${node.dataMappingName}`}
        sqlQueryList={sqlQueryList}
        node={node}
        prevNode={prevNode}
        languageData={languageData}
        handleChangeLanguage={handleChangeLanguage}
      />

      {node.type === "schema" ? (
        <Fragment>
          {node.children?.map((childNode, index, list) => (
            <SchemaComponentRenderer
              key={`${childNode.type}_${childNode.label}_${index}`}
              sqlQueryList={sqlQueryList}
              node={childNode}
              prevNode={index > 0 ? list[index - 1] : null}
              dataObject={dataObject}
              formValidationObject={formValidationObject}
              handleChangeLanguage={handleChangeLanguage}
              handleInputChange={handleInputChange}
              handleBlurChange={handleBlurChange}
            />
          ))}
        </Fragment>
      ) : node.type === "tab" ? (
        <Fragment>
          {node.children?.map((childNode, index, list) => (
            <SchemaComponentRenderer
              key={`${childNode.type}_${childNode.label}_${index}`}
              sqlQueryList={sqlQueryList}
              node={childNode}
              prevNode={index > 0 ? list[index - 1] : null}
              languageData={languageData}
              dataObject={dataObject}
              formValidationObject={formValidationObject}
              isMultilingual={false}
              handleChangeLanguage={handleChangeLanguage}
              handleInputChange={handleInputChange}
              handleBlurChange={handleBlurChange}
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
              <SchemaComponentRenderer
                key={`${childNode.type}_${childNode.label}_${index}`}
                sqlQueryList={sqlQueryList}
                node={childNode}
                prevNode={index > 0 ? list[index - 1] : null}
                languageData={languageData}
                dataObject={dataObject}
                formValidationObject={formValidationObject}
                isMultilingual={false}
                handleChangeLanguage={handleChangeLanguage}
                handleInputChange={handleInputChange}
                handleBlurChange={handleBlurChange}
              />
            ))}
          </div>
        </div>
      ) : (
        <SchemaFormFieldRender
          key={`${node.type}_${node.label}`}
          sqlQueryList={sqlQueryList}
          node={node}
          dataObject={dataObject}
          formValidationObject={formValidationObject}
          onChange={handleInputChange}
          onBlur={(e) => handleBlurChange(e, node)}
        />
      )}
    </Fragment>
  );
}

export default SchemaComponentRenderer;
