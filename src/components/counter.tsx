import { useAppSelector } from "../hooks/store"
import useCounterActions from "../hooks/useCounterActions"
import { Button } from "./ui/button"

export default function Counter() {

    const { count, loading, error } = useAppSelector((state) => state.counter)
    const { incrementCount, decrementCount, resetCount, doubleCount, squareCount, getRandomAsync } = useCounterActions()

    return (
        <div className="flex flex-col gap-4 m-auto my-5 rounded-lg bg-gray-900 p-8">
            <h1>{loading ? <span className="spinner"></span> : count}</h1>
            {(error && !loading) && <p style={{ color: 'red' }}>{error}</p>}
            <div className="flex flex-row gap-2 justify-center">
                <Button onClick={incrementCount}>+</Button>
                <Button onClick={decrementCount}>-</Button>
                <Button onClick={resetCount}>Reset</Button>
                <Button onClick={doubleCount}>Double</Button>
                <Button onClick={squareCount}>Square</Button>
                <Button onClick={getRandomAsync}>Get Random Number Async</Button>
            </div>
        </div>
    )
}