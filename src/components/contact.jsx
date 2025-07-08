import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        return newErrors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSubmitted(false);
        } else {
            console.log("Form Submitted:", formData);
            setSubmitted(true);
            setFormData({ name: "", email: "", subject: "", message: "" });
        }
    };

    return (
        <div className="w-11/12 max-w-3xl mx-auto mt-20 mb-12">
            <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg p-8 rounded-xl space-y-5"
                noValidate
            >
                {submitted && (
                    <div className="bg-green-100 text-green-800 text-sm px-4 py-2 rounded border border-green-300">
                        Thank you! Your message has been sent.
                    </div>
                )}

                {/* Name */}
                <div>
                    <label className="block text-sm font-semibold mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        className={`w-full p-3 rounded border ${errors.name ? "border-red-500" : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-green-500`}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-semibold mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        className={`w-full p-3 rounded border ${errors.email ? "border-red-500" : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-green-500`}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                </div>

                {/* Subject */}
                <div>
                    <label className="block text-sm font-semibold mb-1">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        className={`w-full p-3 rounded border ${errors.subject ? "border-red-500" : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-green-500`}
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                    />
                    {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                    )}
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-semibold mb-1">Message</label>
                    <textarea
                        name="message"
                        rows="5"
                        className={`w-full p-3 rounded border ${errors.message ? "border-red-500" : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-green-500`}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                    />
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-green-700 text-white font-semibold py-3 rounded hover:bg-green-800 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
