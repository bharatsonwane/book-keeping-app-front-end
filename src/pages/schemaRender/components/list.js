import { Searchbox } from "../../../components/searchbox";
import React, { useState, useEffect } from "react";
import ProductProfileTabs from "./ProductProfileTabs";
import { Spinner } from "src/components/Spinner";
import { getProductTemplateSchemaAction } from "src/thunks/schema";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { EDIT } from 'src/helper/constants/constants'

const SchemaRenderList = () => {
  const dispatch = useDispatch();
  const _state = useSelector((state) => state.schema, shallowEqual);


  const [search, changeSearch] = useState("");
  const [loading, setLoading] = useState(true)
  const { selectedProductSchema } = _state

  // console.log("_state data is",_state?.formObject)

  // console.log("validation obj is",_state?.productFormValidation)

  useEffect(() => {
    getProductData_template()
    return () => {
    };
  }, []);

  const onChangeSearch = (e) => {
    let value = e.target.value;

    changeSearch(value);
  };

  const getProductData_template = async () => {
    setLoading(true)
    try {
      await dispatch(getProductTemplateSchemaAction({ action: EDIT, productType: "foodbewerage" }))
      setLoading(false)
    } catch (error) {
      if (error?.response?.data?.error?.status == 404) {
        // setProductNotFound(true)
      }
      setLoading(false)
    }
  }

  console.log("selectedProductSchema", selectedProductSchema)

  return (
    <>
      <div
        className={`p-2 container-fluid d-flex flex-row justify-content-between bg-primary text-white`}
        >
        <h4>Work</h4>
        <div className="w-20">
          <Searchbox
            value={search}
            onChange={onChangeSearch}
            placeholder={"Search on home"}
            />
        </div>
      </div>



      {loading && <Spinner />}
      <div>
        <ProductProfileTabs
          selectedProductSchema={selectedProductSchema}
        />
      </div>
    </>
  );
};
export default SchemaRenderList;
