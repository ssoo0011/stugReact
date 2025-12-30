export default function GroupCard({ type = "", title = "", description = true, href = "#", currentCount = 1, maxCount = 1 }) {
    if (!title) return  (
        <div className="mx-lg-auto">
            인기 그룹 없다.
        </div>
    );

    return (
        <div className="col-sm-6 col-md-4 mb-5 mb-md-0">
            <div className="card card-lg card-shadow card-pinned h-100">
                <span className="badge bg-primary text-white card-pinned-top-end">{type}</span>
                <div className="card-body">
                    <div className="mb-3">
                        <h4 className="mb-1">{title}</h4>
                        <div className="progress" style={{height: "1.3em"}}>
                            <div className="progress-bar" role="progressbar"
                                 style={{width: `${(currentCount / maxCount) * 100}%`}}
                                 aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                {currentCount}명 / {maxCount}명
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <span className="mb-1"
                              style={{fontSize: "1.1em", fontWeight: 'bold'}}>{description}</span>
                    </div>
                    <div className="d-flex justify-content-end">
                        <a href={href}>GO <i className="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
