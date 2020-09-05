import React from 'react';

const Menu = () => {
    return (
        <div className='row justify-content-center mt-5'>
            <div className='col-8'>
                <ul className='list-group bg-primary'>
                    <a className='list-group-item mx-1 mb-1 mt-2 bg-warning text-danger font-weight-bold'>
                        TEAM
                    </a>
                    <a href='/pokedex' className='list-group-item m-1 bg-warning text-danger font-weight-bold'>
                        POKEDEX
                    </a>
                    <a className='list-group-item m-1 bg-warning text-danger font-weight-bold'>
                        SEARCH
                    </a>
                    <a className='list-group-item mx-1 mt-1 mb-2 bg-warning text-danger font-weight-bold'>
                        ANALYZE
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Menu;