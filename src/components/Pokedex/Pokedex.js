import React, {useState, useEffect} from 'react';
import PokemonTab from '../PokemonTab/PokemonTab';


const Pokedex = () => {

    const [ pokedex, setPokedex ] = useState([]);
    const [ startInd, setStartInd ] = useState(10);
    const [ endInd, setEndInd ] = useState(20);
    const [ pInd, setPind ] = useState([startInd, endInd])

    const getPokedex = (start, end) => {
        let limit = end - (start - 1);
        let offset = start - 1;
        console.log(`limit: ${limit}, limitType: ${typeof(limit)} \n offset: ${offset}, offsetType: ${typeof(offset)}`)
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
            .then(resp => resp.json())
            .then(json => {
                console.log(json.results)
                setPokedex(json.results);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // let temp = [startInd, endInd]
        // setPind([...temp])
        getPokedex(startInd, endInd);
    }

    useEffect(() => {
        getPokedex(startInd, endInd);
    }, []);

    return (
        <div className='row bg-dark'>
            <div className='col-12 mb-3'>
                <form className='mt-3 text-light' onSubmit={(e) => {
                    handleSubmit(e);
                }}>
                    <div className='row'>
                        <div className='col-5 d-flex'>
                            <label htmlFor='startInd'>Showing:</label>
                            <input className='form-control ml-1' type='number' value={startInd} id='startInd' onChange={(e) => {
                                setStartInd(e.target.value)
                            }}/>
                        </div>
                        <div className='col-5 d-flex'>
                            <label htmlFor='endInd'>To:</label>
                            <input className='form-control ml-1' type='number' value={endInd} id='endInd' onChange={(e) => {
                                setEndInd(e.target.value)
                            }}/>
                        </div>
                        <div className='col-2'>
                            <button className='btn btn-light form-control' type='submit'>SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>
            {console.log('I reloaded }{')}
            {console.log('======================')}
            {console.log('html pokedex:')}
            {console.log(pokedex)}
            {pokedex.map((val, ind) => {
                console.log(`mapping (${ind})index...`)
                console.log(`---[ val is : ${JSON.stringify(val)}`);
                return (
                    <PokemonTab url={val.url} />
                )
            })}
        </div>
    )

}

export default Pokedex;