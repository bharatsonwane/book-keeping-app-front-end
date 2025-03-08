import React from "react";
import '@nivo/core';
import { ResponsiveLine } from "@nivo/line";
import { useTranslation } from "react-i18next";

export function StLineChart({ lineData }) {
    const { t } = useTranslation('common');

    // Filter out null or undefined values from lineData
    const filteredData = lineData.map(({ id, data }) => ({
        id,
        data: data.filter(({ x, y }) => x !== null && y !== null),
    })).filter(({ data }) => data.length > 0);

    // Generate tick values for every 5th date if the length is greater than 10
    let tickValues = null;
    if (filteredData?.length > 0 && filteredData[0]?.data?.length > 10) {
        const everyFifthElement = filteredData?.[0]?.data?.filter((_, index) => index % 5 === 0);
        tickValues = everyFifthElement?.map(({ x }) => x);
    }

    return (
        <>
            {filteredData && filteredData?.length > 0 ?
                <ResponsiveLine
                    data={filteredData}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: "point", min: 0, max: 'auto' }}
                    yScale={{
                        type: "linear",
                        min: 0,
                        max: filteredData?.length > 0 ? filteredData?.[0]?.data?.length > 0 ? 'auto' : 500 : 'auto'
                    }}
                    axisBottom={{
                        orient: "bottom",
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: -15,
                        tickValues: tickValues,
                        legendOffset: 36,
                        legendPosition: "middle",
                    }}
                    pointSize={10}
                    pointColor={{ theme: "background" }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: "serieColor" }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            anchor: "bottom-right",
                            direction: "column",
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: "left-to-right",
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: "circle",
                            symbolBorderColor: "rgba(0, 0, 0, .5)",
                            effects: [
                                {
                                    on: "hover",
                                    style: {
                                        itemBackground: "rgba(0, 0, 0, .03)",
                                        itemOpacity: 1,
                                    },
                                },
                            ],
                        },
                    ]}
                    colors={["#50C878", "#ff3333"]}
                /> :
                <div className="d-flex align-items-center justify-content-center" style={{ marginTop: 230 }}>
                    {t("No data found")}
                </div>}
        </>
    );
}