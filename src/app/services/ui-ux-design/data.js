import React from 'react';

export const uiUxDesignService = {
  title: "UI/UX Design",
  slug: "ui-ux-design",
  description: "Beautiful, intuitive designs that users love and businesses trust",
  media: { type: 'video', src: '/services/ui-background.mp4' },
  animatedText: [
    "Craft intuitive interfaces.",
    "Create delightful experiences.",
    "Design for user engagement.",
    "Bring your vision to life.",
  ],
  subtitle: "Beautiful, intuitive designs that users love and businesses trust",
  icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  hoverColor: "green",
  headerBg: "#15803d",
  iconBg: "#ffffff33",
  iconColor: "#86efac",
  titleColor: "#dcfce7",
  subtitleColor: "#bbf7d0",
  accentBg: "#f0fdf4",
  accentColor: "#16a34a",
  visualBg: "#f7fee7",
  tagBg: "#f0fdf4",
  tagColor: "#15803d",
  techBg: "#f7fee7",
  techColor: "#15803d",
  titleContentColor: "text-green-900",
  backgroundPattern: (
    <div className="absolute inset-0">
      <div className="absolute top-10 left-10 w-16 h-16 border-2 border-white/20 rounded-2xl rotate-45"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-white/20 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/10 rounded-xl transform rotate-12"></div>
    </div>
  ),
  importance: {
    overview: "User experience design is the cornerstone of digital success. In an era where users have countless options, exceptional UI/UX design is what differentiates market leaders from followers. It's not just about making things look good—it's about creating intuitive, efficient, and delightful experiences that drive user engagement, reduce churn, and ultimately fuel business growth.",
    keyPoints: [
      {
        title: "User Retention & Engagement",
        description: "88% of users are less likely to return to a site after a bad user experience. Great UX design keeps users engaged and coming back."
      },
      {
        title: "Conversion Rate Optimization",
        description: "Well-designed user interfaces can increase conversion rates by up to 200%. Every design decision impacts your bottom line."
      },
      {
        title: "Reduced Development Costs",
        description: "Investing in UX design early reduces development costs by up to 50% by identifying and solving problems before coding begins."
      },
      {
        title: "Brand Differentiation",
        description: "Superior design creates emotional connections with users, building brand loyalty and distinguishing you from competitors."
      },
      {
        title: "Accessibility & Inclusion",
        description: "Inclusive design expands your market reach, ensuring your product is usable by everyone, including users with disabilities."
      }
    ],
    visualization: (
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-green-900 mb-3">Design Impact Metrics</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">User Satisfaction</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-22 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-green-600">92%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Task Completion</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-green-600">87%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Error Reduction</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-18 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-green-600">78%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">300%</div>
          <div className="text-sm text-gray-600">ROI on UX Investment</div>
        </div>
      </div>
    )
  },
  businessImpact: {
    metrics: [
      {
        value: "200%",
        label: "Higher Conversions",
        description: "Well-designed interfaces significantly boost conversion rates"
      },
      {
        value: "2.5x",
        label: "User Engagement",
        description: "Users spend more time on well-designed applications"
      },
      {
        value: "60%",
        label: "Reduced Support",
        description: "Intuitive design reduces customer support requests"
      }
    ]
  },
  implementation: {
    phases: [
      {
        title: "User Research & Analysis",
        description: "Deep dive into user behavior, needs, and pain points through research, interviews, and data analysis.",
        deliverables: ["User Personas", "Journey Maps", "Competitive Analysis", "Research Insights"]
      },
      {
        title: "Information Architecture",
        description: "Organizing and structuring content and functionality to create intuitive navigation and user flows.",
        deliverables: ["Site Maps", "User Flows", "Wireframes", "Content Strategy"]
      },
      {
        title: "Visual Design & Prototyping",
        description: "Creating beautiful, on-brand visual designs and interactive prototypes for testing and validation.",
        deliverables: ["Visual Mockups", "Design System", "Interactive Prototypes", "Brand Guidelines"]
      },
      {
        title: "Testing & Optimization",
        description: "Validating designs through user testing and iterating based on feedback and data.",
        deliverables: ["Usability Testing", "A/B Testing", "Performance Analysis", "Final Designs"]
      }
    ]
  },
  technologies: [
    "Figma",
    "Sketch",
    "Adobe XD",
    "InVision",
    "Principle",
    "Framer",
    "Miro",
    "Hotjar",
    "Maze",
    "Lookback",
    "UsabilityHub",
    "Optimal Workshop"
  ]
}; 