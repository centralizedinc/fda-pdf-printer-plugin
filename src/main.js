import License from "./printers/license"
import Certificate from "./printers/certificate"
import DeniedApplication from "./printers/denied_application"
import Payment from "./printers/payment"
import Receipt from "./printers/receipt"
import Ecpay from "./printers/ecpay"
import Summon from "./printers/summon"
import Decision from "./printers/decision"
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
    CERT: Certificate
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
    }
}