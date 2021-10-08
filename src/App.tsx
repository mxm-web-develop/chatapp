import AppFrame from './layouts/AppFrame'
import Fnbar from './components/Fnbar'
import Workbar from './components/Workbar'
import { AppProvider } from './store'
function App() {
  return (
    <AppProvider>
      <AppFrame 
        leftBar={<Fnbar></Fnbar>}
        rightBar={<Workbar></Workbar>}
      >
      </AppFrame>
    </AppProvider>
  )
}

export default App
