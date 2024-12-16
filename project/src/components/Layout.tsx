import React from 'react';
import { Footprints } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <div className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80")' }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};