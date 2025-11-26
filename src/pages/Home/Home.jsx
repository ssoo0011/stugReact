import Header from "../../components/layout/Header";

export default function App() {
    return (
        <>
            <main id="content" role="main">
                {/* section 1.메인 배너*/}
                <div className="d-flex justify-content-center mt-5">
                    <div className="bg-img-center rounded-3 container row"
                         style={{backgroundImage: "url(/assets/img/1920x800/img2.jpg)"}}>
                        <div
                            className="container d-flex justify-content-end flex-column min-vh-lg-75 content-space-1 content-space-lg-b-3">
                            <div className="w-lg-65 col-6">
                                <span className="text-white" style={{fontFamily: "SeoulAlrim-Medium"}}>
                                    나에게 꼭 맞는 스터디 그룹 구하기
                                    <a className="badge bg-dark text-white rounded-pill ms-1" href="#">GO !</a>
                                </span>
                                <h1 className="text-white" style={{fontFamily: "SeoulAlrim-ExtraBold"}}>Come study
                                    with <span className="text-primary bg-white p-2 rounded-2">STU-G</span></h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* section 2.금주 인기*/}
                <div className="col-lg-4">

                    <div className="container content-space-2 content-space-lg-1">
                        <div className="mx-lg-auto">
                            <h3>🔥 이번주 인기 그룹</h3>
                        </div>

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                            <div className="card card-lg card-shadow card-pinned h-100">
                                <span className="badge bg-dark text-white card-pinned-top-end">자격증</span>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <h4 className="mb-1">그룹1</h4>
                                        <div className="progress" style={{height: "1.3em"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: "75%"}}
                                                 aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                15명 / 20명
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <span className="mb-1" style={{fontSize: "1.1em", fontWeight: 'bold'}}>함께 정보처리기사 공부하실 분들을 모집합니다.</span>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <a href="#">GO <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="container content-space-t-2 content-space-t-lg-3">
                        <div className="row">
                            <div className="col-sm-6 col-lg mb-5 mb-lg-0">
                                <div className="text-center">
                                    <div className="mb-3">
                                        <i className="bi-phone fs-1 text-dark"></i>
                                    </div>

                                    <h5>Responsive</h5>
                                    <span className="d-block">Responsive, and mobile-first project on the web</span>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg mb-5 mb-lg-0">
                                <div className="text-center">
                                    <div className="mb-3">
                                        <i className="bi-toggles2 fs-1 text-dark"></i>
                                    </div>

                                    <h5>Customizable</h5>
                                    <span className="d-block">Components are easily customized</span>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg mb-5 mb-sm-0">
                                <div className="text-center">
                                    <div className="mb-3">
                                        <i className="bi-file-earmark-text fs-1 text-dark"></i>
                                    </div>

                                    <h5>Documentation</h5>
                                    <span className="d-block">Every component and plugin is well documented</span>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg">
                                <div className="text-center">
                                    <div className="mb-3">
                                        <i className="bi-chat-right-dots fs-1 text-dark"></i>
                                    </div>

                                    <h5>24/7 Support</h5>
                                    <span className="d-block">Contact us 24 hours a day, 7 days a week.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <div className="container content-space-2 content-space-lg-3">
                            <div className="row align-items-lg-center">
                                <div className="col-lg-7 me-auto ms-lg-n10 mb-5 mb-lg-0">
                                    <div className="row align-items-center">
                                        <div className="col-4">
                                            <img className="img-fluid rounded-3" src="./assets/img/580x480/img1.jpg"
                                                 alt="Image Description"/>
                                        </div>

                                        <div className="col-3">
                                            <img className="img-fluid rounded-3" src="./assets/img/350x700/img1.jpg"
                                                 alt="Image Description"/>
                                        </div>

                                        <div className="col-5">
                                            <img className="img-fluid rounded-3" src="./assets/img/400x700/img1.jpg"
                                                 alt="Image Description"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-5">
                                    <div className="mb-5">
                                        <h2>Collaborative tools to design user experience</h2>
                                        <p>Use our tools to explore your ideas and make your vision come true. Then
                                            share
                                            your work easily.</p>
                                    </div>

                                    <ul className="list-checked list-checked-soft-bg-primary list-checked-lg">
                                        <li className="list-checked-item"><span
                                            className="fw-bold">Less routine</span> –
                                            more creativity
                                        </li>
                                        <li className="list-checked-item">Hundreds of thousands saved</li>
                                        <li className="list-checked-item">Scale budgets <span
                                            className="fw-bold">efficiently</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-4 mb-5">
                                <div className="text-center px-md-5">
                                    <div className="mb-3">
                                        <i className="bi-tablet-landscape fs-1 text-dark"></i>
                                    </div>
                                    <p>Unify is an <span className="fw-bold">incredibly beautiful</span> and
                                        mobile-first
                                        project on the web.</p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4 mb-5">
                                <div className="text-center px-md-5">
                                    <div className="mb-3">
                                        <i className="bi-shield-check fs-1 text-dark"></i>
                                    </div>
                                    <p>Unify is not only for developers but also for designers, and <span
                                        className="fw-bold">includes a Figma</span> file.</p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4 mb-5">
                                <div className="text-center px-md-5">
                                    <div className="mb-3">
                                        <i className="bi-hdd-network fs-1 text-dark"></i>
                                    </div>
                                    <p><span className="fw-bold">Whether you're a startup</span> or a global enterprise,
                                        learn how to integrate with Unify.</p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4 mb-5 mb-lg-0">
                                <div className="text-center px-md-5">
                                    <div className="mb-3">
                                        <i className="bi-gear fs-1 text-dark"></i>
                                    </div>
                                    <p>Use Unify thoroughly thought and automated libraries to <span
                                        className="fw-bold">manage your businesses</span>.
                                    </p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4 mb-5 mb-sm-0">
                                <div className="text-center px-md-5">
                                    <div className="mb-3">
                                        <i className="bi-sliders fs-1 text-dark"></i>
                                    </div>
                                    <p>Unify template can be <span className="fw-bold">easily customized</span> with its
                                        cutting-edge components.</p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4">
                                <div className="text-center px-md-5">
                                    <div className="mb-3">
                                        <i className="bi-journal-text fs-1 text-dark"></i>
                                    </div>
                                    <p>Every component and plugin is <span
                                        className="fw-bold">well documented</span> with
                                        live examples.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container content-space-t-2 content-space-t-lg-3">
                        <div className="row justify-content-lg-between align-items-lg-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <img className="img-fluid rounded-3" src="./assets/img/950x950/img2.jpg"
                                     alt="Image Description"/>
                            </div>

                            <div className="col-lg-5">
                                <div className="mb-5">
                                    <h2>We tackle the challenges start-ups face</h2>
                                    <p>Besides working with start-up enterprises as a partner for digitalization, we
                                        have
                                        built enterprise products for common pain points that we have encountered in
                                        various
                                        products and projects.</p>
                                </div>

                                <ul className="list-checked list-checked-soft-bg-primary list-checked-lg mb-5">
                                    <li className="list-checked-item"><span
                                        className="fw-bold">Easy &amp; fast</span> designing
                                    </li>
                                    <li className="list-checked-item">Powerful <span className="fw-bold">features</span>
                                    </li>
                                    <li className="list-checked-item">User Experience Design</li>
                                </ul>

                                <a className="btn btn-primary" href="#">Our services</a>
                            </div>
                        </div>
                    </div>

                    <div className="container content-space-2 content-space-lg-3">
                        <div className="row justify-content-lg-between align-items-lg-center">
                            <div className="col-lg-5 mb-9 mb-lg-0">
                                <div className="mb-6">
                                    <h2>It's all about speed</h2>
                                    <p>We provide you with a test account that can be set up in seconds. Our main focus
                                        is
                                        getting responses to you as soon as we can.</p>
                                </div>

                                <figure>
                                    <blockquote className="blockquote"><em>Amazing people to work with. Very fast and
                                        professional partner.</em></blockquote>

                                    <figcaption className="blockquote-footer">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-circle"
                                                     src="./assets/img/160x160/img3.jpg"
                                                     alt="Image Description"/>
                                            </div>

                                            <div className="flex-grow-1 ms-3">
                                                Josh Grazioso
                                                <span className="blockquote-footer-source">Director Payments &amp; Risk | Airbnb</span>
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>

                            <div className="col-lg-6">
                                <ul className="list-equal-height list-equal-height-2-cols">
                                    <li className="list-equal-height-item">
                                        <h4 className="display-5">45k+</h4>
                                        <p className="mb-0">users - from new startups to public companies</p>
                                    </li>

                                    <li className="list-equal-height-item">
                                        <h4 className="display-5"><sub><i
                                            className="bi-arrow-up-short text-primary ms-n2"></i></sub>23%</h4>
                                        <p className="mb-0">increase in traffic on webpages with Looms</p>
                                    </li>

                                    <li className="list-equal-height-item">
                                        <h4 className="display-5"><sub><i
                                            className="bi-arrow-up-short text-primary ms-n2"></i></sub>9.3%</h4>
                                        <p className="mb-0">boost in reply rates across sales outreach</p>
                                    </li>

                                    <li className="list-equal-height-item">
                                        <h4 className="display-5">2x</h4>
                                        <p className="mb-0">faster than previous Unify versions</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="js-swiper-clients swiper text-center">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img className="avatar avatar-lg avatar-4x3"
                                         src="./assets/svg/brands/mailchimp-dark.svg" alt="Logo"/>
                                </div>

                                <div className="swiper-slide">
                                    <img className="avatar avatar-lg avatar-4x3" src="./assets/svg/brands/sass-dark.svg"
                                         alt="Logo"/>
                                </div>

                                <div className="swiper-slide">
                                    <img className="avatar avatar-lg avatar-4x3"
                                         src="./assets/svg/brands/forbes-dark.svg"
                                         alt="Logo"/>
                                </div>

                                <div className="swiper-slide">
                                    <img className="avatar avatar-lg avatar-4x3"
                                         src="./assets/svg/brands/gitlab-dark.svg"
                                         alt="Logo"/>
                                </div>

                                <div className="swiper-slide">
                                    <img className="avatar avatar-lg avatar-4x3"
                                         src="./assets/svg/brands/hubspot-dark.svg"
                                         alt="Logo"/>
                                </div>
                            </div>
                        </div>
                    </div>


            </main>
        </>
);

}