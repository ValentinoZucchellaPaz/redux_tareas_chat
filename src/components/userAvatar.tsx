import { useLocation } from "wouter";
import { useAppSelector } from "../hooks/store";
import { Avatar } from "./ui/avatar";
import { MenuContent, MenuItem, MenuItemGroup, MenuRoot, MenuTrigger } from "./ui/menu";
import useUserActions from "../hooks/useUserActions";
import { Button } from "./ui/button";

export default function UserAvatar() {
    const [_, setLocation] = useLocation()
    const { user } = useAppSelector((state) => state.user)
    const { logoutUser } = useUserActions()

    return (
        <MenuRoot positioning={{ placement: "bottom-start" }}>
            <MenuTrigger asChild>
                <Button>{user ? user.name : 'User Login'}</Button>
            </MenuTrigger>
            <MenuContent>
                {
                    user && (
                        <div className="flex flex-row gap-2 px-2">
                            <Avatar name={user.name} src={user ? `https://unavatar.io/x/${user.name}` : ''} />
                            <p className="font-semibold">{user.name}<br />{user.email}</p>
                        </div>
                    )
                }
                <MenuItemGroup>
                    <MenuItem value="login" onClick={() => setLocation('/login')}>
                        Login
                    </MenuItem>
                    <MenuItem value="logout" onClick={logoutUser}>Logout</MenuItem>
                </MenuItemGroup>
            </MenuContent>
        </MenuRoot >
    )
}