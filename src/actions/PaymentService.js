import axios from 'axios'
import {API_URL} from '../constants'

// export const makePayment = (sum) => {
//     return axios.post(
//         `${API_URL}/api/paypal/make/payment?sum=${sum}`
//     )
// }

// http://localhost:8085/api/vnpay/make?vnp_Amount=1000000&vnp_Locale=vn&vnp_OrderInfo=Thanh+toan+don+hang&vnp_OrderType=topup&vnp_ReturnUrl=https%3a%2f%2fsandbox.vnpayment.vn%2ftryitnow%2fHome%2fVnPayReturn
export const makePaymentVnpay = (order) => {
    return axios.post(
        `${API_URL}/api/vnpay/make?vnp_Amount=${order.vnp_Amount}&vnp_Locale=vn&vnp_OrderInfo=${order.vnp_OrderInfo}&vnp_OrderType=topup&vnp_ReturnUrl=https%3a%2f%2fsandbox.vnpayment.vn%2ftryitnow%2fHome%2fVnPayReturn`
    )
}

//http://localhost:8085/api/vnpay/result?vnp_Amount=100000000&vnp_BankCode=NCB&vnp_BankTranNo=20210516085304&vnp_CardType=ATM&vnp_OrderInfo=Thanh+toan+don+hang&vnp_PayDate=20210516085241&vnp_ResponseCode=00&vnp_TmnCode=VMMBOT14&vnp_TransactionNo=13505299&vnp_TxnRef=10242996&vnp_SecureHashType=SHA256&vnp_SecureHash=702c26064a301f66a8f943994255598ca420bb008d2ba3544b47caa8105bb8b7
export const resultPaymentVnPay = (order) => {
    return axios.get(
        `${API_URL}api/vnpay/result?vnp_Amount=${order.vnp_Amount}&vnp_BankCode=${order.vnp_BankCode}&vnp_BankTranNo=${order.vnp_BankTranNo}&vnp_CardType=ATM&vnp_OrderInfo=${order.vnp_OrderInfo}&vnp_PayDate=${order.vnp_PayDate}&vnp_ResponseCode=${order.vnp_ResponseCode}&vnp_TmnCode=VMMBOT14&vnp_TransactionNo=${order.vnp_TransactionNo}&vnp_TxnRef=${order.vnp_TxnRef}&vnp_SecureHashType=SHA256&vnp_SecureHash=702c26064a301f66a8f943994255598ca420bb008d2ba3544b47caa8105bb8b7`
    )
}