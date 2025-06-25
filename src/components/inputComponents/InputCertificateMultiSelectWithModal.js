import React, { useEffect, useState } from "react";
import _ from 'lodash';
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdTextFields } from "react-icons/md";
import CustomTooltip from "./CustomTooltip";
import { Badges } from "src/components/Badges";
import { InputMultiSelectDropdown } from "src/components/inputComponents/InputMultiSelectDropdown";
import { useTranslation } from "react-i18next";
import Modal from "react-bootstrap/Modal";
import { Loader } from 'src/components/Loader';
import { StCloseButton } from "src/components/StCloseButton";
import { StSquareButton } from 'src/components/StSquareButton';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
// import { getAllCertificationsData } from "src/redux/certifications/certificationsThunk";
import { FOOD_BEWERAGE } from "src/helper/constants/constants";

export function InputCertificateMultiSelectWithModal(props) {
  const dispatch = useDispatch();
  const {
    type, label, placeholder, name, value, options, isMultilingual, formLanguage, isSmallScreen,
    readOnly, showToolTip, tooltipText, errorMsg, onChange, className,
    showTranslation, aiEnable, aiIconHoverText,
    touched, isAllTouched, onBlur, modalTitle,
  } = props

  const { t, i18n } = useTranslation('common');
  const certificationsState = useSelector((state) => state.certifications, shallowEqual);
  const { CertificationsData } = certificationsState

  const productsState = useSelector((state) => state.products, shallowEqual);

  const [certificationDropdownList, setDropdownCertificationList] = useState([])
  const [allCertificateList, setAllCertificateList] = useState([])
  const [modalData, setModalData] = useState({
    isShow: false,
    multiSelectValue: [],
  })

  let selectedFormLanguage = (isMultilingual && formLanguage) ? formLanguage : i18n.language

  // useEffect(() => {
  //   getAllCertificatesData()
  // }, [])


  // const getAllCertificatesData = async () => {
  //   try {
  //     const certificates = await dispatch(getAllCertificationsData()).unwrap();
  //     setAllCertificateList(certificates)
  //     filteredDropdownArray(certificates)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  useEffect(() => {
    filteredDropdownArray()
  }, [value])

  const filteredDropdownArray = (data) => {
    const productTypeFilteredArray = _.filter(data ? data : CertificationsData, res => (res.template === (productsState?.productById?.productType || FOOD_BEWERAGE)))
    const sentDropdownArray = _.map(productTypeFilteredArray, (item) => ({
      text: item.name,
      value: item.id
    }))
    let removedSelected = value?.length > 0 && sentDropdownArray?.filter(elem => !value?.some(v => v?.value === elem?.value)) || sentDropdownArray;
    setDropdownCertificationList(removedSelected)
  }

  const handleRemoveItem = (item) => {
    if (!isObject(item)) {
      const newValue = value.filter((element) => element !== item)
      onChange({
        target: {
          name: name,
          value: newValue,
        }
      })
    } else {
      const newValue = value.filter((element) => element?.value !== item?.value)
      onChange({
        target: {
          name: name,
          value: newValue,
        }
      })
    }

  }


  const handleModalShow = () => {
    setModalData({
      ...modalData,
      isShow: true,
    })
  }

  const handleModalHide = () => {
    setModalData({
      isShow: false,
      multiSelectValue: [],
    })
  }


  const handleModalAdd = () => {
    const newValue = value ? [...value] : []

    let selectedCertificationWithData = modalData?.multiSelectValue?.map((element, index) => {
      return certificationDropdownList?.find((d, i) => d.value == element)
    })
    const filteredArrayWithOnlyValue = selectedCertificationWithData.map(obj => {
      const { text, ...rest } = obj;
      return rest; // Return the object without the 'text' field
    });
    const event = {
      target: {
        name: name,
        value: newValue.concat(filteredArrayWithOnlyValue)
      }
    }
    onChange(event)

    setModalData({
      isShow: false,
      multiSelectValue: [],
    })
  }

  const handleMultiSelectValueChange = (e) => {
    setModalData({
      ...modalData,
      multiSelectValue: e.target.value
    })
  }


  const showValue = (item) => {
    if (options?.length) {
      const itemObject = options.find((element) => element.value === item)
      if (isMultilingual) {
        return _.get(itemObject, `label.${selectedFormLanguage}`, item)
      }
      else {
        return _.get(itemObject, `label`, item)
      }
    }
    return item
  }

  const isObject = (value) => {
    return value !== null && typeof value === 'object';
  }

  return (
    <>
      {/* <div className={`form-group inputMultiSelectWithModal col-lg-12 col-md-12 col-sm-12 col-xs-6 ${className ? className : ""}`}>
        <div className="col inputMultiSelectWithModal__label">
          <label >
            {label}
          </label>
          {showTranslation && <MdTextFields />}
          {tooltipText &&
            <CustomTooltip
              tooltipContent={<p>{tooltipText}</p>}
            />
          }
        </div>

        <div className="inputMultiSelectWithModal__value">
          {value && value[0] ?
            value.map((item, index) => (
              <React.Fragment key={`${item}_${index}`}>
                {readOnly ? (
                  <Badges key={`${item}_${index}_readOnly`}>
                    {!isObject(showValue(item)) ? showValue(item) : (_.find(allCertificateList, (cert) => cert.id === item?.value)?.name)}
                  </Badges>
                ) : (

                  <React.Fragment key={`${item}_${index}_remove`}>
                    {!isObject(showValue(item)) ? (
                      <Badges remove onClick={() => handleRemoveItem(item)}>
                        {showValue(item)}
                      </Badges>) :
                      _.find(allCertificateList, (cert) => cert.id === item?.value)?.name ?
                        <Badges remove onClick={() => handleRemoveItem(item)}>
                          {(_.find(allCertificateList, (cert) => cert.id === item?.value)?.name)}
                        </Badges>
                        : ""}
                  </React.Fragment>
                )}
              </React.Fragment>
            ))
            :
            <>
              <span className="passive-message">{t("No data found")}</span>
            </>
          }
          {
            !readOnly &&
            <Badges add onClick={handleModalShow} >
              {t("Add")}
            </Badges>
          }
        </div>
        <div className="text-danger">
          {(isAllTouched || touched) && errorMsg}
        </div>
      </div>

      <Modal size="lg" centered={true} backdrop="static" show={modalData.isShow} onHide={handleModalHide} >
        <Modal.Header >
          <div style={{ position: 'absolute', right: 10 }}>
            <StCloseButton text={t("Close")} onClick={() => handleModalHide()}></StCloseButton>
          </div>
        </Modal.Header>
        <Modal.Body style={{ fontWeight: 'normal' }}>
          <div className="row col-12 m-0 justify-content-center">
            <span className="product-profile model-text" >{t("Select Certifications Here")}</span>
            <InputMultiSelectDropdown
              placeholder={t("Choose an Option")}
              search={true}
              name={"multiSelectWithModal"}
              value={modalData.multiSelectValue}
              options={certificationDropdownList}
              isMultilingual={isMultilingual}
              formLanguage={selectedFormLanguage}
              onChange={handleMultiSelectValueChange}
            />
          </div>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: 'center' }}>
          <StSquareButton text={t("Add")} onClick={() => handleModalAdd()}></StSquareButton>
        </Modal.Footer>
      </Modal> */}
      <div>
        </div>
    </>
  );
}