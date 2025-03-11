import React from 'react';
import { motion } from 'framer-motion';
import QuizContainer from './QuizContainer';
import FeedbackMessage from './FeedbackMessage';

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

export default Quiz; 