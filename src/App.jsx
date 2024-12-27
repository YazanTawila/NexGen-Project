import React from 'react'
import './App.css'
import './index.css'
import InfiniteScroll from './components/InfiniteScroll/InfiniteScroll'
import scroll from './Data/data'

function App() {
  return (
    <div>
      <InfiniteScroll items={scroll.follow} color="var(--secondary-color)"/>
    </div>
  )
}

export default App
