import React from 'react';

const StepCard = ({ number, title, description }) => (
	<div className="relative group h-full">
		<div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-red-900 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
		<div className="relative p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-lg hover:from-white/10 hover:to-white/15 transition duration-300 h-full flex flex-col border border-white/10">
			<span className="text-6xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent opacity-50 mb-4">{number}</span>
			<h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">{title}</h3>
			<p className="text-sm text-slate-400 mt-auto">{description}</p>
		</div>
	</div>
);

export default StepCard;