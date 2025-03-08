import React, { useMemo, useEffect, useContext } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import objectPath from "object-path";
import _ from "lodash";
import { usePrevious } from "src/helper/CustomHook";
// import { getAllProductImagesAction } from "src/redux/media/mediaThunk";
import ErrorBoundary from 'src/components/ErrorBoundary';
import { Spinner } from "src/components/Spinner";
import CommonTabComponent from "./CommonTabComponent";
import { selectProductTabInfoAction } from "src/slice/schema";

const ProductProfileTabs = (props) => {
  const { selectedProductSchema, } = props

  const { productSchema, productTabStructuredSchema, selectedTabInfo, } = selectedProductSchema

  const dispatch = useDispatch();
  const { t } = useTranslation('common');
  /**
  const history = useHistory()
  const context = useContext(ProductContext);
  const { accordianSelectedName, gtin } = useParams();
   */

  const _companyState = useSelector((state) => state.company, shallowEqual);
  const productState = useSelector((state) => state.products, shallowEqual);



  const prevPropsState = usePrevious({ productSchema });
  useEffect(() => {
    const prevousProductSchema = _.get(prevPropsState, "productSchema", "")
    if (!_.isEqual(productSchema, prevousProductSchema) && productTabStructuredSchema) {
      handleProductTabChange()
    }
    return () => {
    }
  }, [JSON.stringify(productSchema)])



  //   useEffect(() => {
  //     let queryParams;
  //     let gtin = objectPath.get(productState, 'formObject.gtin');
  //     let _2an = objectPath.get(productState, 'formObject._2an');

  //     if (gtin && _2an) {
  //       queryParams = `gtin=${gtin}&_2an=${_2an}`;
  //     } else if (gtin) {
  //       queryParams = `gtin=${gtin}`;
  //     } else {
  //       queryParams = `_2an=${_2an}`;
  //     }

  //     if (_.get(productState, "formObject.businessIdentifiers", "")) {
  //       dispatch(getAllProductImagesAction({
  //         businessId: objectPath.get(_.find(productState.formObject.businessIdentifiers, function (o) { return o.type === "VATID" }), 'id', productState.formObject.businessIdentifiers[0].id),
  //         articleIdentifier: queryParams,
  //         isLoaderShow: true
  //       }));
  //     }
  //   }, [JSON.stringify(_.get(productState, "formObject.businessIdentifiers", ""))])



  const handleProductTabChange = (item) => {
    if (item && item?.tabName) {
      dispatch(selectProductTabInfoAction({
        tabName: item?.tabName,
        fieldList: item?.fieldList
      }))
    } else {
      const firstItem = productTabStructuredSchema[0]
      if (firstItem?.childTabList && firstItem?.childTabList[0]) {
        dispatch(selectProductTabInfoAction({
          tabName: firstItem?.childTabList?.[0].tabName,
          fieldList: firstItem?.childTabList?.[0].fieldList
        }))
      }
      else {
        dispatch(selectProductTabInfoAction({
          tabName: firstItem?.tabName,
          fieldList: firstItem?.fieldList
        }))
      }
    }



  };

  const isCurrentTabSelected = (item, isDropdown) => {
    if (isDropdown && item) {
      const isDropdownSelected = item.childTabList.find((element) => element.tabName === selectedTabInfo.tabName)
      return !!isDropdownSelected
    }

    const currentTab = _.get(item, "fieldList[0].tabName", "")
    if (currentTab === selectedTabInfo.tabName) {
      return true
    }
    return false
  }



  const renderProductTab = useMemo(() => (
    <>
      <ErrorBoundary key={selectedTabInfo.tabName}>
        <CommonTabComponent
          key={selectedTabInfo.tabName}
          productProfileTabInfo={selectedTabInfo}
        />
      </ErrorBoundary>
    </>
  ), [JSON.stringify(selectedTabInfo)])



  return (
    <>
      {
        // _.isEmpty(productState.formObject) ?
        //   <div style={{ position: 'absolute' }}>
        //     <Spinner />
        //   </div>
        //   :
        <div className="product-profile detail-tab col-xl-9 col-xxl-8 col-sm-12">
          {
            productTabStructuredSchema && productTabStructuredSchema[0] &&
            <div id="navbarProductProfile" className="product-profile-navbar">
              <ul className="nav nav-pills">
                {productTabStructuredSchema.map((item, index) => (
                  <li className="nav-item" key={index}>
                    {item.childTabList ? (
                      <div className="dropdown">
                        <button
                          className={`btn nav-link dropdown-toggle`}
                          type="button"
                          id={`dropdownMenuButton_${index}`}
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-tabselect={isCurrentTabSelected(item, true)}
                        >
                          {t(`${item.tabName}`)}
                        </button>
                        <ul
                          className="dropdown-menu" aria-labelledby={`dropdownMenuButton_${index}`}
                        >
                          {item.childTabList.map((childTab, childIndex) => (
                            <li key={`tab_${childTab.tabName}${childIndex}`}>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() => handleProductTabChange(childTab)}
                                data-tabselect={isCurrentTabSelected(childTab)}
                              >
                                {t(`${childTab.tabName}`)}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <a
                        className="nav-link"
                        role="button"
                        data-tabselect={isCurrentTabSelected(item)}
                        onClick={() => handleProductTabChange(item)}
                      >
                        {t(`${item.tabName}`)}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          }

          <div className="product-profile--content" >
            {renderProductTab}
          </div>
        </div>
      }
    </>
  )
};

export default ProductProfileTabs;
