"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            router.push("/"); // Redirect logged-in users to dashboard
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        // Basic email validation (optional)
        if (!email || !password) {
            setError("Please fill in both fields");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem("token", data.token);
                router.push("/"); // Redirect to dashboard
            } else {
                setError(data.error); // Show backend error message
            }
        } catch (error) {
            setError("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen bg-cover bg-center bg-[url('/images/login.jpg')] flex items-center justify-center">
            {/* Animated Card */}
            <motion.div
                className="w-full max-w-sm bg-white shadow-lg rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Card className="p-6">
                    <CardContent>
                        {/* Title Section */}
                        <motion.h2
                            className="text-3xl font-bold text-center text-gray-800 mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            BS23 - AI Portfolio
                        </motion.h2>
                        <p className="text-gray-500 text-center mb-6">
                            Please sign in to view projects.
                        </p>

                        {/* Form Section */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Email Input */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                            >
                                <Input
                                    type="email"
                                    placeholder="Enter email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                                />
                            </motion.div>

                            {/* Password Input */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <Input
                                    type="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                                />
                            </motion.div>

                            {/* Error Message */}
                            {error && (
                                <p className="text-red-500 text-sm text-center mt-2">
                                    {error}
                                </p>
                            )}

                            {/* Submit Button */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.7 }}
                            >
                                <Button
                                    type="submit"
                                    className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <Loader2 className="animate-spin w-5 h-5" />
                                    ) : (
                                        "Login"
                                    )}
                                </Button>
                            </motion.div>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
