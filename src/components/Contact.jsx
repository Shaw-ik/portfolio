import React, { useState } from 'react';

const socialLinks = [
  {
    href: 'https://www.github.com/codewithsadee-org',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z" fill="currentColor" />
    </svg>,
    alt: 'GitHub'
  },
  {
    href: 'https://www.linkedin.com/in/codewithsadee',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z" fill="currentColor" />
    </svg>,
    alt: 'LinkedIn'
  },
  {
    href: 'https://x.com/codewithsadee_',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.25 3C4.46403 3 3 4.46403 3 6.25V17.75C3 19.536 4.46403 21 6.25 21H17.75C19.536 21 21 19.536 21 17.75V6.25C21 4.46403 19.536 3 17.75 3H6.25ZM6.25 4.5H17.75C18.725 4.5 19.5 5.27497 19.5 6.25V17.75C19.5 18.725 18.725 19.5 17.75 19.5H6.25C5.27497 19.5 4.5 18.725 4.5 17.75V6.25C4.5 5.27497 5.27497 4.5 6.25 4.5ZM6.91406 7L10.7822 12.5283L6.91113 17H7.93262L11.2344 13.1758L13.9102 17H17.1289L13.0127 11.1172L16.5684 7H15.5684L12.5615 10.4717L10.1328 7H6.91406ZM8.46777 7.84766H9.74902L15.5752 16.1523H14.2939L8.46777 7.84766Z" fill="currentColor" />
    </svg>,
    alt: 'Twitter X'
  },
  {
    href: 'https://www.instagram.com/codewithsadee',
    icon: <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.75 2.5C5.58319 2.5 3 5.08319 3 8.25V15.75C3 18.9164 5.5831 21.5 8.75 21.5H16.25C19.4165 21.5 22 18.9165 22 15.75V8.25C22 5.0831 19.4164 2.5 16.25 2.5H8.75ZM8.75 4H16.25C18.6056 4 20.5 5.8939 20.5 8.25V15.75C20.5 18.1055 18.6055 20 16.25 20H8.75C6.3939 20 4.5 18.1056 4.5 15.75V8.25C4.5 5.89381 6.39381 4 8.75 4ZM17.5 6C16.9475 6 16.5 6.4475 16.5 7C16.5 7.5525 16.9475 8 17.5 8C18.0525 8 18.5 7.5525 18.5 7C18.5 6.4475 18.0525 6 17.5 6ZM12.5 7C9.74759 7 7.5 9.24759 7.5 12C7.5 14.7524 9.74759 17 12.5 17C15.2524 17 17.5 14.7524 17.5 12C17.5 9.24759 15.2524 7 12.5 7ZM12.5 8.5C14.4416 8.5 16 10.0584 16 12C16 13.9416 14.4416 15.5 12.5 15.5C10.5584 15.5 9 13.9416 9 12C9 10.0584 10.5584 8.5 12.5 8.5Z" fill="currentColor" />
    </svg>,
    alt: 'Instagram'
  },
];


const Contact = () => {
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
      // Show alert for validation errors
      alert('Please fill out all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://getform.io/f/bwngmzya', {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          'Accept': 'application/json',
        },
      });
      
      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' });
        alert('Message sent successfully!');
      } else {
        setSubmissionStatus('error');
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmissionStatus('error');
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
    >
      {/* Background gradient effect - updated to match stone theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 to-stone-950/80 -z-10"></div>
      
      {/* Animated background dots - updated color */}
      <div className="absolute inset-0 bg-[radial-gradient(#78716c_1px,transparent_1px)] [background-size:20px_20px] opacity-20 -z-10"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 relative">
          
          {/* Left Column */}
          <div className="flex flex-col space-y-8">
            <div>
              <h5 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-stone-300 via-stone-400 to-stone-500 text-transparent bg-clip-text mb-6 leading-tight reveal-up">
                Let's Create Something Amazing Together
              </h5>
              
              <p className="text-stone-400 text-lg max-w-xl mb-8 reveal-up leading-relaxed">
                Have a project in mind? I'd love to hear about it. Drop me a message and let's discuss how we can work together to bring your vision to life.
              </p>
            </div>
            
            {/* Quick Contact Info */}
            <div className="bg-stone-900/60 backdrop-blur-sm border border-stone-800 rounded-2xl p-6 reveal-up">
              <h3 className="text-xl font-semibold text-stone-100 mb-4">Quick Contact</h3>
              
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 grid place-items-center bg-stone-500/20 text-stone-400 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <a href="mailto:sy.katsuya0319@gmail.com" className="text-stone-300 hover:text-stone-200 transition-colors">
                  sy.katsuya0319@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 grid place-items-center bg-stone-500/20 text-stone-400 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9V2H18V9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <path d="M10 18V14a2 2 0 1 1 4 0v4" />
                  </svg>
                </div>
                <p className="text-stone-300">
                  Available for freelance opportunities
                </p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="reveal-up">
              <h3 className="text-stone-400 mb-3 text-sm font-medium">FIND ME ON</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ href, icon, alt }, key) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={alt}
                    className="w-12 h-12 grid place-items-center bg-stone-900/80 text-stone-400 rounded-xl border border-stone-800 transition-all duration-300 hover:scale-110 hover:bg-stone-700 hover:text-white hover:border-stone-600 hover:shadow-lg hover:shadow-stone-800/40 group"
                  >
                    <div className="transform transition-transform duration-300 group-hover:rotate-6">
                      {icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-stone-600/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-stone-700/20 rounded-full blur-3xl -z-10"></div>
            
            <form
              onSubmit={handleSubmit}
              action="https://getform.io/f/bwngmzya"
              method="POST"
              className="bg-stone-900/60 backdrop-blur-md border border-stone-800 rounded-2xl p-6 md:p-8 shadow-xl reveal-up"
            >
              <h3 className="text-2xl font-semibold text-stone-100 mb-6">Send a Message</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-stone-400 mb-2"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-stone-800/50 border ${errors.name ? 'border-red-500' : 'border-stone-700'} rounded-xl text-stone-100 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-500/50 focus:border-stone-500 transition-all`}
                    />
                    {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-stone-400 mb-2"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-stone-800/50 border ${errors.email ? 'border-red-500' : 'border-stone-700'} rounded-xl text-stone-100 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-500/50 focus:border-stone-500 transition-all`}
                    />
                    {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                  </div>
                </div>
                
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-stone-400 mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="6"
                    placeholder="Tell me about your project..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-stone-800/50 border ${errors.message ? 'border-red-500' : 'border-stone-700'} rounded-xl text-stone-100 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-500/50 focus:border-stone-500 transition-all resize-y min-h-32`}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
                </div>
                
                {/* Hidden input for email recipient */}
                <input type="hidden" name="_to" value="sy.katsuya0319@gmail.com" />
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-center bg-gradient-to-r from-stone-600 to-stone-700 text-white font-medium rounded-xl shadow-lg shadow-stone-800/25 hover:shadow-stone-800/40 focus:outline-none focus:ring-2 focus:ring-stone-500/50 transition-all hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-stone-500 to-stone-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 