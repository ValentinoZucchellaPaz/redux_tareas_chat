import { Input } from "@chakra-ui/react/input";
import { Field } from "./ui/field";
import { Button } from "./ui/button";
import useUserActions from "../hooks/useUserActions";
import { useLocation } from "wouter";

export default function LoginForm() {

    const { loginUser } = useUserActions()
    const [_, setLocation] = useLocation()

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)

        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const id = Math.random() * 100

        loginUser({ id, name, email })
        setLocation('/')
    }
    return (
        <div className="flex flex-col gap-4 m-auto my-5 rounded-lg bg-gray-900 p-8">
            <form onSubmit={handleSubmit} className="flex flex-col my-5 gap-4">
                <Field label="Nombre de usuario">
                    <Input placeholder="ej. Esteban Quito" name="name" variant="subtle" className="px-3" />
                </Field>
                <Field label="Email de usuario">
                    <Input placeholder="ej. estabanquito@gmail.com" name="email" variant="subtle" className="px-3" />
                </Field>
                <Button type="submit" className="w-fit m-auto">Login</Button>
            </form>
        </div>
    )
}