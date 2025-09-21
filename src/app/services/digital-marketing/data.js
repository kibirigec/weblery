import React from 'react';

export const digitalMarketingService = {
  title: "Digital Marketing",
  slug: "digital-marketing",
  description: "Strategic campaigns that drive growth and maximize ROI",
  media: { type: 'video', src: '/streams/digital-marketing-background.m3u8' },
  animatedText: [
    "Reach your target audience.",
    "Drive meaningful engagement.",
    "Convert leads into customers.",
    "Grow your brand with data.",
  ],
  subtitle: "Strategic campaigns that drive growth and maximize ROI",
  icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
  hoverColor: "yellow",
  headerBg: "#b45309",
  iconBg: "#ffffff33",
  iconColor: "#fcd34d",
  titleColor: "#fef3c7",
  subtitleColor: "#fed7aa",
  accentBg: "#fffbeb",
  accentColor: "#d97706",
  visualBg: "#fefdf8",
  tagBg: "#fffbeb",
  tagColor: "#b45309",
  techBg: "#fefdf8",
  techColor: "#b45309",
  titleContentColor: "text-amber-900",
  backgroundPattern: (
    <div className="absolute inset-0">
      <div className="absolute top-10 left-10 w-24 h-6 bg-white/10 rounded-full rotate-12"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/20 rounded-xl rotate-45"></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-white/10 rounded-full"></div>
    </div>
  ),
  importance: {
    overview: "Digital marketing is no longer optional—it's essential for business survival and growth. In a world where 4.9 billion people are online, digital marketing provides unparalleled opportunities to reach, engage, and convert your ideal customers. It's not just about visibility; it's about building meaningful relationships, driving qualified traffic, and generating measurable ROI that directly impacts your bottom line.",
    keyPoints: [
      {
        title: "Massive Reach & Targeting",
        description: "Digital marketing allows you to reach millions of potential customers while precisely targeting those most likely to convert, maximizing efficiency and ROI."
      },
      {
        title: "Measurable Results",
        description: "Unlike traditional marketing, digital campaigns provide detailed analytics and real-time data, allowing for immediate optimization and clear ROI tracking."
      },
      {
        title: "Cost-Effective Growth",
        description: "Digital marketing typically costs 62% less than traditional marketing while generating 3x more leads, making it essential for budget-conscious businesses."
      },
      {
        title: "Customer Behavior Insights",
        description: "Digital platforms provide deep insights into customer behavior, preferences, and journey stages, enabling personalized experiences that drive conversions."
      },
      {
        title: "Competitive Necessity",
        description: "With 81% of retail shoppers researching online before buying, businesses without a strong digital presence lose customers to competitors who invest in digital marketing."
      }
    ],
    visualization: (
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-yellow-900 mb-3">Marketing ROI Comparison</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Lead Generation</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-22 h-2 bg-yellow-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-yellow-600">+320%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Brand Awareness</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-20 h-2 bg-yellow-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-yellow-600">+280%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Customer Acquisition</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-18 h-2 bg-yellow-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-yellow-600">+240%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-600 mb-1">$5.44</div>
          <div className="text-sm text-gray-600">ROI per $1 Spent</div>
        </div>
      </div>
    )
  },
  businessImpact: {
    metrics: [
      {
        value: "400%",
        label: "Lead Increase",
        description: "Strategic digital campaigns dramatically boost qualified leads"
      },
      {
        value: "5.4x",
        label: "ROI Average",
        description: "Digital marketing delivers exceptional return on investment"
      },
      {
        value: "78%",
        label: "Brand Awareness",
        description: "Comprehensive campaigns significantly increase brand recognition"
      }
    ]
  },
  implementation: {
    phases: [
      {
        title: "Strategy & Research",
        description: "Comprehensive market analysis, competitor research, and strategic planning to identify opportunities and develop targeted campaigns.",
        deliverables: ["Market Analysis", "Competitor Research", "Customer Personas", "Marketing Strategy"]
      },
      {
        title: "Campaign Development",
        description: "Creating compelling content, designing creatives, and setting up tracking systems across multiple digital channels.",
        deliverables: ["Content Creation", "Ad Creatives", "Landing Pages", "Analytics Setup"]
      },
      {
        title: "Multi-Channel Execution",
        description: "Launching coordinated campaigns across SEO, PPC, social media, email, and content marketing channels.",
        deliverables: ["Campaign Launch", "Social Media Management", "Email Campaigns", "Content Publishing"]
      },
      {
        title: "Optimization & Scaling",
        description: "Continuous monitoring, A/B testing, and optimization to improve performance and scale successful campaigns.",
        deliverables: ["Performance Reports", "A/B Testing", "Campaign Optimization", "Scaling Strategy"]
      }
    ]
  },
  technologies: [
    "Google Ads",
    "Facebook Ads", 
    "Google Analytics",
    "HubSpot",
    "Mailchimp",
    "Hootsuite",
    "SEMrush",
    "Ahrefs",
    "Buffer",
    "Canva",
    "Zapier",
    "Hotjar"
  ]
}; 