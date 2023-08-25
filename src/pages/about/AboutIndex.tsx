import React from 'react';
import Table from "../../assets/images/table.png";
import Book from "../../assets/images/book-slim.png";

interface IProps {}

// NOTE:
// About us written content has been generated using ChatGPT

const AboutIndex: React.FC<IProps> = props => {
    return (
        <div className='max-w-7xl mx-auto px-4 pb-4 sm:px-6 lg:px-8'>
            <section className="flex flex-row justify-center py-16">
                <div className="w-80">
                    <img src={Book} />
                </div>
                <div className="flex flex-col max-w-2xl px-16 my-auto">
                    <h1 className="font-bold text-4xl">Our Story</h1>
                    <p className="py-6 text-lg">
                        It all began on a drizzly afternoon when a few friends, nestled around a coffee table, sipped tea and fumbled through a new board game. The laughter, the stories, and the warm brew became the foundation for TeaTimeTables. Our mission is simple: to infuse the comfort of a tea break with the joy of discovering delightful board games.
                    </p>
                </div>
            </section>
            <section className="flex flex-row justify-center py-16">
                <div className="flex flex-col max-w-2xl px-16 my-auto">
                    <h1 className="font-bold text-4xl">Why Cozy Board Games?</h1>
                    <p className="py-6 text-lg">
                        In an age of digital deluge, we found solace in the tactile pleasure of moving pieces on a board while wrapped in a warm blanket with a cuppa in hand. Cozy board games aren't just about strategy or winning, but about the shared moments, stories, and the snug ambiance they create.
                    </p>
                </div>
                <div className="w-80">
                    <img src={Table} />
                </div>
            </section>
            <section className="flex justify-center py-16">
                <div className="flex flex-col max-w-4xl px-16 my-auto">
                    <h1 className="font-bold text-4xl">Our Promise</h1>
                    <p className="py-6 text-lg">
                        Every game we review is selected with care, ensuring it evokes warmth, togetherness, and simplicity. We're here to guide you through a curated selection of games that promise to turn any ordinary evening into a snug, memorable gathering.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutIndex;