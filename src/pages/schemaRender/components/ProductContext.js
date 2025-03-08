import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {

  const [viewType, setViewType] = useState('GRID');
  const [profileTabName, setProfileTabName] = useState("Identifier")
  const [langTabIndex, setLangTabIndex] = useState(0);
  const value = { viewType, setViewType, profileTabName, setProfileTabName, langTabIndex, setLangTabIndex };

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  )

}

export default ProductContextProvider;