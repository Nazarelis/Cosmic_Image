import React from 'react';
import { useQuery } from '@tanstack/react-query';
import './ImfOfTheDay.css';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

interface ApodData {
    date: string;
    explanation: string;
    media_type: string;
    title: string;
    url: string;
}

const apiKey = import.meta.env.VITE_API_KEY;

const fetchApodData = async (): Promise<ApodData> => {
    const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    );
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const NasaImageOfTheDay: React.FC = () => {
    const { data, error, isLoading } = useQuery<ApodData, Error>({
        queryKey: ['apodData'],
        queryFn: fetchApodData,
    });

    if (isLoading)
        return (
            <div className="message_loading">
                <CircularProgress sx={{ margin: '5%' }} />
            </div>
        );
    if (error)
        return (
            <div className="message_error">
                <Alert
                    severity="error"
                    sx={{
                        width: 'auto',
                        height: '10%',
                        justifyContent: 'center',
                        fontSize: '1rem',
                        margin: '5%',
                    }}
                >
                    Error: {error.message}
                </Alert>
            </div>
        );

    return (
        <div className="data_image_container">
            <h1 className="title_image_day">{data?.title}</h1>
            <img
                className="image_of_the_day"
                src={data?.url}
                alt={data?.title}
            />
            <p className="p_explanation_image">{data?.explanation}</p>
            <p className="p_date">Date: {data?.date}</p>
        </div>
    );
};

export default NasaImageOfTheDay;
