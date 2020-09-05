import React, {useState, useEffect} from 'react';

const PokemonTab = (props) => {
    console.log('PokemonTab ran');
    console.log(props.url)
    const [ tabInfo, setTabInfo ] = useState({});

    const getTabInfo = (url) => {
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            console.log('tabInfo:');
            console.log(json);
            console.log('======================');
            setTabInfo(json)
        })
    }

    useEffect(() => {
        getTabInfo(props.url);
    }, [props]);

    return (
        <div className='col-sm-3'>
            <div className='card bg-light text-secondary my-2'>
                <div className='card-body'>
                    <div className='d-flex'>
                        {tabInfo.sprites && <img src={tabInfo.sprites.front_default}/>}
                        {/* {console.log(typeof(tabInfo.sprites))} */}
                        <h6 className='card-title h4'>{tabInfo.name}</h6>
                        <span className='ml-3'>{tabInfo.id}</span>
                        {/* {console.log(tabInfo.species.name)} */}
                    </div>
                    <div className='d-flex'>
                        {tabInfo.types ? tabInfo.types.map((val, ind) => {
                            if(ind === 0) {
                                return (
                                    <p className='lead mr-1'>{`${val.type.name}`}</p>
                                )
                            } else {
                                return (
                                    <p className='lead'>{`/ ${val.type.name}`}</p>
                                )
                            }
                        }) : ''}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default PokemonTab;