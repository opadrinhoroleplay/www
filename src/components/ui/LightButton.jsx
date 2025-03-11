import React from 'react';
import BaseButton from './BaseButton';

const LightButton = ({ 
	children, 
	to, 
	onClick, 
	leftIcon,
	rightIcon,
	className = '',
	title,
	'aria-label': ariaLabel,
	type
}) => {
	return (
		<BaseButton 
			to={to} 
			onClick={onClick} 
			className={className}
			title={title}
			aria-label={ariaLabel}
			type={type}
		>
			<div className="relative group block">
				<div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
				<div className="relative px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 rounded-lg transition duration-300">
					<span className="flex items-center justify-center gap-3 text-lg">
						{leftIcon}
						<span className="text-white font-semibold">{children}</span>
						{rightIcon}
					</span>
				</div>
			</div>
		</BaseButton>
	);
};

export default LightButton; 