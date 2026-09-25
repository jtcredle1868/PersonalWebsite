/* ==========================================================================
   Site content — edit this file to update profile copy, stats, services,
   experience, speaking history and testimonials. Blog posts, videos and
   books live in src/content/ (see README).
   ========================================================================== */

export const site = {
  name: 'Thomas Credle',
  fullName: 'J. Thomas Credle, MBA',
  title: 'Thomas Credle — Capital Strategy, Consulting & Business Education',
  description:
    'Thomas Credle helps founders and owners raise capital, structure their businesses and make better financial decisions. Consultant, speaker, and educator based in Columbus, Georgia.',
  location: 'Columbus, GA · Phenix City, AL',
  url: 'https://john-thomas-credle.com',
  email: 'info@john-thomas-credle.com',
  // Contact-form delivery. Leave empty to use FormSubmit (https://formsubmit.co), which emails
  // submissions to `email` above — the first submission sends a one-time activation link to that inbox.
  // To use Formspree instead, paste its endpoint, e.g. https://formspree.io/f/abcdwxyz
  formEndpoint: '',
  // EDIT: paste a booking link (Calendly, Cal.com, Microsoft Bookings) to show a "Book a call" button.
  bookingUrl: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/thomascredle1868/',
    youtube: '',
  },
  disclaimer:
    'This is a personal site. Views expressed here are my own and do not represent the University of Georgia or the UGA Small Business Development Center.',
};

export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Training', href: '/videos' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Blog', href: '/blog' },
  { label: 'Books', href: '/books' },
  { label: 'Store', href: '/store' },
];

export const stats = [
  { value: '$20M+', label: 'Capital raised for clients across 40+ placements' },
  { value: '380', label: 'Businesses advised one-on-one' },
  { value: '70', label: 'New businesses launched' },
  { value: '400+', label: 'Jobs supported by client companies' },
];

export const expertise = [
  'Capital acquisition & capital-stack design',
  'Commercial lending & underwriting',
  'SBA, CDFI & alternative capital',
  'Private-equity pitch readiness',
  'Managerial accounting & forecasting',
  'Excel, Power BI & data analytics',
  'Strategic planning (6-C method)',
  'Sales management',
  'Facilitation & adult learning',
];

export const services = [
  {
    id: 'capital',
    title: 'Capital Strategy',
    summary:
      'Twenty years on the lending side of the desk, turned around for owners. I help you understand how a lender or investor will read your file — and then build the file they want to see.',
    points: [
      'Loan readiness reviews and global debt-service-coverage analysis',
      'Commercial real estate: owner-occupied, investment, SBA 504, mini-perm',
      'Alternative capital — credit unions, CDFIs, development authorities, fintech, crowdfunding',
      'Capital-stack design across debt, grants and equity',
      'Pitch-deck and investor-pitch coaching for pre-seed and seed rounds',
    ],
  },
  {
    id: 'launch',
    title: 'Business Launch & Structure',
    summary:
      'Getting the foundation right — entity, ownership, projections and plan — so the business can grow without having to be rebuilt.',
    points: [
      'Entity selection and holding-company structures for real estate',
      'Business plans written to support a credit application',
      'Three-statement financial projections and ROI models',
      'Market, demographic and site-selection research',
    ],
  },
  {
    id: 'finance',
    title: 'Financial Clarity & Analytics',
    summary:
      'Most owners are sitting on the data that answers their hardest questions. I build the tools that surface it.',
    points: [
      'Managerial accounting set-up and QuickBooks Online clean-up',
      'Excel and Power BI dashboards for cash flow, sales and KPIs',
      'Budgeting, forecasting and pricing analysis',
      'Product and sales analytics (regression, ANOVA, basket analysis)',
    ],
  },
  {
    id: 'strategy',
    title: 'Strategic Planning & Sales',
    summary:
      'Strategy that turns into business-level plans with owners, steps and KPIs — and a sales function that is managed as a process.',
    points: [
      'Facilitated strategic-planning sessions using the 6-C methodology',
      'Go / No-Go decision models for new initiatives',
      'Sales-management systems, incentives and coaching',
    ],
  },
  {
    id: 'speaking',
    title: 'Speaking & Workshops',
    summary:
      'Keynotes, breakouts, panels and multi-day workshops for chambers, conferences, lenders, incubators and universities.',
    points: [
      'Access to capital and alternative lending',
      'Understanding your underwrite',
      '“The Big Three” — reading your financial statements',
      'Facilitation techniques for instructors and trainers',
    ],
  },
];

export const experience = [
  {
    role: 'Business Consultant (Public Service Faculty)',
    org: 'University of Georgia Small Business Development Center — Columbus',
    period: '2020 — Present',
    detail:
      'Consulting on capital acquisition, startups, financial analysis and strategy. Top-five statewide in consulting hours, long-term clients, business starts and capital placements. 2023 Flewellen Award for Consulting Excellence.',
  },
  {
    role: 'Adjunct Instructor of Business',
    org: 'Chattahoochee Valley Community College',
    period: '2021 — Present',
    detail: 'Principles of Accounting I & II — lecture, online and hybrid.',
  },
  {
    role: 'Principal Consultant',
    org: 'Credle Consulting Co., Inc.',
    period: '2018 — 2020',
    detail:
      'Financial and managerial consulting for companies and municipal and state governments: fiscal management, organizational structure, emergency management and capital structure.',
  },
  {
    role: 'Adult Education Instructor',
    org: 'Chattahoochee Valley Community College',
    period: '2019 — 2020',
    detail: 'GED, vocational and ASVAB preparation across mathematics, reading, composition, economics and science.',
  },
  {
    role: 'Senior Vice President, Commercial Lending',
    org: 'F&M Bank & Trust',
    period: '2018',
    detail: 'Led all commercial deposit and lending operations for the Columbus, GA market.',
  },
  {
    role: 'Vice President of Accounting / CFO',
    org: 'RAM Hotels',
    period: '2017 — 2018',
    detail: 'Finance and accounting for a multi-state hotel developer and operator — debt, mezzanine, private equity and municipal bond financing.',
  },
  {
    role: 'Director of Business Services & Residential Lending',
    org: 'Kinetic Credit Union',
    period: '2011 — 2017',
    detail: 'Built and ran real estate lending and member business lending for a multi-state credit union. Presidential Award for Excellence, 2015.',
  },
  {
    role: 'Business Analyst · Securitization Analyst · Credit Analyst · Branch Management',
    org: 'TSYS and Columbus Bank & Trust (Synovus)',
    period: '2001 — 2007',
    detail: 'Credit analysis, securitization and retail banking management, beginning in the Management Associate program.',
  },
];

export const education = [
  { degree: 'Master of Business Administration', school: 'Georgia Southern University', note: 'Magna Cum Laude · Beta Gamma Sigma' },
  { degree: 'Graduate Certificate in Accounting', school: 'Purdue University Global', note: '2018' },
  { degree: 'Bachelor of Science, Psychology (Philosophy minor)', school: 'Georgia Southern University', note: 'Order of Omega · Southern Ambassador' },
];

export const certifications = [
  'QuickBooks Pro Certification — Intuit (2021)',
  'Microsoft Excel & Word Pro Certification — Microsoft (2018)',
  'LinkedIn certifications: Excel (2021), QuickBooks Online (2022), Word (2022)',
];

export const awards = [
  { year: '2023', title: 'Dr. William C. Flewellen Award for Consulting Excellence', org: 'UGA Small Business Development Center' },
  { year: '2019', title: 'Alabama Adult Education Training Excellence Group', org: 'State of Alabama' },
  { year: '2016', title: 'MBS Partner of Excellence', org: 'Member Business Services' },
  { year: '2015', title: 'Presidential Award for Excellence', org: 'Kinetic Credit Union' },
  { year: '2015', title: 'National Mortgage Advisory Board', org: 'PHH Mortgage' },
];

export const advisory = [
  'Small Business Capital Access Advisory Panel — Office of U.S. Senator Jon Ossoff (2023)',
  'Columbus Mayor’s Small Business Roundtable (2023)',
  'Chamber / Start UP Columbus Working Group on Small Business Access to Capital (2023–24)',
  'Muscogee County Small Business Advisory Roundtable (2022)',
];

export type Talk = { year: string; title: string; venue: string; format: string; scope: 'National' | 'Regional' | 'Local' | 'Peer' };

export const talks: Talk[] = [
  { year: '2024', title: 'Increase Client Access to Capital: Understanding Bank Loan Alternatives', venue: 'America’s SBDC National Conference, Atlanta', format: 'Workshop', scope: 'National' },
  { year: '2024', title: 'Alternative Access to Capital', venue: 'UGA SBDC Annual Consultant Training, Athens', format: 'Breakout', scope: 'Peer' },
  { year: '2023', title: 'The Big Three & Your Business', venue: 'East Alabama Chamber of Commerce Annual Meeting', format: 'Keynote', scope: 'Regional' },
  { year: '2023', title: 'Accessing Capital for Creative Businesses', venue: 'Creative South Conference, Columbus', format: 'Breakout', scope: 'National' },
  { year: '2023', title: 'Excel & Software Tools for Better Consulting Outcomes', venue: 'UGA SBDC Annual Consultant Training, Athens', format: 'Panel', scope: 'Peer' },
  { year: '2023', title: 'Artificial Intelligence and the Small Business Market', venue: 'Pastoral Institute Entrepreneurial Growth Group', format: 'Talk', scope: 'Local' },
  { year: '2022', title: 'Sales Management: Sales Is a Process', venue: 'America’s SBDC National Conference, San Diego', format: 'Breakout', scope: 'National' },
  { year: '2022', title: 'Understanding Your Underwrite and How to Get Approved', venue: 'East Alabama Board of Realtors Regional Meeting', format: 'Keynote', scope: 'Regional' },
  { year: '2022', title: 'Understanding Business Formation Types for Creative Businesses', venue: 'Creative South Conference, Columbus', format: 'Breakout', scope: 'National' },
  { year: '2022', title: 'Private-Equity Pitch Boot Camp', venue: 'Start UP Columbus BizPitch (with Ben McMinn), 2022–24', format: 'Two-day workshop', scope: 'Regional' },
  { year: '2021', title: 'Effective Utilization of Facilitation Techniques to Enhance Lecture Instruction', venue: 'Teaching, Learning & Design Conference, Huntsville', format: 'Session', scope: 'National' },
];

export const testimonials = [
  {
    quote:
      'Thomas did not simply do the work for us to get our loan approved but educated myself and our management team on commercial lending, business formulation, accounting systems, marketing, HR policies, and business analytics.',
    name: 'Patricia Eldridge',
    role: 'Owner, Eldridge MBS Wellness Center for Women',
  },
  {
    quote:
      'Thomas was instrumental in the successful growth of County Outdoors. His expertise in commercial banking was a major asset in securing the capital for our new building.',
    name: 'JB Duncan',
    role: 'Owner, County Outdoors of Harris County',
  },
  {
    quote:
      'Thomas’s contribution to my winning BizPitch cannot be overstated. The funding he helped me secure allowed me to hire four staff and launch my business successfully.',
    name: 'Rashmi Hudson',
    role: 'Founder, Alltimate Luggage — 2023 BizPitch winner',
  },
  {
    quote: 'He took complicated aspects of banking and broke them down so I could understand it.',
    name: 'Melinda Newton',
    role: 'Founder, CARGO Columbus',
  },
  {
    quote:
      'We would never have had the confidence to approach investors without this course. It made it possible for Breathe Easy Innovations to secure the capital needed and launch our product.',
    name: 'Thomas Scott',
    role: 'CEO, Breathe Easy Innovations',
  },
];

export const caseStudies = [
  {
    client: 'Eldridge MBS Wellness Center for Women',
    sector: 'Healthcare · OB/GYN practice',
    outcome: '$1.035M refinance · practice relaunched',
    body: 'After the founding physician’s death, restructured the LLLP into an operating company plus a real-estate holding company, refinanced the property, rebuilt accounting controls and grew revenue by more than $300K.',
  },
  {
    client: 'The Goetchius House',
    sector: 'Hospitality · events & dining',
    outcome: '$1.02M capital stack · 50 jobs',
    body: 'Strategic and marketing plans, site selection, a diversified debt-and-equity stack at an attractive cost of capital, and restaurant-specific forecasting tools for a new civic, dining and events venue.',
  },
  {
    client: 'County Outdoors',
    sector: 'Retail · outdoor power equipment',
    outcome: '$1.5M+ across two placements',
    body: 'From startup to $1.2M in annual revenue: rebrand, sales training, statistical product analytics, and a $900K construction loan structured to convert into a permanent mortgage.',
  },
  {
    client: 'JPP Development Group',
    sector: 'Construction · commercial real estate',
    outcome: '$2.69M debt & equity',
    body: 'Holding and operating entities, lender draw schedule and project budget, market-rate research and a business plan that supported the company’s first owner-developed property.',
  },
];

/** Courses Thomas has developed and taught — shown on /videos as the instruction catalog. */
export const courses = [
  { title: 'Understand Your Underwrite', topic: 'Capital', blurb: 'How commercial loans are analyzed and approved — and how to present a file that gets to “yes.”' },
  { title: 'Accessing Capital: Alternative Lenders & Capital Sources', topic: 'Capital', blurb: 'Credit unions, CDFIs, development authorities, fintech, peer-to-peer and crowdfunding.' },
  { title: 'Understanding Commercial Mortgages', topic: 'Capital', blurb: 'Owner-occupied vs. investment property, SBA 504, mini-perms and how to maximize real estate assets.' },
  { title: 'Buy or Lease: Managing Commercial Real Estate', topic: 'Capital', blurb: 'A decision framework for occupying space — cash flow, control, taxes and risk.' },
  { title: 'The Big Three & Your Business', topic: 'Finance', blurb: 'Read the income statement, balance sheet and cash-flow statement — and use them to decide.' },
  { title: 'Quickly Learn QuickBooks', topic: 'Finance', blurb: 'Core set-up and daily workflows in QuickBooks Online.' },
  { title: 'Introduction to Excel for Business', topic: 'Data', blurb: 'The spreadsheet fundamentals every owner and manager should have.' },
  { title: '20 Essential Tips & Tricks for Excel', topic: 'Data', blurb: 'The shortcuts, functions and analysis tools that save hours every week.' },
  { title: 'Essential Skills for Sales Management', topic: 'Sales', blurb: 'Motivation, incentives and metrics for owners who manage a sales team.' },
  { title: 'Effective Sales Skills for Business', topic: 'Sales', blurb: 'A repeatable process for prospecting, objection handling and follow-up.' },
  { title: 'Private-Equity Pitch Boot Camp', topic: 'Capital', blurb: 'Two days on pitch decks, investor expectations and delivering a fundable pitch.' },
  { title: 'Facilitation to Enhance Engagement & Learning', topic: 'Teaching', blurb: 'Listening, observing, attending and questioning techniques for instructors and trainers.' },
];
