import React from 'react';
import { motion } from 'framer-motion';

const QuizContainer = ({ children, title, description }) => (
    <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-red-900 rounded-lg blur opacity-10"></div>
        <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-lg border border-white/10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-xl font-semibold text-amber-400 mb-2">{title}</h2>
                <p className="text-slate-400 mb-6">{description}</p>
                {children}
            </motion.div>
        </div>
    </div>
);

export default QuizContainer; 