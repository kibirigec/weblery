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
    overview: "AI has moved beyond simple automation—it’s now about intelligent agents that act like digital teammates. These agents don’t just follow instructions, they think, adapt, and execute with precision. They monitor your operations 24/7, anticipate problems before they arise, and trigger the right solutions instantly. Imagine replacing hours of repetitive human labor with a system that never sleeps, never calls in sick, and gets sharper with every interaction. Businesses adopting agents today are not just cutting costs—they’re compounding efficiency, unlocking innovation, and building competitive advantages that late adopters won’t catch up to.",
    keyPoints: [
      {
        title: "AI Agents as Your Workforce Multipliers",
        description: "Agents handle what normally takes entire teams: customer support, scheduling, logistics, compliance, funnel management—you name it. Instead of replacing people, they absorb the repetitive, labor-intensive tasks so your human team can focus on strategy, creativity, and high-value innovation. This translates into massive salary savings while scaling productivity."
      },
      {
        title: "Real-Time, Data-Driven Action",
        description: "Agents analyze massive datasets on the fly—spotting hidden patterns, risks, or emerging opportunities. Unlike humans who just report, agents can instantly act, fixing an issue or capitalizing on a trend before your competition even notices."
      },
      {
        title: "Always-On Customer Experience",
        description: "Picture a customer landing on your site at 2 a.m. and receiving tailored help from an agent that remembers their history, recommends the perfect product, and completes the booking—all without a single human awake. That’s seamless, scalable service at a fraction of the labor cost."
      },
      {
        title: "Self-Learning Systems",
        description: "With every interaction, agents evolve. The same system answering support tickets today could be optimizing marketing campaigns, driving sales, or managing workflows tomorrow—without additional hires or overhead."
      },
      {
        title: "Competitive Edge That Snowballs",
        description: "The earlier agents are deployed, the more data they learn from and the bigger the advantage. Businesses embedding agents now are creating compounding effects in speed, accuracy, personalization, and cost-efficiency that late adopters simply won’t be able to close."
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
        description: "Companies with AI agents consistently see measurable growth fueled by efficiency, personalization, and proactive service."
      },
      {
        value: "25%",
        label: "Labor Cost Reduction",
        description: "By offloading repetitive work to agents, businesses slash salary overhead while improving output quality and speed."
      },
      {
        value: "60%",
        label: "Faster Decisions",
        description: "AI-powered agents accelerate decision-making, empowering leaders to act with confidence in real time."
      }
    ]
  },
  implementation: {
    phases: [
      {
        title: "AI Readiness Assessment",
        description: "We evaluate where agents can deliver maximum ROI—whether in customer support, operations, or analytics.",
        deliverables: ["Process Audit", "Data Quality Check", "ROI Projections", "Implementation Roadmap"]
      },
      {
        title: "Pilot Project Development",
        description: "We design and deploy a high-impact agent prototype—automating tasks like ticketing, insights, or scheduling.",
        deliverables: ["Use Case Selection", "Agent Prototype", "Performance Testing", "Success Metrics"]
      },
      {
        title: "Full-Scale Implementation",
        description: "We scale agents across the organization with seamless integrations, staff enablement, and continuous monitoring.",
        deliverables: ["Integration Setup", "Staff Training", "Monitoring Tools", "Optimization Processes"]
      },
      {
        title: "Optimization & Scaling",
        description: "Agents continuously learn, adapt, and expand into new functions—improving efficiency without new hires.",
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
