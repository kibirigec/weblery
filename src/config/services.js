export const servicesList = [
  {
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications built with the latest technologies for iOS and Android platforms.",
    hoverColor: "pink",
    slug: "mobile-app-development",
    features: ["iOS & Android", "React Native", "Flutter", "Swift & Kotlin"]
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Custom AI Integration",
    description: "Intelligent automation and AI-powered features to streamline operations and enhance user engagement.",
    hoverColor: "black",
    slug: "ai-integration",
    features: ["Machine Learning", "Chatbots", "Data Analysis", "Automation"]
  },
  {
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Web Development",
    description: "Modern, responsive websites and web applications that deliver exceptional user experiences and drive results.",
    hoverColor: "blue",
    slug: "web-development",
    features: ["React.js", "Next.js", "Node.js", "Custom CMS"]
  },
  {
    icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Digital Marketing Strategy",
    description: "Data-driven marketing campaigns and strategies to maximize your reach and conversion rates.",
    hoverColor: "yellow",
    slug: "digital-marketing",
    features: ["SEO", "PPC Campaigns", "Social Media", "Content Marketing"]
  },
  {
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    title: "UI/UX Design",
    description: "Intuitive and beautiful user interfaces that provide seamless experiences across all devices.",
    hoverColor: "green",
    slug: "ui-ux-design",
    features: ["User Research", "Wireframing", "Prototyping", "User Testing"]
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Performance Optimization",
    description: "Speed and performance optimization to ensure your digital products load fast and run smoothly.",
    hoverColor: "orange",
    slug: "performance-optimization",
    features: ["Speed Optimization", "Code Refactoring", "Caching", "Load Balancing"]
  }
];

export const SERVICES = {
  'mobile-app-development': {
    name: 'Mobile App Development',
    basePrice: 8000,
    description: 'Native and cross-platform mobile applications',
    baseInclusions: [
      'Basic app structure and architecture',
      'Single platform development (iOS or Android)',
      'Basic UI/UX implementation',
      'Core functionality development',
      'Basic testing and deployment'
    ],
    subServices: {
      'ios-development': {
        name: 'iOS Development',
        price: 2000,
        description: 'Native iOS application development',
        inclusions: [
          'Swift/SwiftUI development',
          'iOS-specific features',
          'App Store deployment',
          'iOS device testing'
        ]
      },
      'android-development': {
        name: 'Android Development',
        price: 2000,
        description: 'Native Android application development',
        inclusions: [
          'Kotlin/Java development',
          'Android-specific features',
          'Play Store deployment',
          'Android device testing'
        ]
      },
      'cross-platform': {
        name: 'Cross-Platform Development',
        price: 3000,
        description: 'React Native or Flutter development',
        inclusions: [
          'Cross-platform framework setup',
          'Platform-specific optimizations',
          'Unified codebase',
          'Multi-platform testing'
        ]
      },
      'app-maintenance': {
        name: 'App Maintenance & Support',
        price: 1000,
        description: 'Ongoing maintenance and support',
        inclusions: [
          'Bug fixes and updates',
          'Performance monitoring',
          'Security patches',
          'Technical support'
        ]
      }
    }
  },
  'web-development': {
    name: 'Web Development',
    basePrice: 6000,
    description: 'Custom web applications and websites',
    baseInclusions: [
      'Basic website structure',
      'Responsive design',
      'Core functionality',
      'Basic SEO setup',
      'Initial deployment'
    ],
    subServices: {
      'frontend': {
        name: 'Frontend Development',
        price: 1500,
        description: 'Advanced frontend development',
        inclusions: [
          'Modern framework implementation',
          'Interactive UI components',
          'Performance optimization',
          'Cross-browser compatibility'
        ]
      },
      'backend': {
        name: 'Backend Development',
        price: 2000,
        description: 'Server-side development',
        inclusions: [
          'API development',
          'Database integration',
          'Server setup',
          'Security implementation'
        ]
      },
      'ecommerce': {
        name: 'E-commerce Solutions',
        price: 2500,
        description: 'Complete e-commerce functionality',
        inclusions: [
          'Product management',
          'Shopping cart',
          'Payment integration',
          'Order management'
        ]
      },
      'cms': {
        name: 'Content Management Systems',
        price: 1500,
        description: 'Custom CMS development',
        inclusions: [
          'Content management interface',
          'User roles and permissions',
          'Media management',
          'Content workflow'
        ]
      }
    }
  },
  'ai-integration': {
    name: 'AI Integration',
    basePrice: 10000,
    description: 'Artificial Intelligence and Machine Learning solutions',
    baseInclusions: [
      'AI strategy consultation',
      'Basic model integration',
      'Data pipeline setup',
      'Initial testing'
    ],
    subServices: {
      'ml-models': {
        name: 'ML Model Development',
        price: 5000,
        description: 'Custom machine learning models',
        inclusions: [
          'Model architecture design',
          'Training pipeline',
          'Model optimization',
          'Performance testing'
        ]
      },
      'data-analysis': {
        name: 'Data Analysis',
        price: 3000,
        description: 'Advanced data analysis',
        inclusions: [
          'Data processing',
          'Statistical analysis',
          'Visualization',
          'Insights generation'
        ]
      },
      'automation': {
        name: 'Process Automation',
        price: 2000,
        description: 'AI-powered automation',
        inclusions: [
          'Workflow analysis',
          'Automation implementation',
          'Integration with existing systems',
          'Monitoring setup'
        ]
      },
      'chatbots': {
        name: 'AI Chatbots',
        price: 2500,
        description: 'Intelligent chatbot development',
        inclusions: [
          'Conversation design',
          'NLP integration',
          'Multi-channel deployment',
          'Analytics setup'
        ]
      }
    }
  },
  'digital-marketing': {
    name: 'Digital Marketing',
    basePrice: 5000,
    description: 'Comprehensive digital marketing solutions',
    baseInclusions: [
      'Marketing strategy',
      'Basic analytics setup',
      'Initial campaign planning',
      'Performance tracking'
    ],
    subServices: {
      'seo': {
        name: 'Search Engine Optimization',
        price: 1500,
        description: 'Complete SEO optimization',
        inclusions: [
          'Keyword research',
          'On-page optimization',
          'Technical SEO',
          'Performance tracking'
        ]
      },
      'sem': {
        name: 'Search Engine Marketing',
        price: 2000,
        description: 'Paid search campaigns',
        inclusions: [
          'Campaign setup',
          'Ad creation',
          'Budget management',
          'Performance optimization'
        ]
      },
      'social-media': {
        name: 'Social Media Marketing',
        price: 1500,
        description: 'Social media management',
        inclusions: [
          'Content strategy',
          'Platform management',
          'Community engagement',
          'Analytics reporting'
        ]
      },
      'content-marketing': {
        name: 'Content Marketing',
        price: 2000,
        description: 'Content creation and strategy',
        inclusions: [
          'Content strategy',
          'Content creation',
          'Distribution planning',
          'Performance analysis'
        ]
      }
    }
  },
  'ui-ux-design': {
    name: 'UI/UX Design',
    basePrice: 4000,
    description: 'User interface and experience design',
    baseInclusions: [
      'Basic user research',
      'Wireframe creation',
      'Basic UI design',
      'Initial usability testing'
    ],
    subServices: {
      'wireframing': {
        name: 'Wireframing',
        price: 1000,
        description: 'Detailed wireframe creation',
        inclusions: [
          'User flow mapping',
          'Interactive wireframes',
          'User feedback integration',
          'Iteration support'
        ]
      },
      'prototyping': {
        name: 'Prototyping',
        price: 1500,
        description: 'Interactive prototype development',
        inclusions: [
          'High-fidelity prototypes',
          'User interaction design',
          'Animation and transitions',
          'User testing support'
        ]
      },
      'user-research': {
        name: 'User Research',
        price: 2000,
        description: 'Comprehensive user research',
        inclusions: [
          'User interviews',
          'Usability testing',
          'Data analysis',
          'Recommendations'
        ]
      },
      'usability-testing': {
        name: 'Usability Testing',
        price: 1500,
        description: 'Detailed usability testing',
        inclusions: [
          'Test planning',
          'User recruitment',
          'Test execution',
          'Analysis and reporting'
        ]
      }
    }
  },
  'performance-optimization': {
    name: 'Performance Optimization',
    basePrice: 3000,
    description: 'Application and website optimization',
    baseInclusions: [
      'Initial performance audit',
      'Basic optimization',
      'Performance monitoring setup',
      'Initial recommendations'
    ],
    subServices: {
      'speed-optimization': {
        name: 'Speed Optimization',
        price: 1500,
        description: 'Comprehensive speed optimization',
        inclusions: [
          'Load time optimization',
          'Resource optimization',
          'Caching implementation',
          'Performance testing'
        ]
      },
      'seo-optimization': {
        name: 'SEO Optimization',
        price: 1000,
        description: 'Technical SEO optimization',
        inclusions: [
          'Meta optimization',
          'Schema markup',
          'Technical improvements',
          'Performance impact'
        ]
      },
      'security-audit': {
        name: 'Security Audit',
        price: 2000,
        description: 'Comprehensive security audit',
        inclusions: [
          'Vulnerability assessment',
          'Security testing',
          'Compliance checking',
          'Recommendations'
        ]
      },
      'performance-monitoring': {
        name: 'Performance Monitoring',
        price: 1000,
        description: 'Ongoing performance monitoring',
        inclusions: [
          'Monitoring setup',
          'Alert configuration',
          'Performance reporting',
          'Optimization support'
        ]
      }
    }
  }
};

export const PACKAGES = {
  'Silver': {
    price: 9999,
    description: 'Perfect for small businesses and startups',
    includedServices: ['web-development', 'ui-ux-design'],
    timeline: '4-6 weeks',
    features: [
      'Basic website development',
      'UI/UX design',
      'Basic SEO optimization',
      '1 month of support'
    ],
    valueBreakdown: {
      'web-development': 6000,
      'ui-ux-design': 4000,
      'seo-optimization': 1000,
      'support': 1000,
      'discount': -2010
    }
  },
  'Gold': {
    price: 19999,
    description: 'Ideal for growing businesses',
    includedServices: ['web-development', 'ui-ux-design', 'digital-marketing'],
    timeline: '8-10 weeks',
    features: [
      'Advanced website development',
      'Premium UI/UX design',
      'Digital marketing package',
      '3 months of support',
      'Performance optimization'
    ],
    valueBreakdown: {
      'web-development': 6000,
      'ui-ux-design': 4000,
      'digital-marketing': 5000,
      'performance-optimization': 3000,
      'support': 3000,
      'discount': -2000
    }
  },
  'Platinum': {
    price: 39999,
    description: 'Complete solution for established businesses',
    includedServices: ['web-development', 'mobile-app-development', 'ui-ux-design', 'digital-marketing', 'ai-integration'],
    timeline: '12-16 weeks',
    features: [
      'Full-stack development',
      'Mobile app development',
      'Premium UI/UX design',
      'Comprehensive digital marketing',
      'AI integration',
      '6 months of support',
      'Priority support'
    ],
    valueBreakdown: {
      'web-development': 6000,
      'mobile-app-development': 8000,
      'ui-ux-design': 4000,
      'digital-marketing': 5000,
      'ai-integration': 10000,
      'support': 6000,
      'priority-support': 2000,
      'discount': -6000
    }
  }
};

export const RECOMMENDATION_RULES = [
  {
    condition: (selectedServices) => selectedServices.includes('mobile-app-development') && !selectedServices.includes('ui-ux-design'),
    recommendation: 'ui-ux-design',
    reason: 'UI/UX design is recommended for mobile app development to ensure a great user experience'
  },
  {
    condition: (selectedServices) => selectedServices.includes('web-development') && !selectedServices.includes('performance-optimization'),
    recommendation: 'performance-optimization',
    reason: 'Performance optimization is recommended for web development to ensure fast loading times'
  },
  {
    condition: (selectedServices) => (selectedServices.includes('web-development') || selectedServices.includes('mobile-app-development')) && !selectedServices.includes('digital-marketing'),
    recommendation: 'digital-marketing',
    reason: 'Digital marketing is recommended to help promote your new digital presence'
  }
]; 