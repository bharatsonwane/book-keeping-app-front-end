import React, { useEffect, useMemo, useState } from "react";
import {
  getInitialTabName,
  getTabDataAndParentTabNameByName,
} from "src/helper/schemaHelper";
import SchemaFieldRenderer from "./SchemaFieldRenderer";

function SchemaTabRenderer({ schema }) {
  const [selectedTabName, setSelectedTabName] = useState("");

  const [languageData, setLanguageData] = useState({
    selectedLanguage: "en",
    languageList: [
      { label: "English", value: "en" },
      { label: "Finnish", value: "fi" },
    ],
  });

  const { tabData, parentTabName } = useMemo(() => {
    if (selectedTabName) {
      const { tabData, parentTabName } = getTabDataAndParentTabNameByName(
        schema,
        selectedTabName
      );

      return { tabData, parentTabName };
    }
    return { tabData: null, parentTabName: null };
  }, [selectedTabName]);

  useEffect(() => {
    const tabName = getInitialTabName(schema);
    setSelectedTabName(tabName);
  }, [schema?.schemaName, schema?.version]);

  const handleChangeLanguage = (selectedLanguage) => {
    setLanguageData({ ...languageData, selectedLanguage });
  };

  return (
    <div
      className="product-profile detail-tab col-xl-9 col-xxl-8 col-sm-12"
      style={{ width: "100%" }}
    >
      <div id="navbarProductProfile" className="product-profile-navbar">
        <ul className="nav nav-pills">
          {schema.children.map((tabNode, index) => {
            return (
              <li className="nav-item" key={index}>
                {tabNode.childrenType === "childTab" ? (
                  <>
                    <div className="dropdown">
                      <button
                        className={`btn nav-link dropdown-toggle`}
                        type="button"
                        id={`dropdownMenuButton_${index}`}
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        data-tabselect={
                          selectedTabName === tabNode.tabName ||
                          parentTabName === tabNode.tabName
                        }
                      >
                        {tabNode.tabName}
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby={`dropdownMenuButton_${index}`}
                      >
                        {tabNode.children.map((childTabNode, childIndex) => (
                          <li key={`tab_${childTabNode.tabName}${childIndex}`}>
                            <button
                              className="dropdown-item"
                              type="button"
                              onClick={() =>
                                setSelectedTabName(childTabNode.tabName)
                              }
                              data-tabselect={
                                selectedTabName === childTabNode.tabName
                              }
                            >
                              {childTabNode.tabName}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <a
                    key={`tab_${tabNode.tabName}${index}`}
                    className="nav-link"
                    role="button"
                    data-tabselect={selectedTabName === tabNode.tabName}
                    onClick={() => setSelectedTabName(tabNode.tabName)}
                  >
                    {tabNode.tabName}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="product-profile--content" style={{ minHeight: 300 }}>
        <div className="row">
          {!!tabData && (
            <SchemaFieldRenderer
              node={tabData}
              languageData={languageData}
              handleChangeLanguage={handleChangeLanguage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SchemaTabRenderer;
