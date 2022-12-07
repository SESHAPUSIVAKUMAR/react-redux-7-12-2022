
import { useDispatch, useSelector } from "react-redux";
import {increment,decrement} from "./actions"

function App() {
  const count=useSelector(state=>state.counter)
  const dispatch=useDispatch()
  return (
    <div className="App">
      <h3>{count}</h3>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
