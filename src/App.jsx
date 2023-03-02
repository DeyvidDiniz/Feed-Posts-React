import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import style from './App.module.css'
import './global.css'


function App() {
 
  return (
    <div className={style.container}>
      <Sidebar/>

      <div>
        <Post/>
        <Post/>
      </div>

    </div>
    
  )
}

export default App
