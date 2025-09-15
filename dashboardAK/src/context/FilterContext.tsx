import React, { useEffect, useState, createContext } from 'react';
import { internships, Internship } from '../data/internships';

type InternshipTypeFilters = {
  Hybrid: boolean;
  Onsite: boolean;
  Virtual: boolean;
};

type QualificationFilters = {
  UG: boolean;
  PG: boolean;
};

interface FilterContextType {
  filters: {
    location: string;
    internshipTypes: InternshipTypeFilters;
    qualifications: QualificationFilters;
    skills: string[];
  };
  filteredInternships: Internship[];
  isFiltersApplied: boolean;
  updateFilters: (newFilters: any) => void;
  applyFilters: () => void;
  resetFilters: () => void;
}
// Create a context for filters
export const FilterContext = createContext<FilterContextType>({
  filters: {
    location: 'All Locations',
    internshipTypes: {
      Hybrid: false,
      Onsite: false,
      Virtual: false
    },
    qualifications: {
      UG: false,
      PG: false
    },
    skills: []
  },
  filteredInternships: [],
  isFiltersApplied: false,
  updateFilters: () => {},
  applyFilters: () => {},
  resetFilters: () => {}
});
interface FilterProviderProps {
  children: React.ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({
  children
}) => {
  // State for filters
  const [filters, setFilters] = useState({
    location: 'All Locations',
    internshipTypes: {
      Hybrid: false,
      Onsite: false,
      Virtual: false
    },
    qualifications: {
      UG: false,
      PG: false
    },
    skills: []
  });
  // State for filtered internships
  const [filteredInternships, setFilteredInternships] = useState<Internship[]>([]);
  // State to track if filters have been applied
  const [isFiltersApplied, setIsFiltersApplied] = useState(false);
  // Initialize with all internships
  useEffect(() => {
    setFilteredInternships(internships);
  }, []);
  // Function to update filters without applying them
  const updateFilters = (newFilters: any) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      ...newFilters
    }));
  };
  // Function to apply filters
  const applyFilters = () => {
    let results = [...internships];
    // Filter by location
    if (filters.location !== 'All Locations') {
      results = results.filter(internship => internship.location === filters.location || filters.location === 'Hybrid' && internship.internshipType === 'Hybrid');
    }
    // Filter by internship type
    const selectedTypes = (Object.keys(filters.internshipTypes) as Array<keyof InternshipTypeFilters>).filter(type => filters.internshipTypes[type]);
    if (selectedTypes.length > 0) {
      results = results.filter(internship => selectedTypes.includes(internship.internshipType as keyof InternshipTypeFilters));
    }
    // Filter by qualification
    const selectedQuals = (Object.keys(filters.qualifications) as Array<keyof QualificationFilters>).filter(qual => filters.qualifications[qual]);
    if (selectedQuals.length > 0) {
      results = results.filter(internship => selectedQuals.includes(internship.qualification as keyof QualificationFilters) || internship.qualification === 'Both');
    }
    // Filter by skills
    if (filters.skills.length > 0) {
      results = results.filter(internship => filters.skills.some(skill => internship.skills.includes(skill)));
    }
    setFilteredInternships(results);
    setIsFiltersApplied(true);
  };
  // Function to reset filters
  const resetFilters = () => {
    setFilters({
      location: 'All Locations',
      internshipTypes: {
        Hybrid: false,
        Onsite: false,
        Virtual: false
      },
      qualifications: {
        UG: false,
        PG: false
      },
      skills: []
    });
    setFilteredInternships(internships);
    setIsFiltersApplied(false);
  };
  return <FilterContext.Provider value={{
    filters,
    filteredInternships,
    isFiltersApplied,
    updateFilters,
    applyFilters,
    resetFilters
  }}>
      {children}
    </FilterContext.Provider>;
};