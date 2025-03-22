import React from "react";

function SchemaTabRenderer({
  schema,
  selectedTabLabel,
  parentTabLabel,
  setSelectedTabLabel = () => {},
}) {
  return (
    <div id="navbarProductProfile" className="product-profile-navbar">
      <ul className="nav nav-pills">
        {schema.children.map((tabNode, index) => {
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
                      {tabNode.children.map((childTabNode, childIndex) => (
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
  );
}

export default SchemaTabRenderer;
