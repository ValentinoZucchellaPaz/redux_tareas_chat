import { useAppSelector } from "../hooks/store"
import useCounterActions from "../hooks/useCounterActions"

export default function Counter() {

    const count = useAppSelector((state) => state.counter)
    const { incrementCount, decrementCount, resetCount, doubleCount } = useCounterActions()

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={doubleCount}>Double</button>
        </div>
    )
}