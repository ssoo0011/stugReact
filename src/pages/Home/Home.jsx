import Header from "../../components/layout/header/Header.jsx";
import GroupCard from "./components/GroupCard.jsx"
import {useState} from "react";

export default function App() {
    const [card1, setCard1] = useState({
        type: "취업 준비",
        title: "취준 파티생 모집",
        description: "같이 취준 해요~~",
        href : "#",
        currentCount : 50,
        maxCount : 100
    });

    const [card2, setCard2] = useState({
        type: "자격증",
        title: "정보처리기사 자격증 준비반",
        description: "정보처리기사 자격증 같이 준비해요~",
        href : "#",
        currentCount : 15,
        maxCount : 20
    });

    const [card3, setCard3] = useState({
        type: "취업 준비",
        title: "토익",
        description: "토익 목표 900점 반입니다.",
        href : "#",
        currentCount : 27,
        maxCount : 30
    });

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
                <div className="container content-space-t-3 content-space-t-lg-2 mb-4">
                    <div className="mx-lg-auto">
                        <h3>🔥 이번주 인기 그룹</h3>
                    </div>
                    <div className="row">
                        <GroupCard
                            type={card1.type}
                            title={card1.title}
                            description={card1.description}
                            currentCount={card1.currentCount}
                            maxCount={card1.maxCount}
                        />
                        <GroupCard
                            type={card2.type}
                            title={card2.title}
                            description={card2.description}
                            currentCount={card2.currentCount}
                            maxCount={card2.maxCount}
                        />
                        <GroupCard
                            type={card3.type}
                            title={card3.title}
                            description={card3.description}
                            currentCount={card3.currentCount}
                            maxCount={card3.maxCount}
                        />
                    </div>
                </div>
            </main>
        </>
);

}