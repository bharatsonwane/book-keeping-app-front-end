import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import _ from 'lodash';
/**
 * @standard component
 */
import { InputColorWithLabel } from 'src/components/inputComponents/InputColorWithLabel';
import { InputTextareaWithLabel } from 'src/components/inputComponents/InputTextareaWithLabel';
import { InputTextWithLabel } from 'src/components/inputComponents/InputTextWithLabel';
import { InputSelectDropdown } from 'src/components/inputComponents/InputSelectDropdown';
import { InputSwitchWithLable } from 'src/components/inputComponents/InputSwitchWithLable';
import { InputDateTimePicker } from 'src/components/inputComponents/InputDateTimePicker';
import { InputTextMultiAddWithLabel } from 'src/components/inputComponents/InputTextMultiAddWithLabel';
import { InputMultiSelectWithModal } from 'src/components/inputComponents/InputMultiSelectWithModal';
import { InputEmailMultiAddWithModal } from 'src/components/inputComponents/InputEmailMultiAddWithModal';
import { InputUrlMultiAddWithModal } from 'src/components/inputComponents/InputUrlMultiAddWithModal';
// import { MediaImage } from 'src/components/inputComponents/MediaImage';
// import { MediaImageOther } from 'src/components/inputComponents/MediaImageOther';
// import { MediaVideo } from 'src/components/inputComponents/MediaVideo';
// import { MediaVideoUrl } from 'src/components/inputComponents/MediaVideoUrl';
// import { Media3dmodelGlb } from 'src/components/inputComponents/Media3dmodelGlb';
// import { MediaDocumentPdf } from 'src/components/inputComponents/MediaDocumentPdf';
// import { MediaOtherFile } from 'src/components/inputComponents/MediaOtherFile';


/**
 * @specialComponent
*/
// import { EcommerceComponent } from 'src/components/specialSchemaComponents/EcommerceComponent';
// import { ExternalSources } from 'src/components/specialSchemaComponents/ExternalSources';
// import { BusinessIdentifiers } from 'src/components/specialSchemaComponents/BusinessIdentifiers';
// import { Restrictions } from 'src/components/specialSchemaComponents/Restrictions';
// import { DoormatModal } from 'src/components/specialSchemaComponents/DoormatModal';
// import { EmailConsentComponent } from 'src/components/specialSchemaComponents/EmailConsentComponent';
// import { NutritionalTab } from 'src/pages/products/productProfile/tabs/NutritionalTab';
// import { UpidsProduct } from 'src/pages/products/productProfile/tabs/UpidsProduct';
// import { Feedback } from 'src/pages/products/productProfile/tabs/Feedback';
// import { Versioning } from 'src/pages/products/productProfile/tabs/Versioning';
// import { ManufactureTab } from '../specialSchemaComponents/ManufactureTab';
// import { ShowAdditionalBusinessIdentifiers } from '../inputComponents/ShowAdditionalBusinessIdentifiers';
import { InputCertificateMultiSelectWithModal } from '../inputComponents/InputCertificateMultiSelectWithModal';


/**
 * @actions 
 */



const FormFieldSchemaRender = (props) => {
    const {
        formItem, formValueObject, formValidationObject, validationObj,onBlur, onChange, formReadOnly, selectedFormLanguage,
        className, isSmallScreen,touched
    } = props
    let newFormItem = {
        ...formItem,
        dataMappingName: _.get(formItem, "dataMappingName", formItem.name)
    }

    const dispatch = useDispatch()
    const [t, I18n] = useTranslation();


    // /**
    const [componentFormItem, setComponentFormItem] = useState({
        loading: false,
        isUsed: false,
        updatedFormItem: {},
    })


    const dependsOnValue = _.get(formValueObject, newFormItem.dependsOnDataMappingName, "")
    useEffect(() => {
        if (newFormItem.updateData && dependsOnValue) {
            handleFormMetaDataItemChange(newFormItem, dependsOnValue)
        }
        else if (newFormItem.updateData) {
            handleFormMetaDataItemChange(newFormItem)
        }
        return () => {
        }
    }, [JSON.stringify(dependsOnValue)])


    const handleFormMetaDataItemChange = async (item, dependsOnValue) => {
        try {
            setComponentFormItem({ ...componentFormItem, loading: true })
            const updatedData = await item.updateData.getUpdatedFormItem({ formItem: item, formValueObject: formValueObject, dispatch, dependsOnValue })
            if (updatedData) {
                setComponentFormItem({ loading: false, isUsed: true, updatedFormItem: updatedData })
            }
            else {
                setComponentFormItem({ ...componentFormItem, loading: false })
            }
        } catch (error) {
            setComponentFormItem({ ...componentFormItem, loading: false })
            console.info("handleFormItemChange", error)
        }
    }





    newFormItem.loading = componentFormItem.loading
    if (componentFormItem.isUsed) {
        newFormItem = { ...newFormItem, ...componentFormItem.updatedFormItem }
    }



    /**
     * @standard component
     */
    if (newFormItem.type === "date") {
        return (
            <>
                <InputDateTimePicker
                    key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
                    section={newFormItem.section}
                    label={t(newFormItem.label)}
                    tooltipText={t(newFormItem.tooltipText)}
                    name={newFormItem.dataMappingName}
                    value={formValueObject[newFormItem.dataMappingName]}
                    isAllTouched={formValidationObject.isAllTouched}
                    touched={formValidationObject.touched[newFormItem.dataMappingName]}
                    errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
                    onBlur={onBlur}
                    onChange={onChange}
                    className={className}
                    isSmallScreen={isSmallScreen}
                />
            </>
        )
    }

    if (newFormItem.type === "switch") {
        return (
            <>
                <InputSwitchWithLable
                    key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
                    section={newFormItem.section}
                    label={t(newFormItem.label)}
                    placeholder={t(newFormItem.placeholder)}
                    tooltipText={t(newFormItem.tooltipText)}
                    type={newFormItem.type}
                    name={newFormItem.dataMappingName}
                    readOnly={newFormItem.readOnly}
                    value={formValueObject[newFormItem.dataMappingName]}
                    isAllTouched={formValidationObject.isAllTouched}
                    touched={formValidationObject.touched[newFormItem.dataMappingName]}
                    errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
                    onBlur={onBlur}
                    onChange={onChange}
                    className={className}
                    isSmallScreen={isSmallScreen}
                />
            </>
        )
    }

    if (newFormItem.type === "select") {
        return (
            <>
                <InputSelectDropdown
                    key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
                    section={newFormItem.section}
                    loading={newFormItem.loading}
                    label={t(newFormItem.label)}
                    placeholder={t(newFormItem.placeholder)}
                    tooltipText={t(newFormItem.tooltipText)}
                    type={newFormItem.type}
                    name={newFormItem.dataMappingName}
                    readOnly={newFormItem.readOnly}
                    value={_.get(formValueObject, newFormItem.dataMappingName, "")}
                    options={newFormItem.options}
                    isMultilingual={newFormItem.isMultilingual}
                    formLanguage={selectedFormLanguage}
                    isAllTouched={formValidationObject.isAllTouched}
                    touched={formValidationObject.touched[newFormItem.dataMappingName]}
                    errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
                    onBlur={onBlur}
                    onChange={onChange}
                    className={className}
                    isSmallScreen={isSmallScreen || newFormItem.isMultilingual}
                />
            </>
        )
    }

    if (newFormItem.type === "textarea") {
        if (newFormItem.isMultilingual) {
            return (
                <>
                    <InputTextareaWithLabel
                        key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
                        section={newFormItem.section}
                        label={t(newFormItem.label)}
                        placeholder={t(newFormItem.placeholder)}
                        tooltipText={t(newFormItem.tooltipText)}
                        type={newFormItem.type}
                        name={`${newFormItem.dataMappingName}.${selectedFormLanguage}`}
                        readOnly={newFormItem.readOnly}
                        value={_.get(formValueObject, `${newFormItem.dataMappingName}[${selectedFormLanguage}]`, "")}
                        aiEnable={newFormItem.aiEnable}
                        isAllTouched={formValidationObject.isAllTouched}
                        touched={formValidationObject.touched[newFormItem.dataMappingName]}
                        errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
                        onBlur={onBlur}
                        onChange={onChange}
                        className={className}
                        isSmallScreen={isSmallScreen}
                    />
                </>
            )
        }
        else {
            return (
                <>
                    <InputTextareaWithLabel
                        key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
                        section={newFormItem.section}
                        label={t(newFormItem.label)}
                        placeholder={t(newFormItem.placeholder)}
                        tooltipText={t(newFormItem.tooltipText)}
                        type={newFormItem.type}
                        name={newFormItem.dataMappingName}
                        readOnly={newFormItem.readOnly}
                        value={_.get(formValueObject, newFormItem.dataMappingName, "")}
                        isAllTouched={formValidationObject.isAllTouched}
                        touched={formValidationObject.touched[newFormItem.dataMappingName]}
                        errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
                        onBlur={onBlur}
                        onChange={onChange}
                        className={className}
                        isSmallScreen={isSmallScreen}
                    />
                </>
            )
        }
    }
    
    if (newFormItem.type === "text" || newFormItem.type === "number") {
        if (newFormItem.isMultilingual) {
            return (
                <>
                    <InputTextWithLabel
                        key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
                        section={newFormItem.section}
                        label={t(newFormItem.label)}
                        placeholder={t(newFormItem.placeholder)}
                        tooltipText={t(newFormItem.tooltipText)}
                        type={newFormItem.type}
                        name={`${newFormItem.dataMappingName}.${selectedFormLanguage}`}
                        readOnly={newFormItem.readOnly}
                        value={_.get(formValueObject, `${newFormItem.dataMappingName}[${selectedFormLanguage}]`, "")}
                        aiEnable={newFormItem.aiEnable}
                        isAllTouched={formValidationObject.isAllTouched}
                        touched={formValidationObject.touched[newFormItem.dataMappingName] || touched}
                        errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, validationObj)}
                        onBlur={onBlur}
                        onChange={onChange}
                        className={className}
                        isSmallScreen={isSmallScreen || true}
                        />
                </>
            )
        }
        else {
            return (
                <>
                    <InputTextWithLabel
                        key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
                        section={newFormItem.section}
                        label={t(newFormItem.label)}
                        placeholder={t(newFormItem.placeholder)}
                        tooltipText={t(newFormItem.tooltipText)}
                        type={newFormItem.type}
                        name={newFormItem.dataMappingName}
                        readOnly={newFormItem.readOnly}
                        value={_.get(formValueObject, newFormItem.dataMappingName, "")}
                        isAllTouched={formValidationObject.isAllTouched }
                        touched={formValidationObject.touched[newFormItem.dataMappingName] || touched}
                        errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem?.dataMappingName}`, validationObj)}
                        onBlur={onBlur}
                        onChange={onChange}
                        className={className}
                        isSmallScreen={isSmallScreen}
                    />
                </>
            )
        }
    }


    if (newFormItem.type === "color") {
        return (
            <>
                <InputColorWithLabel
                    key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
                    section={newFormItem.section}
                    label={t(newFormItem.label)}
                    placeholder={t(newFormItem.placeholder)}
                    tooltipText={t(newFormItem.tooltipText)}
                    type={newFormItem.type}
                    name={newFormItem.dataMappingName}
                    readOnly={newFormItem.readOnly || formReadOnly}
                    value={_.get(formValueObject, newFormItem.dataMappingName, "")}
                    isAllTouched={formValidationObject.isAllTouched}
                    touched={formValidationObject.touched[newFormItem.dataMappingName]}
                    errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
                    onBlur={onBlur}
                    onChange={onChange}
                    className={className}
                    isSmallScreen={isSmallScreen}
                />
            </>
        )
    }


    if (newFormItem.type === "textMultiAdd") {
        return (
            <>
                <InputTextMultiAddWithLabel
                    key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
                    section={newFormItem.section}
                    label={t(newFormItem.label)}
                    placeholder={t(newFormItem.placeholder)}
                    tooltipText={t(newFormItem.tooltipText)}
                    type={newFormItem.type}
                    name={newFormItem.dataMappingName}
                    readOnly={newFormItem.readOnly || formReadOnly}
                    value={_.get(formValueObject, newFormItem.dataMappingName, [])}
                    isAllTouched={formValidationObject.isAllTouched}
                    touched={formValidationObject.touched[newFormItem.dataMappingName]}
                    errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
                    onBlur={onBlur}
                    onChange={onChange}
                    className={className}
                    isSmallScreen={isSmallScreen}
                />
            </>
        )

    }

    // if(newFormItem.type === "showAdditionalBusinessIdentifiers"){
    //     return (
    //         <>
    //          <ShowAdditionalBusinessIdentifiers 
    //           key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
    //           section={newFormItem.section}
    //           label={t(newFormItem.label)}
    //           placeholder={t(newFormItem.placeholder)}
    //           tooltipText={t(newFormItem.tooltipText)}
    //           type={newFormItem.type}
    //           name={newFormItem.dataMappingName}
    //           value={_.get(formValueObject, newFormItem.dataMappingName, "")}
    //           modalTitle={newFormItem.modalTitle}
    //           readOnly={newFormItem.readOnly || formReadOnly}
    //           isAllTouched={formValidationObject.isAllTouched}
    //           touched={formValidationObject.touched[newFormItem.dataMappingName]}
    //           onBlur={onBlur}
    //           onChange={onChange}
    //           className={className}
    //           isSmallScreen={isSmallScreen}
    //           />
    //         </>
    //     )
    // }

    
    if (newFormItem.type === "emailMultiAdd") {
        return (
            <>
                <InputEmailMultiAddWithModal
                    key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
                    section={newFormItem.section}
                    label={t(newFormItem.label)}
                    placeholder={t(newFormItem.placeholder)}
                    tooltipText={t(newFormItem.tooltipText)}
                    type={newFormItem.type}
                    name={newFormItem.dataMappingName}
                    value={_.get(formValueObject, newFormItem.dataMappingName, "")}
                    modalTitle={newFormItem.modalTitle}
                    readOnly={newFormItem.readOnly || formReadOnly}
                    isAllTouched={formValidationObject.isAllTouched}
                    touched={formValidationObject.touched[newFormItem.dataMappingName]}
                    errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
                    onBlur={onBlur}
                    onChange={onChange}
                    className={className}
                    isSmallScreen={isSmallScreen}
                />
            </>
        )
    }

    if (newFormItem.type === "urlMultiAdd") {
        return (
            <>
                <InputUrlMultiAddWithModal
                    key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
                    section={newFormItem.section}
                    label={t(newFormItem.label)}
                    placeholder={t(newFormItem.placeholder)}
                    tooltipText={t(newFormItem.tooltipText)}
                    type={newFormItem.type}
                    name={newFormItem.dataMappingName}
                    value={_.get(formValueObject, newFormItem.dataMappingName, "")}
                    options={newFormItem.options}
                    modalTitle={newFormItem.modalTitle}
                    isMultilingual={newFormItem.isMultilingual}
                    formLanguage={selectedFormLanguage}
                    readOnly={newFormItem.readOnly || formReadOnly}
                    isAllTouched={formValidationObject.isAllTouched}
                    touched={formValidationObject.touched[newFormItem.dataMappingName]}
                    errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
                    onBlur={onBlur}
                    onChange={onChange}
                    className={className}
                    isSmallScreen={isSmallScreen}
                />
            </>
        )
    }


    if (newFormItem.type === "certificationMultiSelectWithModal") {

        return (
            <>
                <InputCertificateMultiSelectWithModal
                    key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
                    section={newFormItem.section}
                    label={t(newFormItem.label)}
                    placeholder={t(newFormItem.placeholder)}
                    tooltipText={t(newFormItem.tooltipText)}
                    type={newFormItem.type}
                    name={newFormItem.dataMappingName}
                    value={_.get(formValueObject, newFormItem.dataMappingName, "")}
                    options={newFormItem.options}
                    modalTitle={newFormItem.modalTitle}
                    isMultilingual={newFormItem.isMultilingual}
                    formLanguage={selectedFormLanguage}
                    readOnly={newFormItem.readOnly || formReadOnly}
                    isAllTouched={formValidationObject.isAllTouched}
                    touched={formValidationObject.touched[newFormItem.dataMappingName]}
                    errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
                    onBlur={onBlur}
                    onChange={onChange}
                    className={className}
                    isSmallScreen={isSmallScreen}
                />
            </>
        )
    }

    
    if (newFormItem.type === "multiSelectWithModal") {

        return (
            <>
                <InputMultiSelectWithModal
                    key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
                    section={newFormItem.section}
                    label={t(newFormItem.label)}
                    placeholder={t(newFormItem.placeholder)}
                    tooltipText={t(newFormItem.tooltipText)}
                    type={newFormItem.type}
                    name={newFormItem.dataMappingName}
                    value={_.get(formValueObject, newFormItem.dataMappingName, "")}
                    options={newFormItem.options}
                    modalTitle={newFormItem.modalTitle}
                    isMultilingual={newFormItem.isMultilingual}
                    formLanguage={selectedFormLanguage}
                    readOnly={newFormItem.readOnly}
                    isAllTouched={formValidationObject.isAllTouched}
                    touched={formValidationObject.touched[newFormItem.dataMappingName]}
                    errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
                    onBlur={onBlur}
                    onChange={onChange}
                    className={className}
                    isSmallScreen={isSmallScreen}
                />
            </>
        )
    }

    


    // if (newFormItem.type === "mediaImage") {
    //     return (
    //         <>
    //             <MediaImage
    //                 key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
    //                 section={newFormItem.section}
    //                 label={t(newFormItem.label)}
    //                 bottomLabel={t(newFormItem.bottomLabel)}
    //                 placeholder={t(newFormItem.placeholder)}
    //                 tooltipText={t(newFormItem.tooltipText)}
    //                 type={newFormItem.type}
    //                 name={newFormItem.dataMappingName}
    //                 readOnly={newFormItem.readOnly || formReadOnly}
    //                 value={_.get(formValueObject, newFormItem.dataMappingName, "")}
    //                 isAllTouched={formValidationObject.isAllTouched}
    //                 touched={formValidationObject.touched[newFormItem.dataMappingName]}
    //                 errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
    //                 onBlur={onBlur}
    //                 onChange={onChange}
    //                 className={className}
    //                 isSmallScreen={isSmallScreen}
    //             />
    //         </>
    //     )
    // }


    // if (newFormItem.type === "mediaImageOther") {
    //     return (
    //         <>
    //             <MediaImageOther
    //                 key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
    //                 section={newFormItem.section}
    //                 label={t(newFormItem.label)}
    //                 placeholder={t(newFormItem.placeholder)}
    //                 tooltipText={t(newFormItem.tooltipText)}
    //                 type={newFormItem.type}
    //                 name={newFormItem.dataMappingName}
    //                 readOnly={newFormItem.readOnly || formReadOnly}
    //                 value={_.get(formValueObject, newFormItem.dataMappingName, "")}
    //                 isAllTouched={formValidationObject.isAllTouched}
    //                 touched={formValidationObject.touched[newFormItem.dataMappingName]}
    //                 errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
    //                 onBlur={onBlur}
    //                 onChange={onChange}
    //                 className={className}
    //                 isSmallScreen={isSmallScreen}
    //             />
    //         </>
    //     )
    // }


    // if (newFormItem.type === "video") {
    //     return (
    //         <>
    //             <MediaVideo
    //                 key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
    //                 section={newFormItem.section}
    //                 label={t(newFormItem.label)}
    //                 placeholder={t(newFormItem.placeholder)}
    //                 tooltipText={t(newFormItem.tooltipText)}
    //                 type={newFormItem.type}
    //                 name={newFormItem.dataMappingName}
    //                 readOnly={newFormItem.readOnly || formReadOnly}
    //                 value={_.get(formValueObject, newFormItem.dataMappingName, "")}
    //                 isAllTouched={formValidationObject.isAllTouched}
    //                 touched={formValidationObject.touched[newFormItem.dataMappingName]}
    //                 errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
    //                 onBlur={onBlur}
    //                 onChange={onChange}
    //                 className={className}
    //                 isSmallScreen={isSmallScreen}
    //             />
    //         </>
    //     )
    // }

    // if (newFormItem.type === "videoUrl") {
    //     return (
    //         <>
    //             <MediaVideoUrl
    //                 key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
    //                 section={newFormItem.section}
    //                 label={t(newFormItem.label)}
    //                 placeholder={t(newFormItem.placeholder)}
    //                 tooltipText={t(newFormItem.tooltipText)}
    //                 type={newFormItem.type}
    //                 name={newFormItem.dataMappingName}
    //                 readOnly={newFormItem.readOnly || formReadOnly}
    //                 value={_.get(formValueObject, newFormItem.dataMappingName, "")}
    //                 isAllTouched={formValidationObject.isAllTouched}
    //                 touched={formValidationObject.touched[newFormItem.dataMappingName]}
    //                 errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
    //                 onBlur={onBlur}
    //                 onChange={onChange}
    //                 className={className}
    //                 isSmallScreen={isSmallScreen}
    //             />
    //         </>
    //     )
    // }



    // if (newFormItem.type === "media3dmodel") {
    //     return (
    //         <>
    //             <Media3dmodelGlb
    //                 key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
    //                 section={newFormItem.section}
    //                 label={t(newFormItem.label)}
    //                 placeholder={t(newFormItem.placeholder)}
    //                 tooltipText={t(newFormItem.tooltipText)}
    //                 type={newFormItem.type}
    //                 name={newFormItem.dataMappingName}
    //                 readOnly={newFormItem.readOnly || formReadOnly}
    //                 value={_.get(formValueObject, newFormItem.dataMappingName, "")}
    //                 isAllTouched={formValidationObject.isAllTouched}
    //                 touched={formValidationObject.touched[newFormItem.dataMappingName]}
    //                 errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
    //                 onBlur={onBlur}
    //                 onChange={onChange}
    //                 className={className}
    //                 isSmallScreen={isSmallScreen}
    //             />
    //         </>
    //     )
    // }

    // if (newFormItem.type === "pdf") {
    //     return (
    //         <>
    //             <MediaDocumentPdf
    //                 key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
    //                 section={newFormItem.section}
    //                 label={t(newFormItem.label)}
    //                 placeholder={t(newFormItem.placeholder)}
    //                 tooltipText={t(newFormItem.tooltipText)}
    //                 type={newFormItem.type}
    //                 name={newFormItem.dataMappingName}
    //                 readOnly={newFormItem.readOnly || formReadOnly}
    //                 value={_.get(formValueObject, newFormItem.dataMappingName, "")}
    //                 isAllTouched={formValidationObject.isAllTouched}
    //                 touched={formValidationObject.touched[newFormItem.dataMappingName]}
    //                 errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
    //                 onBlur={onBlur}
    //                 onChange={onChange}
    //                 className={className}
    //                 isSmallScreen={isSmallScreen}
    //             />
    //         </>
    //     )
    // }


    // if (newFormItem.type === "mediaOtherFile") {
    //     return (
    //         <>
    //             <MediaOtherFile
    //                 key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
    //                 section={newFormItem.section}
    //                 label={t(newFormItem.label)}
    //                 placeholder={t(newFormItem.placeholder)}
    //                 tooltipText={t(newFormItem.tooltipText)}
    //                 type={newFormItem.type}
    //                 name={newFormItem.dataMappingName}
    //                 readOnly={newFormItem.readOnly || formReadOnly}
    //                 value={_.get(formValueObject, newFormItem.dataMappingName, "")}
    //                 isAllTouched={formValidationObject.isAllTouched}
    //                 touched={formValidationObject.touched[newFormItem.dataMappingName]}
    //                 errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
    //                 onBlur={onBlur}
    //                 onChange={onChange}
    //                 className={className}
    //                 isSmallScreen={isSmallScreen}
    //             />
    //         </>
    //     )
    // }


    /**
     * @special components
     */
    // if (newFormItem.type === "emailConsent") {
    //     return (
    //         <EmailConsentComponent
    //             key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
    //             section={newFormItem.section}
    //         />
    //     )

    // }


    // if (newFormItem.type === "ecommerce") {
    //     return (
    //         <EcommerceComponent
    //             key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
    //         />
    //     )
    // }


    // if (newFormItem.type === "manufacturerDetails") {
    //     return (
    //         <>
    //             <ManufactureTab
    //                 key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
    //                 section={newFormItem.section}
    //                 label={t(newFormItem.label)}
    //                 componentSchema={newFormItem.componentSchema}
    //                 manufacturesSchema={newFormItem.manufacturesSchema}
    //                 // tooltipText={t(newFormItem.tooltipText)}
    //                 // name={newFormItem.dataMappingName}
    //                 // value={formValueObject[newFormItem.dataMappingName]}
    //                 // isAllTouched={formValidationObject.isAllTouched}
    //                 // touched={formValidationObject.touched[newFormItem.dataMappingName]}
    //                 // errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
    //                 // readOnly={formValueObject[newFormItem.readOnly] || formReadOnly}
    //                 // onBlur={onBlur}
    //                 // onChange={onChange}
    //                 className={className}
    //                 isSmallScreen={isSmallScreen}
    //             />
    //         </>
    //     )
    // }

    // if (newFormItem.type === "externalSources") {
    //     return (
    //         <>
    //             <ExternalSources
    //                 key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
    //                 section={newFormItem.section}
    //                 label={t(newFormItem.label)}
    //                 tooltipText={t(newFormItem.tooltipText)}
    //                 name={newFormItem.dataMappingName}
    //                 value={formValueObject[newFormItem.dataMappingName]}
    //                 isAllTouched={formValidationObject.isAllTouched}
    //                 touched={formValidationObject.touched[newFormItem.dataMappingName]}
    //                 errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
    //                 readOnly={formValueObject[newFormItem.readOnly] || formReadOnly}
    //                 onBlur={onBlur}
    //                 onChange={onChange}
    //                 className={className}
    //                 isSmallScreen={isSmallScreen}
    //             />
    //         </>
    //     )
    // }

    // if (newFormItem.type === "businessIdentifiers") {
    //     return (
    //         <>
    //             <BusinessIdentifiers
    //                 key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
    //                 section={newFormItem.section}
    //                 label={t(newFormItem.label)}
    //                 tooltipText={t(newFormItem.tooltipText)}
    //                 name={newFormItem.dataMappingName}
    //                 value={formValueObject[newFormItem.dataMappingName]}
    //                 isAllTouched={formValidationObject.isAllTouched}
    //                 touched={formValidationObject.touched[newFormItem.dataMappingName]}
    //                 errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
    //                 readOnly={formValueObject[newFormItem.readOnly] || formReadOnly}
    //                 onBlur={onBlur}
    //                 onChange={onChange}
    //                 className={className}
    //                 isSmallScreen={isSmallScreen}
    //             />
    //         </>
    //     )
    // }

    // if (newFormItem.type === "restrictions") {
    //     return (
    //         <>
    //             <Restrictions
    //                 key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
    //                 section={newFormItem.section}
    //                 label={t(newFormItem.label)}
    //                 tooltipText={t(newFormItem.tooltipText)}
    //                 name={newFormItem.dataMappingName}
    //                 value={formValueObject[newFormItem.dataMappingName]}
    //                 isAllTouched={formValidationObject.isAllTouched}
    //                 touched={formValidationObject.touched[newFormItem.dataMappingName]}
    //                 errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
    //                 readOnly={formValueObject[newFormItem.readOnly] || formReadOnly}
    //                 onBlur={onBlur}
    //                 onChange={onChange}
    //                 className={className}
    //                 isSmallScreen={isSmallScreen}
    //             />

    //         </>
    //     )

    // }

    // if (newFormItem.type === "doormat_modal") {
    //     return (
    //         <>
    //             <DoormatModal
    //                 key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
    //                 section={newFormItem.section}
    //                 label={t(newFormItem.label)}
    //                 tooltipText={t(newFormItem.tooltipText)}
    //                 name={newFormItem.dataMappingName}
    //                 value={formValueObject[newFormItem.dataMappingName]}
    //                 isAllTouched={formValidationObject.isAllTouched}
    //                 touched={formValidationObject.touched[newFormItem.dataMappingName]}
    //                 errorMessage={_.get(formValidationObject, `errorMessage.${newFormItem.dataMappingName}`, "")}
    //                 readOnly={formValueObject[newFormItem.readOnly] || formReadOnly}
    //                 onBlur={onBlur}
    //                 onChange={onChange}
    //                 className={className}
    //                 isSmallScreen={isSmallScreen}
    //             />

    //         </>
    //     )

    // }

    // if (newFormItem.type === "nutritionalDetails") {
    //     return (
    //         <>
    //             <NutritionalTab
    //                 key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
    //                 section={newFormItem.section}
    //                 label={t(newFormItem.label)}
    //             />
    //         </>
    //     )
    // }


    // if (newFormItem.type === "upidsProduct") {
    //     return (
    //         <>
    //             <UpidsProduct
    //                 key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
    //                 section={newFormItem.section}
    //                 name={newFormItem.dataMappingName}
    //             />

    //         </>
    //     )
    // }

    // if (newFormItem.type === "feedback") {
    //     return (
    //         <>
    //             <Feedback
    //                 key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
    //                 section={newFormItem.section}
    //                 name={newFormItem.dataMappingName}
    //             />

    //         </>
    //     )
    // }


    // if (newFormItem.type === "versioning") {
    //     return (
    //         <>
    //             <Versioning
    //                 key={`${newFormItem.dataMappingName}_${newFormItem.type}`}
    //                 section={newFormItem.section}
    //                 name={newFormItem.dataMappingName}
    //             />

    //         </>
    //     )
    // }


    return (
        <>

        </>
    )
}

FormFieldSchemaRender.defaultProps = {
    formFieldList: [],
    formValueObject: {},
    formValidationObject: {
        isAllTouched: false,
        touched: {},
        error: {},
    },
    onBlur: () => { },
    onChange: () => { },
};

export default FormFieldSchemaRender