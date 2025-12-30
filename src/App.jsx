// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/User/Login";
import MyPage from "./pages/User/MyPage";
import Header from "./components/layout/header/Header.jsx";
import SignUp from "./pages/User/SignUp";
import NotFound from "./pages/Error/NotFound";
import ProtectedRoute from "./components/ProtectedLoader.jsx";
import {AuthProvider} from "./context/auth/AuthContext.jsx";
import { AlertProvider } from "./components/common/AlertSystem.jsx";

function App() {
    return (
        <AlertProvider>
            <AuthProvider>
                <BrowserRouter>
                    <Header/>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <ProtectedRoute>
                                        <MyPage/>
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/myPage"
                                element={
                                    <ProtectedRoute>
                                        <MyPage/>
                                    </ProtectedRoute>
                                }
                            />
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/user/signUp" element={<SignUp/>}/>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                </BrowserRouter>
            </AuthProvider>
        </AlertProvider>
);
}

export default App;
