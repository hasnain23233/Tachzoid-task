import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 pt-12 pb-8">
            <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-3">Hunting Lodge</h2>
                    <p className="text-gray-400 text-sm">
                        Premier guided hunting experiences across the country. From deer to elk,
                        we provide the best spots and safety-first hunts.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">Rates</a></li>
                        <li><a href="#" className="hover:text-white">Season Info</a></li>
                        <li><a href="#" className="hover:text-white">FAQs</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
                    <p className="text-sm text-gray-400 mb-2">Email: support@huntinglodge.com</p>
                    <p className="text-sm text-gray-400 mb-4">Phone: +1 (555) 123-4567</p>
                    <div className="flex space-x-4 mt-2 text-xl">
                        <a href="#" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="hover:text-white"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Hunting Lodge. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
