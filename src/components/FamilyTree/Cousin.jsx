import React from 'react';
import Special from './Special';

const Cousin = ({ asset, name }) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name==='Tomas' && <Special name={asset}></Special>
            }
        </div>
    );
};

export default Cousin;