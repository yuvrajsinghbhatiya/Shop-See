import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext"; // assuming you have a CartContext
// import states from "./indiaStates"; // assuming you have a list of Indian states

const CheckoutPage = () => {
  const { cart, total } = useContext(CartContext);
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    cardNumber: "",
    address: "",
    state: "",
    paymentMethod: "Credit Card", // Default payment method
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handlePayment = () => {
    // Handle payment logic here (e.g., send payment information to the server)
    alert(`Payment successful! Total Amount: $${total.toFixed(2)}`);
  };

  const states = [
    "Maharashtra",
    "Tamil Nadu",
    "Karnataka",
    "Delhi",
    "Telangana",
    "Gujarat",
    "West Bengal",
  ];

  return (
    <div className="container mx-auto my-8 mt-[8rem] mb-16 flex flex-col lg:flex-row lg:gap-8">
      {/* Left Side: Payment Form */}
      <div className="flex-1 mb-8 lg:mb-0">
        <h2 className="text-2xl font-semibold mb-5 uppercase">Payment Information</h2>
        <div className="mb-5 mt-[2rem]">
          <label className="block text-md font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={paymentInfo.name}
            onChange={handleInputChange}
            className="p-2 w-full border rounded"
          />
        </div>
        <div className="mb-6">
          <label className="block text-md font-medium text-gray-700">
            Contact
          </label>
          <input
            type="text"
            name="contact"
            value={paymentInfo.contact}
            onChange={handleInputChange}
            className="p-2 w-full border rounded"
          />
        </div>
        <div className="mb-6">
          <label className="block text-md font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={paymentInfo.address}
            onChange={handleInputChange}
            className="p-2 w-full border rounded"
          />
        </div>
        <div className="mb-6">
          <label className="block text-md font-medium text-gray-700">
            State
          </label>
          <select
            name="state"
            value={paymentInfo.state}
            onChange={handleInputChange}
            className="p-2 w-full border rounded"
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-md font-medium text-gray-700">
            Payment Method
          </label>
          <select
            name="paymentMethod"
            value={paymentInfo.paymentMethod}
            onChange={handleInputChange}
            className="p-2 w-full border rounded"
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Google Pay">Google Pay</option>
            <option value="UPI">UPI</option>
          </select>
        </div>
        <button
          onClick={handlePayment}
          className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition mt-4 w-full lg:w-auto"
        >
          Pay
        </button>
      </div>

      {/* Right Side: List of Items and Total */}
      <br/>
      <div className="flex-1 bg-gray-200 p-4 rounded-lg ">
        <h2 className="text-2xl font-semibold mb-4 uppercase">Order Summary</h2>
        <div className="overflow-x-auto mt-[2rem]">
          <table className="w-full lg:min-w-max bg-white border-collapse border rounded-lg">
            <thead>
              <tr className="bg-gray-100 ">
                <th className="p-2">Item</th>
                <th className="p-2">Price</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-2">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-8 h-8 object-cover mr-2"
                      />
                      {item.title}
                    </div>
                  </td>
                  <td className="p-2">${item.price.toFixed(2)}</td>
                  <td className="p-2">{item.amount}</td>
                  <td className="p-2">
                    ${(item.price * item.amount).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center border-t pt-8">
          <span className="font-semibold text-lg">Total:</span>
          <span className="bg-dark p-4 rounded-lg">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
