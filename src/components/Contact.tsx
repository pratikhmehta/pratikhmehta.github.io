import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { contactInfo, socialLinks } from '../data/resume';
import {
  Mail, Phone, Globe, Send,
  Github, Linkedin, Code2, FileCode2, SquareCode
} from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    emailjs.sendForm(
      'service_6fidvhb',
      'template_vey2vfq',
      formRef.current,
      '2ugqm-JhhMrJFOGdc'
    ).then(
      (result) => {
        console.log('SUCCESS!', result.text);
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        formRef.current?.reset(); // reset HTML form
        setTimeout(() => setSubmitted(false), 3000);
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send message. Please try again later.');
        setIsSubmitting(false);
      }
    );
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Github': return <Github />;
      case 'Linkedin': return <Linkedin />;
      case 'Code2': return <Code2 />;
      case 'FileCode2': return <FileCode2 />;
      case 'SquareCode': return <SquareCode />;
      default: return <Globe />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-purple-400' : 'text-blue-600'}`}>
              Contact Me
            </h2>
            <div className={`h-1 w-20 mx-auto rounded-full ${darkMode ? 'bg-purple-500' : 'bg-blue-600'}`}></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left side info */}
            <motion.div variants={itemVariants}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Get in Touch</h3>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-purple-900/50 text-purple-400' : 'bg-blue-100 text-blue-600'}`}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</h4>
                    <a href={`mailto:${contactInfo.email}`} className={`hover:underline ${darkMode ? 'text-purple-400' : 'text-blue-600'}`}>
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-purple-900/50 text-purple-400' : 'bg-blue-100 text-blue-600'}`}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Phone</h4>
                    <a href={`tel:${contactInfo.phone}`} className={`hover:underline ${darkMode ? 'text-purple-400' : 'text-blue-600'}`}>
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-purple-900/50 text-purple-400' : 'bg-blue-100 text-blue-600'}`}>
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Website</h4>
                    <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer" className={`hover:underline ${darkMode ? 'text-purple-400' : 'text-blue-600'}`}>
                      {contactInfo.website}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <h3 className={`text-2xl font-bold mt-12 mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Follow Me
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-transform duration-300 hover:scale-110 ${darkMode ? 'bg-purple-900/50 text-purple-400 hover:bg-purple-800/70' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
                    aria-label={link.name}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {getIconComponent(link.icon)}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Send Me a Message
                </h3>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className={`p-4 rounded-lg mb-4 text-center ${darkMode ? 'bg-green-800/40 text-green-300' : 'bg-green-100 text-green-800'}`}>
                    <p className="font-medium">Thank you for your message! I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className={`w-full px-4 py-2 mb-4 rounded-lg ${darkMode ? 'bg-gray-700 text-white border border-gray-600' : 'bg-white text-gray-900 border border-gray-300'}`} />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className={`w-full px-4 py-2 mb-4 rounded-lg ${darkMode ? 'bg-gray-700 text-white border border-gray-600' : 'bg-white text-gray-900 border border-gray-300'}`} />
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className={`w-full px-4 py-2 mb-4 rounded-lg ${darkMode ? 'bg-gray-700 text-white border border-gray-600' : 'bg-white text-gray-900 border border-gray-300'}`} />
                    <textarea name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Message" required className={`w-full px-4 py-2 mb-6 rounded-lg ${darkMode ? 'bg-gray-700 text-white border border-gray-600' : 'bg-white text-gray-900 border border-gray-300'}`}></textarea>

                    <motion.button type="submit" disabled={isSubmitting} className={`w-full px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 ${darkMode ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'} ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`} whileTap={{ scale: 0.95 }}>
                      {isSubmitting ? <span>Sending...</span> : (<><Send size={18} /><span>Send Message</span></>)}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
