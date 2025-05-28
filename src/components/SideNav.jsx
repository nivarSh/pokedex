import { useState } from 'react'
import { first151Pokemon, getFullPokedexNumber } from '../utils'

// Desktop device navigation
export default function SideNav(props) {

    const { selectedPokemon, setSelectedPokemon, handleCloseMenu, showSideMenu } = props
    const [searchValue, setSearchValue] = useState('')

    const filteredPokemon = first151Pokemon.filter((elem, elemIndex) => {
        // If full pokedex number includes current search value, return true
        if (getFullPokedexNumber(elemIndex).includes(searchValue)) { return true }

        // If the pokemon name includes the current search value, return true
        if (elem.toLowerCase().includes(searchValue.toLowerCase())) { return true }

        // Otherwise, exclude from the array
        return false
    })

    return (
        <nav className={' ' + (showSideMenu ? 'open' : '')}>
            <div className={'header ' + (showSideMenu ? 'open' : '')}>
                <button onClick={handleCloseMenu} className='open-nav-button'>
                    <i className="fa-solid fa-arrow-left-long"></i>
                </button>
                <h1 className='text-gradient'>Pokédex</h1>
            </div>
            <input placeholder={'E.g. 001 or bulba...'} value={searchValue} onChange={(e) => {
                setSearchValue(e.target.value)
            }} />
            {filteredPokemon.map((pokemon, pokemonIndex) => {
                const truePokedexNumber = first151Pokemon.indexOf(pokemon)
                return(
                    <button key={pokemonIndex} 
                    className={'nav-card ' + (pokemonIndex === selectedPokemon ? 'nav-card-selected' : '')} 
                    onClick={ () => {
                        setSelectedPokemon(truePokedexNumber)
                        handleCloseMenu()
                    }}
                    >
                        <p>{getFullPokedexNumber(truePokedexNumber)}</p>
                        <p>{pokemon}</p>
                    </button>
                )
            })}
        </nav>
    )
}