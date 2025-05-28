import { useState } from 'react'
import './index.css'
import './fanta.css'
import Header from './components/Header'
import SideNav from './components/SideNav'
import PokeCard from './components/PokeCard'

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState(0)
  const [showSideMenu, setShowSideMenu] = useState(false)

  function handleToggleMenu() {
    setShowSideMenu(!showSideMenu)
  }

    function handleCloseMenu() {
    setShowSideMenu(false)
  }

  return (
    <>
      <Header handleToggleMenu={handleToggleMenu} />
      <SideNav selectedPokemon={selectedPokemon} 
      setSelectedPokemon={setSelectedPokemon} 
      handleCloseMenu={handleCloseMenu} 
      showSideMenu={showSideMenu}
      />
      <PokeCard selectedPokemon={selectedPokemon}/>
    </>
  )
}

export default App
