import { useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    useEffect(() => {
        // StrictMode(개발모드)에서 effect가 2번 호출되므로 가드
        if (window.__hs_init_done) return;
        window.__hs_init_done = true;

        // === HSHeader: 테마 버전에 따라 둘 중 하나만 ===
        // 방법 A: 정적 init (요즘 빌드에서 보통 이거)
        if (window.HSHeader?.init) {
            window.HSHeader.init(document.querySelectorAll('.js-header'));
        }
        // 방법 B: 생성자 방식 (일부 빌드)
        else if (window.HSHeader) {
            try { new window.HSHeader('#header').init(); } catch {}
        }

        // MegaMenu
        if (window.HSMegaMenu) {
            new window.HSMegaMenu('.js-mega-menu', { desktop: { position: 'left' } });
        }

        // GoTo
        if (window.HSGoTo) {
            try {
                // 빌드에 따라 init 함수 or 생성자
                window.HSGoTo.init('.js-go-to');
            } catch {
                try { new window.HSGoTo('.js-go-to'); } catch {}
            }
        }
    }, []);

    return (
        <header id="header"
                className="navbar navbar-expand-lg navbar-end navbar-light navbar-absolute-top navbar-show-hide js-header"
                data-hs-header-options='{
            "fixMoment": 0,
            "fixEffect": "slide"
          }'>
            <div className="container">
                <nav className="js-mega-menu navbar-nav-wrap">
                    <a className="navbar-brand" to="/index.html" aria-label="Unify">
                        <img className="navbar-brand-logo" src="/assets/svg/logos/logo.svg" alt="Image Description"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
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
                                <li className="hs-has-mega-menu nav-item"
                                    data-hs-mega-menu-item-options='{
                                "desktop": {
                                  "maxWidth": "40rem"
                                }
                              }'>
                                    <a id="landingsMegaMenu"
                                          className="hs-mega-menu-invoker nav-link dropdown-toggle" aria-current="page"
                                          href="#" role="button" aria-expanded="false">Landings</a>

                                    <div className="hs-mega-menu dropdown-menu" aria-labelledby="landingsMegaMenu"
                                         style={{ minWidth: "25rem" }}>
                                        <div className="row">
                                            <div className="col-lg d-none d-lg-block">
                                                <div
                                                    className="d-flex align-items-start flex-column bg-light rounded-3 h-100 p-4">
                                                    <span className="fs-3 fw-bold d-block">Landings</span>
                                                    <p className="text-body">Accelerate the way your business builds
                                                        modern sites at scale.</p>
                                                    <div className="mt-auto">
                                                        <p className="mb-1">
                                                            <a
                                                            className="Link Link-dark Link-pointer" href="#">Learn
                                                            more</a></p>
                                                        <p className="mb-1"><a
                                                            className="Link Link-dark Link-pointer" href="#">Why Unify
                                                            Template</a></p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm">
                                                <div className="navbar-dropdown-menu-inner">
                                                    <span className="dropdown-header">Classic</span>
                                                    <Link className="dropdown-item active" to="/index.html"><i
                                                        className="bi-building me-2"></i> Corporate</Link>
                                                    <Link className="dropdown-item " to="/landing-business.html"><i
                                                        className="bi-briefcase me-2"></i> Business <span
                                                        className="badge text-primary">New</span></Link>
                                                    <Link className="dropdown-item " to="/landing-consulting.html"><i
                                                        className="bi-chat-right-dots me-2"></i> Consulting <span
                                                        className="badge text-primary">New</span></Link>
                                                    <Link className="dropdown-item " to="/landing-saas.html"><i
                                                        className="bi-tropical-storm me-2"></i> SaaS</Link>
                                                    <Link className="dropdown-item " to="/landing-services.html"><i
                                                        className="bi-gear me-2"></i> Services</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="hs-has-mega-menu nav-item">
                                    <a id="pagesMegaMenu" className="hs-mega-menu-invoker nav-link dropdown-toggle "
                                          href="#" role="button" aria-expanded="false">Pages</a>

                                    <div className="hs-mega-menu hs-position-right dropdown-menu w-100"
                                         aria-labelledby="pagesMegaMenu" style={{minWidth: "42rem"}}>
                                        <div className="navbar-dropdown-menu-inner">
                                            <div className="row">
                                                <div className="col-sm-6 col-lg-3">
                                                    <span className="dropdown-header">Company</span>
                                                    <Link className="dropdown-item " to="/page-about.html">About</Link>
                                                    <Link className="dropdown-item " to="/page-customer-stories.html">Customer Stories</Link>
                                                    <Link className="dropdown-item " to="/page-customer-story.html">Customer Story</Link>
                                                    <Link className="dropdown-item " to="/page-help-center.html">Help Center</Link>
                                                    <Link className="dropdown-item " to="/page-help-center-categories.html">Help Center: Categories</Link>
                                                    <Link className="dropdown-item " to="/page-help-center-article.html">Help Center: Article</Link>
                                                </div>

                                                <div className="col-sm-6 col-lg-3 mt-n5 mt-sm-0 mb-3 mb-lg-0">
                                                    <span className="dropdown-header invisible">Company</span>
                                                    <Link className="dropdown-item"
                                                          to="/page-careers.html">Careers</Link>
                                                    <Link className="dropdown-item"
                                                          to="/page-careers-role-overview.html">Careers: Role Overview</Link>
                                                    <Link className="dropdown-item" to="/page-careers-apply.html">Careers: Apply</Link>
                                                    <Link className="dropdown-item" to="/page-hire-us.html">Hire Us</Link>
                                                    <Link className="dropdown-item" to="/page-login.html">Log In</Link>
                                                    <Link className="dropdown-item" to="/page-signup.html">Sign Up</Link>
                                                    <Link className="dropdown-item" to="/page-reset-password.html">Forgot Password</Link>
                                                </div>

                                                <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
                                                    <span className="dropdown-header">Portfolio</span>
                                                    <Link className="dropdown-item" to="/portfolio-modern.html">Modern</Link>
                                                    <Link className="dropdown-item " to="/portfolio-case-study.html">Case Study</Link>
                                                </div>

                                                <div className="col-sm-6 col-lg-3">
                                                    <span className="dropdown-header">Specialty pages</span>
                                                    <Link className="dropdown-item " to="/page-pricing.html">Pricing</Link>
                                                    <Link className="dropdown-item " to="/page-contacts.html">Contacts</Link>
                                                    <Link className="dropdown-item " to="/page-coming-soon.html">Coming Soon</Link>
                                                    <Link className="dropdown-item " to="/page-coming-soon-simple.html">Coming Soon: Simple</Link>
                                                    <Link className="dropdown-item " to="/page-error-404.html">Error 404</Link>
                                                    <Link className="dropdown-item " to="/page-terms.html">Terms &amp; Conditions</Link>
                                                    <Link className="dropdown-item " to="/page-privacy.html">Privacy &amp; Policy</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="hs-has-mega-menu nav-item"
                                    data-hs-mega-menu-item-options='{
                                        "desktop": {
                                          "maxWidth": "50rem"
                                        }
                                      }'>
                                    <a id="blogMegaMenu" className="hs-mega-menu-invoker nav-link dropdown-toggle "
                                          href="#" role="button" aria-expanded="false">Blog</a>

                                    <div className="hs-mega-menu dropdown-menu" aria-labelledby="blogMegaMenu"
                                         style={{ minWidth: "12rem" }}>
                                        <div className="row">
                                            <div className="col-lg d-none d-lg-block">
                                                <div className="bg-light rounded-3 h-100 p-4">
                                                    <span className="d-block fs-4 fw-bold text-dark mb-3">Latest from the Blog</span>

                                                    <div className="row">
                                                        <div className="col-md-6 mb-3 mb-md-0">
                                                            <Link className="d-block" to="/documentation/index.html">
                                                                <img className="img-fluid rounded-2 mb-2" src="/assets/svg/components/card-1.svg" alt="Image Description"/>
                                                                <span className="fs-4 fw-medium text-dark text-inherit">Documentation</span>
                                                                <p className="fs-6 text-body">Development guides for building projects with Unify</p>
                                                                <span className="Link Link-pointer">Learn more</span>
                                                            </Link>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <Link className="d-block" to="/snippets/index.html">
                                                                <img className="img-fluid rounded-2 mb-2" src="/assets/svg/components/card-2.svg" alt="Image Description"/>
                                                                <span className="fs-4 fw-medium text-dark text-inherit">Snippets</span>
                                                                <p className="fs-6 text-body">Move quickly with copy-to-clipboard feature</p>
                                                                <span className="Link Link-pointer">Learn more</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="navbar-dropdown-menu-inner">
                                                    <span className="dropdown-header">Classic</span>
                                                    <Link className="dropdown-item " to="/blog-modern.html">Modern
                                                        <span className="badge text-primary">New</span>
                                                    </Link>
                                                    <Link className="dropdown-item " to="/blog-grid.html">Grid</Link>
                                                    <Link className="dropdown-item " to="/blog-list.html">List</Link>
                                                    <Link className="dropdown-item " to="/blog-article.html">Article
                                                        <span className="badge text-primary">New</span>
                                                    </Link>
                                                    <Link className="dropdown-item " to="/blog-author-profile.html">Author Profile</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="hs-has-mega-menu nav-item"
                                    data-hs-mega-menu-item-options='{
                    "desktop": {
                      "maxWidth": "20rem"
                    }
                  }'>
                                    <a id="docsMegaMenu" className="hs-mega-menu-invoker nav-link dropdown-toggle "
                                       href="#" role="button" aria-expanded="false">Docs</a>

                                    <div className="hs-mega-menu hs-position-right-fix dropdown-menu"
                                         aria-labelledby="docsMegaMenu" style={{ minWidth: "20rem" }}>
                                        <Link className="navbar-dropdown-menu-media-Link"
                                              to="/documentation/index.html">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <i className="bi-file-earmark-text fs-2 text-dark"></i>
                                                </div>

                                                <div className="flex-grow-1 ms-3">
                                                    <span
                                                        className="navbar-dropdown-menu-media-title">Documentation <span
                                                        className="badge badge-sm bg-primary rounded-pill ms-1">v3.2.2</span></span>
                                                    <p className="navbar-dropdown-menu-media-desc">Development guides
                                                        for building projects with Unify</p>
                                                </div>
                                            </div>
                                        </Link>

                                        <div className="dropdown-divider"></div>

                                        <Link className="navbar-dropdown-menu-media-Link" href="/snippets/index.html">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <i className="bi-layers fs-2 text-dark"></i>
                                                </div>

                                                <div className="flex-grow-1 ms-3">
                                                    <span className="navbar-dropdown-menu-media-title">Snippets</span>
                                                    <p className="navbar-dropdown-menu-media-desc">Move quickly with
                                                        copy-to-clipboard feature</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </li>

                                <li className="nav-item ms-lg-auto">
                                    <Link className="btn btn-ghost-dark me-2 me-lg-0" to="/page-login.html">Log
                                        in</Link>
                                    <Link className="btn btn-dark d-lg-none" to="/page-signup.html">Sign up</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="btn btn-dark d-none d-lg-inline-block" to="/page-signup.html">Sign
                                        up</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
);
}