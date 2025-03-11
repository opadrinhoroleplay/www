import React from 'react';
import { motion } from 'framer-motion';

const FeedbackMessage = ({ isCorrect }) => (
    <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mt-4 p-4 rounded-lg ${
            isCorrect 
                ? 'bg-green-500/10 border border-green-500/20' 
                : 'bg-red-500/10 border border-red-500/20'
        }`}
    >
        <div className="flex items-center gap-2">
            <span className={isCorrect ? 'text-green-400' : 'text-red-400'}>
                {isCorrect ? 'Excelente! Resposta correta!' : 'Ups! Tenta novamente na próxima.'}
            </span>
        </div>
    </motion.div>
);

export default FeedbackMessage; 