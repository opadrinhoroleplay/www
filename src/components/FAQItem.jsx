import React from 'react';
import { ChevronRight } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div className="border-b border-white/10">
			<button
				className="w-full py-6 flex items-center justify-between hover:text-amber-400 transition-colors"
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className="text-left font-medium">{question}</span>
				<ChevronRight className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
			</button>
			<div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 mb-6' : 'max-h-0'}`}>
				<p className="text-slate-400">{answer}</p>
			</div>
		</div>
	);
};

export default FAQItem;