"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    revenue: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "d0f8c5b2-0192-48a0-8b44-fe989fef9c0f",
          subject: `New Audit Request from ${formData.name}`,
          from_name: "Retenda Website",
          ...formData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          website: "",
          revenue: "",
          message: "",
        });
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50 p-4"
          >
            <div className="bg-oxford-blue border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">Request Free Audit</h2>
                  <p className="text-white/50 text-sm mt-1">
                    Tell us about your brand and we&apos;ll analyze your retention potential.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 text-white/60" />
                </button>
              </div>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Request Submitted!
                  </h3>
                  <p className="text-white/60">
                    We&apos;ll review your information and get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-persian-blue/50 focus:ring-1 focus:ring-persian-blue/50 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-persian-blue/50 focus:ring-1 focus:ring-persian-blue/50 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Company & Website Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-persian-blue/50 focus:ring-1 focus:ring-persian-blue/50 transition-all"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1.5">
                        Website URL
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-persian-blue/50 focus:ring-1 focus:ring-persian-blue/50 transition-all"
                        placeholder="https://yourstore.com"
                      />
                    </div>
                  </div>

                  {/* Monthly Revenue */}
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1.5">
                      Monthly Revenue
                    </label>
                    <select
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-persian-blue/50 focus:ring-1 focus:ring-persian-blue/50 transition-all cursor-pointer"
                    >
                      <option value="" className="bg-oxford-blue">Select range</option>
                      <option value="0-50k" className="bg-oxford-blue">$0 - $50,000</option>
                      <option value="50k-100k" className="bg-oxford-blue">$50,000 - $100,000</option>
                      <option value="100k-500k" className="bg-oxford-blue">$100,000 - $500,000</option>
                      <option value="500k-1m" className="bg-oxford-blue">$500,000 - $1M</option>
                      <option value="1m+" className="bg-oxford-blue">$1M+</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1.5">
                      Tell us about your goals
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-persian-blue/50 focus:ring-1 focus:ring-persian-blue/50 transition-all resize-none"
                      placeholder="What are your main challenges with email marketing or retention?"
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-persian-blue text-white font-semibold rounded-xl hover:bg-persian-blue/90 transition-all shadow-lg shadow-persian-blue/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Request Free Audit
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-white/40 text-center">
                    By submitting, you agree to receive communications from Retenda.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
