import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

interface IProps {
    games: any;
}

const Recent: React.FC<IProps> = props => {
    const [gamesIterator, setGamesIterator] = useState(0);
    const [games, setGames] = useState<any[]>(props.games.slice(0,3));

    const updateGames = (inc: number) => {
        const newIterator = gamesIterator + inc;
        console.log(props.games.length);
        if ((newIterator >= 0) && (newIterator + 3 <= props.games.length)) {
            setGamesIterator(newIterator);
            setGames(props.games.slice(newIterator, newIterator + 3));
        }
    }

    return (
        <section>
            <div className="flex flex-row justify-between">
                <h1 className="border-b border-slate-800 font-bold text-2xl py-4">Recent Games</h1>
                <NavLink to="/games" className="group text-md py-4 my-auto transition ease-in-out duration-200 hover:transition-all hover:text-orange-700">
                    <span>View All</span>
                    <span className="ml-2">→</span>
                </NavLink>
            </div>
            <div className="flex flex-row py-6 space-x-4 justify-center">
                <button className="text-xl" onClick={(e) => {updateGames(-1)}}>
                    ←
                </button>
                {games.slice(0, 3).map((game: any) => (
                    <img key={game.id} src={game.image} alt={game.name} className="w-52 h-52 lg:w-96 lg:h-96 bg-gray-400 rounded-lg" />
                ))}
                <button className="text-xl" onClick={(e) => {updateGames(1)}}>
                    →
                </button>
            </div>
        </section>
    );
};

export default Recent;