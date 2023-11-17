import { useState } from "react";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import { LoginApi } from "../services/index";

const LoginForm = () => {
    const [form, setForm] = useState({ username: "", password: "" });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [hasErrors, setHasErrors] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.username.length < 3 || form.password.length < 8) {
            setHasErrors(true);
            return;
        }

        LoginApi(form)
            .then((res) => {
                const { accessToken, refreshToken } = res.data;
                localStorage.setItem({ accessToken, refreshToken });
                setIsLoggedIn(true);
            })
            .catch((err) => {
                setHasErrors(true);
            });

        console.log("Submitted values", form);
        if (hasErrors) setHasErrors(false);
    };

    return (
        <div>
            <form
                className="flex flex-col gap-4 h-60 w-72"
                onSubmit={handleSubmit}
            >
                <AppInput
                    label={"Username"}
                    value={form.username}
                    onChange={handleChange}
                />
                <AppInput
                    label={"Password"}
                    value={form.password}
                    onChange={handleChange}
                />
                <AppButton type="submit">Login</AppButton>
            </form>
            {isLoggedIn && "Login successful"}
            {hasErrors && "Error"}
        </div>
    );
};

const Login = () => {
    return (
        <div className="flex w-screen h-screen justify-center items-center">
            <LoginForm />
        </div>
    );
};

export default Login;
