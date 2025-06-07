import React, { useState } from 'react';

export default function SignupForm({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        role: '',
        companyName: '',
        hireMe: null as boolean | null,
        additionalInfo: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (name === 'hireMe') {
            const boolValue = value === 'true'; // Convert string to boolean
            setFormData(prev => ({ ...prev, [name]: boolValue }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Form submitted successfully!');
                onClose();
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form. Please try again.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 backdrop-blur-md p-4">
            <div className="bg-white p-6 rounded-3xl shadow-2xl w-full max-w-lg border-0 relative overflow-hidden max-h-[90vh] overflow-y-auto">
                {/* Animated background gradient */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500"></div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20"></div>
                <div className="absolute bottom-8 left-4 w-16 h-16 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20"></div>

                <div className="relative z-10 mt-10 mb-5 ">
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl mb-3 shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
                            Let's Work Together
                        </h2>
                        <p className="text-gray-500">Your vision. My code. Let’s begin.</p>
                    </div>

                    <div onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="block text-left text-sm font-semibold text-gray-700" htmlFor="name">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-purple-400 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-left text-sm font-semibold text-gray-700" htmlFor="phone">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-purple-400 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
                                    placeholder="+1 (123) 456-7890"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-left text-sm font-semibold text-gray-700" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-purple-400 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
                                placeholder="john@example.com"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-left text-sm font-semibold text-gray-700" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-purple-400 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="block text-left text-sm font-semibold text-gray-700" htmlFor="role">
                                    Your Role
                                </label>
                                <select
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-purple-400 transition-all duration-300 appearance-none bg-gray-50 focus:bg-white hover:border-gray-300"
                                    required
                                >
                                    <option value="">Select your role</option>
                                    <option value="developer">Developer</option>
                                    <option value="designer">Designer</option>
                                    <option value="manager">Manager</option>
                                    <option value="executive">Executive</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-left text-sm font-semibold text-gray-700" htmlFor="companyName">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-purple-400 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
                                    placeholder="Acme Inc."
                                />
                            </div>
                        </div>

                        <div className="flex space-x-6">
                            <label className="flex items-center cursor-pointer group">
                                <input
                                    type="radio"
                                    name="hireMe"
                                    value="true"  // Changed from "yes" to "true"
                                    checked={formData.hireMe === true}
                                    onChange={handleChange}
                                    className="w-5 h-5 text-purple-600 border-2 border-gray-300"
                                />
                                <span className="ml-3 text-sm font-medium text-gray-700 bg-green-50 group-hover:bg-green-100 px-4 py-2 rounded-full transition-colors duration-200 border border-green-200">
                                    ✅ Yes
                                </span>
                            </label>
                            <label className="flex items-center cursor-pointer group">
                                <input
                                    type="radio"
                                    name="hireMe"
                                    value="false"  // Changed from "no" to "false"
                                    checked={formData.hireMe === false}
                                    onChange={handleChange}
                                    className="w-5 h-5 text-purple-600 border-2 border-gray-300"
                                />
                                <span className="ml-3 text-sm font-medium text-gray-700 bg-red-50 group-hover:bg-red-100 px-4 py-2 rounded-full transition-colors duration-200 border border-red-200">
                                    ❌ No
                                </span>
                            </label>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-left text-sm font-semibold text-gray-700" htmlFor="additionalInfo">
                                Tell us about yourself
                            </label>
                            <textarea
                                id="additionalInfo"
                                name="additionalInfo"
                                value={formData.additionalInfo}
                                onChange={handleChange}
                                className="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-purple-400 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300 resize-none"
                                placeholder="Share your story, goals, or anything else you'd like us to know..."
                                rows={3}
                            />
                        </div>

                        <div className="flex space-x-4 pt-4">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="flex-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600 hover:from-red-700 hover:via-red-600 hover:to-red-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-purple-300"
                            >
                                🚀 Get Started
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-400">
                            By signing up, you agree to our{' '}
                            <span className="text-orange-600 hover:text-red-700 cursor-pointer font-medium">
                                Terms
                            </span>{' '}
                            and{' '}
                            <span className="text-orange-600 hover:text-red-700 cursor-pointer font-medium">
                                Privacy Policy
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}