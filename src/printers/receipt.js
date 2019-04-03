const OrderOfPaymentImages = require("fda-pdf-printer-plugin/src/templates/OrderOfPaymentImages");
/**
 *
 * @param {LicenseModel} details
 * @returns {Object} document
 */
function fillup(details) {
    var content = getContent(details);
    console.log('get content ###### :', content);
    return {
        content: content,
        pageSize: {width: 500, height: 390}
    };
}
/**
 * 
 * @param {Array|Object} forms 
 */
function getContent(details) {
    var content = [{
        layout: "noBorders",
        table: {
            widths:["*"],
            heights: ["*"],
            body: [
                [
                    {
                        layout: "noBorders",
        table: {
            widths: [120, "*", 120],
            heights: [90, "*", 40, "*"],
            body: [
                [
                    {
                            layout: "noBorders",
                            table: {
                                widths: [20, "*", 20],
                                heights: [15],
                                body: [
                                    ["", "", ""],
                                    [
                                        "",
                                        {
                                            image: OrderOfPaymentImages.doh_logo,
                                            width: 50,
                                            // 'margin: [left, top, right, bottom]'
                                            alignment: 'right'
                                        },
                                        ""
                                    ]
                                ]
                            }
                        },
                    {
                        layout: "noBorders",
                        table: {
                            widths: ['*'],
                            heights: ['*'],
                            body: [
                                [""],
                                [""],
                                // [{
                                //     text: "Republic of the Philippines ",
                                //     alignment: "center"
                                // }],
                                // [{
                                //     text: "Department of Health ",
                                //     alignment: "center"
                                // }],
                                [{
                                    text: "Food And Drug Administration ",
                                    alignment: "center"
                                }],
                                [{
                                    text: "Civic Drive, Filinvest Corporate City Alabang, Muntilupa ",
                                    alignment: "center"
                                }]
                            ]
                        }
                    },
                    {
                        layout: "noBorders",
                        table: {
                            widths: [20, "*", 20],
                            heights: [5],
                            body: [
                                ["", "", ""],
                                [
                                    "",
                                    {
                                        image: OrderOfPaymentImages.fda_logo,
                                        width: 70,
                                        // 'margin: [left, top, right, bottom]'
                                    },
                                    ""
                                ]
                            ]
                        }

                        // margin: [200, 15, 20, 20]
                    }
                ],
                // order of payment
                [
                    "",
                    {
                        text: 'FDA Portal',
                        // fontSize: 28,
                        // colSpan: 3,
                        alignment: "center",
                        style: "header"
                    },
                    ""
                ],
                // Receipt Details
                ["",
                    {
                        text: 'RECEIPT',
                        alignment: "center",
                    },
                    ""
                ]
            ]
        }
                    }
                ],
                [                {
                    layout: "noBorders",
                    table:{
                        widths:[50, "*", "*",50],
                        heights: ['*'],
                        body: [
                            ["",{
                                text: 'Case No:'
                            },
                            {
                                text: details.case_no,
                                alignment: "left"
                            },""
                        ],
                        ["",{
                            text: 'Application Fee:'
                        },
                        {
                            text: details.fee,
                            alignment: "left"
                        },""
                    ],
                    ["",{
                            text: 'Legal Research Fund (LRF):'
                        },
                        {
                            text: details.lrf,
                            alignment: "left"
                        },""
                    ],
                    ["",{
                            text: 'Penalty: '
                        },
                        {
                            text: details.penalty,
                            alignment: "left"
                        },""
                    ],
                    ["",{
                            text: 'Total: '
                        },
                        {
                            text: details.total,
                            alignment: "left"
                        },""
                    ],
                    ["",{
                            text: 'Amount:'
                        },
                        {
                            text: details.amount,
                            alignment: "left"
                        },""
                    ],
                    ["",{
                            text: 'Remaining Balance:'
                        },
                        {
                            text: details.remaining_balance,
                            alignment: "left"
                        },""
                    ]
                        ]
                    }
                }
                ]
            ]
        }

        

        
    }]
    return content;
}

module.exports = {
    fillup
};