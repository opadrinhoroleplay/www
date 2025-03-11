import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import { Link } from 'react-router-dom';
import { ArrowLeft } from "lucide-react"

const EntrevistaYield = () => {
    return (
        <div className="min-h-screen bg-neutral-950 pt-24">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-8">
                    <Link 
                        to="/historia" 
                        className="inline-flex items-center text-amber-500 hover:text-amber-400 transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        Voltar à História
                    </Link>
                </div>

                <ScrollReveal>
                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-transparent">
                            Entrevista ao Fundador
                        </h1>
                        <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
                        <p className="text-slate-400 mt-8">
                            Entrevista realizada a yield, fundador da GTApt, em 2010
                        </p>
                    </div>
                </ScrollReveal>

                <div className="space-y-8 mb-32">
                    <ScrollReveal>
                        <div className="bg-neutral-900/50 p-8 rounded-lg border border-amber-900/20">
                            <div className="prose prose-invert max-w-none">
                                <h2 className="text-3xl font-bold mb-4 text-amber-500">Entrevista ao Fundador da GTApt</h2>

                                <h3 className="text-xl font-semibold mt-8 text-amber-400">Como foi a evolução inicial do site?</h3>
                                <p>
                                    O site começou como um projeto pessoal, mas <em>rapidamente cresceu graças à dedicação da comunidade</em>.
                                    Tínhamos uma equipa fantástica que incluía o uNi, o Commando, o undo, o StaticX, entre outros.
                                    <strong>O fórum tornou-se um ponto de encontro para todos os fãs portugueses de GTA.</strong>
                                </p>

                                <hr className="my-8 border-amber-800" />

                                <h3 className="text-xl font-semibold mt-8 text-amber-400">Qual foi o momento mais marcante?</h3>
                                <p>
                                    Um dos momentos mais marcantes foi quando a <strong>Rockstar Games reconheceu oficialmente a GTApt
                                    como fã-site</strong>. Isso deu-nos acesso a conteúdo exclusivo e aumentou muito a nossa visibilidade.
                                </p>

                                <hr className="my-8 border-amber-800" />

                                <h3 className="text-xl font-semibold mt-8 text-amber-400">Como foi a transição da liderança para o uNi?</h3>
                                <p>
                                    No final de 2006, devido a compromissos pessoais, decidi passar a liderança ao uNi.
                                    Foi uma <em>decisão natural</em>, pois ele já era um membro fundamental da equipa e tinha a visão
                                    certa para continuar o legado da GTApt.
                                </p>

                                <hr className="my-8 border-amber-800" />

                                <h3 className="text-xl font-semibold mt-8 text-amber-400">Que mensagem deixarias aos novos membros da comunidade?</h3>
                                <p>
                                    A GTApt sempre foi mais do que um site - <strong>é uma comunidade</strong>. O espírito de ajuda mútua
                                    e a paixão pelo GTA que nos uniram em 2003 continuam vivos hoje. <em>Mantenham essa chama acesa.</em>
                                </p>

                                <hr className="my-8 border-amber-800" />

                                <h3 className="text-xl font-semibold mt-8 text-amber-400">Ficaste farto do projeto apesar de não o continuares por outros motivos?</h3>
                                <p>
                                    Estive à frente do projeto durante pouco mais de dois anos (não chegou aos três). <strong>Não me fartei de modo algum</strong>, 
                                    gostava do que fazia. O principal motivo para ter deixado o projeto foi a entrada na faculdade. 
                                    Não fiquei com tanto tempo disponível, tanto que a minha saída não foi imediata; foi algo gradual, 
                                    até chegar ao ponto em que me encontrava completamente alheio ao mundo do GTA.
                                </p>

                                <hr className="my-8 border-amber-800" />

                                <h3 className="text-xl font-semibold mt-8 text-amber-400">Não tinhas grande simpatia pelo San Andreas, isso fez-te perder alguma vontade de continuar o projeto?</h3>
                                <p>
                                    É verdade, o SA não me atraiu minimamente. A ideia de ter de fazer no jogo tarefas que se fazem na vida real 
                                    faz parte de um género de jogo pelo qual não tenho muita afinidade (à semelhança dos MMORPGs que se tornavam 
                                    mais populares na altura). Contudo, confesso que fui algo cético em não o ter experimentado antes de tomar 
                                    afincadamente essa posição, mas esse facto foi também influenciado pela falta de tempo para o jogar.
                                </p>
                                <p>
                                    <strong>Mesmo assim, não foi isso que me tirou a vontade de continuar o projeto</strong>, até porque, mesmo não tendo jogado o SA, 
                                    continuava a contribuir e a ajudar os utilizadores do canal/site ao máximo que podia.
                                </p>
                                <blockquote>
                                    <p className="text-sm italic">
                                        A título de curiosidade, tinha acabado de instalar o SA minutos antes de receber o convite para esta entrevista. 
                                        Vamos ver se afinal mudo de opinião!
                                    </p>
                                </blockquote>

                                <hr className="my-8 border-amber-800" />

                                <h3 className="text-xl font-semibold mt-8 text-amber-400">Houve alguma altura menos boa em que vos pareceu que isto já não ia a lado nenhum?</h3>
                                <p>
                                    Enquanto nós estivemos dedicados ao projeto (eu e o T-1000 - também líder do projeto), e com a devida modéstia... 
                                    <strong>foi sempre um sucesso</strong>. Isto no sentido de que houve sempre uma tendência para crescer e evoluir, principalmente 
                                    pela estrutura do portal, bem como pelo respetivo nível de audiências. Apenas a vertente IRC sofreu ondulações 
                                    sazonais, mas isso é habitual em toda a rede.
                                </p>
                                <p>
                                    Quando nos preparávamos para o próximo passo (porque a v4 já havia muito tempo que estava a ser preparada e até 
                                    construímos alguns protótipos), foi quando o tempo começou a escassear, o trabalho começou a ficar a meio gás, 
                                    até à sua cessação. Chegou-se ao ponto de haver um período de tempo (não me recordo ao certo, talvez uns poucos meses) 
                                    em que o portal esteve completamente parado, até que o uNi fez o grande feito de continuar o que já tínhamos construído.
                                </p>

                                <hr className="my-8 border-amber-800" />

                                <h3 className="text-xl font-semibold mt-8 text-amber-400">Quanto tempo, em média, por dia, achas que isto te tirou ao longo dos anos?</h3>
                                <p>
                                    Bem, já lá vai muito tempo, é difícil estimar alguma coisa... O que posso dizer é que, no período em que estive 
                                    ativo, não tinha uma porção do dia reservada para me dedicar ao projeto (nome demasiado pomposo para o que era 
                                    no início, ah!). Quando achava que tinha algo a acrescentar ou a melhorar, <em>perdia o tempo que fosse preciso 
                                    para o concluir</em>. Lembro-me vagamente que, quando construí a v2 (aquela coisa bela decorada em vermelho cor de 
                                    vinho tinto/sangue de porco, para quem se lembra), estive uma semana a fio sem fazer mais nada. Mais adiante, 
                                    o esquema continuou o mesmo.
                                </p>
                                <p>
                                    Quando o T-1000 se juntou ao projeto (na v2.2), continuávamos sem atualizações agendadas, mas, quando era para 
                                    trabalhar, gastava-se o tempo que fosse necessário. Quanto ao nosso espaço no IRC (que entretanto caiu em 
                                    completo esquecimento e desuso), <strong>estávamos lá praticamente todos os dias, várias horas por dia</strong>.
                                </p>

                                <hr className="my-8 border-amber-800" />

                                <h3 className="text-xl font-semibold mt-8 text-amber-400">Eras capaz de ficar até tarde só pelo gosto de ver o site a crescer? Ou a falar com outros utilizadores?</h3>
                                <p>
                                    <strong>Claro, fiz isso incontáveis vezes.</strong> Como referi na resposta à questão anterior, eu dedicava-me a tempo inteiro 
                                    a este projeto. Durante o 2º ano de existência do projeto, estive numa altura da vida em que pouco saía de casa, 
                                    devido a problemas de diversas ordens. Por outro lado, ao menos converti esse tempo em algo minimamente útil e 
                                    produtivo, penso eu.
                                </p>

                                <hr className="my-8 border-amber-800" />

                                <h3 className="text-xl font-semibold mt-8 text-amber-400">Apesar de ter sido um projeto bem-sucedido e de ainda estar a crescer, penso que nunca gastaram dinheiro nele. Porquê?</h3>
                                <p>
                                    Repara, éramos dois rapazes estudantes (e ainda somos) que não trabalhavam... Infelizmente, neste mundo não 
                                    podemos extorquir dinheiro como o Sr. Vercetti! Além disso, no início não houve essa necessidade, pois <em>sempre 
                                    tivemos o que precisávamos sem ter de pagar por isso</em>.
                                </p>
                                <p>
                                    No período em que elaborávamos os protótipos da v4, que já requeria mais e melhores recursos de alojamento, 
                                    tínhamos conseguido uma parceria que nos garantia tudo o que fosse necessário. <strong>Gastámos apenas dinheiro na 
                                    compra do domínio que seria o da v4</strong>, mas que nunca chegou a ser divulgado aos utilizadores.
                                </p>

                                <hr className="my-8 border-amber-800" />

                                <h3 className="text-xl font-semibold mt-8 text-amber-400">O que achas do "novo" GTApt?</h3>
                                <p>
                                    Como já referi acima, a v4 que tínhamos idealizado seria nuns moldes muito semelhantes ao portal atual, 
                                    praticamente com as mesmas funções, tanto que ainda cheguei a trabalhar um pouco com o uNi no início. 
                                    Era previsto, deste modo, que se alcançasse um estádio superior de evolução.
                                </p>
                                <p>
                                    Quanto ao reconhecimento pela Rockstar Games, penso que nunca esperámos isso pelo simples facto de contermos 
                                    certos e determinados conteúdos que, apesar de não serem apreciados aos olhos da R*, fazia parte dos nossos 
                                    planos mantê-los. Mas sim, <strong>estou contente por saber que o projeto continua a crescer</strong>.
                                </p>

                                <hr className="my-8 border-amber-800" />

                                <h3 className="text-xl font-semibold mt-8 text-amber-400">Já experimentaste/estás a par do SA-MP?</h3>
                                <p>
                                    Na primeira resposta, fiz referência ao facto de ter instalado o SA pela primeira vez minutos antes do início 
                                    da entrevista. <em>Ainda não joguei o single player e muito menos o multiplayer</em>, pelo que não posso emitir juízos 
                                    de valor acerca disso.
                                </p>

                                <hr className="my-8 border-amber-800" />

                                <h3 className="text-xl font-semibold mt-8 text-amber-400">Já te andaste a informar sobre o GTA IV? O que te parece?</h3>
                                <p>
                                    Um pouco apenas. Vi o primeiro trailer oficial. Não estou a par dos detalhes técnicos. A julgar pelo trailer, 
                                    <strong>parece-me um bom passo em frente</strong>, como bem disseram: semelhante à passagem do GTA2 para o GTA3. É de esperar 
                                    que a Rockstar surpreenda uma vez mais, como já foi visto pelo jogo Table Tennis, têm em sua posse tecnologia de 
                                    ponta para fazer um jogo brilhante.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="bg-neutral-900/50 p-8 rounded-lg border border-amber-900/20 mt-8">
                            <h3 className="text-2xl font-bold text-amber-500 mb-6">Links Importantes</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Link 
                                    to="/historia/gtapt" 
                                    className="text-slate-300 hover:text-amber-400 transition-colors"
                                >
                                    História da GTApt
                                </Link>
                                <a 
                                    href="https://gtapt.net" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-slate-300 hover:text-amber-400 transition-colors"
                                >
                                    GTApt.net - Comunidade Portuguesa de GTA
                                </a>
                                <a 
                                    href="https://discord.gg/t36bYQ7VvX" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-slate-300 hover:text-amber-400 transition-colors"
                                >
                                    Discord GTApt
                                </a>
                                <a 
                                    href="https://twitter.com/gtaportugal" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-slate-300 hover:text-amber-400 transition-colors"
                                >
                                    Twitter @gtaportugal
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

export default EntrevistaYield; 