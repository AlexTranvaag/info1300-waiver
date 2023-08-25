import React from 'react';
import { NavLink } from "react-router-dom";

interface IProps {
    title: string;
    games: {id: number, reviewId: number, name: string, image: string}[];
}

const Recent: React.FC<IProps> = props => {
    return (
        <section>
            <div className="flex flex-row justify-between">
                <h1 className="border-b border-slate-800 font-bold text-2xl py-4">{props.title}</h1>
                {!!(props.games.length > 12) && (
                    <NavLink to="/games" className="group text-md py-4 my-auto transition ease-in-out duration-200 hover:transition-all hover:text-orange-700">
                        <span>View All</span>
                        <span className="ml-2">↓</span>
                    </NavLink>
                )}
            </div>
            <div className="grid grid-cols-6 gap-4 py-6 justify-center">
                {props.games.map((game: {id: number, reviewId: number, name: string, image: string}) => (
                    <NavLink key={game.id} to={`/review/${game.reviewId}`}>
                        <img  src={game.image} alt={game.name} className="aspect-square bg-gray-400 rounded-lg" />
                    </NavLink>
                ))}
            </div>
        </section>
    );
};

export default Recent;