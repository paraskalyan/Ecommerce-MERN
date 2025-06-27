import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useUserStore } from "../stores/useUserStore"
import { Link } from "react-router"

export function SignupForm({
    className,
    ...props
}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const { signup } = useUserStore()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(formData)
    }

    return (
        <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={handleSubmit}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Create an account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter your email below to create an account
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="name">Full Name</Label>
                    <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} id="name" type="text" placeholder="Joe Janes" required />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-3">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                    </div>
                    <Input value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} id="password" type="password" required />
                </div>
                <div className="grid gap-3">
                    <div className="flex items-center">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                    </div>
                    <Input value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} id="confirm-password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                    Singup
                </Button>
                <div
                    className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                    <span className="bg-background text-muted-foreground relative z-10 px-2">
                        Or continue with
                    </span>
                </div>
                <Button variant="outline" className="w-full">

                    Signup with Gogle
                </Button>
            </div>
            <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to='/login' className="underline underline-offset-4">
                    Login
                </Link>
            </div>
        </form>
    );
}
