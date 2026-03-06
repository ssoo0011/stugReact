export default function ListTable({ data = [] }) {
    if (data.length === 0) return null;

    return (
        <>
            {data.map((row, idx) => (
                <tr key={`row-${idx}`}>
                    <div className="col mb-7 mb-md-10">
                        <a className="card card-ghost h-100" href="@@autopath/blog-article.html">
                            <div className="row">
                                <div className="col-lg-5 mb-3 mb-lg-0">
                                    <img className="card-img" src="/assets/img/580x480/img14.jpg"
                                         alt="Image Description"/>
                                </div>

                                <div className="col-lg-7">
                                    <h4>{row.groupName}</h4>
                                    <p className="card-text">{row.description}</p>
                                    <span className="card-link">Read more</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </tr>
            ))}
        </>
    );
}