import React from 'react';
import { NavLink } from "react-router-dom";
import { StarIcon } from '@heroicons/react/20/solid'

interface IProps {
    review: any;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

// NOTE:
// Written review content has been generated using ChatGPT and moderated for accuracy and to reflect my opinions of these games

const Featured: React.FC<IProps> = props => {
    return (
        <section>
            <div>
                <h1 className="border-b border-slate-800 font-bold text-4xl py-4 max-w-lg">Featured Game</h1>
            </div>
            <div className="flex flex-col lg:flex-row py-10">
                <div className="max-w-2xl rounded-xl overflow-hidden mx-auto mb-10 lg:mx-none lg:mb-none">
                    <img src={props.review.game.image.Everdell} alt={props.review.game.title} />
                </div>
                <div className="grow px-10">
                    <div className="flex flex-row justify-between">
                        <h1 className="font-bold text-3xl">{props.review.game.title}</h1>
                        <h1 className="text-3xl">${props.review.game.price}</h1>
                    </div>
                    <div className="flex flex-col my-4">
                        <p className="text-xl mx-auto">
                            {props.review.rating} out of 5 stars
                        </p>
                        <div className="flex items-center mx-auto">
                            {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                    key={rating}
                                    className={classNames(
                                        props.review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                        'h-10 w-10'
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="max-w-2xl my-10">
                        <p className="text-lg">{props.review.summary}</p>
                    </div>
                    <div className="flex flex-col">
                        <NavLink to={`/review/${props.review.id}`} className="text-center border border-orange-700 text-orange-700 py-2 rounded-lg transition ease-in-out duration-200 hover:transition-all hover:bg-orange-700 hover:text-orange-50">
                            Read Full Review
                        </NavLink>
                    </div>
                    <div className="flex flex-col space-y-4 mt-6">
                        <a href={props.review.amazonUrl} target="_blank" className="text-center bg-amber-300 py-2 rounded-lg mt-10 transition ease-in-out duration-200 hover:transition-all hover:bg-amber-400">
                            Buy On Amazon
                        </a>
                        <a href={props.review.targetUrl} target="_blank" className="text-center bg-red-300 py-2 rounded-lg transition ease-in-out duration-200 hover:transition-all hover:bg-red-400">
                            Buy At Target
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;