import { Link } from "wouter";
import UserAvatar from "./userAvatar";

export default function Nav() {
    return (
        <header className="flex flex-row justify-around gap-10 w-full my-5">
            <nav className="flex flex-row justify-center gap-5">
                <Link className={(active) => (active ? 'underline' : '')} href="/">Home</Link>
                <Link className={(active) => (active ? 'underline' : '')} href="/counter">Counter</Link>
                <Link className={(active) => (active ? 'underline' : '')} href="/pokemon">Pokemon search</Link>
            </nav>
            <UserAvatar />
        </header>
    )
}