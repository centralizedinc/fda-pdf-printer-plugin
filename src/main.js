import License from "./printers/license"
import DeniedLicense from "./printers/denied_license"
import Payment from "./printers/payment"
import Receipt from "./printers/receipt"
import Ecpay from "./printers/ecpay"

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const printers = {
    LIC: License,
    DENIED_LIC: DeniedLicense,
    PAY: Payment,
    RCPT: Receipt,
    ECPAY: Ecpay
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
    }
}