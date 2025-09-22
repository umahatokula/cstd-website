import { useState, useEffect } from 'react';
import { apiService } from '../services/api';

export const useApi = (apiCall, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiCall();
        setData(result);
      } catch (err) {
        setError(err.message || 'An error occurred');
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error };
};

export const usePageLinks = () => useApi(() => apiService.getPageLinks());
export const useNews = () => useApi(() => apiService.getNews());
export const useEvents = () => useApi(() => apiService.getEvents());
export const useUpcomingProjects = () => useApi(() => apiService.getUpcomingProjects());
export const usePastProjects = () => useApi(() => apiService.getPastProjects());
export const usePublications = () => useApi(() => apiService.getPublications());
export const useFooter = () => useApi(() => apiService.getFooter());