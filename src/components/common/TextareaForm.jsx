export default function ReadOnlyField({
                                          label,
                                          id,
                                          name,
                                          value,
                                          placeholder = "",
                                          rows = "6",
                                          width = "",
                                          maxLength = 500
                                      }) {
    return (
        <>
            <div className={"mb-4 " + width}>
                <label className="form-label" htmlFor={id}>{label}</label>
                <textarea id={id} name={name} className="form-control form-control-sm"
                          rows={parseInt(rows)}
                          maxLength={maxLength}
                          placeholder={placeholder}
                          value={value}
                />
            </div>
        </>
    );
}
