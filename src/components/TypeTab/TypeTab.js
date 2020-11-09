import React from 'react';

const TypeTab = (props) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <span>{props.type}</span>
            </div>
        </div>
    )
}

export default TypeTab;