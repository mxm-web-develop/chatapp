import { useState } from 'react'
import Layout from './Layout'
import Fnbar from './components/Fnbar'
import Workbar from './components/Workbar'
import UseChat from './useChat'
function App() {
  const { haha} = UseChat()
  console.log(haha);
  
  return (
    <Layout 
      leftBar={<Fnbar></Fnbar>}
      rightBar={<Workbar></Workbar>}
    >
    </Layout>
  )
}

export default App
