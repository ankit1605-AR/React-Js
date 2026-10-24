import ControlledComponent from './component/ControlledComponent'
import UnControlledComponent from './component/UnControlledComponent'
import UnControlledComponentUseRef from './component/UnControlledComponent UseRef'



function App() {

  return (
    <div>
     <ControlledComponent />
     <UnControlledComponent/>
     <UnControlledComponentUseRef/>
    </div>
  )
}

export default App