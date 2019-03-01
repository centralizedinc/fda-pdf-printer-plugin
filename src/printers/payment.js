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
    var content = [];
    var qualified = {}
    if(_forms.qualified !== undefined){
        for(var i = 0; i === 0;){
            qualified = _forms.qualified[i]
        }
    }
    

    console.log("payment data get content: " + JSON.stringify(_forms.qualified))
    _forms.forEach(details => {
        // content.push({
        //     pageBreak: content.length >= 4 ? 'before' : '',
        //     text: "\n\n\n\n",
        //     fontSize: 11
        // });
        content.push({
            layout: "noBorders",
            table: {
                layout: "noBorders",
                widths: [160, "*", 160],
                heights: [80, 20, 90, 90, 90, 90, 90],
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
                                    ["","",""],
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
                            text: 'Order of Payment',
                            // fontSize: 28,
                            // colSpan: 3,
                            alignment: "center",
                            style: "header"
                        },
                        ""
                    ],
                    // gen info
                    [{
                        layout: "noBorders",
                            table: {
                                body: [
                                    ["\n"],
                                    [{
                                        text: 'Application Number:'
                                    }],
                                    [{
                                        text: 'Product Center:'
                                    }],
                                    [{
                                        text: 'Application Type:'
                                    }],
                                    [{
                                        text: 'Primary Activity:'
                                    }]
                                ]
                            }
                        },
                        {                            
                            layout: "noBorders",
                            table: {
                                widths: [1, "*", 1],
                                body: [
                                    [
                                        "",
                                        {
                                            text: 'General Information',
                                            alignment: "center",
                                        },
                                        ""
                                    ],
                                    [
                                        "",
                                        {
                                            text: details.formDetails.case_no,
                                            alignment: "center"
                                        },
                                        ""
                                    ],
                                    [
                                        "",
                                        {
                                            text: details.formDetails.general_info.product_type,
                                            alignment: "center"
                                        },
                                        ""
                                    ],
                                    [
                                        "",
                                        {
                                            text: details.formDetails.application_type,
                                            alignment: "center"
                                        },
                                        ""
                                    ],
                                    [
                                        "",
                                        {
                                            text: details.formDetails.general_info.primary_activity,
                                            alignment: "center"
                                        },
                                        ""
                                    ]
                                ]
                            }
                        },
                        ""
                    ],
                    // Establishment Information
                    [{                            
                        layout: "noBorders",
                            table: {
                                body: [
                                    ["\n"],
                                    [{
                                        text: 'Company Name:'
                                    }],
                                    [{
                                        text: 'Owner:'
                                    }],
                                    [{
                                        text: 'Declared Capital: '
                                    }],
                                    [{
                                        text: 'Office Address'
                                    }]
                                ]
                            }
                        },
                        {
                            layout: "noBorders",
                            table: {
                                widths: [1, "*", 1],
                                body: [
                                    ["",
                                        {
                                            text: 'Establishment Information',
                                            alignment: "center",
                                        },
                                        ""
                                    ],
                                    ["",
                                        {
                                            text: details.formDetails.estab_details.establishment_name,
                                            alignment: "center"
                                        },
                                        ""
                                    ],
                                    ["",
                                        {
                                            text: details.formDetails.estab_details.establishment_owner,
                                            alignment: "center"
                                        },
                                        ""
                                    ],
                                    ["",
                                        {
                                            text: details.formDetails.general_info.declared_capital,
                                            alignment: "center"
                                        },
                                        ""
                                    ],
                                    ["",
                                        {
                                            text: details.formDetails.addresses.office.address + " " + details.formDetails.addresses.office.city + " " + details.formDetails.addresses.office.province + " " + details.formDetails.addresses.office.region + " " + details.formDetails.addresses.office.zipcode,
                                            alignment: "center"
                                        },
                                        ""
                                    ]
                                ]
                            }
                        },
                        ""
                    ],
                    // Details of the Approving Authority
                    [{
                        layout: "noBorders",
                            table: {
                                body: [
                                    ["\n\n"],
                                    [{
                                        text: 'Fullname:'
                                    }],
                                    [{
                                        text: 'Designation:'
                                    }],
                                    [{
                                        text: 'Mailing Address:'
                                    }]
                                ]
                            }
                        },
                        {
                            layout: "noBorders",
                            table: {
                                widths: [1, "*", 1],
                                body: [
                                    ["",
                                        {
                                            text: 'Details of the Approving Authority',
                                            alignment: "center",
                                        },
                                        ""
                                    ],
                                    ["",
                                        {
                                            text: details.formDetails.auth_officer.lastname + ", " + details.formDetails.auth_officer.firstname + " " + details.formDetails.auth_officer.middlename,
                                            alignment: "center"
                                        },
                                        ""
                                    ],
                                    ["",
                                        {
                                            text: details.formDetails.auth_officer.designation,
                                            alignment: "center"
                                        },
                                        ""
                                    ],
                                    ["",
                                        {
                                            text: details.formDetails.auth_officer.mail_add.address + " " + details.formDetails.auth_officer.mail_add.city + " " + details.formDetails.auth_officer.mail_add.province + " " + details.formDetails.auth_officer.mail_add.region + " " + details.formDetails.auth_officer.mail_add.zipcode,
                                            alignment: "center"
                                        },
                                        ""
                                    ]
                                ]
                            }
                        },
                        ""
                    ],
                    // Details of the Qalified Personnel
                    [{
                        layout: "noBorders",
                            table: {
                                body: [
                                    ["\n\n"],
                                    [{
                                        text: 'Fullname:'
                                    }],
                                    [{
                                        text: 'Designation:'
                                    }],
                                    [{
                                        text: 'TIN: '
                                    }],
                                    [{
                                        text: 'Email:'
                                    }],
                                    [{
                                        text: 'Govt ID:'
                                    }]
                                ]
                            }
                        },
                        {
                            layout: "noBorders",
                            table: {
                                widths: [1, "*", 1],
                                body: [
                                    ["",
                                        {
                                            text: 'Details of the Qalified Personnel',
                                            alignment: "center",
                                        },
                                        ""
                                    ],
                                    ["",
                                        {
                                            text: qualified.lastname + " " + qualified.firstname + " " + qualified.middlename,
                                            alignment: "center"
                                        },
                                        ""
                                    ],
                                    ["",
                                        {
                                            text: qualified.designation,
                                            alignment: "center"
                                        },
                                        ""
                                    ],
                                    ["",
                                        {
                                            text: qualified.tin,
                                            alignment: "center"
                                        },
                                        ""
                                    ],
                                    ["",
                                        {
                                            text: qualified.email,
                                            alignment: "center"
                                        },
                                        ""
                                    ],
                                    ["",
                                        {
                                            text: qualified.id_type,
                                            alignment: "center"
                                        },
                                        ""
                                    ]
                                ]
                            }
                        },
                        ""
                    ],
                    // Payment Details
                    [{
                        layout: "noBorders",
                            table: {
                                body: [
                                    ["\n"],
                                    [{
                                        text: 'Application Fee:'
                                    }],
                                    [{
                                        text: '# of years applied:'
                                    }],
                                    [{
                                        text: 'Surcharge: '
                                    }],
                                    [{
                                        text: 'Legal Research Fund (LRF):'
                                    }],
                                    [{
                                        text: 'Total Payment Due:'
                                    }]
                                ]
                            }
                        },
                        {
                            layout: "noBorders",
                            table: {
                                widths: [1, "*", 1],
                                body: [
                                    ["",
                                        {
                                            text: 'Payment Details',
                                            alignment: "center",
                                        },
                                        ""
                                    ],
                                    ["",
                                        {
                                            text: details.paymentDetails.fee,
                                            alignment: "center"
                                        },
                                        ""
                                    ],
                                    ["",
                                        {
                                            text: details.paymentDetails.yearsApplied,
                                            alignment: "center"
                                        },
                                        ""
                                    ],
                                    ["",
                                        {
                                            text: details.paymentDetails.surcharge,
                                            alignment: "center"
                                        },
                                        ""
                                    ],
                                    ["",
                                        {
                                            text: details.paymentDetails.lrf,
                                            alignment: "center"
                                        },
                                        ""
                                    ],
                                    ["",
                                        {
                                            text: details.paymentDetails.total,
                                            alignment: "center"
                                        },
                                        ""
                                    ]
                                ]
                            }
                        },
                        ""
                    ],
                ]
            }
        });
    })
    return content;
}

module.exports = {
    fillup
};