import { BookOpen, Shield, Briefcase, Users, Car, MapPin, Star, Store, HeartPulse } from 'lucide-react';

export const createFeatures = (React) => [
	{
		icon: <Briefcase className="w-6 h-6" />,
		title: "Arruma Tudo nos Teus Bolsos Mágicos",
		description: "No nosso servidor, chamamos 'contentores' a qualquer espaço de armazenamento virtual - desde os bolsos das tuas calças até ao porta-bagagens do teu carro. Uma mochila, uma mala, um frigorífico, um cofre... todos são contentores com as suas próprias capacidades e funcionalidades."
	},
	{
		icon: <Car className="w-6 h-6" />,
		title: "Sente a Estrada como Nunca Antes",
		description: "Esquece as curvas de alta velocidade dos jogos arcade. Aqui, cada veículo tem o seu próprio 'handling', que determina como ele acelera, trava e se comporta nas curvas. Sente a inércia ao travar bruscamente e a transferência de peso nas curvas apertadas. É a experiência de condução mais realista que vais encontrar!"
	},
	{
		icon: <Shield className="w-6 h-6" />,
		title: "Armas Não São Brinquedos",
		description: "Nada de licenças de porte de arma instantâneas. Aqui, vais ter que provar que és responsável e capaz. E mesmo depois de obteres a tua arma, a manutenção é crucial. Limpa-a regularmente e substitui as peças gastas, ou arrisca-te a que ela encrave quando mais precisares. Cada tiro conta! E cuidado: se fores apanhado com uma arma sem licença, prepara-te para uma longa temporada atrás das grades. Não é algo com que se brinque."
	},
	{
		icon: <BookOpen className="w-6 h-6" />,
		title: "Escreve a Tua Própria História",
		description: "Advogado, médico, mecânico, ou até mesmo um sem-abrigo... A escolha é tua! Cria a tua personagem desde o zero, escolhendo cada detalhe da sua aparência e história de vida. Depois, sai para a cidade e interage com outros jogadores e NPCs para criar a tua própria narrativa única. As possibilidades são infinitas!"
	},
	{
		icon: <Users className="w-6 h-6" />,
		title: "Empregos Exigem Dedicação",
		description: "Ter um emprego na nossa cidade é um compromisso significativo. As empresas dependem de trabalhadores confiáveis para manter as operações fluindo suavemente durante as suas horas de funcionamento. Se um jogador não puder cumprir o seu turno, NPCs especializados podem intervir para preencher a lacuna, mas a um custo para o empregador. Isto incentiva os jogadores a tratarem os seus empregos virtuais com seriedade e a comunicarem efetivamente com os seus empregadores sobre a sua disponibilidade. Afinal, a reputação e a confiabilidade de um trabalhador são ativos valiosos em qualquer mundo, virtual ou real."
	},
	{
		icon: <MapPin className="w-6 h-6" />,
		title: "Faz o Teu Caminho para o Topo",
		description: "A economia da nossa cidade está sempre em movimento, impulsionada pelas ações dos jogadores e NPCs. Os preços flutuam com base na oferta e na procura, as empresas prosperam ou falham com base na sua gestão, e oportunidades de negócios surgem constantemente. Seja um honesto trabalhador ou um mestre do submundo - o sucesso depende de ti!"
	},
	{
		icon: <Star className="w-6 h-6" />,
		title: "Cada Segundo Conta",
		description: "Esquece ciclos dia-noite acelerados e mudanças de estação instantâneas. No nosso servidor, o tempo move-se a um ritmo realista. Um dia completo dura 22 horas reais, dando-te tempo para viver cada momento. Assiste ao nascer e pôr do sol, adapta-te às mudanças de tempo, e sente o passar dos dias, semanas e meses. Aqui, o tempo é mais do que um relógio - é uma parte integral da tua história."
	},
	{
		icon: <Shield className="w-6 h-6" />,
		title: "Seguro Automóvel Realista",
		description: "Tal como na vida real, podes comprar vários tipos de seguro para o teu veículo através de corretores de seguros na cidade. Desde cobertura básica de responsabilidade civil até pacotes abrangentes que cobrem roubo, danos e mais. Quanto melhor o seguro, maior a proteção, mas também o prémio. Escolhe com sabedoria!"
	},
	{
		icon: <Store className="w-6 h-6" />,
		title: "Uma Cidade que Respira",
		description: "Tal como na vida real, a cidade tem o seu próprio ritmo. A maioria dos negócios fecha à noite, as ruas ficam mais calmas, e a vida noturna ganha um brilho diferente. Queres fazer compras de madrugada? Terás que esperar até de manhã, como todos os outros. Aqui, cada momento do dia tem a sua própria atmosfera única."
	},
	{
		icon: <HeartPulse className="w-6 h-6" />,
		title: "Cuidados Inteligentes",
		description: "Se apanhares uma pneumonia por andar na chuva ou uma IST por relações desprotegidas, os NPCs médicos entram em ação. Eles fazem diagnósticos realistas e tratamentos personalizados, garantindo que a saúde nunca fica comprometida mesmo sem jogadores online."
	}
]; 