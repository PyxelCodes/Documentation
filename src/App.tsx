import { Sidebar } from './modules/Sidebar'
import { useState } from 'react'
import { Player } from './modules/ressources/Player'
import { Searchbar } from './modules/Searchbar'

function App() {
  let [render, setRender] = useState(<Player/>)

  return (
    <div className="App">
      <Sidebar pass={setRender} />
      <Searchbar />
      <main>{render}</main>
    </div>
  )
}

export default App
