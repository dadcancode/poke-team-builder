import React from 'react';
import { A } from 'hookrouter';

const Menu = () => {
    return (
        <div className='row justify-content-center mt-5'>
            <div className='col-8'>
                <ul className='list-group bg-primary'>
                    <A className='list-group-item mx-1 mb-1 mt-2 bg-warning text-danger font-weight-bold'>
                        TEAM
                    </A>
                    <A href='/pokedex' className='list-group-item m-1 bg-warning text-danger font-weight-bold'>
                        POKEDEX
                    </A>
                    <A className='list-group-item m-1 bg-warning text-danger font-weight-bold'>
                        SEARCH
                    </A>
                    <A className='list-group-item mx-1 mt-1 mb-2 bg-warning text-danger font-weight-bold'>
                        ANALYZE
                    </A>
                </ul>
            </div>
        </div>
    )
}

export default Menu;