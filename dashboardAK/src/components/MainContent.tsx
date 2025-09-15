import { useEffect, useState, useContext } from 'react';
import { InternshipListItem } from './InternshipListItem';
import { useNavigate } from 'react-router-dom';
import { internships, Internship } from '../data/internships';
import { FilterContext } from '../context/FilterContext';
export const MainContent = () => {
  const navigate = useNavigate();
  const {
    filteredInternships,
    isFiltersApplied
  } = useContext(FilterContext);
  const [allInternships, setAllInternships] = useState<Internship[]>([]);
  
  useEffect(() => {
    // Use filtered internships if filters are applied, otherwise use default
    const all = isFiltersApplied ? filteredInternships.filter(internship => !internship.isRecommended).slice(0, 6) : internships.filter(internship => !internship.isRecommended).slice(0, 6);
    setAllInternships(all);
  }, [filteredInternships, isFiltersApplied]);
  const handleViewRecommendations = () => {
    navigate('/recommended-internships');
  };
  return <div className="flex-1 p-6 overflow-y-auto">
      {/* Prominent Recommendation Button */}
      <section className="mb-8">
        <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-3 text-center">
            Discover Personalized Internship Recommendations
          </h2>
          <p className="text-gray-600 mb-6 text-center max-w-2xl">
            Our AI analyzes your profile, skills, and preferences to find the
            perfect internship matches for your career goals.
          </p>
          <button onClick={handleViewRecommendations} className="bg-[#ff9d1e] hover:bg-[#f08c00] text-white px-8 py-3 rounded-md transition-colors text-lg font-medium flex items-center gap-2">
            View Recommended Internships
          </button>
        </div>
      </section>
      {/* All Internships */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">All Internships</h2>
          {isFiltersApplied && <span className="text-sm text-gray-600">
              {filteredInternships.length} results found
            </span>}
        </div>
        {allInternships.length > 0 ? <div className="space-y-4">
            {allInternships.map(internship => <InternshipListItem key={internship.id} logo={internship.logo} title={internship.title} company={internship.company} description={internship.description} duration={internship.duration} location={internship.location} />)}
          </div> : <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-gray-600">No internships match your filters.</p>
            <p className="text-gray-500 text-sm mt-2">
              Try adjusting your filter criteria.
            </p>
          </div>}
      </section>
    </div>;
};