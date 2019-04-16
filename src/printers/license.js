const unofficial = require("../templates/unofficial_license").template;
const official = require("../templates/official_license").template;

/**
 *
 * @param {LicenseModel} details
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

/**
 * 
 * @param {Array|Object} forms 
 */
function getContent(forms) {
  var _forms = Array.isArray(forms) ? forms : [forms];
  var content = [];
  _forms.forEach(details => {
    content.push({
      pageBreak: content.length >= 4 ? 'before' : '',
      text: "\n\n\n\n",
      fontSize: 11
    });
    content.push({
      layout: "noBorders",
      table: {
        widths: [45, 175, "*"],
        heights: [210, 80, 40, 80, 4],
        body: [
          ["", "", ""],
          [{
              text: details.general_info.primary_activity,
              fontSize: 28,
              colSpan: 3,
              alignment: "center"
            },
            "",
            ""
          ],
          [{
              text: details.estab_details.establishment_name,
              fontSize: 28,
              colSpan: 3,
              alignment: "center"
            },
            "",
            ""
          ],
          [{
              text: details.officeAddress.address,
              fontSize: 14,
              colSpan: 3,
              alignment: "center"
            },
            "",
            ""
          ],
          [{
              text: ""
            },
            {
              qr: "Testing...",
              fit: 70,
              alignment: "left",
              rowSpan: 4
            },
            {
              text: details.estab_details.establishment_owner,
              fontSize: 10,
              alignment: "left"
            }
          ],
          [
            "",
            "",
            {
              text: details.license_no,
              fontSize: 10,
              alignment: "left"
            }
          ],
          [
            "",
            "",
            {
              text: details.application_type,
              fontSize: 10,
              alignment: "left"
            }
          ],
          [
            "",
            "",
            {
              text: details.license_expiry,
              fontSize: 10,
              alignment: "left"
            }
          ]
        ]
      }
    });
    content.push({
      text: "\n\n",
      fontSize: 9
    });
    content.push({
      alignment: "center",
      columns: [{
        text: "90 days",
        fontSize: 12
      }]
    });
  })
  return content;
}

module.exports = {
  fillup
};