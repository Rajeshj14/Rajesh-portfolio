'use client';

import React, { useState } from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
        company: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitMessage(data.message || 'Thank you for your submission!');
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    phone: '',
                    company: '',
                    message: '',
                });
            } else {
                setSubmitMessage(data.error || 'Failed to submit form');
            }
        } catch (error) {
            setSubmitMessage('Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="bg-[#00162A] px-6 py-12 md:py-20 relative">
            {/* Background Text */}
            <h1
                className="absolute top-8 left-1/2 transform -translate-x-1/2 select-none z-0 uppercase"
                style={{
                    WebkitTextStrokeWidth: '1px',
                    WebkitTextStrokeColor: '#fff',
                    fontSize: '7vw',
                    color: 'transparent',
                    fontWeight: 600,
                    lineHeight: 1,
                    opacity: 0.1,
                    letterSpacing: '0.8rem',
                }}
            >
                CONTACT
            </h1>

            {/* Title */}
            <div id='letstalk' className="relative z-10 text-center mb-12 mt-8">
                <div className="flex justify-center items-center gap-4">
                    <div className="w-12 h-1 bg-red-500" />
                    <h2 id="contact1" className="text-3xl md:text-4xl font-bold text-white">MY CONTACT</h2>
                    <div className="w-12 h-1 bg-red-500" />
                </div>
            </div>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-5">
                {/* Left Side - Contact Info */}
                <div className="bg-[#0d2a3c] p-6 md:p-8 rounded-md basis-full md:basis-1/3 text-white space-y-6">
                    <div>
                        <h3 className="text-md font-semibold border-l-2 border-red-500 pl-3 mb-2">Email</h3>
                        <p className="text-sm">info@domainname.com</p>
                        <p className="text-sm">support@domain.com</p>
                    </div>
                    <div>
                        <h3 className="text-md font-semibold border-l-2 border-red-500 pl-3 mb-2">Visit My Studio</h3>
                        <p className="text-sm">Warnwe Park Streetperrine,</p>
                        <p className="text-sm">FL 33157 New York City</p>
                    </div>
                    <div>
                        <h3 className="text-md font-semibold border-l-2 border-red-500 pl-3 mb-2">Phone</h3>
                        <p className="text-sm">+01 123 654 8096</p>
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-white hover:text-red-500"><FaFacebookF /></a>
                        <a href="#" className="text-white hover:text-red-500"><FaTwitter /></a>
                        <a href="#" className="text-white hover:text-red-500"><FaInstagram /></a>
                        <a href="#" className="text-white hover:text-red-500"><FaLinkedinIn /></a>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="bg-[#0d2a3c] p-6 md:p-8 rounded-md basis-full md:basis-2/2 text-white space-y-4">
                    <h3 className="text-lg font-semibold border-l-2 border-red-500 pl-3">Get In Touch</h3>
                    {submitMessage && (
                        <div className={`p-3 rounded ${submitMessage.includes('Thank you') ? 'bg-green-500' : 'bg-red-500'}`}>
                            {submitMessage}
                        </div>
                    )}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name *"
                                className="w-full p-2 bg-transparent border border-gray-500 text-white text-sm rounded"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email *"
                                className="w-full p-2 bg-transparent border border-gray-500 text-white text-sm rounded"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Which Role *"
                            className="w-full p-2 bg-transparent border border-gray-500 text-white text-sm rounded"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone *"
                                className="w-full p-2 bg-transparent border border-gray-500 text-white text-sm rounded"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="company"
                                placeholder="Company *"
                                className="w-full p-2 bg-transparent border border-gray-500 text-white text-sm rounded"
                                value={formData.company}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <textarea
                            rows="4"
                            name="message"
                            placeholder="Your message *"
                            className="w-full p-2 bg-transparent border border-gray-500 text-white text-sm rounded"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button

                            type="submit"
                            disabled={isSubmitting}
                            className={`bg-red-500 text-white hover:bg-red-600 text-black font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 hover:scale-105 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>

                    </form>
                </div>
            </div>
            <div className="w-full max-w-[1150px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#00162A] mt-12 mx-auto rounded shadow-lg shadow-black/50 flex items-center justify-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17799.241693319498!2d77.29909101151928!3d8.269547790065886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f89586715cc3%3A0xba7bda6c449e653a!2sMoolachel%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1749141892425!5m2!1sen!2sin"
                    loading="lazy"
                    title="Embedded Frame"
                    className="w-full h-full rounded"
                    frameBorder="0"
                    allowFullScreen
                />
            </div>

        </section>
    );
}
