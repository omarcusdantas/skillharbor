import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ServicesPage from "./pages/ServicesPage";
import MyServicesPage from "./pages/MyServicesPage";
import ServicePage from "./pages/ServicePage";

export default function App() {
    return (
        <BrowserRouter>
            <UserProvider>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/my-services" element={<MyServicesPage />} />
                    <Route path="/service/:idService" element={<ServicePage />} />
                </Routes>
            </UserProvider>
        </BrowserRouter>
    );
}
