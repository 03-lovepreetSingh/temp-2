import React from 'react';
import { Clock, MapPin } from 'lucide-react';

interface InternshipCardProps {
  logo: string;
  company: string;
  title: string;
  description: string;
  duration: number;
  location: string;
  isHybrid?: boolean;
}
export const InternshipCard: React.FC<InternshipCardProps> = ({
  logo,
  company,
  title,
  description,
  duration,
  location,
  isHybrid = false
}) => {
  return <div className="bg-gray-50 rounded-lg p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-white rounded-md overflow-hidden flex items-center justify-center">
          <img src={logo} alt={`${company} logo`} className="max-w-full max-h-full" />
        </div>
        <span className="bg-[#ff9d1e] text-white text-xs px-3 py-1 rounded-full">
          Recommended
        </span>
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
      <div className="flex flex-col gap-2 mt-auto">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <Clock size={16} />
          <span>{duration} Months</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <MapPin size={16} />
          <span>{isHybrid ? 'Hybrid' : location}</span>
        </div>
        <button className="w-full bg-[#ff9d1e] hover:bg-[#f08c00] text-white py-3 rounded-md mt-2 transition-colors">
          Apply Now
        </button>
      </div>
    </div>;
};