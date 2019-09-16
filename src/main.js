import License from "./printers/license"
import Certificate from "./printers/certificate"
import DeniedApplication from "./printers/denied_application"
import Payment from "./printers/payment"
import Receipt from "./printers/receipt"
import Ecpay from "./printers/ecpay"
import Summon from "./printers/summon"
import Decision from "./printers/decision"
import Form1601e from "./printers/1601e";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const printers = {
    LIC: License,
    DENIED: DeniedApplication,
    PAY: Payment,
    RCPT: Receipt,
    ECPAY: Ecpay,
    SUMMON: Summon,
    DECISION: Decision,
    CERT: Certificate,
    FORM1601E: Form1601e,
}

export default {
    install(Vue) {

        /**
         * @description open file in new window
         * @param {*} details 
         * @param {*} type 
         * @returns {Promise}
         */
        Vue.prototype.$print = (details, type) => {
            return new Promise((resolve, reject) => {
                var printer = printers[type]
                var document = printer.fillup(details);
                pdfMake.createPdf(document).open((err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                });
            })
        }

        /**
         * @description direct file download
         * @param {*} details 
         * @param {*} type 
         * @returns {Promise}
         */
        Vue.prototype.$download = (details, type, filename) => {
            return new Promise((resolve, reject) => {
                var printer = printers[type]
                var document = printer.fillup(details);
                pdfMake.createPdf(document).download(filename, (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                });
            })

        }

        /**
         * @description direct file download
         * @param {*} details 
         * @param {*} type 
         * @returns {Promise}
         */
        Vue.prototype.$upload = (details, type) => {
            return new Promise((resolve, reject) => {
                var printer = printers[type]
                var document = printer.fillup(details);
                pdfMake.createPdf(document).getBlob(blob => {
                    resolve(blob)
                });
            })

        }

        /**
         * @description preview file
         * @param {*} details 
         * @param {*} type 
         * @returns {Promise}
         */
        Vue.prototype.$preview = (details, type) => {
            return new Promise((resolve, reject) => {
                var printer = printers[type]
                var document = printer.fillup(details);
                // pdfMake.createPdf(document).open(dataUrl => {
                //     console.log("getdata: " + dataUrl)
                //     resolve(dataUrl)
                // });
                // // ----------------------------------
                const pdfDocGenerator = pdfMake.createPdf(document);
                pdfDocGenerator.getBuffer(function (buffer) {

                    // const dataUrl = URL.createObjectURL(new Blob([buffer], {
                    //     type: "application/pdf"
                    // }));
                    var file = new Blob([buffer], {
                        type: 'application/pdf'
                    });
                    var dataUrl = URL.createObjectURL(file);
                    console.log("dataurl: " + dataUrl)
                    resolve(dataUrl)
                });
            })
        }
    }
}