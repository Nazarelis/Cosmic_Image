import React from 'react';
import { useQuery } from '@tanstack/react-query';

interface ApodData {
  date: string;
  explanation: string;
  media_type: string;
  title: string;
  url: string;
}

const apiKey = import.meta.env.VITE_API_KEY

const fetchApodData = async (): Promise<ApodData> => {
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const NasaImageOfTheDay: React.FC = () => {
  const { data, error, isLoading } = useQuery<ApodData, Error>({
    queryKey: ['apodData'],  // Define el queryKey como un array de strings
    queryFn: fetchApodData,  // Define la función que fetch la data
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{data?.title}</h1>
      <img src={data?.url} alt={data?.title} style={{ width: "100%" }} />
      <p>{data?.explanation}</p>
      <p>Date: {data?.date}</p>
    </div>
  );
};

export default NasaImageOfTheDay;



