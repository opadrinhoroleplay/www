import React from 'react';
import { Link } from 'react-router-dom';

const GuideCard = ({ title, description, slug }) => (
    <Link to={`/guias/${slug}`} className="block h-full">
        <div className="relative group h-full">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-red-900 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-lg hover:from-white/10 hover:to-white/15 transition duration-300 h-full flex flex-col border border-white/10">
                <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">{title}</h3>
                <p className="text-sm text-slate-400">{description}</p>
            </div>
        </div>
    </Link>
);

export default GuideCard;