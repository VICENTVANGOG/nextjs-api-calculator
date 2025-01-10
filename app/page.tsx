'use client';

import { useState } from 'react';


export default function Home() {

  const [randomPhrase, setRandomPhrase] = useState<string | null>(null);


  const [error, setError] = useState<string | null>(null);

  const fetchRandomPhrase = async () => {
    try {
    
      const response = await fetch('/api/frace');  
      if (!response.ok) {
        throw new Error('Failed to fetch random phrase');
      }

      const data = await response.json();
      setRandomPhrase(data.frase);  
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-blue-600 text-white px-6">
 
      <h1 className="text-4xl font-bold mb-6 text-center">
        ✨ Random Phrase Generator ✨
      </h1>

 
      <button
        onClick={fetchRandomPhrase}
        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg py-3 transition"
      >
        Get Random Phrase
      </button>


      {error && (
        <p className="bg-red-500 text-white font-semibold rounded-lg py-2 px-4 mt-4 max-w-md w-full text-center">
          {error}
        </p>
      )}

   
      {randomPhrase && (
        <div className="bg-white rounded-lg shadow-lg p-8 mt-6 text-gray-800 max-w-md w-full">
          <h3 className="text-2xl font-semibold mb-4 text-center">Random Phrase</h3>
          <p className="text-lg">{randomPhrase}</p>
        </div>
      )}
    </div>
  );
}
