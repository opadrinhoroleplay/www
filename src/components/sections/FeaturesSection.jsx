import React from 'react';
import ScrollReveal from '../ScrollReveal';
import { createFeatures } from '../../data/features';
import SectionHeading from '../ui/SectionHeading';

const FeatureSection = ({ feature, index }) => {
	const isEven = index % 2 === 0;
	
	return (
		<ScrollReveal delay={index * 0.1}>
			<div className="group relative">
				<div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-red-500/5 to-red-900/5 rounded-2xl transition-all duration-500 group-hover:scale-105 group-hover:from-amber-500/10 group-hover:via-red-500/10 group-hover:to-red-900/10">
					<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMEw2MCAwdjYwTDMwIDMweiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIvPgo8L3N2Zz4=')] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
				</div>
				<div className={`relative flex flex-col items-start gap-6 p-6 sm:p-8 rounded-2xl border border-amber-500/10 backdrop-blur-sm transition-all duration-500 group-hover:border-amber-500/20 hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.1)]`}>
					<div className="w-full space-y-4 sm:space-y-6">
						<div className="flex items-center gap-3 sm:gap-4">
							<div className="relative p-3 sm:p-4 rounded-xl bg-gradient-to-br from-amber-500/20 via-red-500/20 to-red-900/20 border border-amber-500/20 transition-all duration-500 group-hover:from-amber-500/30 group-hover:via-red-500/30 group-hover:to-red-900/30 overflow-hidden animate-pulse">
								<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMEw2MCAwdjYwTDMwIDMweiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgo8L3N2Zz4=')] animate-shine" />
								{React.cloneElement(feature.icon, { className: "w-6 h-6 sm:w-8 sm:h-8 text-amber-400 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:text-amber-300" })}
							</div>
							<h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:via-amber-400 group-hover:to-amber-500 transition-all duration-500">
								{feature.title}
							</h3>
						</div>
						<p className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-500">
							{feature.description}
						</p>
					</div>
				</div>
			</div>
		</ScrollReveal>
	);
};

const FeaturesSection = () => {
	const features = createFeatures(React);

	return (
		<div className="relative py-20 sm:py-32">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-transparent" />
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMEw2MCAwdjYwTDMwIDMweiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIvPgo8L3N2Zz4=')] opacity-50" />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
				<ScrollReveal>
					<SectionHeading title="Características Planeadas" id="caracteristicas" />
				</ScrollReveal>
				<div className="space-y-6 sm:space-y-8">
					{features.map((feature, i) => (
						<FeatureSection key={i} feature={feature} index={i} />
					))}
				</div>
			</div>
		</div>
	);
};

export default FeaturesSection;