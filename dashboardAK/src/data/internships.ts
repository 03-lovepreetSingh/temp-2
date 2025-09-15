export interface Internship {
  id: string;
  title: string;
  company: string;
  logo: string;
  description: string;
  duration: number;
  location: string;
  internshipType: 'Hybrid' | 'Onsite' | 'Virtual';
  qualification: 'UG' | 'PG' | 'Both';
  skills: string[];
  stipend: string;
  isRecommended: boolean;
  postedDate: string;
  deadline: string;
  openings: number;
}
export const internships: Internship[] = [{
  id: '1',
  title: 'Software Developer Intern',
  company: 'TCS',
  logo: 'https://1000logos.net/wp-content/uploads/2022/08/TCS-Logo.png',
  description: "Work on real-world software projects with Tata Consultancy Services. You'll be part of an agile team developing enterprise applications.",
  duration: 6,
  location: 'Bengaluru',
  internshipType: 'Hybrid',
  qualification: 'UG',
  skills: ['React', 'JavaScript', 'Java', 'Spring Boot'],
  stipend: '₹20,000/month',
  isRecommended: true,
  postedDate: '2023-09-15',
  deadline: '2023-10-15',
  openings: 10
}, {
  id: '2',
  title: 'Data Analysis Intern',
  company: 'Infosys',
  logo: 'https://www.infosys.com/content/dam/infosys-web/en/global-resource/logos/infosys-logo.png',
  description: "Gain hands-on experience in data analysis with Infosys. You'll work with large datasets and create meaningful visualizations.",
  duration: 3,
  location: 'Pune',
  internshipType: 'Onsite',
  qualification: 'PG',
  skills: ['Python', 'Data Analysis', 'SQL', 'Tableau'],
  stipend: '₹25,000/month',
  isRecommended: true,
  postedDate: '2023-09-10',
  deadline: '2023-10-10',
  openings: 5
}, {
  id: '3',
  title: 'Tech Innovation Intern',
  company: 'Wipro',
  logo: 'https://www.wipro.com/content/dam/nexus/en/wipro-logo-new-og-502x263.jpg',
  description: "Contribute to innovative projects in the tech industry with Wipro. You'll be involved in cutting-edge research and development.",
  duration: 6,
  location: 'Hybrid',
  internshipType: 'Hybrid',
  qualification: 'Both',
  skills: ['AI/ML', 'Innovation', 'Project Management', 'Research'],
  stipend: '₹18,000/month',
  isRecommended: true,
  postedDate: '2023-09-05',
  deadline: '2023-10-05',
  openings: 3
}, {
  id: '4',
  title: 'Marketing Intern',
  company: 'Reliance Jio',
  logo: 'https://logos-world.net/wp-content/uploads/2020/11/Jio-Logo.png',
  description: "Assist in marketing campaigns and strategies with Reliance Jio. You'll help with social media marketing and content creation.",
  duration: 4,
  location: 'Mumbai',
  internshipType: 'Onsite',
  qualification: 'UG',
  skills: ['Marketing', 'Communication', 'Social Media', 'Content Creation'],
  stipend: '₹15,000/month',
  isRecommended: false,
  postedDate: '2023-09-01',
  deadline: '2023-10-01',
  openings: 8
}, {
  id: '5',
  title: 'Financial Analysis Intern',
  company: 'HCL',
  logo: 'https://www.hcltech.com/sites/default/files/images/special-pages/supercharging-progress/HCLTech_logo.png',
  description: "Support financial analysis and reporting with HCL. You'll work with financial data and create reports for stakeholders.",
  duration: 6,
  location: 'Noida',
  internshipType: 'Onsite',
  qualification: 'PG',
  skills: ['Financial Analysis', 'Excel', 'Data Analysis', 'Reporting'],
  stipend: '₹22,000/month',
  isRecommended: false,
  postedDate: '2023-08-25',
  deadline: '2023-09-25',
  openings: 4
}, {
  id: '6',
  title: 'UX/UI Design Intern',
  company: 'Microsoft',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
  description: "Join Microsoft's design team to create intuitive and beautiful user interfaces. You'll work on real products used by millions.",
  duration: 3,
  location: 'Hyderabad',
  internshipType: 'Hybrid',
  qualification: 'UG',
  skills: ['UI/UX', 'Design', 'Figma', 'User Research'],
  stipend: '₹30,000/month',
  isRecommended: true,
  postedDate: '2023-09-12',
  deadline: '2023-10-12',
  openings: 2
}, {
  id: '7',
  title: 'Cloud Computing Intern',
  company: 'Amazon Web Services',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png',
  description: "Learn cloud technologies with AWS. You'll help design and implement cloud solutions for enterprise clients.",
  duration: 6,
  location: 'Bengaluru',
  internshipType: 'Hybrid',
  qualification: 'PG',
  skills: ['AWS', 'Cloud Computing', 'DevOps', 'Networking'],
  stipend: '₹35,000/month',
  isRecommended: true,
  postedDate: '2023-09-08',
  deadline: '2023-10-08',
  openings: 5
}, {
  id: '8',
  title: 'Digital Marketing Intern',
  company: 'Flipkart',
  logo: 'https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png',
  description: "Join Flipkart's marketing team to learn about e-commerce marketing strategies. You'll work on campaigns and analyze their performance.",
  duration: 4,
  location: 'Bengaluru',
  internshipType: 'Onsite',
  qualification: 'UG',
  skills: ['Digital Marketing', 'SEO', 'SEM', 'Analytics'],
  stipend: '₹18,000/month',
  isRecommended: false,
  postedDate: '2023-08-30',
  deadline: '2023-09-30',
  openings: 6
}, {
  id: '9',
  title: 'Machine Learning Intern',
  company: 'IBM',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png',
  description: "Work with IBM's AI team on machine learning projects. You'll help develop and train models for various applications.",
  duration: 6,
  location: 'Pune',
  internshipType: 'Virtual',
  qualification: 'PG',
  skills: ['Machine Learning', 'Python', 'TensorFlow', 'Data Science'],
  stipend: '₹28,000/month',
  isRecommended: true,
  postedDate: '2023-09-03',
  deadline: '2023-10-03',
  openings: 3
}, {
  id: '10',
  title: 'Product Management Intern',
  company: 'Google',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
  description: "Join Google's product team to learn about product development lifecycle. You'll help define product requirements and roadmaps.",
  duration: 5,
  location: 'Hyderabad',
  internshipType: 'Hybrid',
  qualification: 'Both',
  skills: ['Product Management', 'Project Management', 'Market Research', 'Communication'],
  stipend: '₹40,000/month',
  isRecommended: true,
  postedDate: '2023-09-07',
  deadline: '2023-10-07',
  openings: 2
}, {
  id: '11',
  title: 'Frontend Developer Intern',
  company: 'Accenture',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png',
  description: "Work with Accenture's web development team on client projects. You'll build responsive and accessible user interfaces.",
  duration: 4,
  location: 'Chennai',
  internshipType: 'Virtual',
  qualification: 'UG',
  skills: ['React', 'HTML/CSS', 'JavaScript', 'Responsive Design'],
  stipend: '₹20,000/month',
  isRecommended: false,
  postedDate: '2023-08-28',
  deadline: '2023-09-28',
  openings: 7
}, {
  id: '12',
  title: 'Cybersecurity Intern',
  company: 'Deloitte',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/2560px-Deloitte.svg.png',
  description: "Join Deloitte's cybersecurity team to learn about protecting digital assets. You'll help with security assessments and testing.",
  duration: 6,
  location: 'Mumbai',
  internshipType: 'Onsite',
  qualification: 'PG',
  skills: ['Cybersecurity', 'Network Security', 'Ethical Hacking', 'Risk Assessment'],
  stipend: '₹25,000/month',
  isRecommended: true,
  postedDate: '2023-09-05',
  deadline: '2023-10-05',
  openings: 4
}, {
  id: '13',
  title: 'Content Writing Intern',
  company: 'Zomato',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Zomato_logo.png/600px-Zomato_logo.png',
  description: "Create engaging content for Zomato's blog and social media. You'll work with the marketing team to develop content strategies.",
  duration: 3,
  location: 'Delhi',
  internshipType: 'Virtual',
  qualification: 'UG',
  skills: ['Content Writing', 'Copywriting', 'SEO', 'Social Media'],
  stipend: '₹15,000/month',
  isRecommended: false,
  postedDate: '2023-08-22',
  deadline: '2023-09-22',
  openings: 5
}, {
  id: '14',
  title: 'Business Analyst Intern',
  company: 'Cognizant',
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Cognizant_logo.svg/1200px-Cognizant_logo.svg.png',
  description: "Work with business teams to analyze processes and recommend improvements. You'll learn data-driven decision making.",
  duration: 5,
  location: 'Chennai',
  internshipType: 'Hybrid',
  qualification: 'Both',
  skills: ['Business Analysis', 'Data Analysis', 'Process Improvement', 'Communication'],
  stipend: '₹22,000/month',
  isRecommended: false,
  postedDate: '2023-09-01',
  deadline: '2023-10-01',
  openings: 6
}, {
  id: '15',
  title: 'Mobile App Developer Intern',
  company: 'PhonePe',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/PhonePe_Logo.jpg/800px-PhonePe_Logo.jpg',
  description: "Join PhonePe's mobile development team to work on India's leading payment app. You'll help build new features and improve existing ones.",
  duration: 6,
  location: 'Bengaluru',
  internshipType: 'Onsite',
  qualification: 'UG',
  skills: ['Android', 'iOS', 'React Native', 'Mobile Development'],
  stipend: '₹30,000/month',
  isRecommended: true,
  postedDate: '2023-09-10',
  deadline: '2023-10-10',
  openings: 3
}];
export const allLocations = ['All Locations', 'Bengaluru', 'Chennai', 'Delhi', 'Hyderabad', 'Mumbai', 'Noida', 'Pune'];
export const allSkills = ['AI/ML', 'Android', 'AWS', 'Business Analysis', 'Cloud Computing', 'Communication', 'Content Creation', 'Content Writing', 'Copywriting', 'Cybersecurity', 'Data Analysis', 'Data Science', 'Design', 'DevOps', 'Digital Marketing', 'Ethical Hacking', 'Excel', 'Figma', 'Financial Analysis', 'HTML/CSS', 'Innovation', 'iOS', 'Java', 'JavaScript', 'Machine Learning', 'Market Research', 'Marketing', 'Mobile Development', 'Network Security', 'Networking', 'Process Improvement', 'Product Management', 'Project Management', 'Python', 'React', 'React Native', 'Reporting', 'Research', 'Responsive Design', 'Risk Assessment', 'SEO', 'SEM', 'Social Media', 'Spring Boot', 'SQL', 'Tableau', 'TensorFlow', 'UI/UX', 'User Research'];
export const internshipTypes = ['Hybrid', 'Onsite', 'Virtual'];
export const qualificationTypes = ['UG', 'PG', 'Both'];