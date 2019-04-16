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
        pageSize: {width: 520, height: 390}
    };
}
/**
 * 
 * @param {Array|Object} forms 
 */
function getContent(details) {
    console.log("details data: " + JSON.stringify(details))
    var content = [{
        layout: "noBorders",
        table: {
            widths:["*"],
            heights: ["*"],
            body: [
                [
                    {
                        image: header.header
                    }
                ],
                [                {
                    layout: "noBorders",
                    table:{
                        widths:[75, "*", "*",50],
                        heights: ['*'],
                        body: [
                            ["",
                {
                    text: 'Your Reference Number:',
                    alignment: 'left'
                },
                {
                    text: details.reference_number,
                    alignment: 'left',
                    style: "header"
                },""
                            ],
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
                            text: "₱"+details.amount,
                            alignment: "left"
                        },""
                    ],
                    ["",{
                            text: 'Conviniece Fee: '
                        },
                        {
                            text: "₱"+details.con_fee,
                            alignment: "left"
                        },""
                    ],
                    ["",{
                            text: 'Total Amount Due: '
                        },
                        {
                            text: "₱"+details.total,
                            alignment: "left"
                        },""
                    ],
                    ["",{
                        qr: "Ref. No.: " + details.reference_number,
                        fit: 70
                      },"",""
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