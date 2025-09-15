import React, { useEffect, useState, useContext } from 'react';
import { MapPin, Briefcase, GraduationCap, Wrench, ChevronDown, ChevronUp, Search, X, Filter, RefreshCw } from 'lucide-react';
import { allLocations, allSkills} from '../data/internships';
import { FilterContext } from '../context/FilterContext';

interface FilterSectionProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

interface FilterButtonProps {
  label: string;
  selected?: boolean;
  onClick: () => void;
}

type InternshipTypeFilters = {
  Hybrid: boolean;
  Onsite: boolean;
  Virtual: boolean;
};

type QualificationFilters = {
  UG: boolean;
  PG: boolean;
};
export const Sidebar = () => {
  // Get filter context
  const {
    filters,
    updateFilters,
    applyFilters,
    resetFilters,
    isFiltersApplied
  } = useContext(FilterContext);
  // State for location dropdown
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(filters.location || 'All Locations');
  // State for filter buttons
  const [internshipTypeFilters, setInternshipTypeFilters] = useState(filters.internshipTypes || {
    Hybrid: false,
    Onsite: false,
    Virtual: false
  });
  const [qualificationFilters, setQualificationFilters] = useState(filters.qualifications || {
    UG: false,
    PG: false
  });
  // State for skills search
  const [skillsSearch, setSkillsSearch] = useState<string>('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>(filters.skills || []);
  // State for animation
  const [isApplying, setIsApplying] = useState(false);
  const filteredSkills = allSkills.filter(skill => skill.toLowerCase().includes(skillsSearch.toLowerCase())).slice(0, 10); // Limit to 10 results for better UX
  const toggleInternshipType = (type: keyof InternshipTypeFilters) => {
    const newFilters = {
      ...internshipTypeFilters,
      [type]: !internshipTypeFilters[type]
    };
    setInternshipTypeFilters(newFilters);
    updateFilters({
      internshipTypes: newFilters
    });
  };
  const toggleQualification = (qual: keyof QualificationFilters) => {
    const newFilters = {
      ...qualificationFilters,
      [qual]: !qualificationFilters[qual]
    };
    setQualificationFilters(newFilters);
    updateFilters({
      qualifications: newFilters
    });
  };
  const addSkill = (skill: string) => {
    if (!selectedSkills.includes(skill)) {
      const newSkills = [...selectedSkills, skill];
      setSelectedSkills(newSkills);
      setSkillsSearch('');
      updateFilters({
        skills: newSkills
      });
    }
  };
  const removeSkill = (skill: string) => {
    const newSkills = selectedSkills.filter(s => s !== skill);
    setSelectedSkills(newSkills);
    updateFilters({
      skills: newSkills
    });
  };
  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    setIsLocationOpen(false);
    updateFilters({
      location
    });
  };
  const handleApplyFilters = () => {
    setIsApplying(true);
    setTimeout(() => {
      applyFilters();
      setIsApplying(false);
    }, 300); // Short delay for animation
  };
  const handleResetFilters = () => {
    setSelectedLocation('All Locations');
    setInternshipTypeFilters({
      Hybrid: false,
      Onsite: false,
      Virtual: false
    });
    setQualificationFilters({
      UG: false,
      PG: false
    });
    setSelectedSkills([]);
    resetFilters();
  };
  // Sync state with context when filters change externally
  useEffect(() => {
    if (filters.location !== selectedLocation) {
      setSelectedLocation(filters.location || 'All Locations');
    }
    if (filters.internshipTypes !== internshipTypeFilters) {
      setInternshipTypeFilters(filters.internshipTypes || {
        Hybrid: false,
        Onsite: false,
        Virtual: false
      });
    }
    if (filters.qualifications !== qualificationFilters) {
      setQualificationFilters(filters.qualifications || {
        UG: false,
        PG: false
      });
    }
    if (filters.skills !== selectedSkills) {
      setSelectedSkills(filters.skills || []);
    }
  }, [filters]);
  return <div className="w-[240px] bg-[#0a2851] text-white min-h-screen p-6 flex flex-col gap-6">
      <div className="mb-2">
        <h2 className="text-xl font-bold mb-1">Filters</h2>
        <p className="text-gray-300 text-sm">Refine your internship search</p>
      </div>
      <FilterSection icon={<MapPin />} title="Location" content={<div className="relative">
            <div className="flex justify-between items-center p-3 bg-[#1a3b64] rounded-md text-white cursor-pointer transition-colors hover:bg-[#254676]" onClick={() => setIsLocationOpen(!isLocationOpen)}>
              <span>{selectedLocation}</span>
              {isLocationOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {isLocationOpen && <div className="absolute w-full mt-1 bg-[#1a3b64] rounded-md shadow-lg z-10 max-h-48 overflow-y-auto transition-all">
                {allLocations.map(location => <div key={location} className={`p-3 hover:bg-[#254676] cursor-pointer transition-colors ${selectedLocation === location ? 'bg-[#254676]' : ''}`} onClick={() => handleLocationChange(location)}>
                    {location}
                  </div>)}
              </div>}
          </div>} />
      <FilterSection icon={<Briefcase />} title="Internship Type" content={<div className="grid grid-cols-3 gap-2">
            {(Object.keys(internshipTypeFilters) as Array<keyof InternshipTypeFilters>).map(type => <FilterButton key={type} label={type} selected={internshipTypeFilters[type]} onClick={() => toggleInternshipType(type)} />)}
          </div>} />
      <FilterSection icon={<GraduationCap />} title="Qualification" content={<div className="grid grid-cols-2 gap-2">
            {(Object.keys(qualificationFilters) as Array<keyof QualificationFilters>).map(qual => <FilterButton key={qual} label={qual} selected={qualificationFilters[qual]} onClick={() => toggleQualification(qual)} />)}
          </div>} />
      <FilterSection icon={<Wrench />} title="Skills" content={<div className="space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={16} />
              <input type="text" placeholder="Search by keyword" className="w-full p-3 pl-10 bg-[#1a3b64] rounded-md text-white placeholder-gray-400 outline-none transition-colors focus:bg-[#254676]" value={skillsSearch} onChange={e => setSkillsSearch(e.target.value)} />
            </div>
            {skillsSearch && filteredSkills.length > 0 && <div className="bg-[#1a3b64] rounded-md shadow-lg p-2 max-h-40 overflow-y-auto transition-all">
                {filteredSkills.map(skill => <div key={skill} className="p-2 hover:bg-[#254676] cursor-pointer rounded-md transition-colors" onClick={() => addSkill(skill)}>
                    {skill}
                  </div>)}
              </div>}
            {selectedSkills.length > 0 && <div className="flex flex-wrap gap-2 mt-2">
                {selectedSkills.map(skill => <div key={skill} className="bg-[#254676] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 transition-all">
                    {skill}
                    <X size={14} className="cursor-pointer hover:text-gray-300" onClick={() => removeSkill(skill)} />
                  </div>)}
              </div>}
          </div>} />
      <div className="mt-auto pt-4 space-y-3">
        <button onClick={handleApplyFilters} className={`w-full flex items-center justify-center gap-2 bg-[#ff9d1e] hover:bg-[#f08c00] text-white py-3 rounded-md transition-all ${isApplying ? 'opacity-75' : ''}`} disabled={isApplying}>
          <Filter size={16} />
          <span>{isFiltersApplied ? 'Update Results' : 'Apply Filters'}</span>
        </button>
        {isFiltersApplied && <button onClick={handleResetFilters} className="w-full flex items-center justify-center gap-2 bg-[#1a3b64] hover:bg-[#254676] text-white py-2 rounded-md transition-colors">
            <RefreshCw size={16} />
            <span>Reset Filters</span>
          </button>}
      </div>
    </div>;
};
const FilterSection: React.FC<FilterSectionProps> = ({
  icon,
  title,
  content
}) => {
  return <div className="space-y-3">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="text-lg">{title}</h3>
      </div>
      {content}
    </div>;
};
const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  selected = false,
  onClick
}) => {
  return <button className={`p-3 rounded-md text-white text-sm transition-all ${selected ? 'bg-[#ff9d1e] hover:bg-[#f08c00] shadow-md' : 'bg-[#1a3b64] hover:bg-[#254676]'}`} onClick={onClick}>
      {label}
    </button>;
};