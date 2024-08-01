import React from 'react';
import Card from './card'; 
const Row = ({ cards }) => {
    const rows = [];
    for (let i = 0; i < 6; i++) {
        rows.push(
            <div className="row" key={i}>
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        );
    }
    return <>{rows}</>;
};
export default Row;