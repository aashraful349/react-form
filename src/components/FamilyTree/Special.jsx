import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({ name }) => {
    const newAsset=useContext(AssetContext);
    console.log(newAsset);
    return (
        <div>
            {/* <h3>Special</h3> */}
            <p>Special: {name}</p>
            <p>NewAsset: {newAsset}</p>

        </div>
    );
};

export default Special;