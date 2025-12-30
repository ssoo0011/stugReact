export default function HeaderMenuList({
   title = "",
   items = [{ title: "", link: "" }],
}) {

    if (!title) return null;

    return (
        <li className="hs-has-mega-menu nav-item">
            <a id="pagesMegaMenu" className="hs-mega-menu-invoker nav-link dropdown-toggle "
               href="#" role="button" aria-expanded="false">{title}</a>

            <div className="hs-mega-menu hs-position-center-end dropdown-menu w-25"
                 aria-labelledby="pagesMegaMenu" style={{minWidth: "20rem"}}>
                <div className="navbar-dropdown-menu-inner">
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            {items.map((it, idx) => (
                                <a key={`${it.link}-${idx}`} className="dropdown-item" href={it.link}>
                                    {it.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
