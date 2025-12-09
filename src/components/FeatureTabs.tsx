import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define the shape of a single feature tab's data
export interface FeatureTabItem {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  benefits: string[];
  imageSrc: string;
  // Optional link for the content section (e.g., to a guide)
  contentLink?: {
    url: string;
    text: string;
  };
}

// Define the props the component accepts
interface FeatureTabsProps {
  title?: string;
  introText?: string;
  features: FeatureTabItem[];
}

const FeatureTabs: React.FC<FeatureTabsProps> = ({ 
  title = "Alt dere trenger på ett sted", 
  introText = "Vi har samlet de viktigste verktøyene for effektiv foreningsdrift i én brukervennlig plattform.",
  features 
}) => {
  const [activeTab, setActiveTab] = useState(features[0]?.id || '');

  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">{title}</h2>
          <p className="text-xl text-gray-600">{introText}</p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === feature.id
                  ? 'bg-averdi-blue text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {feature.tabLabel}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-7xl mx-auto bg-gray-50 rounded-3xl p-8 lg:p-12">
          <AnimatePresence mode='wait'>
            {features.map((feature) => (
              activeTab === feature.id && (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Content Side */}
                  <div>
                    <h3 className="text-3xl font-bold mb-6 text-gray-900">{feature.title}</h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-4 mb-8">
                      {feature.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <Check className="w-6 h-6 text-averdi-blue flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Conditionally render a link if present in data */}
                    {feature.contentLink && (
                       <Link to={feature.contentLink.url}>
                        <button className="bg-averdi-blue text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium">
                          {feature.contentLink.text}
                        </button>
                       </Link>
                    )}
                  </div>

                  {/* Image Side */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-averdi-blue/10 to-transparent rounded-2xl transform rotate-3 scale-105" />
                    <img 
                      src={feature.imageSrc} 
                      alt={feature.title}
                      className="relative z-10 rounded-2xl shadow-xl w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeatureTabs;