import React from 'react';
import { Clock, MapPin } from 'lucide-react';

interface InternshipListItemProps {
  logo: string;
  title: string;
  company: string;
  description: string;
  duration: number;
  location: string;
}
export const InternshipListItem: React.FC<InternshipListItemProps> = ({
  logo,
  title,
  company,
  description,
  duration,
  location
}) => {
  return <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
      <div className="flex gap-4">
        <div className="w-12 h-12 bg-white rounded-md overflow-hidden flex items-center justify-center border border-gray-200">
          <img src={logo} alt={`${company} logo`} className="max-w-full max-h-full" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
          <div className="flex gap-4 mt-1">
            <div className="flex items-center gap-1 text-gray-500 text-xs">
              <Clock size={14} />
              <span>{duration} Months</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-xs">
              <MapPin size={14} />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-[#0a2851] hover:bg-[#163b6f] text-white px-6 py-2 rounded-md transition-colors">
        Apply Now
      </button>
    </div>;
};