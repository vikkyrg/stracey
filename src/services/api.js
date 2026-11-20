import axios from 'axios';

// Configure Axios instance ready for future Node/Express API connection
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://api.stracey50.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor ready for auth tokens in future backend phase
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('stracey_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for consistent error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.warn('API Error Intercepted (Frontend fallback active):', error?.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Mock form submission service that simulates real network delays and validation
export const mockSubmit = async (payload, type = 'enquiry') => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`[Mock Service] Submitted ${type}:`, payload);
      resolve({
        success: true,
        message: 'Your submission has been received. Our team will contact you shortly.',
        data: payload,
        timestamp: new Date().toISOString()
      });
    }, 1200);
  });
};

export default api;
