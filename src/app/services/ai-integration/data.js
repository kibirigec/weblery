import React from 'react';

export const aiIntegrationService = {
  title: "AI Integration",
  subtitle: "Intelligent solutions that transform your business operations",
  icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  hoverColor: "black",
  headerBg: "#374151",
  iconBg: "#ffffff33",
  iconColor: "#d1d5db",
  titleColor: "#f9fafb",
  subtitleColor: "#e5e7eb",
  accentBg: "#f9fafb",
  accentColor: "#4b5563",
  visualBg: "#fefefe",
  tagBg: "#f9fafb",
  tagColor: "#374151",
  techBg: "#fefefe",
  techColor: "#374151",
  titleContentColor: "text-gray-900",
  backgroundPattern: (
    <div className="absolute inset-0">
      <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-2xl rotate-12"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-white/20 rounded-lg transform -rotate-45"></div>
    </div>
  ),
  importance: {
    overview: "Artificial Intelligence is reshaping the business landscape at an unprecedented pace. Companies that integrate AI strategically are seeing 15% revenue increases and 25% cost reductions. AI integration isn't just about automation—it's about unlocking human potential, making data-driven decisions at scale, and creating competitive advantages that compound over time. The question isn't whether to adopt AI, but how quickly you can implement it effectively.",
    keyPoints: [
      {
        title: "Operational Efficiency",
        description: "AI automates repetitive tasks, reducing manual work by up to 80% and allowing teams to focus on high-value strategic activities that drive growth."
      },
      {
        title: "Data-Driven Insights",
        description: "AI processes vast amounts of data to reveal patterns humans miss, enabling better decision-making and predicting trends before competitors."
      },
      {
        title: "Enhanced Customer Experience",
        description: "AI-powered personalization and 24/7 intelligent support increase customer satisfaction by 35% while reducing response times dramatically."
      },
      {
        title: "Scalable Innovation",
        description: "AI systems learn and improve continuously, providing scalable solutions that grow more valuable over time without proportional cost increases."
      },
      {
        title: "Competitive Differentiation",
        description: "Early AI adopters create moats that are difficult for competitors to overcome, establishing market leadership through technological advantage."
      }
    ],
    visualization: (
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-3">AI Implementation Impact</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Process Automation</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-20 h-2 bg-gray-600 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-gray-700">80%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Decision Speed</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-18 h-2 bg-gray-600 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-gray-700">70%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Error Reduction</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-22 h-2 bg-gray-600 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-gray-700">90%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-700 mb-1">40%</div>
          <div className="text-sm text-gray-600">Revenue Growth Potential</div>
        </div>
      </div>
    )
  },
  businessImpact: {
    metrics: [
      {
        value: "15%",
        label: "Revenue Increase",
        description: "AI-driven businesses see significant revenue growth through optimization"
      },
      {
        value: "25%",
        label: "Cost Reduction",
        description: "Intelligent automation reduces operational costs substantially"
      },
      {
        value: "60%",
        label: "Faster Decisions",
        description: "AI-powered insights accelerate critical business decisions"
      }
    ]
  },
  implementation: {
    phases: [
      {
        title: "AI Readiness Assessment",
        description: "Evaluate your current infrastructure, data quality, and organizational readiness for AI implementation.",
        deliverables: ["Infrastructure Audit", "Data Assessment", "ROI Analysis", "Implementation Roadmap"]
      },
      {
        title: "Pilot Project Development",
        description: "Identify high-impact use cases and develop proof-of-concept AI solutions to demonstrate value.",
        deliverables: ["Use Case Identification", "Prototype Development", "Performance Testing", "Success Metrics"]
      },
      {
        title: "Full-Scale Implementation",
        description: "Deploy AI solutions across your organization with proper training, integration, and monitoring systems.",
        deliverables: ["System Integration", "User Training", "Monitoring Setup", "Performance Optimization"]
      },
      {
        title: "Optimization & Scaling",
        description: "Continuously improve AI performance and expand implementation to additional use cases and departments.",
        deliverables: ["Performance Tuning", "Model Updates", "Scaling Strategy", "Advanced Features"]
      }
    ]
  },
  technologies: [
    "TensorFlow",
    "PyTorch",
    "OpenAI GPT",
    "Hugging Face",
    "scikit-learn",
    "Azure AI",
    "Google AI",
    "AWS ML",
    "Computer Vision",
    "NLP",
    "MLOps",
    "AutoML"
  ]
}; 