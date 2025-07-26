import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-full py-12">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}