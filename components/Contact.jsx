"use client"
import Link from "next/link";
import React, { useRef, useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });
  
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Please fill all fields'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Please enter a valid email address'
      });
      return;
    }

    setStatus({
      submitting: true,
      submitted: false,
      error: false,
      message: 'Sending...'
    });

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        setStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: 'Message sent successfully!'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus({
          submitting: false,
          submitted: false,
          error: true,
          message: 'Failed to send message. Please try again.'
        });
      });
  };

  return (
    <section id="contact" className="md:p-7 lg:p-10">
      <div className="w-full md:rounded-3xl rounded-2xl px-4 py-6 md:p-7 bg-innerbg">
        <h2 className="title !font-bold">Let's Connect</h2>
        <p className="paragraph !text-sm md:!text-xl md:my-3">
          I would love to hear from you and discuss any potential opportunities
          or collaborations.
        </p>
        <div className="flex gap-4 mt-2 md:mt-4 text-secondary">
          <Link
            href="https://github.com/boukraAbdellah"
            target="_blank"
            className="hover:bg-blue-400/30 hover:text-gray-950 transition-all p-2 text-xl border-2 border-gray-300/70 rounded-full"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/abdellah-boukra-bettayeb-70b78514b/"
            target="_blank"
            className="hover:bg-blue-400/30 hover:text-gray-950 transition-all p-2 text-xl border-2 border-gray-300/70 rounded-full"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="https://www.instagram.com/b.b.abdellah/"
            target="_blank"
            className="hover:bg-blue-400/30 hover:text-gray-950 transition-all p-2 text-xl border-2 border-gray-300/70 rounded-full"
          >
            {" "}
            <FaInstagram />
          </Link>
        </div>
      </div>
      
      {/* Status message */}
      {(status.submitted || status.error) && (
        <div className={`mt-4 p-3 rounded-lg text-sm font-medium ${
          status.error ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 
                       'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
        }`}>
          {status.message}
        </div>
      )}
      
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 my-3 md:my-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="flex-1 px-4 py-3 md:px-8 bg-innerbg focus:outline-none border-2 dark:border-gray-600/60 focus:border-[#06b8ff88] md:py-5 md:rounded-3xl rounded-2xl"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="flex-1 p-4 md:px-8 bg-innerbg focus:outline-none border-2 dark:border-gray-600/60 focus:border-[#06b8ff88] md:py-5 py-3 md:rounded-3xl rounded-2xl"
          />
        </div>
        <div className="p-0 h-32 md:h-52 overflow-hidden relative">
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            className="w-full bg-innerbg h-full p-4 md:px-8 border-2 !outline-none transition-border dark:border-gray-600/60 focus:border-[#06b8ff88] py-4 md:py-8 md:rounded-3xl rounded-2xl"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          ></textarea>
          <div
            className={`absolute ${
              isFocused && "border-[#06b8ff88]"
            } bottom-0 right-0 dark:border-gray-600/60 rounded-tl-3xl bg-outerbg border-t-2 border-l-2 md:p-3 p-1`}
          >
            <button
              type="submit"
              disabled={status.submitting}
              className={`!text-white !rounded-full btn-primary flex gap-2 items-center ${
                status.submitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {status.submitting ? (
                <>
                  <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send <IoSend />
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
