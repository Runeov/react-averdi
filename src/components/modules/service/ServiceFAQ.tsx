import { useState } from 'react';
import { motion } from 'framer-motion';
import type { FAQItem } from '../../../types/service';

interface ServiceFAQProps {
  items: FAQItem[];
}

export const ServiceFAQ = ({ items }: ServiceFAQProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Spørsmål om regnskap?</h2>
          <p className="text-slate-600 mt-2">Her er noen av de vanligste spørsmålene vi får.</p>
        </div>

        <div className="space-y-4">
          {items.map((faq, index) => (
            <div key={index} className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex items-center justify-between w-full p-6 text-left hover:bg-slate-100 transition-colors"
              >
                <span className="font-bold text-slate-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openFaq === index ? 'auto' : 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-200/50">
                  {faq.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};