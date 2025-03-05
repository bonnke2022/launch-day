"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader({
  setIsAppReady,
}: {
  setIsAppReady: (ready: boolean) => void;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsAppReady(true); // Let the app render after loading is done
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, [setIsAppReady]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-dark text-white z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.75 } }}
        >
          {/* Spinner Animation */}
          <motion.div
            className="w-16 h-16 border-4 border-white border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />

          {/* Loading Text */}
          <motion.p
            className="mt-4 text-xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Loading...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
