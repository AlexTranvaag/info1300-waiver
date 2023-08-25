import React from 'react';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Recent from "./components/Recent";
import Reviews from "../../reviews";
import Games from "../../games";

interface IProps {}

const Index: React.FC<IProps> = props => {
    return (
        <div className='max-w-7xl mx-auto px-4 pb-4 sm:px-6 lg:px-8'>
            <Hero />
            <Featured review={Reviews[0]} />
            <Recent games={Games} />
        </div>
    );
};

export default Index;