import React from 'react';
import Cousin from './Cousin';

const Aunt = ({ asset }) => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name='Jojo'></Cousin>
                <Cousin asset={asset} name='Tomas'></Cousin>
                
            </section>
        </div>
    );
};

export default Aunt;