import { useState, useEffect } from 'react';

const Instructions = () => {
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => {
        console.log('Instructions fetch response:', response);
        return response.json();
      })
      .then(data => {
        console.log('Instructions data:', data);
        setInstructions(data.instructions);
      })
      .catch(error => console.error('Error fetching instructions:', error));
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 tracking-tight">How to Use</h2>
        <div className="max-w-4xl mx-auto">
          {instructions.map((instruction, index) => (
            <div key={index} className="flex items-start mb-8 p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-6 text-lg">
                {instruction.step}
              </div>
              <p className="text-gray-700 leading-relaxed pt-1 font-medium text-lg">{instruction.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructions;