// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/User/Login";
// import Regist from "./pages/User/Regist";
import NotFound from "./pages/Error/NotFound";


export default function App() {
    return (
        <BrowserRouter>
            {/* 라우팅 규칙 */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                {/*<Route path="/regist" element={<Regist />} />*/}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
