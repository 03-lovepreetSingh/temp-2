import React, { useEffect, useState } from 'react';
import { InternshipCard } from '../components/InternshipCard';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { internships, Internship } from '../data/internships';
export const RecommendedInternships = () => {
  const navigate = useNavigate();
  const [recommendedInternships, setRecommendedInternships] = useState<Internship[]>([]);
  useEffect(() => {
    const recommended = internships.filter(internship => internship.isRecommended);
    setRecommendedInternships(recommended);
  }, []);
  return <div className="min-h-screen bg-white">
      <div className="container mx-auto p-6">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-[#0a2851] mb-6 hover:underline">
          <ArrowLeft size={16} />
          Back to All Internships
        </button>
        <h1 className="text-3xl font-bold mb-8">AI Recommended Internships</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedInternships.map(internship => <InternshipCard key={internship.id} logo={internship.logo} company={internship.company} title={internship.title} description={internship.description} duration={internship.duration} location={internship.location} isHybrid={internship.internshipType === 'Hybrid'} />)}
        </div>
      </div>
    </div>;
};