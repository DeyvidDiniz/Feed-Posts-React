

import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import style from './App.module.css'
import './global.css'


const posts = [
  {
    id:1,
    author:{
      avatarUrl: 'https://github.com/DeyvidDiniz.png',
      name: 'Deyvid Diniz',
      role: 'Dev Front-End'
    },
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a neque a ante sodales consequat. Aliquam erat volutpat. Fusce vel elit ligula',
    publishedAt:new Date('2023-03-01 20:00:00')
  },

  {
    id:2,
    author:{
      avatarUrl: 'https://github.com/DeyvidDiniz.png',
      name: 'Deyvid Diniz 2',
      role: 'Dev Front-End'
    },
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a neque a ante sodales consequat. Aliquam erat volutpat. Fusce vel elit ligula',
    publishedAt:new Date('2023-03-05 20:00:00')
  }
];

function App() {

  return (
    <div className={style.container}>
      <Sidebar/>

      <div>
        {posts.map(post => {
          return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
      </div>

    </div>
    
  )
}

export default App
