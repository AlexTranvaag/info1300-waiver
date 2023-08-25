import React from 'react';

interface IProps {}

const MissingIndex: React.FC<IProps> = props => {
    return (
        <div className='max-w-7xl mx-auto px-4 pb-4 sm:px-6 lg:px-8'>
            <div className='max-w-3xl mx-auto'>
                <h1>404</h1>
            </div>
        </div>
    );
};

export default MissingIndex;