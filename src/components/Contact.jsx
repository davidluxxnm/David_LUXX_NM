import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaArrowRight,
  FaCheckCircle,
  FaRegClock,
  FaHeadset,
  FaRocket
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "davidluxxnm@gmail.com",
      link: "mailto:davidluxxnm@gmail.com",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "+250 782 575 191",
      link: "tel:+250782575191",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      details: "+250 782 575 191",
      link: "https://wa.me/250782575191",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      details: "Rubavu, Gisenyi, Rwanda",
      link: null,
      color: "bg-blue-100 text-blue-600"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM", available: true },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM", available: true },
    { day: "Sunday", hours: "Closed", available: false }
  ];

  const socialLinks = [
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/davidluxxnm", color: "hover:bg-gray-800" },
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://linkedin.com/in/davidluxxnm", color: "hover:bg-[#0077B5]" },
    { name: "YouTube", icon: <FaYoutube />, url: "https://youtube.com/@bwebwe_entertainment", color: "hover:bg-[#FF0000]" },
    { name: "Facebook", icon: <FaFacebook />, url: "https://facebook.com/david.luxx.nm", color: "hover:bg-[#1877F2]" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com/david_luxx_nm", color: "hover:bg-gradient-to-r from-purple-500 to-pink-500" }
  ];

  const faqs = [
    { q: "How quickly do you respond to messages?", a: "I typically respond within 24 hours during business days." },
    { q: "Do you offer free consultations?", a: "Yes, I offer a free 30-minute consultation to discuss your project needs." },
    { q: "What is your project process?", a: "Discovery → Planning → Development → Testing → Delivery → Support" },
    { q: "Do you work with international clients?", a: "Yes, I work with clients worldwide remotely." }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <FaHeadset />
            GET IN TOUCH
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's <span className="text-blue-600">Connect</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to discuss how I can help your business grow?
            I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 -mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition">
                <div className={`w-14 h-14 ${info.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}>
                  {info.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-gray-600 text-sm hover:text-blue-600 transition">
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-600 text-sm">{info.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h2>
                <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
                <p className="text-gray-600 mt-3">Fill out the form below and I'll get back to you soon.</p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <FaCheckCircle className="text-green-500 text-xl" />
                  <div>
                    <p className="font-semibold text-green-800">Message Sent!</p>
                    <p className="text-green-600 text-sm">Thanks for reaching out. I'll respond within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    placeholder="+250 782 575 191"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <FaArrowRight />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  * Required fields. I'll respond within 24 hours.
                </p>
              </form>
            </div>

            {/* Map & Business Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <MdLocationOn className="text-blue-600" />
                  Find Me Here
                </h3>
                <div className="rounded-xl overflow-hidden h-64">
                  <iframe
                    title="Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15960.476615123399!2d29.2507265!3d-1.7001585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d2f2a5b0c2b8c7%3A0x2c8f0b3c5e6a7d9f!2sGisenyi%2C%20Rwanda!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <p className="text-sm text-gray-500 mt-3 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-600" />
                  Rubavu, Gisenyi, Western Province, Rwanda
                </p>
              </div>

              {/* Business Hours */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaRegClock className="text-blue-600" />
                  Business Hours
                </h3>
                <div className="space-y-3">
                  {businessHours.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="font-medium text-gray-700">{item.day}</span>
                      <div className="flex items-center gap-2">
                        <span className={item.available ? "text-gray-600" : "text-red-500"}>
                          {item.hours}
                        </span>
                        {item.available && (
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800 flex items-center gap-2">
                    <FaClock className="text-blue-600" />
                    Response time: Usually within 24 hours
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  Connect Socially
                </h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-100 text-gray-700 rounded-xl transition-all duration-300 ${social.color} hover:text-white`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
            <FaRocket />
            START A PROJECT
          </div>
     
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/250782575191"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
            >
              <FaWhatsapp />
              WhatsApp Me
            </a>
            <a
              href="tel:+250782575191"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <FaPhone />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}