import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../../ui/utils';
import type { ProductTab } from '../../../types/service';

interface ServiceProductsProps {
  tabs: ProductTab[];
  themeColor?: string;
  className?: string;
}

export function ServiceProducts({
  tabs,
  themeColor = "#E86C1F",
  className
}: ServiceProductsProps) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<number | null>(tabs.length > 0 ? 0 : null);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  // Early return if no tabs
  if (tabs.length === 0) {
    return null;
  }

  return (
    <section id="fordeler" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            En enklere hverdag for deg og din bedrift
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Vi skreddersyr oppdraget etter dine behov. Klikk deg gjennom fanene for å se hva vi kan hjelpe deg med.
          </p>
        </div>

        <div className={cn("grid lg:grid-cols-12 gap-8 items-start", className)}>
          {/* LEFT COLUMN: Navigation (Desktop) + Accordion (Mobile) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {tabs.map((item, index) => (
              <div key={item.id} className="flex flex-col">
                {/* Button */}
                <button
                  onClick={() => handleTabClick(index)}
                  className={cn(
                    "group relative flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border-2 w-full",
                    activeTab === index
                      ? "bg-white shadow-sm z-10"
                      : "bg-white border-transparent hover:border-gray-200 hover:bg-gray-50"
                  )}
                  style={{
                    borderColor: activeTab === index ? themeColor : 'transparent',
                    backgroundColor: activeTab === index ? `${themeColor}0D` : undefined
                  }}
                >
                  <div
                    className={cn(
                      "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors",
                      activeTab === index ? "bg-white" : "bg-gray-100 group-hover:bg-white"
                    )}
                  >
                    <img src={item.icon} alt="" className="w-8 h-8 object-contain" />
                  </div>

                  <div className="flex-1">
                    <h3
                      className="font-bold text-lg transition-colors"
                      style={{ color: activeTab === index ? themeColor : '#0f172a' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 hidden sm:block">
                      {item.shortDesc}
                    </p>
                  </div>

                  <ChevronRight
                    className={cn("w-5 h-5 transition-transform duration-300", activeTab === index ? "rotate-90 lg:rotate-0 lg:translate-x-1" : "text-gray-300")}
                    style={{ color: activeTab === index ? themeColor : undefined }}
                  />
                </button>

                {/* MOBILE CONTENT (Accordion) */}
                <div className="lg:hidden">
                  <AnimatePresence>
                    {activeTab === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div
                          className="p-4 pl-20 pt-2 pb-6 ml-8 my-2 border-l-2"
                          style={{ borderColor: `${themeColor}33` }}
                        >
                          <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                            {item.content}
                          </p>
                          <ul className="space-y-2 mb-4">
                            {item.bullets.map((bullet, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: themeColor }} />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={() => navigate(item.link)}
                            className="font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                            style={{ color: themeColor }}
                          >
                            {item.linkText || `Les mer om ${item.title.toLowerCase()}`}
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: Content (Desktop) */}
          <div className="hidden lg:flex lg:col-span-7 bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-100 min-h-[500px] flex-col relative overflow-hidden">
            <AnimatePresence mode='wait'>
              {activeTab !== null && tabs[activeTab] && (
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center p-3">
                      <img src={tabs[activeTab].icon} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-slate-900">{tabs[activeTab].title}</h3>
                      <div className="h-1 w-12 mt-2 rounded-full" style={{ backgroundColor: themeColor }}></div>
                    </div>
                  </div>

                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {tabs[activeTab].content}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {tabs[activeTab].bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: themeColor }} />
                        <span className="text-slate-700 font-medium text-sm">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-200">
                    <button
                      onClick={() => navigate(tabs[activeTab].link)}
                      className="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all group"
                      style={{ color: themeColor }}
                    >
                      {tabs[activeTab].linkText || `Les mer om ${tabs[activeTab].title.toLowerCase()}`}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}