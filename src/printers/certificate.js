// const unofficial = require("fda-pdf-printer-plugin/src/templates/unofficial_license").template;
const certificate = require("fda-pdf-printer-plugin/src/templates/certificate_bg").template;

/**
 *
 * @param {LicenseModel} details
 * @returns {Object} document
 */
function fillup(details) {
  return {
    background: function (page) {
      return [{
        image: "certificate",
        width: 600
      }];
    },
    content: getContent(details),
    images: {
      // unofficial: unofficial,
      certificate: certificate
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
    var qr_code = new Buffer(details.case_no).toString("base64")
    var qr_url = `https://fda-client-portal.herokuapp.com/#/result/certificate/${qr_code}`
    content.push({
      pageBreak: content.length >= 4 ? 'before' : '',
      text: "\n\n\n\n",
    });
    content.push({
      layout: "noBorders",
      margin: [0, 145, 0, 0],
      fontSize: 10,
      table: {
        widths: ['*', 3, 120, "*"],
        heights: [14],
        body: [
          [{
              text: '',
              alignment: 'left'
            },
            {
              text: '',
              style: '',
              alignment: 'left'
            },
            {
              text: details.certificate_no,
              alignment: 'left',
              // fontSize: 12
            },
            {
              qr: qr_url,
              fit: 70,
              alignment: "right",
              rowSpan: 4
            }
          ],

          [{
            text: '',
            alignment: 'left'
          }, {
            text: '',
            style: '',
            alignment: 'left'
          }, {
            text: details.product_name,
            alignment: 'left'
          }, ''],
          [{
            text: '',
            alignment: 'left'
          }, {
            text: '',
            style: '',
            alignment: 'left'
          }, {
            text: details.active_ingredients,
            alignment: 'left'
          }, ''],
          [{
            text: '',
            alignment: 'left'
          }, {
            text: '',
            style: '',
            alignment: 'left'
          }, {
            text: details.intended_use,
            alignment: 'left'
          }, ''],
          [{
            text: '',
            alignment: 'left'
          }, {
            text: '',
            style: '',
            alignment: 'left'
          }, {
            text: details.packaging,
            alignment: 'left'
          }, ''],
          [{
            text: '',
            alignment: 'left'
          }, {
            text: '',
            style: '',
            alignment: 'left'
          }, {
            text: details.manufacturer,
            alignment: 'left'
          }, ''],
          [{
            text: '',
            alignment: 'left'
          }, {
            text: '',
            style: '',
            alignment: 'left'
          }, {
            text: details.repacker_source,
            alignment: 'left'
          }, ''],
          [{
            text: '',
            alignment: 'left'
          }, {
            text: '',
            style: '',
            alignment: 'left'
          }, {
            text: ' \n',
            alignment: 'left'
          }, ''],
          [{
            text: '',
            alignment: 'left'
          }, {
            text: '',
            style: '',
            alignment: 'left'
          }, {
            text: details.client_name,
            alignment: 'left'
          }, ''],
          [{
            text: '',
            alignment: 'left'
          }, {
            text: '',
            style: '',
            alignment: 'left'
          }, {
            text: details.client_address,
            alignment: 'left'
          }, ''],
        ]
      }
    });

    content.push({
      margin: [315, 127, 0, 0],
      columns: [{
        text: details.validity,
        fontSize: 10
      }]
    });

    content.push({
      margin: [315, 113, 0, 40],
      columns: [{
        text: details.date_approved,
        fontSize: 10
      }]
    });

  })
  return content;
}

module.exports = {
  fillup
};