import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] w-full">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-brand-border rounded-full"></div>
        <div className="absolute top-0 left-0 w-12 h-12 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;