// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/User/Login.jsx";
import MyPage from "../pages/User/MyPage.jsx";
import GroupList from "../pages/Group/GroupList.jsx";
import GroupForm from "../pages/Group/GroupForm.jsx";
import GroupDetail from "../pages/Group/GroupDetail.jsx";
import Header from "../layouts/header/Header.jsx";
import SignUp from "../pages/User/SignUp.jsx";
import NotFound from "../pages/Error/NotFound.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import {AuthProvider} from "../context/auth/AuthContext.jsx";
import { AlertProvider } from "../components/common/AlertSystem.jsx";
import AppLayout from "../layouts/AppLayout.jsx";

function App() {
    return (
        <AlertProvider>
            <AuthProvider>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        {/* 로그인 필요한 영역 */}
                        <Route element={<ProtectedRoute />}>
                            <Route path="/" element={<Navigate to="/myPage" replace />} />
                            <Route path="/myPage" element={<MyPage />} />
                            <Route path="/group/regist" element={<GroupForm />} />
                            <Route path="/group/update" element={<GroupForm />} />
                            <Route path="/group/detail" element={<GroupDetail />} />
                        </Route>

                        {/* 공개 페이지 */}
                        <Route path="/login" element={<Login />} />
                        <Route path="/user/signUp" element={<SignUp />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/group/:category/list" element={<GroupList />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </AlertProvider>
);
}

export default App;
