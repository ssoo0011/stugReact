export default function Button ({
                                    type = "button",
                                    text = "",
                                    cssStyle = "btn-sm btn-primary",
                                    clickEvent = () => {}
                                }) {
    return (
        <>
            <button type={type} className={"btn me-3 " + cssStyle} onClick={clickEvent()}>{text}</button>
        </>
    )
}