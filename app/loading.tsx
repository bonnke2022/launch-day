"use client";

import { useEffect, useState } from "react";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Adjust time if needed

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
      <div className="animate-pulse text-3xl font-bold tracking-wider">
        Selmcorp is Loading...
      </div>
    </div>
  );
};

export default Loading;
