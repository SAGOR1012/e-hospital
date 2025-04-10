import React from 'react';
import { FaTwitter, FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

const doctorsInfoCard = (doctors) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-6 p-4 border rounded-lg shadow-sm">
            <img
                src={ doctors.image }
                alt={ doctors.name }
                className="w-24 h-24 rounded-full border-4 border-cyan-500 object-cover"
            />
            <div className="flex-1">
                <div className="bg-gray-100 flex items-center px-4 py-2 mb-3 rounded">
                    <div className="bg-cyan-500 text-white p-2 rounded mr-3">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a5 5 0 00-5 5v2H4a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2v-9a2 2 0 00-2-2h-1V5a5 5 0 00-5-5z" />
                        </svg>
                    </div>
                    <h3 className="text-gray-800 font-semibold">
                        { doctors.name }, <span className="font-normal">{ doctors.qualification }</span>
                    </h3>
                </div>
                <p className="text-gray-700 mb-4">{ doctors.description }</p>
                <hr className="my-3" />
                <p className="italic text-sm text-gray-500">{ doctors.specialist }</p>
                <p className="text-sm mt-1">
                    Email:{ " " }
                    <a href={ `mailto:${doctors.email}` } className="text-cyan-500 hover:underline">
                        { doctors.email }
                    </a>
                </p>
                <div className="flex space-x-3 mt-4 text-gray-600 text-lg">
                    <FaTwitter className="hover:text-cyan-500 cursor-pointer" />
                    <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                    <FaGooglePlusG className="hover:text-red-500 cursor-pointer" />
                    <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default doctorsInfoCard;