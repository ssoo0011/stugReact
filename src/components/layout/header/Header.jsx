import {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {useAuth} from "../../../context/auth/AuthContext.jsx";
import HeaderMenuList from "./HeaderMenuList.jsx";
import HeaderBtn from "./HeaderBtn.jsx";

export default function Header() {
    const location = useLocation();
    const {isAuth, setIsAuth} = useAuth();
    const [menu1, setMenu1] = useState({
        title: '모임',
        items: [
            {title: '스터디', link: '#'},
            {title: '대외활동', link: '#'},
            {title: '동아리', link: '#'},
            {title: '친목', link: '#'}
        ]
    });
    const [menu2, setMenu2] = useState({
        title: '커뮤니티',
        items: [
            {title: '자유게시판', link: '#'},
            {title: '연애', link: '#'},
            {title: '공부', link: '#'}
        ]
    });
    const [menu3, setMenu3] = useState({
        title: 'Q&A',
        items: [
            {title: '공부', link: '#'},
            {title: '취업', link: '#'},
            {title: '강의', link: '#'}
        ]
    });
    const [menu4, setMenu4] = useState({
        title: '후기',
        items: [
            {title: '강의', link: '#'},
            {title: '모임', link: '#'}
        ]
    });

    useEffect(() => {
        // MegaMenu
        if (window.HSMegaMenu) {
            new window.HSMegaMenu(".js-mega-menu", {desktop: {position: "left"}});
        }

        // GoTo
        if (window.HSGoTo) {
            try {
                window.HSGoTo.init(".js-go-to");
            } catch {
                try {
                    new window.HSGoTo(".js-go-to");
                } catch { /* empty */
                }
            }
        }
    }, [location.pathname]); // 👈 경로 바뀔 때마다 실행



    return (
        <>
            <header id="header" className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <nav className="js-mega-menu navbar-nav-wrap">
                        <a className="navbar-brand" href="/home" aria-label="Unify">
                            <img className="navbar-brand-logo" src="./assets/svg/logos/logo.svg" alt="Image Description"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                            aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-default">
                                <i className="bi-list"></i>
                              </span>
                            <span className="navbar-toggler-toggled">
                                <i className="bi-x"></i>
                            </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <div className="navbar-absolute-top-scroller">
                                <ul className="navbar-nav nav-pills">
                                    <HeaderMenuList
                                        title={menu1.title}
                                        items={menu1.items}/>
                                    <HeaderMenuList
                                        title={menu2.title}
                                        items={menu2.items}/>
                                    <HeaderMenuList
                                        title={menu3.title}
                                        items={menu3.items}/>
                                    <HeaderMenuList
                                        title={menu4.title}
                                        items={menu4.items}/>

                                    <HeaderBtn
                                        isAuth={isAuth}/>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}