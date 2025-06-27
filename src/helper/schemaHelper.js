import _ from "lodash";

export const SCHEMA_CONSTANT = {
  onChange: "onChange",
  onBlur: "onBlur",
  onClick: "onClick",
  LANGUAGE_CHANGE: "languageChange",
  onRowClick: "onRowClick",
  onCreate: "onCreate",
  onUpdate: "onUpdate",
  // onView: "onView",
  // UI screen type
  VIEW: "view",
  CREATE: "create",
  UPDATE: "update",
  // action type
  SAVE: "save",
  DELETE: "delete",
  ADD: "add",
  EDIT: "edit",
};

/**
 * Function to find a tab object by tabLabel
 * @param {Object} schema - The schema object to search within
 * @param {String} tabLabel - The name of the tab to find
 * @param {String|null} parentTabLabel - The name of the parent tab (used internally for recursion)
 * @returns {Object} - An object containing the tabData and parentTabLabel if found, otherwise null
 */
export const getTabDataAndParentTabLabelByName = (
  schema,
  tabLabel,
  parentTabLabel = null
) => {
  // Check if the current schema's tabLabel matches the provided tabLabel
  if (schema.label === tabLabel) {
    return { tabData: schema, parentTabLabel };
  }

  // If the schema has children, iterate through them
  if (schema.children && Array.isArray(schema.children)) {
    for (const child of schema.children) {
      // Recursively call the function for each child
      const result = getTabDataAndParentTabLabelByName(
        child,
        tabLabel,
        schema.label
      );
      if (result?.tabData) {
        // If a match is found, return the tabData and the parentTabLabel
        return result;
      }
    }
  }

  // If no match is found, return null for both tabData and parentTabLabel
  return { tabData: null, parentTabLabel: null };
};

export const getInitialTabLabel = (schema) => {
  if (schema?.type == "tab") {
    return schema.label;
  }
  if (schema.children && Array.isArray(schema.children)) {
    for (const child of schema.children) {
      const result = getInitialTabLabel(child);
      if (result) {
        return result;
      }
    }
  }
  return null;
};

export const getInitialSchemaValueObject = (schema) => {
  const valueObject = {};

  const recursiveAction = (node) => {
    if (node.children) {
      for (const child of node.children) {
        recursiveAction(child);
      }
    } else if (node.dataMappingName) {
      _.set(valueObject, node.dataMappingName, "");
    }
  };

  recursiveAction(schema);

  return valueObject;
};

