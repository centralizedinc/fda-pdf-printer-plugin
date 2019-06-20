const OrderOfPaymentImages = require("../templates/OrderOfPaymentImages");
/**
 *
 * @param {LicenseModel} details
 * @returns {Object} document
 */
function fillup(details) {
    return {
        content: getContent(details)
    };
}
/**
 * 
 * @param {Array|Object} forms 
 */
function getContent(forms) {
    var _forms = Array.isArray(forms) ? forms : [forms];
    console.log('getContent PAY _forms :', _forms);
    var content = [];
    _forms.forEach(details => {
        var qualified = {}
        if (details.qualified !== undefined) {
            for (var i = 0; i === 0;) {
                qualified = details.qualified[i]
            }
        }
        // Headers
        content.push({
            layout: "noBorders",
            table: {
                layout: "noBorders",
                widths: [160, "*", 160],
                heights: [80, 20, "*"],
                body: [
                    // header                    
                    [{
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
                                body: [
                                    [{
                                        text: "Republic of the Philippines ",
                                        alignment: "center"
                                    }],
                                    [{
                                        text: "Department of Health ",
                                        alignment: "center"
                                    }],
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
                    // [
                    //     "",
                    //     {
                    //         text: 'Order of Payment',
                    //         // fontSize: 28,
                    //         // colSpan: 3,
                    //         alignment: "center",
                    //         style: "header"
                    //     },
                    //     ""
                    // ]
                ]
            }
        });
        // Application Details
        content.push({
            layout: "noBorders",
            table: {
                layout: "noBorders",
                widths: [120, "*"],
                heights: [30, 20, "*"],
                body: [
                    ["", ""],
                    [{
                            text: 'Application Details',
                            alignment: "center",
                            colSpan: 2
                        },
                        ""
                    ],
                    ["Date: ",
                        details.formDetails.date_created || ""
                    ],
                    ["Type: ",
                        details.formDetails.application_type || ""
                    ],
                    ["Case No.: ",
                        details.formDetails.case_no || ""
                    ]
                ]
            }
        })

        if (details.formDetails.case_type === 0) {
            // General Info
            content.push({
                layout: "noBorders",
                table: {
                    layout: "noBorders",
                    widths: [120, "*"],
                    heights: [30, 20, "*"],
                    body: [
                        ["", ""],
                        [{
                                text: 'General Information',
                                alignment: "center",
                                colSpan: 2
                            },
                            ""
                        ],
                        ['Product Center:',
                            details.formDetails.general_info.product_type || ""
                        ],
                        ['Primary Activity:',
                            details.formDetails.general_info.primary_activity || ""
                        ]
                    ]
                }
            })
            // Establishment Information
            content.push({
                layout: "noBorders",
                table: {
                    layout: "noBorders",
                    widths: [120, "*"],
                    heights: [30, 20, "*"],
                    body: [
                        ["", ""],
                        [{
                                text: 'Establishment Information',
                                alignment: "center",
                                colSpan: 2
                            },
                            ""
                        ],
                        ['Company Name: ',
                            details.formDetails.estab_details.establishment_name || ""
                        ],
                        ['Owner: ',
                            details.formDetails.estab_details.establishment_owner || ""
                        ],
                        ['Declared Capital: ',
                            details.formDetails.general_info.declared_capital || ""
                        ],
                        ['Office Address',
                            details.formDetails.addresses.office.address + " " + details.formDetails.addresses.office.city + " " + details.formDetails.addresses.office.province + " " + details.formDetails.addresses.office.region + " " + details.formDetails.addresses.office.zipcode
                        ]
                    ]
                }
            })
            // Details of the Approving Authority
            content.push({
                layout: "noBorders",
                table: {
                    layout: "noBorders",
                    widths: [120, "*"],
                    heights: [30, 20, "*"],
                    body: [
                        ["", ""],
                        [{
                                text: 'Details of the Approving Authority',
                                alignment: "center",
                                colSpan: 2
                            },
                            ""
                        ],
                        ['Fullname:',
                            details.formDetails.auth_officer.lastname + ", " + details.formDetails.auth_officer.firstname + " " + details.formDetails.auth_officer.middlename
                        ],
                        ['Designation:',
                            details.formDetails.auth_officer.designation || ""
                        ],
                        ['Mailing Address:',
                            details.formDetails.auth_officer.mail_add.address + " " + details.formDetails.auth_officer.mail_add.city + " " + details.formDetails.auth_officer.mail_add.province + " " + details.formDetails.auth_officer.mail_add.region + " " + details.formDetails.auth_officer.mail_add.zipcode
                        ]
                    ]
                }
            })
            // Details of the Qualified Personnel
            content.push({
                layout: "noBorders",
                table: {
                    layout: "noBorders",
                    widths: [120, "*"],
                    heights: [30, 20, "*"],
                    body: [
                        ["", ""],
                        [{
                                text: 'Details of the Qualified Personnel',
                                alignment: "center",
                                colSpan: 2
                            },
                            ""
                        ],
                        ['Fullname:',
                            qualified.lastname + ", " + qualified.firstname + " " + qualified.middlename
                        ],
                        ['Designation:',
                            qualified.designation || ""
                        ],
                        ['TIN: ',
                            qualified.tin || ""
                        ],
                        ['Email: ',
                            qualified.email || ""
                        ],
                        ['Govt ID:',
                            qualified.id_type || ""
                        ]
                    ]
                }
            })
        } else if (details.formDetails.case_type === 1) {
            // Product Details
            content.push({
                layout: "noBorders",
                table: {
                    layout: "noBorders",
                    widths: [120, "*"],
                    heights: [30, 20, "*"],
                    body: [
                        ["", ""],
                        [{
                                text: 'Product Details',
                                alignment: "center",
                                colSpan: 2
                            },
                            ""
                        ],
                        ['Product Type:',
                            details.formDetails.food_product.type || ""
                        ],
                        ['Categorization:',
                            details.formDetails.food_product.categorization || ""
                        ],
                        ['Brand Name:',
                            details.formDetails.food_product.brand_name || ""
                        ],
                        ['Product Name:',
                            details.formDetails.food_product.product_name || ""
                        ],
                        ['Company Name:',
                            details.formDetails.food_product.company || ""
                        ]
                    ]
                }
            })

            // Establishment Info
            content.push({
                layout: "noBorders",
                table: {
                    layout: "noBorders",
                    widths: [120, "*"],
                    heights: [30, 20, "*"],
                    body: [
                        ["", ""],
                        [{
                                text: 'Establishment Information',
                                alignment: "center",
                                colSpan: 2
                            },
                            ""
                        ],
                        ['Activity:',
                            details.formDetails.establishment_info.activity || ""
                        ],
                        ['Source Type:',
                            details.formDetails.establishment_info.type || ""
                        ],
                        ['Country of Origin:',
                            details.formDetails.establishment_info.origin_country || ""
                        ]
                    ]
                }
            })
        }

        // Payment Details
        content.push({
            layout: "noBorders",
            table: {
                layout: "noBorders",
                widths: [120, "*"],
                heights: [30, 20, "*"],
                body: [
                    ["", ""],
                    // Payment Details
                    [{
                            text: 'Payment Details',
                            alignment: "center",
                            colSpan: 2
                        },
                        ""
                    ],
                    ['Application Fee: ',
                        "₱ " + (details.paymentDetails.fee || "0.00")
                    ],
                    ['# of years applied: ',
                        (details.paymentDetails.yearsApplied || 0) + " years"
                    ],
                    ['Surcharge: ',
                        "₱ " + (details.paymentDetails.surcharge || "0.00")
                    ],
                    ['Legal Research Fund (LRF): ',
                        "₱ " + (details.paymentDetails.lrf || "0.00")
                    ],
                    ['Total Payment Due: ',
                        "₱ " + (details.paymentDetails.total || "0.00")
                    ]
                ]
            }
        })
    })
    return content;
}

module.exports = {
    fillup
};