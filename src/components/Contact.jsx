import React, { useState } from 'react';

// Social icons
function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
    </svg>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); 

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmissionStatus(null); // Clear previous status

    try {
      // Create form data from the form element
      const formElement = e.target;
      const formData = new FormData(formElement);

      // Add the access key to the form data
      // Using the correct access key format
      formData.append("access_key", "91b499d5-621e-40c0-a475-a3931f121dfc");
      
      // Convert to JSON as shown in the example
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error("Form submission error:", data);
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-16 md:py-24 bg-gradient-to-b from-indigo-950 to-slate-900 overflow-hidden"
    >      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h5 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 text-transparent bg-clip-text mb-6 leading-tight reveal-up">
            Get In Touch
          </h5>
          
          <p className="text-sky-100 text-lg max-w-xl mb-8 reveal-up leading-relaxed mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you have a question or just want to connect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left column - Quick contact */}
          <div className="md:col-span-4">
            <div className="bg-gradient-to-br from-slate-800/90 to-indigo-950/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 reveal-up">
              <h3 className="text-xl font-semibold mb-4 text-sky-100">Quick Contact</h3>
              
              {/* Email */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 grid place-items-center bg-indigo-900/30 text-cyan-400 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <a href="mailto:sy.katsuya0319@gmail.com" className="text-sky-100 hover:text-sky-200 transition-colors">
                  sy.katsuya0319@gmail.com
                </a>
              </div>
              
              {/* Location */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 grid place-items-center bg-indigo-900/30 text-cyan-400 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <p className="text-sky-100">
                  Los Angeles, California
                </p>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-8">
                <h3 className="text-violet-400 mb-3 text-sm font-medium">FIND ME ON</h3>
                
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-12 h-12 grid place-items-center bg-gradient-to-br from-slate-800/80 to-indigo-950/30 text-cyan-400 rounded-xl border border-slate-700/50 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-cyan-900/30 hover:to-cyan-700/30 hover:text-white hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-600/20 group"
                  >
                    <LinkedInIcon />
                  </a>
                  
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="w-12 h-12 grid place-items-center bg-gradient-to-br from-slate-800/80 to-indigo-950/30 text-violet-400 rounded-xl border border-slate-700/50 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-violet-900/30 hover:to-violet-700/30 hover:text-white hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-600/20 group"
                  >
                    <GitHubIcon />
                  </a>
                  
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter Profile"
                    className="w-12 h-12 grid place-items-center bg-gradient-to-br from-slate-800/80 to-indigo-950/30 text-sky-400 rounded-xl border border-slate-700/50 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-sky-900/30 hover:to-sky-700/30 hover:text-white hover:border-sky-500/30 hover:shadow-lg hover:shadow-sky-600/20 group"
                  >
                    <TwitterIcon />
                  </a>
                  
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    className="w-12 h-12 grid place-items-center bg-gradient-to-br from-slate-800/80 to-indigo-950/30 text-pink-400 rounded-xl border border-slate-700/50 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-pink-900/30 hover:to-pink-700/30 hover:text-white hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-600/20 group"
                  >
                    <InstagramIcon />
                  </a>
                  
                  <a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dribbble Profile"
                    className="w-12 h-12 grid place-items-center bg-gradient-to-br from-slate-800/80 to-indigo-950/30 text-purple-400 rounded-xl border border-slate-700/50 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-purple-900/30 hover:to-purple-700/30 hover:text-white hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-600/20 group"
                  >
                    <DribbbleIcon />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Blur elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-violet-600/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-cyan-700/10 rounded-full blur-3xl -z-10"></div>
          </div>
          
          {/* Right column - Contact form */}
          <div className="md:col-span-8">
            <form 
              className="bg-gradient-to-br from-slate-800/90 to-indigo-950/30 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-xl reveal-up"
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl font-semibold mb-6 text-sky-100">Send a Message</h3>
              
              <div className="grid grid-cols-1 gap-6">
                {/* Name field */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-sky-100 mb-2"
                  >
                    Name <span className="text-violet-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.name ? 'border-red-500' : 'border-slate-700'} rounded-xl text-sky-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all`}
                  />
                  {errors.name && <p className="mt-1 text-violet-400 text-sm">{errors.name}</p>}
                </div>
                
                {/* Email field */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-sky-100 mb-2"
                  >
                    Email <span className="text-violet-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    autoComplete="email"
                    required
                    className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.email ? 'border-red-500' : 'border-slate-700'} rounded-xl text-sky-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all`}
                  />
                  {errors.email && <p className="mt-1 text-violet-400 text-sm">{errors.email}</p>}
                </div>
                
                {/* Message field */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-sky-100 mb-2"
                  >
                    Message <span className="text-violet-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows="5"
                    required
                    className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.message ? 'border-red-500' : 'border-slate-700'} rounded-xl text-sky-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all resize-y min-h-32`}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-violet-400 text-sm">{errors.message}</p>}
                </div>
                
                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-center bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-medium rounded-xl shadow-lg shadow-indigo-900/25 hover:shadow-indigo-800/40 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all hover:scale-[1.02] active:scale-[0.98] group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-violet-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-hover:translate-x-1">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              
              {/* Success message */}
              {submissionStatus === 'success' && (
                <div className="text-green-500 mt-2 text-center p-3 bg-green-950/30 border border-green-900 rounded-lg">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {/* Error message */}
              {submissionStatus === 'error' && (
                <div className="text-red-500 mt-2 text-center p-3 bg-red-950/30 border border-red-900 rounded-lg">
                  An error occurred while sending the message. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;