import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import doctors from "../../../public/doctors.json"; // adjust path if needed
import { FaPhoneAlt, FaEnvelope, FaPen } from "react-icons/fa";


const Appointment = () => {
    const navigate = useNavigate(); // for navigation one page to another page like "Link"
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Appointment Data:", data);
        // Navigate only after successful submission
        navigate("/payment");
    };

    return (
        <div className="flex flex-col lg:flex-row mx-auto justify-center">
            <section className="bg-white p-1 xs:p-8">
                <div className="max-w-96 sm:max-w-4xl mx-auto rounded-lg p-8">
                    <h2 className="sm:text-xl text-[12px] font-bold mb-6">Appointment Form</h2>
                    <form onSubmit={ handleSubmit(onSubmit) }>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Name */ }
                            <div>
                                <label htmlFor="name" className="text-xs xs:text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    { ...register("name", { required: "Name is required" }) }
                                    className="h-[50px] w-full rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] px-2"
                                />
                                { errors.name && <p className="text-red-500 text-xs">{ errors.name.message }</p> }
                            </div>

                            {/* Email */ }
                            <div>
                                <label htmlFor="email" className="text-xs xs:text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    { ...register("email", { required: "Email is required" }) }
                                    className="h-[50px] w-full rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] px-2"
                                />
                                { errors.email && <p className="text-red-500 text-xs">{ errors.email.message }</p> }
                            </div>

                            {/* Phone */ }
                            <div>
                                <label htmlFor="phone" className="text-xs xs:text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    { ...register("phone", { required: "Phone number is required" }) }
                                    className="h-[50px] w-full rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] px-2"
                                />
                                { errors.phone && <p className="text-red-500 text-xs">{ errors.phone.message }</p> }
                            </div>

                            {/* Address */ }
                            <div>
                                <label htmlFor="address" className="text-xs xs:text-sm font-medium text-gray-700 mb-1">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    { ...register("address", { required: "Address is required" }) }
                                    className="h-[50px] w-full rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] px-2"
                                />
                                { errors.address && <p className="text-red-500 text-xs">{ errors.address.message }</p> }
                            </div>



                            {/* Doctor Name */ }
                            <div>
                                <label htmlFor="doctor" className="text-xs xs:text-sm font-medium text-gray-700 mb-1">
                                    Select Doctor
                                </label>
                                <select
                                    id="doctor"
                                    { ...register("doctor", { required: "Doctor is required" }) }
                                    className="h-[50px] w-full rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] px-2"
                                >
                                    <option value="">Select Doctor</option>
                                    { doctors.map((doc) => (
                                        <option key={ doc.id } value={ doc.name }>
                                            { doc.name }- { doc.qualification }    ({ doc.specialist })
                                        </option>
                                    )) }
                                </select>
                                { errors.doctor && <p className="text-red-500 text-xs">{ errors.doctor.message }</p> }
                            </div>

                            {/* Gender */ }
                            <div>
                                <label htmlFor="gender" className="text-xs xs:text-sm font-medium text-gray-700 mb-1">
                                    Gender
                                </label>
                                <select
                                    id="gender"
                                    { ...register("gender", { required: "Gender is required" }) }
                                    className="h-[50px] w-full rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] px-2"
                                >
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                { errors.gender && <p className="text-red-500 text-xs">{ errors.gender.message }</p> }
                            </div>

                            {/* Date */ }
                            <div>
                                <label htmlFor="date" className="text-xs xs:text-sm font-medium text-gray-700 mb-1">
                                    Appointment Date
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    { ...register("date", { required: "Date is required" }) }
                                    className="h-[50px] w-full rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] px-2"
                                />
                                { errors.date && <p className="text-red-500 text-xs">{ errors.date.message }</p> }
                            </div>
                            {/* Time */ }
                            <div>
                                <label htmlFor="time" className="text-xs xs:text-sm font-medium text-gray-700 mb-1">
                                    Appointment Time
                                </label>
                                <input
                                    type="time"
                                    id="time"
                                    { ...register("time", { required: "Time is required" }) }
                                    className="h-[50px] w-full rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] px-2"
                                />
                                { errors.time && <p className="text-red-500 text-xs">{ errors.time.message }</p> }
                            </div>

                            {/* Fee */ }
                            <div>
                                <label htmlFor="fee" className="text-xs xs:text-sm font-medium text-gray-700 mb-1">
                                    Doctor's Fee
                                </label>
                                <input
                                    type="text"
                                    id="fee"
                                    defaultValue={ `500 TAKA` }
                                    { ...register("fee", { required: "Fee is required" }) }
                                    className="h-[50px] w-full rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] px-2"
                                />
                                { errors.fee && <p className="text-red-500 text-xs">{ errors.fee.message }</p> }
                            </div>
                        </div>

                        {/* Submit */ }
                        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">

                            <button
                                type="submit"
                                className="sm:w-[100px] w-full h-[50px] text-xs sm:text-base bg-sky-500 rounded-[5px] p-[13px_25px] gap-[10px] text-white disabled:bg-gray-400"
                                /* kono ekta input fild jodi faka thake tahole submit button disable hoye thakbe  */
                                disabled={
                                    !watch("name") ||
                                    !watch("email") ||
                                    !watch("phone") ||
                                    !watch("address") ||
                                    !watch("doctor") ||
                                    !watch("gender") ||
                                    !watch("date") ||
                                    !watch("fee") ||
                                    !watch("time") ||
                                    Object.keys(errors).length > 0
                                }
                            >
                                Payment
                            </button>

                        </div>
                        {/* hotline number */ }
                        <marquee direction="">Hot Line : 01639136200</marquee>

                    </form>

                </div>
            </section >
            {/* After Booking Requirement */ }
            < section className="max-w-md  px-4 py-8 space-y-10 text-sm text-gray-700" >
                {/* Book an Appointment */ }
                < div >
                    <h2 className="text-lg font-semibold mb-2">Book an Appointment</h2>
                    <p className="mb-4 text-gray-600">
                        Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                    </p>

                    <div className="space-y-2">
                        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
                            <FaPhoneAlt className="text-sky-500 mr-3" />
                            <span className="text-gray-700 font-medium">Phone :</span>
                            <span className="ml-1">+880 1639136200</span>
                        </div>

                        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
                            <FaEnvelope className="text-sky-500 mr-3" />
                            <span className="text-gray-700 font-medium">Email :</span>
                            <a href="mailto:yourname@someemail.com" className="ml-1 text-sky-500">
                                support@ehospital.com
                            </a>
                        </div>

                        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
                            <FaPen className="text-sky-500 mr-3" />
                            <span className="text-gray-700 font-medium">Online Form :</span>
                            <a href="#" className="ml-1 text-sky-500">
                                Fill out this form
                            </a>
                        </div>
                    </div>
                </ div>

                {/* After Booking requirement */ }
                < div >
                    <h2 className="text-lg font-semibold mb-2">After Booking</h2>
                    <p className="text-gray-600 mb-3">
                        Hi fill in the details and submit the form. We will contact you via phone or email and fix a time schedule.
                    </p>
                    <p className="font-semibold text-gray-800 mb-2">
                        These are the thing you need to carry with you when you come in for the appointment wit the doctor.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Previous Medical History</li>
                        <li>Enlisted Previous Numbers</li>
                        <li>Discussion with Parents</li>
                        <li>Make sure you are feeling good</li>
                        <li>Have someone with you</li>
                    </ul>
                </ div>
            </section >
        </div >
    );
};

export default Appointment;
