import Button from "@/Components/Button";
import Input from "@/Components/Input";

import Label from "@/Components/Label";

import ValidationError from "@/Components/ValidationError";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function Login() {
    return (
        <>
            <Head title="Login" />

            <section className="auth">
                <div className="auth-left">
                    <div className="auth-left-item">
                        <h2 className="auth-title-wel">Welcome Back</h2>
                        <span className="auth-span">
                            See today's top trending songs
                        </span>
                        <p className="auth-p">
                            Need an account?{" "}
                            <Link href="/prototype/register">Register</Link>
                        </p>
                        <form action="">
                            <div>
                                <Label forInput="email" value="Email Adress" />
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    isFocused={true}
                                    required
                                />
                            </div>
                            <div className="mt-3">
                                <div className="forgot-pass">
                                    <Label
                                        forInput="password"
                                        value="Password"
                                    />

                                    <Link className="forgot-tittle">
                                        Forgot Password?
                                    </Link>
                                </div>

                                <Input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    isFocused={true}
                                    required
                                />
                            </div>
                            <Button variant="black" className="mt-3">
                                Login
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="auth-right">
                    <img src="/images/login.jpg" alt="" />
                </div>
            </section>
        </>
    );
}
