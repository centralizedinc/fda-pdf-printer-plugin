const header = require("fda-pdf-printer-plugin/src/templates/FDA_header");
const footer = require("fda-pdf-printer-plugin/src/templates/FDA_footer");

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
		pageSize: 'LETTER'
	};
}
/**
 * 
 * @param {Array|Object} forms 
 */
function getContent(details) {
	console.log("details data: " + JSON.stringify(details))
	var content = [{
				image: footer.header,
				width: 600,
				alignment: 'center'
			},
			{
				text: '{{Name of Petitioner}}',
				margin: [0, 20, 0, 0]
			},
			{
				text: 'Petitioner,',
				fontSize: 10,
				italics: 'true',
				margin: [70,0]
			},
			{
				alignment: 'right',
				columns: [
					{
						text: '-versus-',
						bold: 'true'
					},
					{
						text: ['FDA CASE NO. ', {text: '201900'+details.dtn},'\n\n'],
						alignment: 'right',
						bold: 'true',
					}
				]
			},
			{
				stack: [{
						text: [
							'Respondent Position'],
					},
					{
						text: [details.establishment_name],
					},
					{
						text: [details.establishment_address + ', ' + details.establishment_city + ', ' + details.establishment_province + ', ' + details.establishment_region],
					},
					{
						text: ['Respondent/s'],
						style: 'caption',
						margin: [90,0]
					},
					{
						text: ['-----------------------------------------------------------------------------------------------------------------------------------------------------------'],
					}
					
				],
				margin: [0, 20],
			},
			{
				text: 'NOTICE OF DECISION',
				style: 'title',
				fontSize: 18,
				bold: 'true',
				alignment: 'center',
			},
			{
				text: 'SIR/MADAM:',
				alignment: 'justified',
				margin: [0, 10],
				bold: 'true'
			},
			{
					alignment: 'justified',
					text: ['\n Please take note that on ', {text: '{{date}}'}, ' a ',{text: 'Decision,', bold: true}, ' copy attached was rendered by the Food'],
			},
			{
					text: ['and Drug Administration (FDA) in the above-mentioned case, the original of which is now on file in this office.'],
					alignment: 'justified',
			},
			
			{
				text: '\nYou are hereby required to inform this Court within five (5) days from receipt hereof of the date ',
				alignment: 'justified',
			},
			{
				text: 'when you receive this Notice and the attached copy of the Decision.',
			},
			{
				text: '\n\nMay 20, 2019',
			},
			{
				text: 'BRANCH CLERK OF COURT \n\n\n\n\n',
				alignment: 'right',
				margin: [0, 10]
			},
			{
				image: footer.footer,
				width: 600,
				alignment: 'center'
	}]
	return content;
}

module.exports = {
	fillup
};