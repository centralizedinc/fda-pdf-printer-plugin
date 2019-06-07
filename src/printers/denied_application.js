const unofficial = require("../templates/denied/unofficial_denied").template;
const official = require("../templates/denied/official_denied").template;

/**
 *
 * @param {Object} details
 * @returns {Object} document
 */
function fillup(details) {
    return {
        background: function (page) {
            return [{
                image: "official",
                width: 600
            }];
        },
        content: getContent(details),
        images: {
            unofficial: unofficial,
            official: official
        }
    };
}

function getContent(forms) {
    var _forms = Array.isArray(forms) ? forms : [forms];
    var content = [];
  
    _forms.forEach(details => {
        content.push({
          pageBreak: content.length >= 4 ? 'before' : '',
          text: "",
          fontSize: 11
        });
        content.push({
            layout: "noBorders",
            table: {
                widths: [23, '*'],
                heights: [182, 31, 31, 13, 45, 44, 113],
                body: [
                    ["", ""], //182
                    ["", { //31
                        text: details.date_created,
                        bold: true,
                        fontSize: 12,
                    }],
                    ["", { //31
                        text: details.name,
                        bold: true,
                        fontSize: 12,
                    }],
                    ["", { //13
                        text: details.establishment_name,
                        bold: true,
                        fontSize: 12,
                    }],
                    ["", { //45
                        text: details.establishment_address,
                        bold: true,
                        fontSize: 12,
                    }],
                    ["", { //44
                        layout: "noBorders",
                        table: {
                            widths: [21, '*'],
                            body: [
                                ["", {
                                    text: details.name,
                                    bold: true,
                                    fontSize: 12,
                                }]
                            ]
                        }
                    }],
                    ["", { //113
                        layout: "noBorders",
                        table: {
                            widths: [158, 113, 94, '*'],
                            body: [
                                ["",
                                    {
                                        text: details.application_type,
                                        fontSize: 12,
                                        bold: true,
                                        alignment: "center"
                                    }, "", {
                                        text: details.case_no,
                                        bold: true,
                                        fontSize: 12,
                                    }
                                ]
                            ]
                        }
                    }],
                    ["", {
                        text: details.reasons,
                        italics: true,
                        fontSize: 12,
                    }]
                ]
            }
        })
    })
    return content;
}

module.exports = {
    fillup
};