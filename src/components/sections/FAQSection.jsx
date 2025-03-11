import React from 'react';
import FAQItem from '../FAQItem';
import ScrollReveal from '../ScrollReveal';
import SectionHeading from '../ui/SectionHeading';

const FAQSection = () => {
	const faqs = [
		{
			question: "Como posso começar a jogar convosco?",
			answer: "É simples! Tenta aceder ao nosso portal. Ao fazê-lo, terás de iniciar sessão através do Discord, onde te juntarás ao nosso servidor e serás automaticamente conectado ao portal. A partir daí, podes criar quantos personagens e histórias quiseres para cada um. Apenas uma história será aprovada por personagem, mas quanto mais personagens e histórias precisarem de aprovação, mais lento será o processo. Consulta a pergunta \"O que acontece depois da minha história ser aprovada?\" para mais detalhes."
		},
		{
			question: "Que tipo de personagem posso criar?",
			answer: "Tens à tua disposição uma grande variedade de possibilidades, desde empresário a funcionário público. O importante é que cries uma história convincente que se encaixe no nosso universo de roleplay. Lembra-te que podes ter várias personagens, cada uma com a sua própria história única, como mencionado na pergunta \"Posso ter mais do que uma personagem?\"."
		},
		{
			question: "Como funciona o processo de whitelist?",
			answer: "No nosso portal, vais criar a história da tua personagem. A nossa equipa vai analisá-la e, se necessário, dar-te sugestões para que encaixe perfeitamente no servidor. Podes acelerar este processo adquirindo boosts de prioridade, como explicado na pergunta \"O servidor é pago?\"."
		},
		{
			question: "Posso ter mais do que uma personagem?",
			answer: "Claro que sim! Podes ter várias personagens, mas cada uma precisa de ter a sua própria história única e não podem interagir entre si. Lembra-te que cada personagem precisa passar pelo processo de whitelist descrito na pergunta \"Como funciona o processo de whitelist?\"."
		},
		{
			question: "Há requisitos mínimos de atividade?",
			answer: "Sim, a tua atividade no Discord está sempre a ser classificada pelo nosso bot. Quanto mais ativo fores, maior será o teu ranking de atividade. Um ranking mais alto significa mais boosts de ranking para gastar no portal a cada mês, que podem ser usados para impulsionar a prioridade de uma personagem, de uma história na fila, ou para aumentar a prioridade dos teus pedidos. Os boosts são reabastecidos mensalmente, mas também podem ser comprados no portal. No entanto, os boosts não utilizados não acumulam de um mês para o outro."
		},
		{
			question: "O servidor é pago?",
			answer: "Não, a entrada no servidor é totalmente gratuita! No entanto, antes da abertura ao público, podes adquirir boosts de prioridade para acelerar a aprovação da tua história de personagem, como mencionado na pergunta \"Como funciona o processo de whitelist?\". Estes boosts colocam a tua história numa posição superior na fila de análise, que é realizada por múltiplas pessoas para garantir a melhor adequação ao servidor. Poderás acompanhar o estado da tua história num quadro público que mostra a fila, os níveis de boost, os nomes das personagens e os usernames do Discord associados. Além disso, temos uma loja onde poderás adquirir dinheiro virtual e outras opções de doação para apoiar o desenvolvimento."
		},
		{
			question: "De que PC preciso para jogar?",
			answer: "Para teres a melhor experiência, recomendamos um PC com pelo menos 8GB de RAM, processador i5 ou equivalente, e uma placa gráfica dedicada como uma NVIDIA GTX 1030. Como não usamos assets pesados no nosso servidor, estes requisitos são suficientes para uma ótima jogabilidade."
		},
		{
			question: "Posso fazer streams do servidor?",
			answer: "Claro que podes! Até incentivamos que o faças. Pedimos apenas que sigas as nossas diretrizes de roleplay durante as transmissões."
		},
		{
			question: "Como funciona a loja do servidor?",
			answer: "Em breve, poderás adquirir dinheiro virtual através do nosso portal usando MBWay. O dinheiro será creditado na tua conta e poderás distribuí-lo entre as tuas personagens ou até mesmo transferir para os teus amigos. Lembra-te que todas as compras são finais e não reembolsáveis. Além disso, podes usar a loja para adquirir boosts de prioridade, como explicado na pergunta \"O servidor é pago?\"."
		},
		{
			question: "Posso solicitar itens ou assets especiais?",
			answer: "Sim! Podes fazer pedidos de assets únicos através do nosso portal. No entanto, lembra-te que, se aceites, estes itens terão de ser introduzidos através de roleplay adequado - não aparecerão magicamente no jogo. Podes usar os teus boosts de ranking para aumentar a prioridade destes pedidos, como mencionado na pergunta \"Há requisitos mínimos de atividade?\"."
		},
		{
			question: "O que acontece depois da minha história ser aprovada?",
			answer: "Assim que um personagem e uma história forem aprovados, poderás entrar no servidor e criar a \"aparência\", traços faciais, etc. do teu personagem. A partir daí, estás pronto para começar a tua jornada no nosso mundo de roleplay! Não te esqueças de manter a tua atividade no Discord para ganhares boosts de ranking, como explicado na pergunta \"Há requisitos mínimos de atividade?\"."
		}
	];

	return (
		<div className="relative py-12 md:py-32">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-transparent"></div>
			<div className="max-w-7xl mx-auto px-4 md:px-6 relative">
				<div className="flex flex-col items-center mb-12 md:mb-20">
					<ScrollReveal>
						<SectionHeading title="Perguntas Frequentes" id="faq" />
					</ScrollReveal>
				</div>
				<div className="max-w-3xl mx-auto">
					{faqs.map((faq, index) => (
						<ScrollReveal key={index} delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
							<FAQItem {...faq} />
						</ScrollReveal>
					))}
				</div>
			</div>
		</div>
	);
};

export default FAQSection;