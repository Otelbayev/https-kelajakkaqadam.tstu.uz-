"use client";

import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}

      {/* Loading Content */}
      <main className="flex-1 flex flex-col justify-center items-center bg-gray-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mb-6"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-gray-500 text-lg font-medium"
        >
          Yuklanmoqda...
        </motion.p>
      </main>
    </div>
  );
};

export default Loading;
