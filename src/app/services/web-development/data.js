import React from 'react';

export const webDevelopmentService = {
  title: "Web Development",
  slug: "web-development",
  description: "Building the foundation of your digital presence",
  media: { type: 'video', src: '/streams/website-background.m3u8' },
  animatedText: [
    "Build responsive websites.",
    "Create powerful web apps.",
    "Deliver seamless experiences.",
    "Grow your business online.",
  ],
  subtitle: "Building the foundation of your digital presence",
  icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  hoverColor: "blue",
  headerBg: "#1e3a8a",
  iconBg: "#ffffff33",
  iconColor: "#93c5fd",
  titleColor: "#dbeafe",
  subtitleColor: "#bfdbfe",
  accentBg: "#eff6ff",
  accentColor: "#1d4ed8",
  visualBg: "#f0f9ff",
  tagBg: "#eff6ff",
  tagColor: "#1e40af",
  techBg: "#f0f9ff",
  techColor: "#1e40af",
  titleContentColor: "text-blue-900",
  backgroundPattern: (
    <div className="absolute inset-0">
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-lg rotate-12"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/20 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/10 rounded-lg transform -rotate-45"></div>
    </div>
  ),
  importance: {
    overview: "In today's digital-first world, your website is often the first point of contact between your business and potential customers. Professional web development isn't just about having an online presence—it's about creating a powerful digital foundation that drives growth, builds credibility, and delivers exceptional user experiences that convert visitors into loyal customers.",
    keyPoints: [
      {
        title: "First Impressions Matter",
        description: "94% of first impressions are design-related. A professionally developed website establishes instant credibility and trust with your audience."
      },
      {
        title: "24/7 Business Presence",
        description: "Your website works around the clock, providing information, capturing leads, and processing transactions even when you're not available."
      },
      {
        title: "Competitive Advantage",
        description: "A well-designed, fast-loading website gives you a significant edge over competitors with outdated or poorly performing sites."
      },
      {
        title: "Scalable Growth Platform",
        description: "Modern web development creates a foundation that can grow with your business, accommodating new features and increased traffic."
      },
      {
        title: "Data-Driven Insights",
        description: "Professional websites come with analytics integration, providing valuable insights into customer behavior and business performance."
      }
    ],
    visualization: (
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-blue-900 mb-3">Website Performance Impact</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Load Speed Improvement</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-20 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-blue-600">85%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">User Engagement</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-18 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-blue-600">75%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Conversion Rate</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-16 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-blue-600">65%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">200%</div>
          <div className="text-sm text-gray-600">Average ROI Increase</div>
        </div>
      </div>
    )
  },
  businessImpact: {
    metrics: [
      {
        value: "75%",
        label: "More Leads",
        description: "Professional websites generate significantly more qualified leads"
      },
      {
        value: "3x",
        label: "Better SEO",
        description: "Modern development practices improve search engine rankings"
      },
      {
        value: "50%",
        label: "Lower Bounce Rate",
        description: "Well-designed sites keep visitors engaged longer"
      }
    ]
  },
  implementation: {
    phases: [
      {
        title: "Discovery & Strategy",
        description: "We analyze your business goals, target audience, and technical requirements to create a comprehensive development strategy.",
        deliverables: ["Requirements Analysis", "User Research", "Technical Architecture", "Project Timeline"]
      },
      {
        title: "Design & Prototyping",
        description: "Creating wireframes, mockups, and interactive prototypes that align with your brand and user experience goals.",
        deliverables: ["Wireframes", "UI/UX Design", "Interactive Prototype", "Design System"]
      },
      {
        title: "Development & Integration",
        description: "Building your website using modern technologies, ensuring performance, security, and scalability.",
        deliverables: ["Frontend Development", "Backend Integration", "CMS Setup", "Third-party Integrations"]
      },
      {
        title: "Testing & Launch",
        description: "Comprehensive testing across devices and browsers, followed by deployment and ongoing support.",
        deliverables: ["Quality Assurance", "Performance Testing", "Deployment", "Training & Support"]
      }
    ]
  },
  technologies: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "GraphQL",
    "Redis",
    "Stripe",
    "Firebase"
  ]
}; 