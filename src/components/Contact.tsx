import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Web Development');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    const mailSubject = encodeURIComponent(`Service Request: ${service} - ${fullName}`);
    const mailBody = encodeURIComponent(
      `Hello Prop Industries,\n\nI would like to request the following service:\n\n` +
      `• Name: ${fullName}\n` +
      `• Client Email: ${email}\n` +
      `• Requested Service: ${service}\n\n` +
      `• Project Details / Message:\n${message}\n\n` +
      `Sent via Prop Industries Platform`
    );

    // Trigger direct email to tonnychibambo@gmail.com
    window.location.href = `mailto:tonnychibambo@gmail.com?subject=${mailSubject}&body=${mailBody}`;

    setTimeout(() => {
      setFormSubmitted(false);
      setFullName('');
      setEmail('');
      setMessage('');
    }, 8000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-[#A71920]/10 border border-[#A71920]/20 text-[#A71920] px-4 py-1.5 rounded-full font-bold tracking-widest uppercase text-xs mb-4">
              Get In Touch
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4A0A10] mb-6 leading-tight">
              Let's Build Your <br />
              <span className="text-[#A71920]">Digital Future</span>
            </h3>

            <p className="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed">
              Ready to start your next project or need technology consulting? Request a service below or send a message directly to <strong className="text-[#A71920]">tonnychibambo@gmail.com</strong>.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-5 p-4 rounded-xl bg-gray-50 border border-gray-200/80 hover:border-[#A71920] transition-colors group">
                <div className="w-12 h-12 bg-[#A71920] text-white flex items-center justify-center rounded-lg shadow-md group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Phone Number</div>
                  <a href="tel:+265996464291" className="text-base sm:text-lg font-bold text-[#4A0A10] group-hover:text-[#A71920] transition-colors">
                    +265 996 464 291
                  </a>
                </div>
              </div>
              
              {/* Primary Service Email */}
              <div className="flex items-center gap-5 p-4 rounded-xl bg-gray-50 border border-gray-200/80 hover:border-[#A71920] transition-colors group">
                <div className="w-12 h-12 bg-[#A71920] text-white flex items-center justify-center rounded-lg shadow-md group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Primary Service Email</div>
                  <div className="flex flex-col text-sm sm:text-base font-bold text-[#4A0A10]">
                    <a href="mailto:tonnychibambo@gmail.com" className="text-[#A71920] hover:underline flex items-center gap-1.5">
                      tonnychibambo@gmail.com <ExternalLink size={14} />
                    </a>
                    <a href="mailto:info@propindustries.com" className="text-xs font-semibold text-gray-600 hover:text-[#A71920] transition-colors mt-0.5">
                      info@propindustries.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5 p-4 rounded-xl bg-gray-50 border border-gray-200/80 hover:border-[#A71920] transition-colors group">
                <div className="w-12 h-12 bg-[#A71920] text-white flex items-center justify-center rounded-lg shadow-md group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Physical Address</div>
                  <a 
                    href="https://maps.google.com/?q=Blantyre+Malawi" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-base sm:text-lg font-bold text-[#4A0A10] group-hover:text-[#A71920] transition-colors flex items-center gap-2"
                  >
                    Blantyre, Malawi <span className="text-xs text-[#A71920] underline">(View Google Maps)</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#4A0A10] p-8 sm:p-10 rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden text-white"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#A71920]/20 -mr-16 -mt-16 rounded-full blur-xl" />
            
            <h4 className="text-2xl font-bold mb-2 text-white">Request a Service</h4>
            <p className="text-sm text-white/80 mb-6">
              Submitting this request dispatches an email directly to <span className="text-red-200 font-bold underline">tonnychibambo@gmail.com</span>.
            </p>

            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="p-6 bg-white/10 rounded-xl border border-white/20 text-center my-8"
              >
                <CheckCircle className="mx-auto text-emerald-400 mb-3" size={44} />
                <h5 className="text-xl font-extrabold text-white mb-2">Request Sent!</h5>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-4">
                  Your service request email has been generated and dispatched to <strong className="text-white underline">tonnychibambo@gmail.com</strong>.
                </p>
                <a
                  href={`mailto:tonnychibambo@gmail.com?subject=Service Request: ${service}&body=Name: ${fullName}`}
                  className="inline-flex items-center gap-2 text-xs font-bold bg-[#A71920] hover:bg-[#8F131A] text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Click here if email app didn't open <ExternalLink size={14} />
                </a>
              </motion.div>
            ) : (
              <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white focus:bg-white/20 transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white uppercase tracking-wider">Your Email</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white focus:bg-white/20 transition-all text-sm"
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white uppercase tracking-wider">Service Required</label>
                  <select 
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 bg-[#4A0A10] border border-white/20 rounded-lg text-white focus:outline-none focus:border-white transition-all text-sm"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Software Development">Software Development</option>
                    <option value="IoT Solutions">IoT Solutions</option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="Graphic Design & Branding">Graphic Design & Branding</option>
                    <option value="IT Consulting">IT Consulting</option>
                    <option value="Computer Training">Computer Training</option>
                    <option value="Networking & Hardware">Networking & Hardware</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white uppercase tracking-wider">Message / Scope</label>
                  <textarea 
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project requirements or timeline..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white focus:bg-white/20 transition-all resize-none text-sm"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#A71920] hover:bg-[#8F131A] text-white py-3.5 rounded-lg font-bold text-base transition-all flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Request to tonnychibambo@gmail.com <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
