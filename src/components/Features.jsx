import { useState, useEffect } from 'react';

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => {
        console.log('Features fetch response:', response);
        return response.json();
      })
      .then(data => {
        console.log('Features data:', data);
        setFeatures(data.features);
      })
      .catch(error => console.error('Error fetching features:', error));
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 tracking-tight">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;