import React from 'react';

export const mobileAppService = {
  title: "Mobile App Development",
  slug: "mobile-app-development",
  description: "Native and cross-platform apps that engage users everywhere",
  media: { type: 'image', src: '/services/mobile-app-image.jpg' },
  animatedText: [
    "Engage users on the go.",
    "Build for iOS and Android.",
    "Create seamless experiences.",
    "Launch your app with confidence.",
  ],
  subtitle: "Native and cross-platform apps that engage users everywhere",
  icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  hoverColor: "pink",
  headerBg: "#891347",
  iconBg: "#ffffff33",
  iconColor: "#ffb1c6", //dark secondary color
  titleColor: "#fce7f3",
  subtitleColor: "#f9a8d4",
  accentBg: "#fce7f3",
  accentColor: "#be185d",
  visualBg: "#fdf2f8",
  tagBg: "#fce7f3",
  tagColor: "#be185d",
  paragraphColor: "text-green-600",  
  techBg: "#fdf2f8",
  techColor: "#be185d",
  titleContentColor: "text-pink-900",
  backgroundPattern: (
    <div className="absolute inset-0">
      <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-2xl rotate-12"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-white/20 rounded-lg transform -rotate-45"></div>
    </div>
  ),
  importance: {
    overview: "Mobile apps are no longer optional—they're essential for business survival. With 6.8 billion smartphone users worldwide and mobile commerce expected to reach $3.56 trillion by 2024, businesses without mobile presence are invisible to their customers. Mobile apps drive 3x higher engagement than mobile websites, generate 157% more revenue per user, and create direct communication channels that build lasting customer relationships.",
    keyPoints: [
      {
        title: "Mobile-First World",
        description: "Users spend 90% of their mobile time in apps. Without a mobile app, you're missing 90% of potential customer interactions and engagement opportunities."
      },
      {
        title: "Superior User Experience",
        description: "Native apps are 2.5x faster than mobile websites, provide offline functionality, and leverage device features for seamless, intuitive experiences."
      },
      {
        title: "Direct Customer Connection",
        description: "Push notifications have 50% higher open rates than emails, enabling instant communication and driving immediate action from your audience."
      },
      {
        title: "Revenue Generation",
        description: "Mobile apps generate 3x more revenue per user than mobile websites through in-app purchases, subscriptions, and enhanced conversion funnels."
      },
      {
        title: "Brand Loyalty & Retention",
        description: "App users are 3x more likely to reorder and have 2x higher lifetime value, creating sustainable competitive advantages through habit formation."
      }
    ],
    visualization: (
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-3">Mobile App Performance</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">User Engagement</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-20 h-2 bg-pink-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-pink-600">300%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Load Speed</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-16 h-2 bg-pink-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-pink-600">250%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Conversion Rate</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-18 h-2 bg-pink-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-pink-600">157%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-pink-600 mb-1">$3.56T</div>
          <div className="text-sm text-gray-600">Mobile Commerce by 2024</div>
        </div>
      </div>
    )
  },
  businessImpact: {
    metrics: [
      {
        value: "300%",
        label: "Higher Engagement",
        description: "Mobile apps drive significantly more user engagement than websites"
      },
      {
        value: "157%",
        label: "More Revenue",
        description: "Apps generate substantially higher revenue per user"
      },
      {
        value: "50%",
        label: "Better Reach",
        description: "Push notifications have higher open rates than email"
      }
    ]
  },
  implementation: {
    phases: [
      {
        title: "Strategy & Planning",
        description: "Define app objectives, target audience, platform strategy, and create detailed technical specifications.",
        deliverables: ["Market Research", "User Personas", "Technical Specs", "Platform Strategy"]
      },
      {
        title: "Design & Prototyping",
        description: "Create intuitive user interfaces, interactive prototypes, and comprehensive design systems for optimal UX.",
        deliverables: ["UI/UX Design", "Interactive Prototypes", "Design System", "User Testing"]
      },
      {
        title: "Development & Testing",
        description: "Build robust, scalable mobile applications with comprehensive testing across devices and platforms.",
        deliverables: ["Native Development", "Cross-Platform Code", "Quality Assurance", "Performance Testing"]
      },
      {
        title: "Launch & Optimization",
        description: "Deploy to app stores, monitor performance, gather user feedback, and continuously improve the app experience.",
        deliverables: ["App Store Deployment", "Analytics Setup", "User Feedback", "Ongoing Updates"]
      }
    ]
  },
  technologies: [
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin",
    "Xamarin",
    "Ionic",
    "Firebase",
    "AWS Mobile",
    "GraphQL",
    "Redux",
    "TypeScript",
    "Jest"
  ]
}; 