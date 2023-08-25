import React from 'react';
import { NavLink, useParams } from "react-router-dom";
import {StarIcon} from "@heroicons/react/20/solid";
import Reviews from "../../reviews";

interface IProps {}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const GamesIndex: React.FC<IProps> = props => {
    const { id } = useParams();
    if (!id) {
        return null;
    }

    const review = Reviews.find((review) => review.id === parseInt(id));
    if (!review) {
        return (
            <div className='max-w-7xl mx-auto px-4 pb-4 sm:px-6 lg:px-8'>
                <div>
                    <NavLink to="/" className="text-lg transition ease-in-out duration-200 hover:transition-all hover:text-orange-700">
                        ← Back
                    </NavLink>
                </div>
                <div>
                    <h1>Error: Could not locate review</h1>
                </div>
            </div>
        );
    }

    return (
        <div className='max-w-7xl mx-auto px-4 pb-4 sm:px-6 lg:px-8'>
            <div>
                <NavLink to="/" className="text-lg transition ease-in-out duration-200 hover:transition-all hover:text-orange-700">
                    ← Back
                </NavLink>
            </div>
            <section>
                <div>
                    <h1 className="border-b border-slate-800 font-bold text-4xl py-4 max-w-3xl">{review.name}</h1>
                </div>
                <div className="flex flex-col lg:flex-row py-10">
                    <div className="max-w-2xl rounded-xl overflow-hidden mx-auto mb-10 lg:mx-none lg:mb-0">
                        <img src={review.game.image.Everdell} alt={review.game.title} />
                    </div>
                    <div className="grow px-10">
                        <div className="flex flex-row justify-between">
                            <h1 className="font-bold text-3xl">{review.game.title}</h1>
                            <h1 className="text-3xl">${review.game.price}</h1>
                        </div>
                        <div className="flex flex-col my-4">
                            <p className="text-xl mx-auto">
                                {review.rating} out of 5 stars
                            </p>
                            <div className="flex items-center mx-auto">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                    <StarIcon
                                        key={rating}
                                        className={classNames(
                                            review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                            'h-10 w-10'
                                        )}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="max-w-2xl my-10">
                            <p className="text-lg">{review.summary}</p>
                        </div>
                        <div className="flex flex-col space-y-4 mt-6">
                            <a href={review.amazonUrl} target="_blank" className="text-center bg-amber-300 py-2 rounded-lg mt-10 transition ease-in-out duration-200 hover:transition-all hover:bg-amber-400">
                                Buy On Amazon
                            </a>
                            <a href={review.targetUrl} target="_blank" className="text-center bg-red-300 py-2 rounded-lg transition ease-in-out duration-200 hover:transition-all hover:bg-red-400">
                                Buy At Target
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h1 className="border-b border-slate-800 font-bold text-4xl py-4">Our Thoughts</h1>
                </div>
                <div className="flex flex-col space-y-4 py-4 px-10 text-lg">
                    {review.paragraphs.map((paragraph) => (
                        <p>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default GamesIndex;