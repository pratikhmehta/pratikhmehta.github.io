import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { contactInfo, socialLinks } from '../data/resume';
import {
  Mail, Phone, MapPin, Globe, Send,
  Github, Linkedin, Code2, FileCode2, SquareCode
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Reveal, RevealItem } from './shared/Reveal';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!formRef.current || !serviceId || !templateId || !publicKey) {
      setErrorMessage('Contact form is not configured. Please email me directly instead.');
      return;
    }

    setIsSubmitting(true);

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      () => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        formRef.current?.reset();
        setTimeout(() => setSubmitted(false), 3000);
      },
      () => {
        setErrorMessage('Failed to send message. Please try again later.');
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

  return (
    <section
      id="contact"
      className="py-28 md:py-40 bg-paper-100 dark:bg-ink-900 text-slate-900 dark:text-white border-t border-slate-200/70 dark:border-ink-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-6xl mx-auto">
          <RevealItem className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Let&rsquo;s Build Something Great</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Open to senior Technical Lead and Adobe Commerce Architect roles in platform engineering
              or AI-augmented development — recruiters and hiring teams, reach out directly.
            </p>
          </RevealItem>

          <div className="grid md:grid-cols-2 gap-8">
            <RevealItem>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-full mr-4 bg-blue-100 text-blue-600 dark:bg-accent-500/10 dark:text-accent-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <a href={`mailto:${contactInfo.email}`} className="hover:underline text-accent-500 dark:text-accent-400">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-full mr-4 bg-blue-100 text-blue-600 dark:bg-accent-500/10 dark:text-accent-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Phone</h4>
                    <a href={`tel:${contactInfo.phone}`} className="hover:underline text-accent-500 dark:text-accent-400">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-full mr-4 bg-blue-100 text-blue-600 dark:bg-accent-500/10 dark:text-accent-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Location</h4>
                    <span className="text-slate-700 dark:text-slate-300">{contactInfo.location}</span>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{contactInfo.availability}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-full mr-4 bg-blue-100 text-blue-600 dark:bg-accent-500/10 dark:text-accent-400">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Website</h4>
                    <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-accent-500 dark:text-accent-400">
                      {contactInfo.website}
                    </a>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-12 mb-6">Follow Me</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-accent-500/10 dark:text-accent-400 dark:hover:bg-accent-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                    aria-label={link.name}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {getIconComponent(link.icon)}
                  </motion.a>
                ))}
              </div>
            </RevealItem>

            <RevealItem>
              <div className="p-6 rounded-xl border border-slate-200 dark:border-ink-700">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="p-4 rounded-lg mb-4 text-center bg-green-100 text-green-800 dark:bg-green-800/40 dark:text-green-300">
                    <p className="font-medium">Thank you for your message! I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit}>
                    {errorMessage && (
                      <div className="p-3 rounded-lg mb-4 text-sm bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-300">
                        {errorMessage}
                      </div>
                    )}
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full px-4 py-2 mb-4 rounded-lg bg-white text-slate-900 border border-slate-300 dark:bg-ink-700 dark:text-white dark:border-ink-700 focus:outline-none focus:ring-2 focus:ring-accent-500" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="w-full px-4 py-2 mb-4 rounded-lg bg-white text-slate-900 border border-slate-300 dark:bg-ink-700 dark:text-white dark:border-ink-700 focus:outline-none focus:ring-2 focus:ring-accent-500" />
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="w-full px-4 py-2 mb-4 rounded-lg bg-white text-slate-900 border border-slate-300 dark:bg-ink-700 dark:text-white dark:border-ink-700 focus:outline-none focus:ring-2 focus:ring-accent-500" />
                    <textarea name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Message" required className="w-full px-4 py-2 mb-6 rounded-lg bg-white text-slate-900 border border-slate-300 dark:bg-ink-700 dark:text-white dark:border-ink-700 focus:outline-none focus:ring-2 focus:ring-accent-500"></textarea>

                    <motion.button type="submit" disabled={isSubmitting} className={`w-full px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper-100 dark:focus-visible:ring-offset-ink-900 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`} whileTap={{ scale: 0.95 }}>
                      {isSubmitting ? <span>Sending...</span> : (<><Send size={18} /><span>Send Message</span></>)}
                    </motion.button>
                  </form>
                )}
              </div>
            </RevealItem>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
