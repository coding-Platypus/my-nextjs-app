import Head from 'next/head';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields (Name, Email, and Message).');
      return;
    }

    setLoading(true);
    setError('');

    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <>
      <Head>
        <title>Contact Us | NextCraft</title>
        <meta name="description" content="Get in touch with us via our contact form." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contact Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let&apos;s Start a Conversation
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Have a question, feedback, or want to collaborate? Fill out the form below and we&apos;ll get back to you shortly.
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Details Card (1 column) */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-8 flex flex-col justify-between shadow-lg">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold">Contact Information</h2>
                <p className="text-slate-400 text-sm mt-1">
                  Reach out to us directly through any of the channels below.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Email</p>
                    <p className="text-sm font-medium text-slate-100">contact@nextcraft.example.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Location</p>
                    <p className="text-sm font-medium text-slate-100">San Francisco, CA / Remote</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Response Time</p>
                    <p className="text-sm font-medium text-slate-100">Within 24 business hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/50 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-200">Assignment Implementation</p>
              <p>Simple contact form with Name, Email, and Message fields.</p>
            </div>
          </div>

          {/* Form Card (2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Message Sent Successfully!</h2>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you for reaching out, <strong>{formData.name || 'Friend'}</strong>. Your message has been received and we will get back to you soon.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Send us a Message</h2>
                  <p className="text-slate-600 text-sm mt-1">
                    Fill in the form below with your name, email address, and your message.
                  </p>
                </div>

                {error && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 placeholder-slate-400 text-sm transition"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 placeholder-slate-400 text-sm transition"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 placeholder-slate-400 text-sm transition resize-y"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-md shadow-emerald-600/20 hover:shadow-lg transition disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending...</span>
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
    </>
  );
}

