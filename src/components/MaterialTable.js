import React, { forwardRef } from "react";
import { MdSort } from "react-icons/md";
import MaterialTablec from "material-table";
import PropTypes from "prop-types";
import "@mui/material/CircularProgress";

// MaterialTable.propTypes = {
//     /** Give the columnName to your Table */
//     columnNames: PropTypes.array,
//     /** Give data to your Table */
//     tableData: PropTypes.array,
//     /** Give title to your table */
//     tableTitle: PropTypes.string,
// };


export function MaterialTable({
    columnNames,
    tableData,
    tableTitle,
}) {
    const tableIcons = {
        SortArrow: forwardRef((props, ref) => <MdSort {...props} ref={ref} />),
    };

    return (
        <div>
            <MaterialTablec
                style={{ marginRight: 11 }}
                icons={tableIcons}
                columns={columnNames}
                data={tableData}
                localization={{
                    body: {
                        emptyDataSourceMessage: "No Record Found",
                    },
                }}
                options={{
                    search: false,

                    pageSizeOptions: [],

                    paging: false,

                    sorting: true,



                    rowStyle: (tableData) => {
                        return {
                            textAlign: "left",
                            borderLeft: tableData.isNewUser === true && "4px solid #cf2948",
                        }
                    },

                    headerStyle: {
                        backgroundColor: "#D8F3FC",

                        color: "#53889B",

                        textTransform: "uppercase",

                        font: "normal normal bold 12px/15px Open Sans",

                        textAlign: "left",
                        fontFamily:'Poppins',
                        
                    },
                }}
                title={tableTitle}
            />

            <br></br>
        </div>
    );
}