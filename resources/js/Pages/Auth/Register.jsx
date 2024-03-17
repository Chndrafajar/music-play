import Button from "@/Components/Button";
import Input from "@/Components/Input";

import Label from "@/Components/Label";
import ValidationError from "@/Components/ValidationError";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <>
            <Head title="Register" />
            <section className="auth-register">
                <div className="auth-left">
                    <div className="auth-left-item">
                        <h2 className="auth-title-wel">Register</h2>
                        <span className="auth-span">
                            Join today for exclusive offers & discounts
                        </span>
                        <p className="auth-p">
                            Already have an account?{" "}
                            <Link href="/prototype/login">Login</Link>
                        </p>
                        <ValidationError errors={errors} />
                        <form action="">
                            <div>
                                <Label forInput="name" value="Name" />
                                <Input
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    handleChange={handleOnChange}
                                    placeholder="Name"
                                    isFocused={true}
                                    required
                                />
                            </div>
                            <div className="mt-3">
                                <Label forInput="email" value="Email Adress" />
                                <Input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    handleChange={handleOnChange}
                                    placeholder="Email Address"
                                    isFocused={true}
                                    required
                                />
                            </div>
                            <div className="mt-3">
                                <Label forInput="password" value="Password" />

                                <Input
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    handleChange={handleOnChange}
                                    placeholder="Password"
                                    isFocused={true}
                                    required
                                />
                            </div>
                            <div className="mt-3">
                                <Label
                                    forInput="password_confirmation"
                                    value="Confirm Password"
                                />

                                <Input
                                    type="password"
                                    value={data.password_confirmation}
                                    handleChange={handleOnChange}
                                    name="password_confirmation"
                                    placeholder="Password Confirmation"
                                    isFocused={true}
                                    required
                                />
                            </div>
                            <Button variant="black" className="mt-3">
                                Register
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="auth-right">
                    <img src="/images/sign.jpg" alt="" />
                </div>
            </section>
        </>
    );
}
