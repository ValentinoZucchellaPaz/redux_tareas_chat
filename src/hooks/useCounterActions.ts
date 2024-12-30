import { decrement, double, increment, reset } from "../store/counter/slice";
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

    return { incrementCount, decrementCount, resetCount, doubleCount }
}