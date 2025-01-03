import { decrement, double, fetchCount, increment, reset, square } from "../store/slices/counterSlice";
import { useAppDispatch } from "./store";


export default function useCounterActions() {
    const dispatch = useAppDispatch()

    function incrementCount() {
        dispatch(increment())
    }
    function decrementCount() {
        dispatch(decrement())
    }
    function resetCount() {
        dispatch(reset())
    }
    function doubleCount() {
        dispatch(double())
    }
    function squareCount() {
        dispatch(square())
    }
    function getRandomAsync() {
        dispatch(fetchCount())
    }

    return { incrementCount, decrementCount, resetCount, doubleCount, squareCount, getRandomAsync }
}