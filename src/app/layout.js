import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import "./globals.css";

export const metadata = {
    title: "BS23 - AI Portfolio",
    description: "Showcasing cutting-edge AI projects",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    <ProtectedRoute>{children}</ProtectedRoute>
                </AuthProvider>
            </body>
        </html>
    );
}
