import React, { useState, useEffect, useContext } from "react";
import _ from 'lodash';
import { MdTextFields } from "react-icons/md";
import CustomTooltip from "./CustomTooltip";
import { Badges } from "src/components/Badges";
import { useTranslation } from "react-i18next";
import { AppContext } from 'src/pages/AppContext';
import { useSelector } from "react-redux";


export function ShowAdditionalBusinessIdentifiers(props) {
    const context = useContext(AppContext);

    const {
        type, label, placeholder, name, value, options, isMultilingual, formLanguage, isSmallScreen,
        readOnly, showToolTip, tooltipText, errorMsg, onChange, className,
        showTranslation, aiEnable, aiIconHoverText,
        touched, isAllTouched, onBlur, modalTitle,
    } = props

    const companyState = useSelector((state) => state.company);
    const idsToRemove = companyState?.companyList[0]?.businessIdentifiers.map(identifier => identifier.id);
    const filteredArray = value.filter(identifier => !idsToRemove?.includes(identifier?.id));

    const { t, i18n } = useTranslation('common');

    return (
        <>
            {context.authState.level !== 10 && filteredArray?.length > 0 && 
                <div className={`form-group inputMultiSelectWithModal col-lg-12 col-md-12 col-sm-12 col-xs-6 ${className ? className : ""}`}>
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
                        {filteredArray && filteredArray[0] &&
                            filteredArray?.map((item, index) => (
                                <React.Fragment key={`${item}_${index}`}>
                                    {readOnly && (
                                        <Badges key={`${item}_${index}_readOnly`}>
                                            {item?.id}
                                        </Badges>
                                    )
                                    }
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>
            }
        </>
    );
}