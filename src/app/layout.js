import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import "./globals.css";
import Head from "next/head";

export const metadata = {
    title: "BS23 - AI Portfolio",
    description: "Showcasing cutting-edge AI projects",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <AuthProvider>
                    <ProtectedRoute>{children}</ProtectedRoute>
                </AuthProvider>
            </body>
        </html>
    );
}
