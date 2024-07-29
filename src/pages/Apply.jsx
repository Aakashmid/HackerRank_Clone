import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import axios from 'axios';

export default function Apply() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Fetch data from Jobicy API
    axios.get('https://jobicy.com/api/v2/remote-jobs')
      .then(response => {
        setCompanies(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the company data!', error);
      });
  }, []);

  return (
    <div className="certify-container bg-page_background min-h-screen w-full">
      <PageHeader pageName="Apply" heading="Get Your Dream Job" bookmarkedChanllenges={false} />
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {companies.length > 0 ? (
          companies.map(company => (
            <div key={company.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 w-80">
              <h2 className="text-xl font-semibold mb-2">{company.title}</h2>
              <p className="text-gray-700 mb-2">{company.company}</p>
              <p className="text-gray-700 mb-4">{company.location}</p>
              <p className="text-gray-500">{company.description}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
