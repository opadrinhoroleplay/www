import React from 'react';

const HighlightCard = ({ title, description, image, disabled, disabledText }) => (
	<div className={`relative group h-full ${disabled ? 'cursor-not-allowed' : ''}`}>
		<div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-red-900 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
		<div className="relative h-full rounded-lg overflow-hidden">
			<img 
				src={image} 
				alt={title} 
				className={`w-full h-48 object-cover filter ${disabled ? 'brightness-50' : 'brightness-75 group-hover:brightness-100'} transition duration-300`} 
			/>
			<div className={`p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm ${disabled ? '' : 'hover:from-white/10 hover:to-white/15'} transition duration-300 border border-white/10`}>
				<div className="flex justify-between items-start">
					<h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">{title}</h3>
					{disabled && (
						<span className="text-sm px-2 py-1 rounded bg-neutral-800 text-neutral-400">
							{disabledText}
						</span>
					)}
				</div>
				<p className={`text-slate-400 ${disabled ? 'opacity-50' : ''}`}>{description}</p>
			</div>
		</div>
	</div>
);

export default HighlightCard;