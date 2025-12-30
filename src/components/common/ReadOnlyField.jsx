export default function ReadOnlyField({
                                          label,
                                          id,
                                          name,
                                          value,
                                          placeholder = "",
                                          type = "text",
                                      }) {
    return (
        <div className="mb-4">
            <label className="form-label" htmlFor={id}>{label}</label>
            <input
                type={type}
                className="form-control"
                name={name}
                id={id}
                placeholder={placeholder}
                value={value ?? ""}
                readOnly
                required
            />
        </div>
    );
}
