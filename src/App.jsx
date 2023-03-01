import style from './App.module.css'
import { Sidebar } from './components/Sidebar'
import './global.css'


function App() {
 
  return (
    <div className={style.container}>
      <Sidebar/>

      <div>
        <div> Post 1</div>
        <div> Post 1</div>
      </div>

    </div>
    
  )
}

export default App
