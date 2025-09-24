import React from 'react';

export const aiIntegrationService = {
  title: "AI Integration",
  slug: "ai-integration",
  description: "Intelligent solutions that transform your business operations",
  media: { type: 'video', src: 'https://res.cloudinary.com/dz2o14lnf/video/upload/v1758724352/2792370-hd_1920_1080_30fps_t6f9zn.mp4' }, // Replace with your Cloudinary video URL,
  animatedText: [
    "Deploy intelligent agents.",
    "Automate complex tasks.",
    "Turn data into decisions.",
    "Delight customers at scale.",
  ],
  subtitle: "AI agents that work alongside your team, 24/7",
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
    overview: "AI isn’t just about automation anymore—it’s about intelligent agents that act like digital teammates. They monitor your business around the clock, catch problems before they happen, and even trigger the right actions automatically. Imagine having a team that never sleeps, never misses a detail, and keeps getting smarter every day. That’s what agents bring to the table. The businesses adopting them now aren’t just staying efficient—they’re pulling ahead, building competitive advantages that others won’t be able to catch up to.",
    keyPoints: [
      {
        title: "AI Agents as Your Digital Teammates",
        description: "Agents can handle customer support, schedule logistics, monitor your sales funnel, or even manage compliance checks automatically. Instead of replacing humans, they take over the grunt work so your people can focus on strategy, creativity, and growth."
      },
      {
        title: "Data-Driven Insights",
        description: "Agents process massive datasets in real time—spotting patterns like drops in customer engagement, sudden inventory risks, or emerging trends. And they don’t just report them—they act on them instantly if you want."
      },
      {
        title: "Enhanced Customer Experience",
        description: "Imagine a customer landing on your site at midnight and getting personalized help from an agent that remembers their history, recommends products, and books a service—all without waiting for a human to wake up."
      },
      {
        title: "Scalable Innovation",
        description: "Because agents learn from every interaction, your system doesn’t just run smoothly—it continuously improves. That means the same agents that answer support tickets today could be optimizing marketing campaigns tomorrow."
      },
      {
        title: "Competitive Differentiation",
        description: "Early adopters of agents build advantages that snowball. Once agents are embedded across operations, they create a level of speed, accuracy, and personalization that latecomers simply can’t match."
      }
    ],
    visualization: (
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-3">AI Agent Impact</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Tasks Automated</span>
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
        description: "Companies with AI agents see measurable growth from efficiency and personalization."
      },
      {
        value: "25%",
        label: "Cost Reduction",
        description: "Agents cut down on manual labor costs while improving accuracy and speed."
      },
      {
        value: "60%",
        label: "Faster Decisions",
        description: "AI-powered agents help leaders act with confidence in real time."
      }
    ]
  },
  implementation: {
    phases: [
      {
        title: "AI Readiness Assessment",
        description: "We assess where agents can create the most value—whether in operations, customer support, or analytics.",
        deliverables: ["Process Audit", "Data Quality Check", "ROI Projections", "Implementation Roadmap"]
      },
      {
        title: "Pilot Project Development",
        description: "We build and test a first agent in a high-impact area, like automating support tickets or generating real-time insights.",
        deliverables: ["Use Case Selection", "Agent Prototype", "Performance Testing", "Success Metrics"]
      },
      {
        title: "Full-Scale Implementation",
        description: "We roll out agents across the organization with smooth integrations, employee training, and monitoring systems.",
        deliverables: ["Integration Setup", "Staff Training", "Monitoring Tools", "Optimization Processes"]
      },
      {
        title: "Optimization & Scaling",
        description: "Agents evolve over time—improving models, learning from interactions, and expanding into new areas of your business.",
        deliverables: ["Performance Tuning", "Continuous Updates", "Scaling Playbook", "Advanced Features"]
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
    "AutoML",
    "AI Agents"
  ]
};
