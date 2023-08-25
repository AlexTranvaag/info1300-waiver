import React from 'react';
import Section from "./components/Section";
import Games from "../../games";

interface IProps {}


const GamesIndex: React.FC<IProps> = props => {
    return (
        <div className='max-w-7xl mx-auto px-4 pb-4 sm:px-6 lg:px-8'>
            <Section title="All Games" games={Games} />
            <Section title="Strategy Games" games={Games.filter(game => game.categories.includes("strategy"))} />
            <Section title="Economic Games" games={Games.filter(game => game.categories.includes("economic"))} />
            <Section title="City-Building Games" games={Games.filter(game => game.categories.includes("citybuilding"))} />
            <Section title="Co-op Games" games={Games.filter(game => game.categories.includes("coop"))} />
            <Section title="Solo Games" games={Games.filter(game => game.categories.includes("solo"))} />
        </div>
    );
};

export default GamesIndex;