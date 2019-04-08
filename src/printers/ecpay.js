const header = require("fda-pdf-printer-plugin/src/templates/FDA_header");
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
            widths: ["*"],
            heights: ["*"],
            body: [
                [
                    {
                        image: header.header,
                        // 'margin: [left, top, right, bottom]'
                        alignment: 'center'
                    }
                ],
                // Reference number
                [
                    {
                        text: 'Your Reference Number',
                        alignment: "center"
                    }
                ],
                [
                    {
                        text: details.reference_number,
                        alignment: "center",
                        style: "header"
                    }
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
                                text: 'Status:'
                            },
                            {
                                text: details.status,
                                alignment: "left"
                            },""
                        ],
                        ["",{
                            text: 'Expiration:'
                        },
                        {
                            text: details.expiration,
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
                            text: 'Conveniece Fee: '
                        },
                        {
                            text: details.con_fee,
                            alignment: "left"
                        },""
                    ],
                    ["",{
                            text: 'Total Amount Due: '
                        },
                        {
                            text: details.total,
                            alignment: "left"
                        },""
                    ],
                    [{
                        qr: "Ref. No.: " + details.reference_number,
                        fit: 70,
                        alignment: "center"
                      }
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