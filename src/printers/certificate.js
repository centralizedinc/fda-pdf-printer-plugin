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
    content.push({
      pageBreak: content.length >= 4 ? 'before' : '',
      text: "\n\n\n\n",
    });
    content.push({
      layout: "noBorders",
      margin: [0, 145, 0, 0],
      fontSize: 10,
      table: {
        widths: ['*', 12, '*'],
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
              text: 'FR-742107',
              alignment: 'left',
              // fontSize: 12
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
            text: 'Pearl Tapioca',
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
            text: 'Goat Poop',
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
            text: 'Food Consumption',
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
            text: 'Plastic Packaging',
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
            text: 'Mr. Wee Tea',
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
            text: 'Foto Tea Q',
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
            text: ' \n',
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
            text: 'Chz Qui',
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
            text: '2320 YMC Bldg ',
            alignment: 'left'
          }],
        ]
      }
    });

    content.push({
      margin: [315, 127, 0, 0],
      columns: [{
        text: "June 1, 2018",
        fontSize: 10
      }]
    });

    content.push({
      margin: [315, 113, 0, 40],
      columns: [{
        text: "June 1, 2018",
        fontSize: 10
      }]
    });

  })
  return content;
}

module.exports = {
  fillup
};