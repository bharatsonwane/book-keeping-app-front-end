import React, { Fragment, useEffect, useMemo, useState } from "react";
import _ from "lodash";
import { InputColorWithLabel } from "src/components/inputComponents/InputColorWithLabel";
import { InputDateTimePicker } from "src/components/inputComponents/InputDateTimePicker";
import { InputSelectDropdown } from "src/components/inputComponents/InputSelectDropdown";
import { InputSwitchWithLable } from "src/components/inputComponents/InputSwitchWithLable";
import { InputTextareaWithLabel } from "src/components/inputComponents/InputTextareaWithLabel";
import { InputTextWithLabel } from "src/components/inputComponents/InputTextWithLabel";
import Header from "../uiComponents/header";
import TableComponent from "../uiComponents/tableComponent";
import { Button } from "../uiComponents/Button";
import ErrorBoundary from "../ErrorBoundary";
import {
  getInitialSchemaValueObject,
  getInitialTabLabel,
  getTabDataAndParentTabLabelByName,
} from "src/helper/schemaHelper";
import { HeadingWithButton } from "../uiComponents/HeadingWithButton";

function SchemaFieldRender(props) {
  const {
    node,
    dataObject = {},
    formValidationObject = {},
    languageData = {},
    onChange = (dataMappingName, value) => {},
    onBlur = (dataMappingName, value) => {},
    onClick = (e, node) => {},
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
  } else if (node.type === "button") {
    return <Button node={node} onClick={onClick} />;
  } else if (node.type === "headingWithButton") {
    return <HeadingWithButton node={node} onClick={onClick} />;
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

const SchemaTabRenderer = ({
  node,
  prevNode,
  sqlQueryList = [],
  languageData = {},
  dataObject = {},
  formValidationObject = {},
  handleChangeLanguage = () => {},
  handleInputChange = () => {},
  handleBlurChange = () => {},
  handleClickChange = () => {},
}) => {
  const [selectedTabLabel, setSelectedTabLabel] = useState("");

  useEffect(() => {
    const tabLabel = getInitialTabLabel(node);
    setSelectedTabLabel(tabLabel);
  }, []);

  const { tabData, parentTabLabel } = useMemo(() => {
    if (selectedTabLabel) {
      const { tabData, parentTabLabel } = getTabDataAndParentTabLabelByName(
        node,
        selectedTabLabel
      );
      return { tabData, parentTabLabel };
    }
    return { tabData: null, parentTabLabel: null };
  }, [selectedTabLabel]);

  return (
    <>
      <div id="navbarProductProfile" className="product-profile-navbar">
        <ul className="nav nav-pills">
          {node?.children?.map((tabNode, index) => {
            return (
              <li className="nav-item" key={index}>
                {tabNode.type === "parentTab" ? (
                  <>
                    <div className="dropdown">
                      <button
                        className={`btn nav-link dropdown-toggle`}
                        type="button"
                        id={`dropdownMenuButton_${index}`}
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        data-tabselect={
                          selectedTabLabel === tabNode.label ||
                          parentTabLabel === tabNode.label
                        }
                      >
                        {tabNode.label}
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby={`dropdownMenuButton_${index}`}
                      >
                        {tabNode?.children?.map((childTabNode, childIndex) => (
                          <li key={`tab_${childTabNode.label}${childIndex}`}>
                            <button
                              className="dropdown-item"
                              type="button"
                              onClick={() =>
                                setSelectedTabLabel(childTabNode.label)
                              }
                              data-tabselect={
                                selectedTabLabel === childTabNode.label
                              }
                            >
                              {childTabNode.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <a
                    key={`tab_${tabNode.label}${index}`}
                    className="nav-link"
                    role="button"
                    data-tabselect={selectedTabLabel === tabNode.label}
                    onClick={() => setSelectedTabLabel(tabNode.label)}
                  >
                    {tabNode.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {tabData?.type && (
        <SchemaComponentRenderer
          key={`${tabData?.type}_${tabData?.label}`}
          sqlQueryList={sqlQueryList}
          node={tabData}
          prevNode={prevNode}
          languageData={languageData}
          dataObject={dataObject}
          formValidationObject={formValidationObject}
          isMultilingual={false}
          handleChangeLanguage={handleChangeLanguage}
          handleInputChange={handleInputChange}
          handleBlurChange={handleBlurChange}
          handleClickChange={handleClickChange}
        />
      )}
    </>
  );
};

export function SchemaComponentRenderer({
  sqlQueryList = [],
  node,
  prevNode,
  languageData,
  dataObject = {},
  formValidationObject = {},
  handleChangeLanguage = () => {},
  handleInputChange = () => {},
  handleBlurChange = () => {},
  handleClickChange = (e, node) => {},
}) {
  const tabList = node?.children?.filter(
    (child) => child.type === "tab" || child.type === "parentTab"
  );

  return (
    <Fragment>
      <ErrorBoundary>
        <ErrorBoundary>
          <RenderMultilingualField
            key={`multilingualTab_${node?.dataMappingName}`}
            sqlQueryList={sqlQueryList}
            node={node}
            prevNode={prevNode}
            languageData={languageData}
            handleChangeLanguage={handleChangeLanguage}
          />
        </ErrorBoundary>

        {tabList && tabList?.length > 0 ? (
          <SchemaTabRenderer
            key={`tabField_${node.label}`}
            sqlQueryList={sqlQueryList}
            node={node}
            prevNode={prevNode}
            dataObject={dataObject}
            formValidationObject={formValidationObject}
            handleChangeLanguage={handleChangeLanguage}
            handleInputChange={handleInputChange}
            handleBlurChange={handleBlurChange}
            handleClickChange={handleClickChange}
          />
        ) : node.type === "schema" ? (
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
                handleClickChange={handleClickChange}
              />
            ))}
          </Fragment>
        ) : node?.type === "tab" ? (
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
                handleClickChange={handleClickChange}
              />
            ))}
          </Fragment>
        ) : node?.type === "section" ? (
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
              {node?.children?.map((childNode, index, list) => (
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
                  handleClickChange={handleClickChange}
                />
              ))}
            </div>
          </div>
        ) : (
          <ErrorBoundary>
            <SchemaFieldRender
              key={`${node?.type}_${node.label}`}
              sqlQueryList={sqlQueryList}
              node={node}
              dataObject={dataObject}
              formValidationObject={formValidationObject}
              onChange={handleInputChange}
              onBlur={(e) => handleBlurChange(e, node)}
              onClick={(e, node) => handleClickChange(e, node)}
            />
          </ErrorBoundary>
        )}
      </ErrorBoundary>
    </Fragment>
  );
}
