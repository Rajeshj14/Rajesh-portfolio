// import React, { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export default function SignupForm({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {

//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
//     const formRef = useRef<HTMLFormElement>(null);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//         const { name, value, type } = e.target;

//         if (name === 'hireMe') {
//             const boolValue = value === 'true';
//             setFormData(prev => ({ ...prev, [name]: boolValue }));
//         } else {
//             setFormData(prev => ({
//                 ...prev,
//                 [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
//             }));
//         }
//     };


//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         phone: '',
//         role: '',
//         companyName: '',
//         hireMe: null as boolean | null,
//         additionalInfo: ''
//     });

//     const [error, setError] = useState('');

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setIsSubmitting(true);
//         setError('');

//         try {
//             try {
//                 await emailjs.send(
//                     process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//                     process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//                     formData,
//                     process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
//                 );

//                 alert('Message sent successfully!');
//             } catch (error) {
//                 console.error('Failed to send:', error);
//                 alert('Failed to send message');
//             }



//             alert('Message sent successfully!');
//             // Reset form after successful submission
//             setFormData({
//                 name: '',
//                 email: '',
//                 password: '',
//                 phone: '',
//                 role: '',
//                 companyName: '',
//                 hireMe: null,
//                 additionalInfo: ''
//             });
//         } catch (err) {
//             setError(err instanceof Error ? err.message : 'Failed to send message');
//             console.error('Submission error:', err);
//         } finally {
//             setIsSubmitting(false);
//         }
//     };



//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 backdrop-blur-md p-4">
//             <div className="bg-white p-6 rounded-3xl shadow-2xl w-full max-w-lg border-0 relative overflow-hidden max-h-[90vh] overflow-y-auto">
//                 {/* Animated background gradient */}
//                 <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500"></div>

//                 {/* Decorative elements */}
//                 <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20"></div>
//                 <div className="absolute bottom-8 left-4 w-16 h-16 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20"></div>

//                 <div className="relative z-10 mt-10 mb-5">
//                     <div className="text-center mb-6">
//                         <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl mb-3 shadow-lg">
//                             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
//                             </svg>
//                         </div>
//                         <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
//                             Let's Work Together
//                         </h2>
//                         <p className="text-gray-500">Your vision. My code. Let's begin.</p>
//                     </div>

//                     <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div className="space-y-2">
//                                 <label className="block text-left text-sm font-semibold text-gray-700" htmlFor="name">
//                                     Full Name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                     className="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-purple-400 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
//                                     placeholder="John Doe"
//                                     required
//                                 />
//                             </div>

//                             <div className="space-y-2">
//                                 <label className="block text-left text-sm font-semibold text-gray-700" htmlFor="phone">
//                                     Phone Number
//                                 </label>
//                                 <input
//                                     type="tel"
//                                     id="phone"
//                                     name="phone"
//                                     value={formData.phone}
//                                     onChange={handleChange}
//                                     className="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-purple-400 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
//                                     placeholder="+1 (123) 456-7890"
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         <div className="space-y-2">
//                             <label className="block text-left text-sm font-semibold text-gray-700" htmlFor="email">
//                                 Email Address
//                             </label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-purple-400 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
//                                 placeholder="john@example.com"
//                                 required
//                             />
//                         </div>

//                         <div className="space-y-2">
//                             <label className="block text-left text-sm font-semibold text-gray-700" htmlFor="password">
//                                 Password
//                             </label>
//                             <input
//                                 type="password"
//                                 id="password"
//                                 name="password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 className="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-purple-400 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
//                                 placeholder="••••••••"
//                                 required
//                             />
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div className="space-y-2">
//                                 <label className="block text-left text-sm font-semibold text-gray-700" htmlFor="role">
//                                     Your Role
//                                 </label>
//                                 <select
//                                     id="role"
//                                     name="role"
//                                     value={formData.role}
//                                     onChange={handleChange}
//                                     className="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-purple-400 transition-all duration-300 appearance-none bg-gray-50 focus:bg-white hover:border-gray-300"
//                                     required
//                                 >
//                                     <option value="">Select your role</option>
//                                     <option value="developer">Developer</option>
//                                     <option value="designer">Designer</option>
//                                     <option value="manager">Manager</option>
//                                     <option value="executive">Executive</option>
//                                     <option value="other">Other</option>
//                                 </select>
//                             </div>

//                             <div className="space-y-2">
//                                 <label className="block text-left text-sm font-semibold text-gray-700" htmlFor="companyName">
//                                     Company Name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="companyName"
//                                     name="companyName"
//                                     value={formData.companyName}
//                                     onChange={handleChange}
//                                     className="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-purple-400 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
//                                     placeholder="Acme Inc."
//                                 />
//                             </div>
//                         </div>

//                         <div className="flex space-x-6">
//                             <label className="flex items-center cursor-pointer group">
//                                 <input
//                                     type="radio"
//                                     name="hireMe"
//                                     value="true"
//                                     checked={formData.hireMe === true}
//                                     onChange={handleChange}
//                                     className="w-5 h-5 text-purple-600 border-2 border-gray-300"
//                                 />
//                                 <span className="ml-3 text-sm font-medium text-gray-700 bg-green-50 group-hover:bg-green-100 px-4 py-2 rounded-full transition-colors duration-200 border border-green-200">
//                                     ✅ Yes
//                                 </span>
//                             </label>
//                             <label className="flex items-center cursor-pointer group">
//                                 <input
//                                     type="radio"
//                                     name="hireMe"
//                                     value="false"
//                                     checked={formData.hireMe === false}
//                                     onChange={handleChange}
//                                     className="w-5 h-5 text-purple-600 border-2 border-gray-300"
//                                 />
//                                 <span className="ml-3 text-sm font-medium text-gray-700 bg-red-50 group-hover:bg-red-100 px-4 py-2 rounded-full transition-colors duration-200 border border-red-200">
//                                     ❌ No
//                                 </span>
//                             </label>
//                         </div>

//                         <div className="space-y-2">
//                             <label className="block text-left text-sm font-semibold text-gray-700" htmlFor="additionalInfo">
//                                 Tell us about yourself
//                             </label>
//                             <textarea
//                                 id="additionalInfo"
//                                 name="additionalInfo"
//                                 value={formData.additionalInfo}
//                                 onChange={handleChange}
//                                 className="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-purple-400 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300 resize-none"
//                                 placeholder="Share your story, goals, or anything else you'd like us to know..."
//                                 rows={3}
//                             />
//                         </div>

//                         {/* Status message display */}
//                         {submitStatus && (
//                             <div className={`p-4 rounded-xl ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                                 {submitStatus.message}
//                             </div>
//                         )}

//                         <div className="flex space-x-4 pt-4">
//                             <button
//                                 type="submit"
//                                 disabled={isSubmitting}
//                                 className={`flex-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600 hover:from-red-700 hover:via-red-600 hover:to-red-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-purple-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
//                             >
//                                 {isSubmitting ? 'Sending...' : '🚀 Get Started'}
//                             </button>
//                             <button
//                                 type="button"
//                                 onClick={onClose}
//                                 disabled={isSubmitting}
//                                 className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </form>

//                     <div className="mt-6 text-center">
//                         <p className="text-sm text-gray-400">
//                             By signing up, you agree to our{' '}
//                             <span className="text-orange-600 hover:text-red-700 cursor-pointer font-medium">
//                                 Terms
//                             </span>{' '}
//                             and{' '}
//                             <span className="text-orange-600 hover:text-red-700 cursor-pointer font-medium">
//                                 Privacy Policy
//                             </span>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function SignupForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (name === 'hireMe') {
      const boolValue = value === 'true';
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
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          ...formData,
          hireMe: formData.hireMe !== null ? (formData.hireMe ? 'Yes' : 'No') : 'Not specified',
          time: new Date().toLocaleString()
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus({ 
        success: true, 
        message: 'Thank you! Your message has been sent successfully.' 
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        password: '',
        phone: '',
        role: '',
        companyName: '',
        hireMe: null,
        additionalInfo: ''
      });

      // Close form after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'Oops! Something went wrong. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 backdrop-blur-md p-4">
      <div className="bg-white p-6 rounded-3xl shadow-2xl w-full max-w-lg border-0 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500"></div>

        <div className="relative z-10 mt-10 mb-5">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl mb-3 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
              Let's Work Together
            </h2>
            <p className="text-gray-500">Your vision. My code. Let's begin.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
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
                  placeholder="Enter Your Name"
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
                  placeholder="Phone Number"
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
                placeholder="Enter Your Email"
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
                placeholder="**********"
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
                  <option value="developer"> Web Developer</option>
                  <option value="designer">Full Stack Developer</option>
                  <option value="manager">Python developer</option>
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
                  placeholder="Your Company Name"
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="radio"
                  name="hireMe"
                  value="true"
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
                  value="false"
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

            {submitStatus && (
              <div className={`p-4 rounded-xl ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}

            <div className="flex space-x-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600 hover:from-red-700 hover:via-red-600 hover:to-red-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-purple-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : '🚀 Get Started'}
              </button>
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                Cancel
              </button>
            </div>
          </form>

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