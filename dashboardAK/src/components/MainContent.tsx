import { useEffect, useState, useContext } from 'react';
import { InternshipListItem } from './InternshipListItem';
import { useNavigate } from 'react-router-dom';
import { FilterContext } from '../context/FilterContext';
import { Internship } from '../data/internships';

// Updated interface to match API response
interface APIInternship {
  id: string;
  companyName: string;
  jobTitle: string;
  skillsRequired: string[];
  location: string;
  mode: 'HYBRID' | 'OFFLINE' | 'ONLINE';
  jobDescription: string;
  specialRequirements: string;
  duration: string;
  jobType: string;
  createdAt: string;
  updatedAt: string;
}

interface APIResponse {
  success: boolean;
  count: number;
  data: APIInternship[];
}

// Function to extract duration as number from string (e.g., "6 Months" -> 6)
const extractDurationNumber = (durationStr: string): number => {
  const match = durationStr.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
};

export const MainContent = () => {
  const navigate = useNavigate();
  const {
    filteredInternships,
    isFiltersApplied
  } = useContext(FilterContext);
  
  const [allInternships, setAllInternships] = useState<Internship[]>([]);
  const [apiInternships, setApiInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Transform API data to match existing Internship interface
  const transformApiData = (apiData: APIInternship[]): Internship[] => {
    return apiData.map(item => ({
      id: item.id,
      title: item.jobTitle,
      company: item.companyName,
      description: item.jobDescription,
      duration: extractDurationNumber(item.duration),
      location: item.location,
      logo: `https://logo.clearbit.com/${item.companyName.toLowerCase().replace(/\s+/g, '')}.com`,
      internshipType: item.mode === 'ONLINE' ? 'Virtual' : 
                     item.mode === 'OFFLINE' ? 'Onsite' : 'Hybrid',
      qualification: 'Both', // Default to 'Both' since API doesn't provide this
      skills: item.skillsRequired,
      stipend: 'Not specified', // Default value since API doesn't provide this
      isRecommended: false,
      postedDate: new Date(item.createdAt).toLocaleDateString(),
      deadline: 'Not specified', // Default value since API doesn't provide this
      openings: 1 // Default value since API doesn't provide this
    }));
  };

  // Fetch data from API
  useEffect(() => {
    const fetchInternships = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://backend-1-vr5n.onrender.com/api/v1/joboperation/');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: APIResponse = await response.json();
        
        if (data.success && data.data) {
          const transformedData = transformApiData(data.data);
          setApiInternships(transformedData);
        } else {
          throw new Error('Invalid API response format');
        }
      } catch (err) {
        console.error('Error fetching internships:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch internships');
      } finally {
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);

  const loadMoreInternships = () => {
    setCurrentPage(prev => prev + 1);
  };

  useEffect(() => {
    // Use filtered internships if filters are applied, otherwise use API data
    if (isFiltersApplied) {
      const filtered = filteredInternships.filter(internship => !internship.isRecommended);
      setAllInternships(filtered.slice(0, itemsPerPage * currentPage));
    } else if (apiInternships.length > 0) {
      // Show paginated internships from API
      setAllInternships(apiInternships.slice(0, itemsPerPage * currentPage));
    }
  }, [filteredInternships, isFiltersApplied, apiInternships, currentPage]);

  const handleViewRecommendations = () => {
    navigate('/recommended-internships');
  };

  if (loading) {
    return (
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff9d1e] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading internships...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="text-center p-8 bg-red-50 rounded-lg border border-red-200">
          <p className="text-red-600 font-medium">Error loading internships</p>
          <p className="text-red-500 text-sm mt-2">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-6 overflow-y-auto">
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
          <button 
            onClick={handleViewRecommendations} 
            className="bg-[#ff9d1e] hover:bg-[#f08c00] text-white px-8 py-3 rounded-md transition-colors text-lg font-medium flex items-center gap-2"
          >
            View Recommended Internships
          </button>
        </div>
      </section>

      {/* All Internships */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">All Internships</h2>
          {isFiltersApplied && (
            <span className="text-sm text-gray-600">
              {filteredInternships.length} results found
            </span>
          )}
          {!isFiltersApplied && apiInternships.length > 0 && (
            <span className="text-sm text-gray-600">
              Showing {Math.min(itemsPerPage * currentPage, apiInternships.length)} of {apiInternships.length} internships
            </span>
          )}
        </div>

        {allInternships.length > 0 ? (
          <div className="space-y-4">
            {allInternships.map(internship => (
              <InternshipListItem 
                key={internship.id} 
                logo={internship.logo || ''} 
                title={internship.title} 
                company={internship.company} 
                description={internship.description} 
                duration={internship.duration} 
                location={internship.location} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-gray-600">No internships available.</p>
            <p className="text-gray-500 text-sm mt-2">
              {isFiltersApplied 
                ? "Try adjusting your filter criteria." 
                : "Please check back later for new opportunities."}
            </p>
          </div>
        )}
        {!isFiltersApplied && apiInternships.length > itemsPerPage * currentPage && (
          <div className="mt-6 text-center">
            <button
              onClick={loadMoreInternships}
              disabled={loadingMore}
              className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-2 rounded-md transition-colors text-sm font-medium flex items-center gap-2 mx-auto"
            >
              {loadingMore ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </section>
    </div>
  );
};