import { useAuth } from '@clerk/clerk-react';
import { useState, useEffect } from 'react';
import React from 'react';

// Add TypeScript interface for user data
interface UserData {
  userId?: string;
  message?: string;
  [key: string]: any; // for other potential properties
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const useCustomApi = () => {
  const { getToken } = useAuth();

  const fetchWithAuth = async (endpoint: string, options: RequestInit = {}) => {
    const token = await getToken();

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...options.headers,
    };

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    return response.json();
  };

  return { fetchWithAuth };
};

export function UserProfile() {
  const { fetchWithAuth } = useCustomApi();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const data = await fetchWithAuth('/user-data');
      console.log('API Response:', data);
      setUserData(data);
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      setError('Failed to load user data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  console.log('User Data State:', userData);

  if (loading) {
    return (
      <div className='p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg shadow-purple-100/50 border border-purple-100/50'>
        <div className='flex items-center gap-3'>
          <div className='w-5 h-5 border-2 border-purple-300 border-t-purple-600 rounded-full animate-spin'></div>
          <span className='text-purple-700 font-medium'>Loading user data...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl shadow-lg shadow-red-100/50 border border-red-200'>
        <div className='flex items-center gap-3'>
          <div className='w-6 h-6 bg-red-500 rounded-full flex items-center justify-center'>
            <span className='text-white text-sm font-bold'>!</span>
          </div>
          <div>
            <h3 className='text-red-800 font-semibold'>Error Loading Data</h3>
            <p className='text-red-600 text-sm'>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg shadow-purple-100/50 border border-purple-100/50'>
      <h2 className='text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
        User Profile
      </h2>
      <div className='bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border border-purple-200'>
        <pre className='text-sm text-gray-800 font-mono'>
          {userData ? JSON.stringify(userData, null, 2) : 'No data available'}
        </pre>
      </div>
    </div>
  );
}
