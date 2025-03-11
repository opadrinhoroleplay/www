import React, { useState, useEffect } from 'react';
import GuideNavigation from '../GuideNavigation';
import { Quiz, ProgressBar } from './';
import { ArrowRight, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const ResultCard = ({ score, total, onRetry, successMessage, partialSuccessMessage, failureMessage }) => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-lg border border-white/10"
    >
        <motion.div
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", duration: 1, delay: 0.2 }}
        >
            <Trophy className="w-16 h-16 text-amber-400 mx-auto mb-4" />
        </motion.div>
        
        <h3 className="text-2xl font-bold text-amber-400 mb-2">Conheces as Regras!</h3>
        <p className="text-xl text-slate-300 mb-4">
            Demonstraste o teu conhecimento com {score} de {total} respostas corretas
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="block text-sm text-slate-400 mt-2"
            >
                ({Math.round((score / total) * 100)}% de acerto)
            </motion.span>
        </p>
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
        >
            <p className="text-slate-400 mb-6">
                {score === total 
                    ? successMessage
                    : score >= total * 0.7
                    ? partialSuccessMessage
                    : failureMessage}
            </p>
            
            <button
                onClick={onRetry}
                className="px-6 py-3 bg-amber-500 text-black rounded-lg hover:bg-amber-400 transition-colors inline-flex items-center gap-2 group"
            >
                Tentar Novamente
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
        </motion.div>
    </motion.div>
);

const GenericQuiz = ({ data, title, successMessage, partialSuccessMessage, failureMessage }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answered, setAnswered] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [shuffledData, setShuffledData] = useState([]);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [rightAnswerIndex, setRightAnswerIndex] = useState(-1);
    
    useEffect(() => {
        // Initialize shuffled data on mount
        const initialShuffled = shuffleArray(data);
        setShuffledData(initialShuffled);
        
        // Shuffle answers for first question
        if (initialShuffled.length > 0) {
            const firstQuestion = initialShuffled[0].question;
            const answers = shuffleArray(firstQuestion.answers);
            setShuffledAnswers(answers);
            setRightAnswerIndex(answers.indexOf(firstQuestion.answers[firstQuestion.rightAnswer]));
        }
    }, [data]);

    useEffect(() => {
        // Update answers when question changes
        if (shuffledData.length > 0 && currentIndex < shuffledData.length) {
            const question = shuffledData[currentIndex].question;
            const answers = shuffleArray(question.answers);
            setShuffledAnswers(answers);
            setRightAnswerIndex(answers.indexOf(question.answers[question.rightAnswer]));
            setAnswered(null); // Reset answered state
        }
    }, [currentIndex, shuffledData]);
    
    // Ensure currentItem is defined
    const currentItem = shuffledData[currentIndex] || {};

    const handleAnswer = (isCorrect) => {
        setAnswered(isCorrect);
        if (isCorrect) setScore(score + 1);
    };
    
    const nextItem = () => {
        if (currentIndex < shuffledData.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setAnswered(null);
        } else {
            setShowResult(true);
        }
    };

    const resetQuiz = () => {
        setShuffledData(shuffleArray(data));
        setCurrentIndex(0);
        setAnswered(null);
        setScore(0);
        setShowResult(false);
    };

    if (!currentItem.question) return null; // Ensure question exists

    return (
        <>
            <GuideNavigation />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-br from-amber-400 to-amber-600 bg-clip-text text-transparent">
                        {title}
                    </h1>

                    {!showResult && (
                        <ProgressBar 
                            current={currentIndex + 1}
                            total={data.length}
                            score={score}
                        />
                    )}
                </motion.div>

                <div className="space-y-8">
                    {!showResult ? (
                        <>
                            <Quiz
                                question={currentItem.question.text}
                                answers={shuffledAnswers}
                                onAnswer={handleAnswer}
                                answered={answered}
                                title={currentItem.title}
                                description={currentItem.description}
                                rightAnswer={rightAnswerIndex}
                            />

                            {answered !== null && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex justify-end"
                                >
                                    <button
                                        onClick={nextItem}
                                        className="px-6 py-3 bg-amber-500 text-black rounded-lg hover:bg-amber-400 transition-colors inline-flex items-center gap-2 group"
                                    >
                                        {currentIndex < data.length - 1 ? (
                                            <>
                                                Próxima Pergunta
                                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                            </>
                                        ) : (
                                            <>
                                                Ver Resultados
                                                <Trophy size={20} />
                                            </>
                                        )}
                                    </button>
                                </motion.div>
                            )}
                        </>
                    ) : (
                        <ResultCard 
                            score={score} 
                            total={data.length} 
                            onRetry={resetQuiz}
                            successMessage={successMessage}
                            partialSuccessMessage={partialSuccessMessage}
                            failureMessage={failureMessage}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default GenericQuiz; 