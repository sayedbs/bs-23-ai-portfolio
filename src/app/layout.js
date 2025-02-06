import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import "./globals.css";

export const metadata = {
    title: "My Portfolio",
    description: "Portfolio with protected login",
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
