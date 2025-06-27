import React, {
  Fragment,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
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
  getInitialTabLabel,
  getTabDataAndParentTabLabelByName,
  SCHEMA_CONSTANT,
} from "src/helper/schemaHelper";
import { HeadingWithButton } from "../uiComponents/HeadingWithButton";
import AddButton from "../uiComponents/AddButton";
import RemoveButton from "../uiComponents/RemoveButton";

// Custom hook for field value and validation logic
const useFieldData = (
  node,
  dataObject,
  formValidationObject,
  schemaMetadata
) => {
  return useMemo(() => {
    const name = node.isMultilingual
      ? `${node.dataMappingName}.${schemaMetadata.selectedLanguage}`
      : node.dataMappingName;

    const value = node.isMultilingual
      ? _.get(
          dataObject,
          `${node.dataMappingName}.${schemaMetadata.selectedLanguage}`,
          ""
        )
      : node.dataMappingName
      ? _.get(dataObject, node.dataMappingName, "")
      : dataObject;

    const isAllTouched = formValidationObject?.isAllTouched;
    const touched = formValidationObject?.touched;

    const errorMessage = node.dataMappingName
      ? _.get(
          formValidationObject,
          `errorMessage.${node.dataMappingName}`,
          ""
        ) || formValidationObject?.errorMessage?.[node.dataMappingName]
      : "";

    const isTouched = node.dataMappingName
      ? _.get(formValidationObject, `touched[${node.dataMappingName}]`, false)
      : false;

    return { name, value, isAllTouched, touched, errorMessage, isTouched };
  }, [node, dataObject, formValidationObject, schemaMetadata]);
};

function SchemaFieldRender({
  node,
  dataObject = {},
  formValidationObject = {},
  schemaMetadata = {},
  handleActionTrigger = (e, node) => {},
} = {}) {
  const { name, value, isAllTouched, touched, errorMessage, isTouched } =
    useFieldData(node, dataObject, formValidationObject, schemaMetadata);

  const onChange = (e) => {
    e.actionType = SCHEMA_CONSTANT.onChange;
    handleActionTrigger(e, node);
  };

  const onBlur = (e) => {
    e.actionType = SCHEMA_CONSTANT.onBlur;
    handleActionTrigger(e, node);
  };

  const onClick = (e) => {
    e.actionType = SCHEMA_CONSTANT.onClick;
    handleActionTrigger(e, node);
  };

  const commonProps = {
    key: `${node.dataMappingName}_${node.type}`,
    label: node.label,
    placeholder: node.placeholder,
    tooltipText: node.tooltipText,
    type: node.type,
    name: node.dataMappingName,
    readOnly: node.readOnly || schemaMetadata.formReadOnly,
    className: node.className,
    isSmallScreen: node.isSmallScreen,
    value,
    isAllTouched,
    touched,
    errorMessage,
    onBlur,
    onChange,
    handleActionTrigger,
  };

  if (node.type === "color") {
    return <InputColorWithLabel {...commonProps} />;
  }

  if (node.type === "date") {
    return <InputDateTimePicker {...commonProps} />;
  }

  if (node.type === "switch") {
    return <InputSwitchWithLable {...commonProps} />;
  }

  if (node.type === "text" || node.type === "number") {
    return <InputTextWithLabel {...commonProps} />;
  }

  if (node.type === "textarea") {
    return <InputTextareaWithLabel {...commonProps} />;
  }

  if (node.type === "select") {
    return (
      <InputSelectDropdown
        {...commonProps}
        loading={node.loading}
        options={node.options}
        isMultilingual={node.isMultilingual}
      />
    );
  }

  if (node.type === "heading") {
    return <Header label={node.label} />;
  }

  if (node.type === "table") {
    return (
      <TableComponent
        handleActionTrigger={handleActionTrigger}
        node={node}
        value={value}
      />
    );
  }

  if (node.type === "button") {
    return <Button node={node} onClick={onClick} />;
  }

  if (node.type === "headingWithButton") {
    return (
      <HeadingWithButton
        node={node}
        handleActionTrigger={handleActionTrigger}
        formReadOnly={schemaMetadata.formReadOnly}
      />
    );
  }

  return null;
}

const RenderMultilingualField = React.memo(function RenderMultilingualField({
  node,
  prevNode,
  schemaMetadata,
  handleActionTrigger = () => {},
} = {}) {
  const isMultilingualStart =
    node?.isMultilingual && (!prevNode || !prevNode?.isMultilingual);
  const isMultilingualEnd = !node?.isMultilingual && prevNode?.isMultilingual;

  const handleLanguageChange = (languageValue) => {
    const event = {
      actionType: SCHEMA_CONSTANT.LANGUAGE_CHANGE,
      target: { value: languageValue },
    };
    handleActionTrigger(event, node);
  };

  if (isMultilingualStart) {
    return (
      <div
        key={`multilingualTabStart_${node.dataMappingName}`}
        style={{ margin: "6px" }}
        className="d-flex product-profile-navbar align-items-center border-0"
      >
        <div className="fw-bold me-3">Language</div>
        <div id="navbarProductProfile">
          <ul className="nav nav-pills">
            {schemaMetadata?.languageList?.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  className="nav-link fw-normal"
                  role="button"
                  data-tabselect={
                    item.value === schemaMetadata?.selectedLanguage
                  }
                  onClick={() => handleLanguageChange(item.value)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (isMultilingualEnd) {
    return (
      <div
        key={`multilingualTabEnd_${node.dataMappingName}`}
        style={{ marginBottom: "16px" }}
      />
    );
  }

  return null;
});

// Custom hook for tab management
const useTabManagement = (node) => {
  const [selectedTabLabel, setSelectedTabLabel] = useState("");

  useEffect(() => {
    const tabLabel = getInitialTabLabel(node);
    setSelectedTabLabel(tabLabel);
  }, [node]);

  const { tabData, parentTabLabel } = useMemo(() => {
    if (selectedTabLabel) {
      const { tabData, parentTabLabel } = getTabDataAndParentTabLabelByName(
        node,
        selectedTabLabel
      );
      return { tabData, parentTabLabel };
    }
    return { tabData: null, parentTabLabel: null };
  }, [selectedTabLabel, node]);

  return { selectedTabLabel, setSelectedTabLabel, tabData, parentTabLabel };
};

// Component for rendering tab navigation
const TabNavigation = React.memo(function TabNavigation({
  node,
  selectedTabLabel,
  setSelectedTabLabel,
  parentTabLabel,
}) {
  const handleTabClick = useCallback(
    (tabLabel) => {
      setSelectedTabLabel(tabLabel);
    },
    [setSelectedTabLabel]
  );

  return (
    <div id="navbarProductProfile" className="product-profile-navbar">
      <ul className="nav nav-pills">
        {node?.children?.map((tabNode, index) => (
          <li className="nav-item" key={index}>
            {tabNode.type === "parentTab" ? (
              <div className="dropdown">
                <button
                  className="btn nav-link dropdown-toggle"
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
                        onClick={() => handleTabClick(childTabNode.label)}
                        data-tabselect={selectedTabLabel === childTabNode.label}
                      >
                        {childTabNode.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <a
                key={`tab_${tabNode.label}${index}`}
                className="nav-link"
                role="button"
                data-tabselect={selectedTabLabel === tabNode.label}
                onClick={() => handleTabClick(tabNode.label)}
              >
                {tabNode.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
});

// Component for rendering tab content
const SchemaTabRenderer = React.memo(function SchemaTabRenderer({
  node,
  prevNode,
  schemaMetadata = {},
  dataObject = {},
  formValidationObject = {},
  handleActionTrigger = () => {},
}) {
  const { selectedTabLabel, setSelectedTabLabel, tabData, parentTabLabel } =
    useTabManagement(node);

  return (
    <>
      <TabNavigation
        node={node}
        selectedTabLabel={selectedTabLabel}
        setSelectedTabLabel={setSelectedTabLabel}
        parentTabLabel={parentTabLabel}
      />

      {tabData?.type && (
        <SchemaComponentRenderer
          key={`${tabData?.type}_${tabData?.label}`}
          node={tabData}
          prevNode={prevNode}
          schemaMetadata={schemaMetadata}
          dataObject={dataObject}
          formValidationObject={formValidationObject}
          handleActionTrigger={handleActionTrigger}
        />
      )}
    </>
  );
});

// Component for rendering section content
const SectionRenderer = React.memo(function SectionRenderer({
  node,
  children,
  schemaMetadata,
  dataObject,
  formValidationObject,
  handleActionTrigger,
}) {
  return (
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
      <div className="row">{children}</div>
    </div>
  );
});

// Component for rendering child nodes recursively
const ChildNodesRenderer = React.memo(function ChildNodesRenderer({
  children,
  schemaMetadata,
  dataObject,
  formValidationObject,
  handleActionTrigger,
  isMultilingual = false,
}) {
  return (
    <Fragment>
      {children?.map((childNode, index, list) => (
        <SchemaComponentRenderer
          key={`${childNode.type}_${childNode.label}_${index}`}
          node={childNode}
          prevNode={index > 0 ? list[index - 1] : null}
          schemaMetadata={schemaMetadata}
          dataObject={dataObject}
          formValidationObject={formValidationObject}
          isMultilingual={isMultilingual}
          handleActionTrigger={handleActionTrigger}
        />
      ))}
    </Fragment>
  );
});

export function SchemaComponentRenderer({
  node,
  prevNode,
  schemaMetadata = {},
  dataObject = {},
  formValidationObject = {},
  handleActionTrigger = (e, node) => {},
}) {
  const tabList = useMemo(
    () =>
      node?.children?.filter(
        (child) => child.type === "tab" || child.type === "parentTab"
      ),
    [node?.children]
  );

  const renderContent = () => {
    if (tabList && tabList.length > 0) {
      return (
        <SchemaTabRenderer
          key={`tabField_${node.label}`}
          node={node}
          prevNode={prevNode}
          dataObject={dataObject}
          formValidationObject={formValidationObject}
          schemaMetadata={schemaMetadata}
          handleActionTrigger={handleActionTrigger}
        />
      );
    }

    if (node.type === "arrayItem" && node.dataMappingName) {
      const arrayData = _.get(dataObject, node.dataMappingName, []);

      const handleAddItem = () => {
        const newItem = {};
        (node.children || []).forEach((child) => {
          newItem[child.dataMappingName] = "";
        });
        const newArray = [...arrayData, newItem];
        const event = {
          actionType: SCHEMA_CONSTANT.onChange,
          target: {
            value: newArray,
            name: node.dataMappingName,
          },
        };
        handleActionTrigger(event, node);
      };

      const handleRemoveItem = (idx) => {
        const newArray = arrayData.filter((_, i) => i !== idx);
        const event = {
          actionType: SCHEMA_CONSTANT.onChange,
          target: {
            value: newArray,
            name: node.dataMappingName,
          },
        };
        handleActionTrigger(event, node);
      };

      return (
        <div
          key={`${node.label}_${node.type}_array`}
          className="row"
          style={{
            padding: 10,
          }}
        >
          <div style={{ fontWeight: 600 }}>{node.label}</div>
          {arrayData.map((_, idx) => (
            <div
              style={{
                border: "1px solid #eee",
                padding: 10,
                marginBottom: 10,
              }}
            >
              <div className="row">
                {node?.children?.map((childNode, childIndex) => {
                  const newChildNode = { ...childNode };
                  newChildNode.dataMappingName = `${node.dataMappingName}[${idx}].${childNode.childDataMappingName}`;
                  return (
                    <SchemaComponentRenderer
                      key={`${node.type}_${newChildNode.type}_${childIndex}`}
                      node={newChildNode}
                      dataObject={dataObject}
                      formValidationObject={formValidationObject}
                      handleActionTrigger={handleActionTrigger}
                    />
                  );
                })}
              </div>
              <RemoveButton onClick={() => handleRemoveItem(idx)}>
                Remove
              </RemoveButton>
            </div>
          ))}
          <AddButton onClick={handleAddItem}>Add {node.label}</AddButton>
        </div>
      );
    }

    if (node.type === "schema") {
      return (
        <ChildNodesRenderer
          children={node.children}
          schemaMetadata={schemaMetadata}
          dataObject={dataObject}
          formValidationObject={formValidationObject}
          handleActionTrigger={handleActionTrigger}
        />
      );
    }

    if (node.type === "tab") {
      return (
        <ChildNodesRenderer
          children={node.children}
          schemaMetadata={schemaMetadata}
          dataObject={dataObject}
          formValidationObject={formValidationObject}
          isMultilingual={false}
          handleActionTrigger={handleActionTrigger}
        />
      );
    }

    if (node.type === "section") {
      return (
        <SectionRenderer
          node={node}
          schemaMetadata={schemaMetadata}
          dataObject={dataObject}
          formValidationObject={formValidationObject}
          handleActionTrigger={handleActionTrigger}
        >
          <ChildNodesRenderer
            children={node.children}
            schemaMetadata={schemaMetadata}
            dataObject={dataObject}
            formValidationObject={formValidationObject}
            isMultilingual={false}
            handleActionTrigger={handleActionTrigger}
          />
        </SectionRenderer>
      );
    }

    return (
      <SchemaFieldRender
        key={`${node?.type}_${node.label}`}
        node={node}
        dataObject={dataObject}
        formValidationObject={formValidationObject}
        schemaMetadata={schemaMetadata}
        handleActionTrigger={(e, node) => handleActionTrigger(e, node)}
      />
    );
  };

  return (
    <Fragment>
      <ErrorBoundary>
        <ErrorBoundary>
          <RenderMultilingualField
            key={`multilingualTab_${node?.dataMappingName}`}
            node={node}
            prevNode={prevNode}
            schemaMetadata={schemaMetadata}
            handleActionTrigger={handleActionTrigger}
          />
        </ErrorBoundary>

        <ErrorBoundary>{renderContent()}</ErrorBoundary>
      </ErrorBoundary>
    </Fragment>
  );
}
