import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, AlertCircle, MapPin, GraduationCap, User, MessageSquare, Tag } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      }, 500);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400">
            Let's Connect
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Contact <span className="text-gradient">{personalInfo.name}</span>
          </h3>
          <p className="text-slate-400 text-sm sm:text-base">
            Interested in offering an internship opportunity or discussing a project? Reach out below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6 w-full">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-8 space-y-6">
              <h4 className="text-xl font-bold text-white">Get in Touch</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                I am actively seeking Web Development & Full Stack Developer internships. Feel free to call or email me directly:
              </p>

              {/* Direct Contact Items */}
              <div className="space-y-4 pt-1">
                
                {/* Clickable Email Item */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs text-slate-400 block font-medium">Email Address</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-sky-300 transition-colors break-all block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Clickable Phone Item */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs text-slate-400 block font-medium">Phone Number</span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors block"
                    >
                      +91 {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Institution Item */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs text-slate-400 block font-medium">Institution & Branch</span>
                    <span className="text-xs sm:text-sm font-semibold text-white block">
                      {personalInfo.education.institution}
                    </span>
                    <span className="text-xs text-slate-400 font-medium block">
                      B.Tech CSE (2nd Year)
                    </span>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs text-slate-400 block font-medium">Location</span>
                    <span className="text-sm font-semibold text-white block">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-8 space-y-6">
              <h4 className="text-xl font-bold text-white">Send Me a Message</h4>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                    <h5 className="text-lg font-bold text-white">Message Sent Successfully!</h5>
                  </div>
                  <p className="text-sm text-emerald-200 leading-relaxed">
                    Thank you for contacting me. Anushka will review your message and reply soon!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-sky-400" />
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-rose-500/80 focus:border-rose-500'
                          : 'border-slate-800 focus:border-sky-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-sky-400" />
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. user@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500/80 focus:border-rose-500'
                          : 'border-slate-800 focus:border-sky-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-sky-400" />
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Web Development Internship Inquiry"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-rose-500/80 focus:border-rose-500'
                          : 'border-slate-800 focus:border-sky-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message details here..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-rose-500/80 focus:border-rose-500'
                          : 'border-slate-800 focus:border-sky-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-sm transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Validating & Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
