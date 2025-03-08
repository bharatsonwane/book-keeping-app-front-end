import React from "react";
import { Accordion, Card } from "react-bootstrap";

TabAccordion.defaultProps = {
    isOpen: true,
};

export function TabAccordion({ accordionData, isOpen }) {
    return (
        <div>
            <Accordion
                data-testid="basic-tab-accordion-element"
                style={{ margin: 10 }}
                defaultActiveKey={isOpen ? 1 : 0}
                flush={false}
            >
                {!!accordionData &&
                    accordionData.length > 0 &&
                    accordionData.map((data, i) => (
                        <React.Fragment key={i}>
                            <Card
                                className="p-2 accordionCard"
                                style={{
                                    margin: "5px",
                                    borderRadius: "15px",
                                    opacity: "1px",
                                    backgroundColor: "#ffffff",
                                    padding: "10px 18px 7px 18px",
                                    borderStyle: "solid",
                                    borderWidth: "1.5px",
                                    borderColor: "#DFEDF5",
                                }}
                            >
                                <Accordion.Item eventKey={i + 1}>
                                    <Accordion.Header
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            cursor: "pointer",
                                            border: "none",
                                            backgroundColor: "#ffffff",
                                            padding: "5px",
                                        }}
                                    >
                                        <span className="fw-bold" style={{ fontWeight: "700" }}>
                                            {data.title}
                                        </span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="m-2">
                                            <div key={i} className="m-1">
                                                <span
                                                    className="newsAndFeedbackSubtitle"
                                                    style={{
                                                        display: "inline-block",
                                                        fontSize: "14px",
                                                        fontWeight: "400",
                                                        color: "#6489a0",
                                                        marginLeft: "5px",
                                                    }}
                                                >
                                                    {data.tabs()}
                                                </span>
                                                <br />
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Card>
                        </React.Fragment>
                    ))}
            </Accordion>
        </div>
    );
}