/**
 * Function to find a tab object by tabName
 * @param {Object} schema - The schema object to search within
 * @param {String} tabName - The name of the tab to find
 * @param {String|null} parentTabName - The name of the parent tab (used internally for recursion)
 * @returns {Object} - An object containing the tabData and parentTabName if found, otherwise null
 */
export const getTabDataAndParentTabNameByName = (
  schema,
  tabName,
  parentTabName = null
) => {
  // Check if the current schema's tabName matches the provided tabName
  if (schema.tabName === tabName) {
    return { tabData: schema, parentTabName };
  }

  // If the schema has children, iterate through them
  if (schema.children && Array.isArray(schema.children)) {
    for (const child of schema.children) {
      // Recursively call the function for each child
      const result = getTabDataAndParentTabNameByName(
        child,
        tabName,
        schema.tabName
      );
      if (result?.tabData) {
        // If a match is found, return the tabData and the parentTabName
        return result;
      }
    }
  }

  // If no match is found, return null for both tabData and parentTabName
  return { tabData: null, parentTabName: null };
};

export const getInitialTabName = (schema) => {
  if (schema.tabName && schema?.type !== "parentTab") {
    return schema.tabName;
  }
  if (schema.children && Array.isArray(schema.children)) {
    for (const child of schema.children) {
      const result = getInitialTabName(child);
      if (result) {
        return result;
      }
    }
  }
  return null;
};
