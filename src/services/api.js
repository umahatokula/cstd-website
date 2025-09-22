import axios from 'axios';

const BASEURL = 'https://cstd-backend-server.onrender.com/api/CSTDsite';

const api = axios.create({
  baseURL: BASEURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiService = {
  // Navigation and Page Links
  getPageLinks: async () => {
    const response = await api.get('/pages/links');
    return response.data;
  },

  // Page Details
  getPageDetails: async (pageId) => {
    const response = await api.get(`/pages/${pageId}`);
    return response.data;
  },

  // Projects
  getUpcomingProjects: async () => {
    const response = await api.get('/project/getprojects?cat=upcoming');
    return response.data;
  },

  getPastProjects: async () => {
    const response = await api.get('/project/getprojects?cat=past');
    return response.data;
  },

  // Publications
  getPublications: async () => {
    const response = await api.get('/pub/getpublications');
    return response.data;
  },

  // News
  getNews: async () => {
    const response = await api.get('/news/fetchnews');
    return response.data;
  },

  // Events
  getEvents: async () => {
    const response = await api.get('/events/fetchevents');
    return response.data;
  },

  // Footer
  getFooter: async () => {
    const response = await api.get('/footer/getfooter');
    return response.data;
  },

  // Contact/Feedback
  submitFeedback: async (feedbackData) => {
    const response = await api.post('/contact/feedback', feedbackData);
    return response.data;
  },
};

export default apiService;