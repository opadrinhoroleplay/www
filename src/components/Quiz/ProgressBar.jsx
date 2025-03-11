import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ current, total, score }) => (
    <div className="mb-8">
        <div className="flex justify-between mb-2">
            <span className="text-sm text-slate-400">Progresso</span>
            <span className="text-sm text-amber-400">{score} pontos</span>
        </div>
        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(current / total) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-gradient-to-r from-amber-500 to-amber-600"
            />
        </div>
        <div className="flex justify-between mt-1">
            <span className="text-xs text-slate-500">Questão {current} de {total}</span>
            <span className="text-xs text-slate-500">{Math.round((current / total) * 100)}%</span>
        </div>
    </div>
);

export default ProgressBar; 