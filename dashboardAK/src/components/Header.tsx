import React from 'react';
import { FileText, FileSpreadsheet, Award, BookOpen, Globe, User } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}
export const Header = () => {
  return <div className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="bg-[#0a2851] text-white py-4 px-6 w-[240px]">
          <h1 className="text-2xl font-bold">AvsarKendra</h1>
        </div>
        <div className="flex items-center space-x-2 px-4">
          <NavItem icon={<FileText size={18} />} label="Form" />
          <NavItem icon={<FileSpreadsheet size={18} />} label="Resume" />
          <NavItem icon={<Award size={18} />} label="Recommendation" active />
          <NavItem icon={<BookOpen size={18} />} label="Career Guidance" />
          <NavItem icon={<Globe size={18} />} label="EN" />
          <button className="p-2 rounded-full hover:bg-gray-100">
            <User size={20} />
          </button>
        </div>
      </div>
    </div>;
};
const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  active = false
}) => {
  return <button className={`flex items-center gap-2 px-4 py-2 rounded-full ${active ? 'bg-[#ff9d1e] text-white' : 'bg-gray-100 text-gray-700'}`}>
      {icon}
      <span>{label}</span>
    </button>;
};