import { login, logout } from "../store/slices/userSlice"
import { User } from "../store/types"
import { useAppDispatch } from "./store"

export default function useUserActions() {
    const dispatch = useAppDispatch()
    function loginUser(user: User) {
        dispatch(login(user))
    }
    function logoutUser() {
        dispatch(logout())
    }


    return { loginUser, logoutUser }
}