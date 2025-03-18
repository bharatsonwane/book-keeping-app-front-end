import React from "react";

function SchemaTabRenderer({
  schema,
  selectedTabName,
  parentTabName,
  setSelectedTabName = () => {},
}) {
  return (
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
  );
}

export default SchemaTabRenderer;
