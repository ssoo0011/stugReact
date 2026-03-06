export default function ButtonPill({
                                        text,
                                        onClick,
                                        color = "btn-outline-primary",
                                        width,
                                        value,
                                        btnSize = "btn-sm",
                                       attr1

                                   }) {

    return (
        <button type="button"
                onClick={onClick}
                value={value}
                data-attr1={attr1}
                className={`btn ${width} ${btnSize} ${color} rounded-pill`}>{text}</button>
    )

}