import {Link, useNavigate, useLocation } from "react-router-dom";
import {useEffect, useRef, useState} from "react";

export default function Sidebar() {
    const location = useLocation(); // 현재 URL 정보
    const firstPath = location.pathname.split('/')[1];

    const matchMenuName = {
        'home': 'home',
        'workSpace': 'wordSpace',
        'mail': 'mail'
    }

    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState(matchMenuName[firstPath]); // 어떤 메뉴가 열렸는지 저장
    const menuRefs = useRef({}); // 여러 메뉴를 ref로 관리

    const toggleMenu = (menuName) => {
        setOpenMenu((prev) => (prev === menuName ? null : menuName));
    };

    useEffect(() => {
        Object.keys(menuRefs.current).forEach((menuName) => {
            const el = menuRefs.current[menuName];
            if (el) {
                if (openMenu === menuName) {
                    el.style.height = el.scrollHeight + "px";
                } else {
                    el.style.height = "0px";
                }
            }
        });
    }, [openMenu]);

    return (
        <>
            <nav className="js-nav-scroller navbar navbar-expand-lg navbar-sidebar navbar-vertical navbar-light bg-white border-end"
                data-hs-nav-scroller-options='{"type": "vertical","target": ".navbar-nav .active","offset": 80}'>
                <div className="d-grid flex-grow-1 px-2">
                    <button type="button" className="navbar-toggler btn btn-white" data-bs-toggle="collapse"
                        data-bs-target="#navbarVerticalNavMenu" aria-label="Toggle navigation" aria-expanded="false"
                        aria-controls="navbarVerticalNavMenu">
                        <span className="d-flex justify-content-between align-items-center">
                            <span className="h3 mb-0">Nav menu</span>
                            <span className="navbar-toggler-default">
                                <i className="bi-list"></i>
                            </span>
                            <span className="navbar-toggler-toggled">
                                <i className="bi-x"></i>
                            </span>
                        </span>
                    </button>
                </div>

                <div id="navbarVerticalNavMenu" className="collapse navbar-collapse">
                    <div className="navbar-brand-wrapper border-end" style={{height: "auto"}}>
                        <div className="d-flex align-items-center mb-3">
                            <a className="navbar-brand" href="../documentation/index.html" aria-label="Unify">
                                <img className="navbar-brand-logo" src="../assets/svg/logos/logo.svg" alt="Logo"/>
                            </a>
                        </div>
                    </div>

                    <div className="docs-navbar-sidebar-aside-body navbar-sidebar-aside-body">
                        <ul id="navbarSettings"
                            className="navbar-nav nav nav-vertical nav-tabs nav-tabs-borderless nav-sm">

                            <li className="nav-item" onClick={() => toggleMenu('home')}>
                                <span className="nav-subtitle">홈</span>
                            </li>
                            <div ref={(el) => (menuRefs.current["home"] = el)}
                                 className="menu"
                                 style={{
                                     height: "0px",
                                     overflow: "hidden",
                                     transition: "height 0.8s ease",
                                 }}
                            >
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">대시보드</Link>
                                </li>
                            </div>

                            <li className="nav-item" onClick={() => toggleMenu('team')}>
                                <span className="nav-subtitle">주소록</span>
                            </li>
                            <div ref={(el) => (menuRefs.current["team"] = el)}
                                 className="menu"
                                 style={{
                                     height: "0px",
                                     overflow: "hidden",
                                     transition: "height 0.8s ease",
                                 }}
                            >
                                <li className="nav-item">
                                    <Link className="nav-link" to="/team/list">주소록</Link>
                                </li>
                            </div>

                            <li className="nav-item" onClick={() => toggleMenu('wordSpace')}>
                                <span className="nav-subtitle">업무</span>
                            </li>
                            <div ref={(el) => (menuRefs.current["wordSpace"] = el)}
                                 className="menu"
                                 style={{
                                     height: "0px",
                                     overflow: "hidden",
                                     transition: "height 0.8s ease",
                                 }}
                            >
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">전체업무</Link>
                                </li>
                            </div>

                            <li className="nav-item" onClick={() => toggleMenu('mail')}>
                                <span className="nav-subtitle">메일</span>
                            </li>
                            <div ref={(el) => (menuRefs.current["mail"] = el)}
                                 className="menu"
                                 style={{
                                     height: "0px",
                                     overflow: "hidden",
                                     transition: "height 0.8s ease",
                                 }}
                            >
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">전체 메일</Link>
                                </li>
                            </div>

                            <li className="nav-item" onClick={() => toggleMenu('schedule')}>
                                <span className="nav-subtitle">근태</span>
                            </li>
                            <div ref={(el) => (menuRefs.current["schedule"] = el)}
                                 className="menu"
                                 style={{
                                     height: "0px",
                                     overflow: "hidden",
                                     transition: "height 0.8s ease",
                                 }}
                            >
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">전체 메일</Link>
                                </li>
                            </div>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}