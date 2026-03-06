export default function InfoItem({
                                    label,
                                    value
                                 }) {

    return (
        <div className="mb-7">
            <h5>{label}</h5>
            <p>{value}</p>
        </div>
    )
}