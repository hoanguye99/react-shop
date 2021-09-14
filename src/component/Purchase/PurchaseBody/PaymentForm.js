import React from 'react';
import momo from './img/icon-payment-MoMo.png';
import napas from './img/icon-payment-napas.png';
import paypal from './img/icon-payment-paypal.png';
import visa from './img/icon-payment-visa.png';
import mastercard from './img/icon-payment-mastercard.png';
import vnpay from './img/icon-payment-vnpay.png';

const PaymentForm = ({ currentStep = null, setCurrentStep = f => f, submit = f => f }) => {
  if (currentStep !== 3) return (<></>);
  return (
    <>
      <section className="mt-6 p-6 bg-white rounded-md border-2 border-gray-200">
        <form id="paymentForm" onSubmit={submit}>
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Thanh toán</h2>

          <div className="mt-8 mb-6 flex -mx-2">
            <div className="px-2">
              <label htmlFor="type1" className="flex items-center cursor-pointer">
                <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" value="type1" required/>
                <img src={visa} className="h-8 ml-3" />
                <img src={mastercard} className="h-8 ml-1" />
                <img src={napas} className="h-8 ml-1" />
              </label>
            </div>
            <div className="px-2">
              <label htmlFor="type2" className="flex items-center cursor-pointer">
                <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" value="type2" />
                <img src={paypal} className="h-8 ml-3" />
              </label>
            </div>
            <div className="px-2">
              <label htmlFor="type3" className="flex items-center cursor-pointer">
                <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type3" value="type3" />
                <img src={momo} className="h-8 ml-3" />
              </label>
            </div>
            <div className="px-2">
              <label htmlFor="type4" className="flex items-center cursor-pointer">
                <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type4" value="type4" />
                <img src={vnpay} className="h-8 ml-3" />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 mb-6">
            <div>
              <label className="text-gray-900 font-medium" htmlFor="fullName">Họ tên trên thẻ</label>
              <input placeholder="Nguyen Van A" name="fullName" id="fullName" type="text" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-900 font-medium" htmlFor="cardNumber">Số thẻ</label>
              <input placeholder="0000 0000 0000 0000" name="cardNumber" id="cardNumber" type="text" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-900 font-medium" htmlFor="month">Tháng hết hạn</label>
              <select name="month" id="month" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option value="01">Tháng 1</option>
                <option value="02">Tháng 2</option>
                <option value="03">Tháng 3</option>
                <option value="04">Tháng 4</option>
                <option value="05">Tháng 5</option>
                <option value="06">Tháng 6</option>
                <option value="07">Tháng 7</option>
                <option value="08">Tháng 8</option>
                <option value="09">Tháng 9</option>
                <option value="10">Tháng 10</option>
                <option value="11">Tháng 11</option>
                <option value="12">Tháng 12</option>
              </select>
            </div>

            <div>
              <label className="text-gray-900 font-medium" htmlFor="month">Năm</label>
              <select name="year" id="year" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
              </select>
            </div>

            <div>
              <label className="text-gray-900 font-medium" htmlFor="security">Mã thẻ</label>
              <input placeholder="000" name="security" id="security" type="text" required className="block w-1/4 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

          </div>
        </form>
      </section>
      <div className="flex justify-between mt-6">
        <button onClick={() => setCurrentStep(prev => prev - 1)} className="mr-6 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
        </button>
        <button
          type="submit"
          form="paymentForm"
          className="inline-flex items-center justify-center h-10 px-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
        >
          Mua hàng
        </button>
      </div>
    </>
  );
};

export default PaymentForm;
