export interface SearchResult {
  id: string;
  title: string;
  description?: string;
  path: string;
  category: string;
}

export const searchIndex: SearchResult[] = [
  // Core Pages
  { id: 'home', title: 'Home', path: '/', category: 'Pages' },
  { id: 'about', title: 'About Us', description: 'Learn about SCAIL, our mission, vision, and team.', path: '/about', category: 'Pages' },
  { id: 'contact', title: 'Contact Us', description: 'Get in touch with SCAIL.', path: '/contact', category: 'Pages' },
  { id: 'careers', title: 'Careers', description: 'Join our team.', path: '/careers', category: 'Pages' },
  { id: 'projects', title: 'Projects', description: 'Explore our delivered projects.', path: '/projects', category: 'Pages' },
  { id: 'industries', title: 'Industries', description: 'Industries we serve.', path: '/industries', category: 'Pages' },
  { id: 'products', title: 'Products', description: 'Explore our products.', path: '/products', category: 'Pages' },
  { id: 'clients', title: 'Clients', description: 'Our trusted clients.', path: '/clients', category: 'Pages' },
  { id: 'gallery', title: 'Gallery', description: 'View our media gallery.', path: '/gallery', category: 'Pages' },
  
  // Services
  { id: 'services', title: 'Services', description: 'Our full range of services.', path: '/services', category: 'Services' },
  { id: 'service-toll', title: 'Toll Solutions', description: 'Advanced electronic toll systems', path: '/services#category-toll', category: 'Services' },
  { id: 'service-hardware', title: 'Hardware Solutions', description: 'Industrial grade equipment', path: '/services#category-hardware', category: 'Services' },
  { id: 'service-software', title: 'Software & AI Solutions', description: 'Custom software & intelligence', path: '/services#category-software', category: 'Services' },
  { id: 'service-it', title: 'IT Services', description: 'Consulting, cloud, and security', path: '/services#category-it', category: 'Services' },
  
  // AI Centre
  { id: 'ai-centre', title: 'AI Centre', description: 'SCAIL Artificial Intelligence solutions', path: '/ai', category: 'AI Centre' },
  { id: 'ai-assistant', title: 'AI Assistant', description: 'Intelligent conversational agent', path: '/ai/assistant', category: 'AI Centre' },
  { id: 'ai-solutions', title: 'AI Powered Solutions', description: 'Enterprise AI integrations', path: '/ai/solutions', category: 'AI Centre' },
  { id: 'ai-cost', title: 'AI Project Cost Finder', description: 'Smart estimation tool', path: '/ai/project-cost-finder', category: 'AI Centre' },
  { id: 'ai-prediction', title: 'AI Prediction', description: 'Data-driven forecasting', path: '/ai/prediction', category: 'AI Centre' },
  { id: 'ai-analytics', title: 'AI Analytical Dashboard', description: 'Real-time intelligent insights', path: '/ai/analytics', category: 'AI Centre' },
];
