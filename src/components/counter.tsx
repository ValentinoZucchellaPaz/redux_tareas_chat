import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../types"

export default function Counter() {

    const count = useSelector((state: RootState) => state)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
            <button onClick={() => dispatch({ type: 'DOUBLE' })}>Double</button>
        </div>
    )
}