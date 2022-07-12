import React, {useState, useEffect} from 'react'

const PokemonApi = () => {
    const [pokemon, setPokemon] = useState([])
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setPokemon(response.results)})
    // if the clicked element is changed, execute the useEffect again.
    }, [clicked]);

    return (
        <div>
            <button onClick={e => setClicked(true)}>Fetch Pokemon</button>
            <div>
                {
                    clicked? 
                        pokemon.map((pokemon, i)=>{
                            return (<div key={i}>{pokemon.name}</div>)
                        }):
                        []
                }
            </div>
        </div>
    )
}

export default PokemonApi