import React from 'react';

export const performanceOptimizationService = {
  title: "Performance Optimization",
  slug: "performance-optimization",
  description: "Lightning-fast experiences that keep users engaged",
  media: [
    { type: 'image', src: '/services/optimization-image.jpg' },
    { type: 'image', src: '/services/random-image-2.jpg' },
    { type: 'image', src: '/services/random-image-3.jpg' },
  ],
  animatedText: [
    "Speed up your website.",
    "Improve user experience.",
    "Boost your SEO rankings.",
    "Convert more visitors.",
  ],
  subtitle: "Lightning-fast experiences that keep users engaged",
  icon: "M13 10V3L4 14h7v7l9-11h-7z",
  hoverColor: "orange",
  headerBg: "#c2410c",
  iconBg: "#ffffff33",
  iconColor: "#fdba74",
  titleColor: "#fed7aa",
  subtitleColor: "#fde68a",
  accentBg: "#fff7ed",
  accentColor: "#ea580c",
  visualBg: "#fffbf5",
  tagBg: "#fff7ed",
  tagColor: "#c2410c",
  techBg: "#fffbf5",
  techColor: "#c2410c",
  titleContentColor: "text-orange-900",
  backgroundPattern: (
    <div className="absolute inset-0">
      <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-2xl rotate-12"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-white/20 rounded-lg transform -rotate-45"></div>
    </div>
  ),
  importance: {
    overview: "Website performance isn't just about speed—it's about revenue, user satisfaction, and competitive advantage. A 1-second delay in page load time reduces conversions by 7%, while a 100ms improvement can boost conversions by 1%. With 53% of users abandoning sites that take longer than 3 seconds to load, performance optimization is the difference between business success and failure in the digital age.",
    keyPoints: [
      {
        title: "Revenue Impact",
        description: "Every 100ms improvement in load time increases conversions by 1%. For e-commerce sites, this translates to millions in additional revenue annually."
      },
      {
        title: "User Experience",
        description: "Fast sites create positive first impressions, reduce bounce rates by up to 32%, and increase user engagement and satisfaction significantly."
      },
      {
        title: "SEO Rankings",
        description: "Google uses page speed as a ranking factor. Faster sites rank higher, receive more organic traffic, and dominate search results."
      },
      {
        title: "Mobile Performance",
        description: "With 60% of searches on mobile, optimized performance ensures your site works flawlessly across all devices and network conditions."
      },
      {
        title: "Competitive Advantage",
        description: "While competitors struggle with slow sites, your optimized performance creates a superior user experience that drives customer loyalty."
      }
    ],
    visualization: (
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-3">Performance Impact</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Load Time Improvement</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-20 h-2 bg-orange-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-orange-600">75%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Bounce Rate Reduction</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-16 h-2 bg-orange-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-orange-600">32%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Conversion Increase</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-18 h-2 bg-orange-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-orange-600">27%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600 mb-1">&lt;2s</div>
          <div className="text-sm text-gray-600">Target Load Time</div>
        </div>
      </div>
    )
  },
  businessImpact: {
    metrics: [
      {
        value: "27%",
        label: "Conversion Boost",
        description: "Optimized performance directly increases conversion rates"
      },
      {
        value: "32%",
        label: "Lower Bounce Rate",
        description: "Fast sites keep users engaged and reduce abandonment"
      },
      {
        value: "75%",
        label: "Speed Improvement",
        description: "Comprehensive optimization delivers dramatic speed gains"
      }
    ]
  },
  implementation: {
    phases: [
      {
        title: "Performance Audit",
        description: "Comprehensive analysis of current performance bottlenecks, load times, and optimization opportunities.",
        deliverables: ["Speed Analysis", "Bottleneck Identification", "Optimization Plan", "Baseline Metrics"]
      },
      {
        title: "Technical Optimization",
        description: "Implement code optimization, image compression, caching strategies, and database improvements.",
        deliverables: ["Code Optimization", "Image Compression", "Caching Setup", "Database Tuning"]
      },
      {
        title: "Infrastructure Enhancement",
        description: "Optimize hosting, implement CDN, configure server settings, and enhance delivery mechanisms.",
        deliverables: ["CDN Implementation", "Server Optimization", "Hosting Upgrade", "Load Balancing"]
      },
      {
        title: "Monitoring & Maintenance",
        description: "Continuous performance monitoring, regular optimization updates, and proactive maintenance.",
        deliverables: ["Performance Monitoring", "Regular Updates", "Maintenance Plan", "Reporting Dashboard"]
      }
    ]
  },
  technologies: [
    "Lighthouse",
    "WebPageTest",
    "GTmetrix",
    "CloudFlare",
    "Redis",
    "Varnish",
    "Nginx",
    "Apache",
    "ImageOptim",
    "Webpack",
    "Gzip",
    "HTTP/2"
  ]
}; 