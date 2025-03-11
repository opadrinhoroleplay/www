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

const Quiz = ({ question, answers, onAnswer, answered, title, description, rightAnswer }) => (
    <QuizContainer title={title} description={description}>
        <div className="space-y-4">
            <motion.p 
                className="text-lg text-slate-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {question}
            </motion.p>
            <div className="space-y-2">
                {answers.map((answer, index) => (
                    <motion.button
                        key={index}
                        onClick={() => onAnswer(index === rightAnswer)}
                        disabled={answered !== null}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 border ${
                            answered === null
                                ? 'border-white/10 hover:border-amber-500/50 bg-white/5 hover:bg-white/10'
                                : answered !== null && index === rightAnswer
                                    ? 'border-green-500 bg-green-500/10'
                                    : answered !== null && index !== rightAnswer
                                        ? 'border-red-500 bg-red-500/10'
                                        : 'border-white/10 bg-white/5 opacity-50'
                        }`}
                    >
                        <div className="flex items-center justify-between">
                            <span>{answer}</span>
                            {answered !== null && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                        index === rightAnswer ? 'bg-green-500/20' : 'bg-red-500/20'
                                    }`}
                                >
                                    {index === rightAnswer ? '✓' : '×'}
                                </motion.div>
                            )}
                        </div>
                    </motion.button>
                ))}
            </div>
        </div>
        {answered !== null && <FeedbackMessage isCorrect={answered} />}
    </QuizContainer>
);

export { Quiz, ProgressBar };