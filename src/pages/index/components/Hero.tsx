import React from 'react';
import { NavLink } from "react-router-dom";
import Table from "../../../assets/images/table.png";

interface IProps {
}

const Hero: React.FC<IProps> = props => {
    return (
        <header className="flex flex-col lg:flex-row justify-center py-16">
            <div className="w-96 mx-auto mb-10 lg:mx-none lg:mb-0">
                <img src={Table} />
            </div>
            <div className="flex flex-col max-w-xl px-16 my-auto mx-auto lg:mx-none">
                <h1 className="font-bold text-4xl">TeaTimeTables</h1>
                <h5 className="text-2xl">Steep, Sit, Play</h5>
                <p className="py-6 text-lg">
                    Blend the joy of a comforting brew with the charm of cozy board games. Dive into our reviews and find the perfect pairing for your next game night!
                </p>
                <NavLink to="/games" className="text-center border border-orange-700 text-orange-700 py-2 rounded-lg transition ease-in-out duration-200 hover:transition-all hover:bg-orange-700 hover:text-orange-50">
                    View Games
                </NavLink>
            </div>
        </header>
    );
};

export default Hero;