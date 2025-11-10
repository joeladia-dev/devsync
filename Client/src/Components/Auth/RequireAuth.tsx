import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div
          className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"
          aria-hidden
        />
      </div>
    );
  }

  if (!isSignedIn) return <Navigate to="/sign-in" replace />;
  return <>{children}</>;
}