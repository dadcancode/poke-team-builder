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
        if(startInd <= endInd) {
            getPokedex(startInd, endInd);
        } else {
            alert('The starting index must be less than or equal to the ending index.');
        }
    }

    useEffect(() => {
        getPokedex(startInd, endInd);
    }, []);

    return (
        <div className='row bg-dark'>
            <div className='col-12 mb-3'>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <a class="navbar-brand" href="#">Range:</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className='form-inline mt-3 ml-auto' onSubmit={(e) => {
                        handleSubmit(e);
                    }}>
                        <input className='form-control mr-xs-1' type='number' value={startInd} id='startInd' onChange={(e) => {
                            setStartInd(e.target.value)
                        }}/>
                        <input className='form-control mr-xs-1' type='number' value={endInd} id='endInd' onChange={(e) => {
                            setEndInd(e.target.value)
                        }}/>
                        <button className='btn btn-outline-light' type='submit'>SUBMIT</button>
                    </form>
                </div>
                    
                </nav>
            </div>
            {/* <button onClick={() => {navigate('/', {a: 'hello'})}}></button> */}
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