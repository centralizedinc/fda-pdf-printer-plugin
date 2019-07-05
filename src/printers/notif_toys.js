// const unofficial = require("fda-pdf-printer-plugin/src/templates/unofficial_license").template;
const notifCosmetic = require("fda-pdf-printer-plugin/src/templates/notif_cosmetic_bg").template;

/**
 *
 * @param {LicenseModel} details
 * @returns {Object} document
 */
function fillup(details) {
  return {
    background: function (page) {
      return [{
        image: "notifCosmetic",
        width: 600
      }];
    },
    content: getContent(details),
    images: {
      // unofficial: unofficial,
      notifCosmetic: notifCosmetic
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
      margin: [0, 115, 0, 0],
      fontSize: 10,
      table: {
        widths: ['*', 2, '*'],
        heights: [5],
        body: [
          [{
            text: '',
            alignment: 'left'
          }, {
            text: '',
            style: '',
            alignment: 'left'
          }, {
            text: 'notification_no',
            alignment: 'left',
          }],
          [{
            text: '',
            alignment: 'left'
          }, {
            text: '',
            style: '',
            alignment: 'left'
          }, {
            text: 'validity',
            alignment: 'left'
          }],
          [{
            text: '',
            alignment: 'left'
          }, {
            text: '',
            style: '',
            alignment: 'left'
          }, {
            text: '\n',
            alignment: 'left'
          }],

        ]
      }
    }, {
      layout: "noBorders",
      margin: [0, 7, 0, 0],
      fontSize: 10,
      table: {
        widths: ['*', 2, '*'],
        heights: [5],
        body: [
          [{
            text: '',
            alignment: 'left'
          }, {
            text: '',
            style: '',
            alignment: 'left'
          }, {
            text: 'brandname',
            alignment: 'left'
          }],
          [{
            text: '',
            alignment: 'left'
          }, {
            text: '',
            style: '',
            alignment: 'left'
          }, {
            text: 'productname',
            alignment: 'left'
          }],
          [{
            text: '',
            alignment: 'left'
          }, {
            text: '',
            style: '',
            alignment: 'left'
          }, {
            text: 'variants',
            alignment: 'left'
          }],
        ]
      }
    }, {
      layout: "noBorders",
      margin: [0, 24, 0, 0],
      fontSize: 10,
      table: {
        widths: ['*', 2, '*'],
        heights: [5],
        body: [
          [{
            text: '',
            alignment: 'left'
          }, {
            text: '',
            style: '',
            alignment: 'left'
          }, {
            text: 'manufacturer_name',
            alignment: 'left'
          }],
          [{
            text: '',
            alignment: 'left'
          }, {
            text: '',
            style: '',
            alignment: 'left'
          }, {
            text: 'manufacturer_address',
            alignment: 'left'
          }],
          [{
            text: '',
            alignment: 'left'
          }, {
            text: '',
            style: '',
            alignment: 'left'
          }, {
            text: 'country_manufacture',
            alignment: 'left'
          }],
        ]
      }
    }, {
      layout: "noBorders",
      margin: [0, 36, 0, 0],
      fontSize: 10,
      table: {
        widths: ['*', 2, '*'],
        heights: [5],
        body: [
          [{
            text: '',
            alignment: 'left'
          }, {
            text: '',
            style: '',
            alignment: 'left'
          }, {
            text: 'comp_name',
            alignment: 'left'
          }],
          [{
            text: '',
            alignment: 'left'
          }, {
            text: '',
            style: '',
            alignment: 'left'
          }, {
            text: 'comp_address',
            alignment: 'left'
          }],
          [{
            text: '',
            alignment: 'left'
          }, {
            text: '',
            style: '',
            alignment: 'left'
          }, {
            text: 'lto_no',
            alignment: 'left'
          }],
        ]
      }

    });

    // *****
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