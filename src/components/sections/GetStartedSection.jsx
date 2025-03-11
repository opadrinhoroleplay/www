import React from 'react';
import DiscordButton from '../DiscordButton';
import PortalButton from '../ui/PortalButton';

const GetStartedSection = () => {
	return (
		<section className="py-20 bg-neutral-900">
			<div className="container mx-auto px-4">
				<div className="text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pronto para começar?</h2>
					<p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">Regista-te no nosso portal e desbloqueia o acesso completo à comunidade.</p>
					<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
						<PortalButton />
						<DiscordButton>Ver Comunidade</DiscordButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GetStartedSection;