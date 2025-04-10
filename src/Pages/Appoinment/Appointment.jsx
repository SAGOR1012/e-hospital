import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Appointment = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Appointment Data:", data);
    };

    return (
        <section className="bg-white p-1 xs:p-8">
            <div className="max-w-96 sm:max-w-4xl mx-auto border border-sky-500 rounded-lg p-8">
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

                        {/* Department */ }
                        <div>
                            <label htmlFor="department" className="text-xs xs:text-sm font-medium text-gray-700 mb-1">
                                Department
                            </label>
                            <select
                                id="department"
                                { ...register("department", { required: "Department is required" }) }
                                className="h-[50px] w-full rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] px-2"
                            >
                                <option value="">Select</option>
                                <option value="medicine">Medicine Specialized</option>
                                <option value="pathology">Pathology</option>
                                <option value="neurosurgeon">Neurosurgeon</option>
                                <option value="blood-bank">Blood Bank</option>
                            </select>
                            { errors.department && <p className="text-red-500 text-xs">{ errors.department.message }</p> }
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
                        <Link to="/payment">
                            <button
                                type="submit"
                                className="sm:w-[100px] w-full h-[50px] text-xs sm:text-base bg-sky-500 rounded-[5px] p-[13px_25px] gap-[10px] text-white disabled:bg-gray-400"
                                /* kono ekta input fild jodi faka thake tahole submit button disable hoye thakbe  */
                                disabled={
                                    !watch("name") ||
                                    !watch("email") ||
                                    !watch("phone") ||
                                    !watch("address") ||
                                    !watch("department") ||
                                    !watch("gender") ||
                                    !watch("date") ||
                                    Object.keys(errors).length > 0
                                }
                            >
                                Payment
                            </button>
                        </Link>
                    </div>
                    {/* hotline number */ }
                    <marquee direction="">Hot Line : 01639136200</marquee>

                </form>

            </div>

        </section>
    );
};

export default Appointment;
