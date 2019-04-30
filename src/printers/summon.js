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
		pageSize: 'LEGAL'
	};
}
/**
 * 
 * @param {Array|Object} forms 
 */
function getContent(details) {
	console.log("details data: " + JSON.stringify(details))
	var content = {
		content: [{
				image: 'header.header',
				width: 500,
				height: 100,
				alignment: 'center'
			},
			{
				stack: [{
						text: [
							'In Re: ',
							{
								text: 'Report of Violation'
							},
						]
					},
					{
						text: ['dated 06 February 2019 ', '\n submitted by the Regulatory Enforcement Unit']
					},
				],
				margin: [0, 20],
			},
			{
				stack: [{
						bold: 'true',
						text: ['FDA CASE NO. ', {
							text: '0000000'
						}, '\n\n'],
						alignment: 'justified',
					},
					{
						text: ['For: ', {
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem'
						}],
						alignment: 'justified',
					}
				],
				margin: [300, 0, 0, 0],
				alignment: 'right'
			},
			{
				stack: [{
						text: [
							'Respondent Position'
						],
					},
					{
						text: ['Establishment Name'],
					},
					{
						text: ['Establishment Address'],
					},
					{
						text: ['Respondent'],
						style: 'caption',
						margin: [90, 0]
					},
					{
						text: ['x------------------------------------------x'],
					}

				],
				margin: [0, 20],
			},
			{
				text: 'SUMMONS',
				style: 'title',
				alignment: 'center',
			},
			{
				text: 'With PREVENTIVE MEASURE ORDER ',
				style: 'subtitle',
				alignment: 'center',
				margin: [0, 5],
			},
			{
				text: 'The Report of Violation (ROV) submitted by the Regulatory Enforcement Unit (REU) of this office shows that Respondent has violated the following Food and Drug Administration (FDA)- implemented laws, rules and regulations, to wit: ',
				alignment: 'justified',
				margin: [0, 10],
			},
			{
				ol: [
					'{{Violated Laws, Rules and Regulations}}',
				],
				margin: [40, 10],
			},
			{
				margin: [50, 10],
				text: '{{products involved}}',
			},
			{
				margin: [50, 10],
				text: '{{product description}}',
			},
			{
				text: 'You are required to submit with your Response certified copies of documents as well as affidavits of any witness to stand as your evidence in this case. You must present the original document/s on the day of hearing. ',
				alignment: 'justified',
				margin: [0, 10],
			},
			{
				text: 'A motion to dismiss is prohibited and shall not be entertained. Any ground for dismissal should be included in your Response. ',
				alignment: 'justified',
				margin: [0, 10],
			},
			{
				stack: [{
					text: ['Witness my hand under the seal of this Court, this', {
						text: ' {{date}}'
					}, ' day of 20', {
						text: '{{year,}}'
					}, ' at ', {
						text: ' Alabang Muntinlupa, City, Philippines',
					}],
					alignment: 'justified',
					margin: [0, 10],

				}],
				alignment: 'justified',
			},
			{
				text: 'BRANCH CLERK OF COURT',
				alignment: 'right',
				margin: [0, 10]
			},
			{
				image: 'footer.footer',
				width: 500,
				height: 100,
				alignment: 'center'
			}

		],
		styles: {
			subtitle: {
				fontSize: 12,
			},
			title: {
				fontSize: 18,
				bold: true,
			},
			caption: {
				fontSize: 10,
			}
		},
		defaultStyle: {
			columnGap: 20
		}
	}
	return content;
}

module.exports = {
	fillup
};