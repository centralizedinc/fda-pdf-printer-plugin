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
    if (_forms.qualified !== undefined) {
        for (var i = 0; i === 0;) {
            qualified = _forms.qualified[i]
        }
    }
    _forms.forEach(details => {
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
                    ["",
                        {
                            text: 'General Information',
                            alignment: "center",
                        },
                        ""
                    ],
                    [{
                            text: 'Application Number:'
                        },
                        {
                            text: details.formDetails.case_no,
                            alignment: "center"
                        },
                        ""
                    ],
                    [{
                            text: 'Product Center:'
                        },
                        {
                            text: details.formDetails.general_info.product_type,
                            alignment: "center"
                        },
                        ""
                    ],
                    [{
                            text: 'Application Type:'
                        },
                        {
                            text: details.formDetails.application_type,
                            alignment: "center"
                        },
                        ""
                    ],
                    [{
                            text: 'Primary Activity:'
                        },
                        {
                            text: details.formDetails.general_info.primary_activity,
                            alignment: "center"
                        },
                        ""
                    ],
                    // Establishment Information
                    ["",
                        {
                            text: 'Establishment Information',
                            alignment: "center",
                        },
                        ""
                    ],
                    [{
                            text: 'Company Name:'
                        }, {
                            text: details.formDetails.estab_details.establishment_name,
                            alignment: "center"
                        },
                        ""
                    ],
                    [{
                            text: 'Owner:'
                        },
                        {
                            text: details.formDetails.estab_details.establishment_owner,
                            alignment: "center"
                        },
                        ""
                    ],
                    [{
                            text: 'Declared Capital: '
                        },
                        {
                            text: details.formDetails.general_info.declared_capital,
                            alignment: "center"
                        },
                        ""
                    ],
                    [{
                            text: 'Office Address'
                        },
                        {
                            text: details.formDetails.addresses.office.address + " " + details.formDetails.addresses.office.city + " " + details.formDetails.addresses.office.province + " " + details.formDetails.addresses.office.region + " " + details.formDetails.addresses.office.zipcode,
                            alignment: "center"
                        },
                        ""
                    ],
                    // Details of the Approving Authority
                    ["",
                        {
                            text: 'Details of the Approving Authority',
                            alignment: "center",
                        },
                        ""
                    ],
                    [{
                            text: 'Fullname:'
                        },
                        {
                            text: details.formDetails.auth_officer.lastname + ", " + details.formDetails.auth_officer.firstname + " " + details.formDetails.auth_officer.middlename,
                            alignment: "center"
                        },
                        ""
                    ],
                    [{
                            text: 'Designation:'
                        },
                        {
                            text: details.formDetails.auth_officer.designation,
                            alignment: "center"
                        },
                        ""
                    ],
                    [{
                            text: 'Mailing Address:'
                        },
                        {
                            text: details.formDetails.auth_officer.mail_add.address + " " + details.formDetails.auth_officer.mail_add.city + " " + details.formDetails.auth_officer.mail_add.province + " " + details.formDetails.auth_officer.mail_add.region + " " + details.formDetails.auth_officer.mail_add.zipcode,
                            alignment: "center"
                        },
                        ""
                    ],


                    // Details of the Qalified Personnel
                    ["",
                        {
                            text: 'Details of the Qalified Personnel',
                            alignment: "center",
                        },
                        ""
                    ],
                    [{
                            text: 'Fullname:'
                        },
                        {
                            text: qualified.lastname + ", " + qualified.firstname + " " + qualified.middlename,
                            alignment: "center"
                        },
                        ""
                    ],
                    [{
                            text: 'Designation:'
                        },
                        {
                            text: qualified.designation,
                            alignment: "center"
                        },
                        ""
                    ],
                    [{
                            text: 'TIN: '
                        },
                        {
                            text: qualified.tin,
                            alignment: "center"
                        },
                        ""
                    ],
                    [{
                            text: 'Email:'
                        },
                        {
                            text: qualified.email,
                            alignment: "center"
                        },
                        ""
                    ],
                    [{
                            text: 'Govt ID:'
                        },
                        {
                            text: qualified.id_type,
                            alignment: "center"
                        },
                        ""
                    ],
                    // Payment Details
                    ["",
                        {
                            text: 'Payment Details',
                            alignment: "center",
                        },
                        ""
                    ],
                    [{
                            text: 'Application Fee:'
                        },
                        {
                            text: "₱"+details.paymentDetails.fee,
                            alignment: "center"
                        },
                        ""
                    ],
                    [{
                            text: '# of years applied:'
                        },
                        {
                            text: "₱"+details.paymentDetails.yearsApplied,
                            alignment: "center"
                        },
                        ""
                    ],
                    [{
                            text: 'Surcharge: '
                        },
                        {
                            text: "₱"+details.paymentDetails.surcharge,
                            alignment: "center"
                        },
                        ""
                    ],
                    [{
                            text: 'Legal Research Fund (LRF):'
                        },
                        {
                            text: "₱"+details.paymentDetails.lrf,
                            alignment: "center"
                        },
                        ""
                    ],
                    [{
                            text: 'Total Payment Due:'
                        },
                        {
                            text: "₱"+details.paymentDetails.total,
                            alignment: "center"
                        },
                        ""
                    ]
                ]
            }
        });
    })
    return content;
}

module.exports = {
    fillup
};