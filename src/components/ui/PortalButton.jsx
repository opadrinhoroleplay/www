import React from 'react';
import { LayoutDashboard } from 'lucide-react';
import { getReferral } from '../../utils/referral';
import LightButton from './LightButton';

const PortalButton = ({ className }) => {
	const handlePortalClick = e => {
		e.preventDefault();
		
		const username = getReferral();
		const baseUrl = 'https://portal.opadrinhoroleplay.pt';
		window.location.href = username ? `${baseUrl}/${encodeURIComponent(username)}` : baseUrl;
	};

	return (
		<LightButton
			// onClick={handlePortalClick}
			title="Utiliza o portal para gerir as tuas personagens, candidaturas, oportunidades e etc."
			leftIcon={<LayoutDashboard className="w-5 h-5 transition-transform duration-300 ease-out group-hover:scale-110" />}
			aria-label="Registar-se no portal da comunidade"
			className={className}
		>
			Entrar no Portal
		</LightButton>
	);
};

export default PortalButton; 