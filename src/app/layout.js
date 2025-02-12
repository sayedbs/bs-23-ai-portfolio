import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import "./globals.css";

export const metadata = {
    title: "BS23 - AI Portfolio",
    description: "Showcasing cutting-edge AI projects"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/android-chrome-512x512.png" sizes="any" />
            </head>
            <body>
                <AuthProvider>
                    <ProtectedRoute>{children}</ProtectedRoute>
                </AuthProvider>
            </body>
        </html>
    );
}
