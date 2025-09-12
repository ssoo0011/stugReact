import { useEffect, useState } from "react";
import api from "../../services/apiClient";
import Header from "../../components/layout/Header";

export default function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    api.get("/api/home")         // 스프링의 엔드포인트
       .then(res => setMsg(res.data))
       .catch(err => setMsg("Error: " + err));
  }, []);

  return (
      <>
          <Header/>
          <main className="container content-space-t-3">
              <div className="row justify-content-lg-between align-items-lg-center">
                  <div className="col-lg-5 mb-5 mb-lg-0">
                      <div className="mb-5">
                          <h1 className="display-4 text-dark mb-5">Start your journey with <span className="text-primary">Unify</span></h1>
                          <p className="fs-3">Feature-rich components and designed demo pages help you create the best possible products.</p>
                      </div>

                      <div className="d-grid d-sm-flex gap-3 mb-5">
                          <a className="btn btn-primary" href="#">Request demo</a>
                          <a className="btn btn-ghost-dark btn-pointer" href="#">Sign up free</a>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="position-relative">
                          <div className="position-relative">
                              <img className="img-fluid" src="/assets/img/950x950/img1.jpg" alt="Image Description"/>
                                  <div className="position-absolute bottom-0 end-0">
                                      <img className="w-100" src="/assets/svg/illustrations/cubics.svg" alt="SVG" style={{maxWidth: "30rem"}}/>
                                  </div>
                          </div>

                          <div className="d-inline-block position-absolute top-0 start-0 bg-white w-100 rounded-pill shadow-sm p-2 mt-5 ms-n5" style={{ maxWidth: "12rem"}}>
                              <div className="d-flex align-items-center">
                                  <div className="flex-shrink-0">
                                      <span className="avatar avatar-sm avatar-circle">
                                        <img className="avatar-img" src="/assets/img/160x160/img10.jpg" alt="Image Description"/>
                                      </span>
                                  </div>
                                  <div className="flex-grow-1 ms-2">
                                      <div className="fs-5 fw-bold mb-0">Julia</div>
                                      <span className="d-block fs-6">Fantastic theme!</span>
                                  </div>
                              </div>
                          </div>
                          <div className="d-inline-block position-absolute bottom-0 start-0 bg-warning w-100 rounded-pill shadow-sm p-2 mb-10 ms-n10" style={{ maxWidth: "16rem" }}>
                              <div className="d-flex align-items-center">
                                  <div className="flex-shrink-0">
                                      <span className="avatar avatar-sm avatar-circle">
                                        <img className="avatar-img" src="/assets/img/160x160/img3.jpg" alt="Image Description"/>
                                      </span>
                                  </div>
                                  <div className="flex-grow-1 ms-2">
                                      <div className="fs-5 fw-bold text-dark mb-0">Michael</div>
                                      <span className="d-block fs-6 text-dark">Excellent documentation 🔥👋</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </main>
      </>
  );

}