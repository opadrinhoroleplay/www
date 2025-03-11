import React, { useState } from 'react';
import { siDiscord } from 'simple-icons';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/Dialog';
import { Check, Copy } from 'lucide-react';

const DiscordButton = ({ className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const discordLink = 'https://chat.opadrinhoroleplay.pt';

    const handleCopyLink = async () => {
        await navigator.clipboard.writeText(discordLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const DiscordButtonBase = ({ onClick, children, className = '' }) => (
        <button 
            onClick={onClick}
            className={`discord-button flex items-center justify-center gap-3 px-8 py-3.5 text-white rounded-[0.3rem] text-lg font-semibold cursor-pointer transition-all duration-200 hover:opacity-90 ${className}`}
            style={{boxShadow: '0 0 0 1px rgba(4,4,5,0.2), 0 2px 2px rgba(0,0,0,0.1)'}}
        >
            <svg role="img" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d={siDiscord.path} />
            </svg>
            <span>{children}</span>
        </button>
    );

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DiscordButtonBase onClick={() => setIsOpen(true)} className={className}>Entrar no Discord</DiscordButtonBase>

            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
                <DialogHeader className="text-center">
                    <DialogTitle className="text-2xl">Vem fazer parte da nossa comunidade!</DialogTitle>
                    <DialogDescription className="pt-2 text-zinc-400">Partilha este link com os teus amigos e vem divertir-te connosco:</DialogDescription>
                </DialogHeader>
                
                <div className="flex items-center justify-center gap-2 mt-2 mb-6">
                    <code className="flex-1 bg-zinc-800 p-3 rounded text-zinc-300 font-mono select-all hover:bg-zinc-700/50 cursor-pointer transition-colors">{discordLink}</code>
                    <button
                        onClick={handleCopyLink}
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white transition-colors cursor-pointer"
                        aria-label={copied ? "Link copiado" : "Copiar link"}
                    >
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </button>
                </div>

                <DialogFooter className="sm:justify-center">
                    <DiscordButtonBase onClick={() => window.location.href = discordLink}>Entrar agora</DiscordButtonBase>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DiscordButton; 