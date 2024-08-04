import React, { useState } from "react";
import { makePostRequest } from "service/apiService";

export default function CardSettings() {
  const [formData, setFormData] = useState({
    requesterEmail: '',
    requesterPhone: '',
    requesterFullName: '',
    eventDate: '',
    numberOfGuests: '',
    paymentId: '',
    price: '',
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.requesterEmail || !/\S+@\S+\.\S+/.test(formData.requesterEmail)) {
      errors.requesterEmail = "Invalid email address";
    }
    if (!formData.requesterPhone) {
      errors.requesterPhone = "Requester phone is required";
    }
    if (!formData.requesterFullName) {
      errors.requesterFullName = "Requester full name is required";
    }
    if (!formData.eventDate || isNaN(new Date(formData.eventDate).getTime())) {
      errors.eventDate = "Invalid event date";
    }
    if (!formData.numberOfGuests || !Number.isInteger(parseInt(formData.numberOfGuests)) || formData.numberOfGuests <= 0) {
      errors.numberOfGuests = "Number of guests must be a positive integer";
    }
    if (formData.price && (isNaN(formData.price) || formData.price < 0)) {
      errors.price = "Price must be a non-negative number";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await makePostRequest('/pri/requests', formData);
        console.log(response);
        alert('Banquet request created successfully');
        // Clear the form or redirect as needed
        setFormData({
          requesterEmail: '',
          requesterPhone: '',
          requesterFullName: '',
          eventDate: '',
          numberOfGuests: '',
          paymentId: '',
          price: '',
        });
      } catch (error) {
        console.error("Error creating banquet request", error);
        alert('Error creating banquet request');
      }
    }
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Create Banquet Request</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Settings
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleSubmit}>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Banquet Request Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="requesterEmail"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="requesterEmail"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.requesterEmail}
                    onChange={handleChange}
                  />
                  {errors.requesterEmail && <p className="text-red-500 text-xs italic">{errors.requesterEmail}</p>}
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="requesterPhone"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    name="requesterPhone"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.requesterPhone}
                    onChange={handleChange}
                  />
                  {errors.requesterPhone && <p className="text-red-500 text-xs italic">{errors.requesterPhone}</p>}
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="requesterFullName"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="requesterFullName"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.requesterFullName}
                    onChange={handleChange}
                  />
                  {errors.requesterFullName && <p className="text-red-500 text-xs italic">{errors.requesterFullName}</p>}
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="eventDate"
                  >
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.eventDate}
                    onChange={handleChange}
                  />
                  {errors.eventDate && <p className="text-red-500 text-xs italic">{errors.eventDate}</p>}
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="numberOfGuests"
                  >
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    name="numberOfGuests"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.numberOfGuests}
                    onChange={handleChange}
                  />
                  {errors.numberOfGuests && <p className="text-red-500 text-xs italic">{errors.numberOfGuests}</p>}
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="paymentId"
                  >
                    Payment ID
                  </label>
                  <input
                    type="text"
                    name="paymentId"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.paymentId}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="price"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    name="price"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.price}
                    onChange={handleChange}
                  />
                 
              </div>
              </div>
              </div>
              <div className="text-center mt-6">
                <button
                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-xs p-4"
                type="submit"
                >
                  Create Event
                </button>
                </div>
              </form>
        </div>
      </div>
    </>
              
)
}