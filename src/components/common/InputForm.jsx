export default function ReadOnlyField({
                                          label,
                                          id,
                                          name,
                                          value,
                                          placeholder = "",
                                          type = "text",
                                          width = "",
                                          maxLength = 255
                                      }) {
    return (
        <>
            <div className={"mb-4 " + width}>
                <label className="form-label" htmlFor={id}>{label}</label>
                <input type={type} id={id} name={name} className="form-control form-control-sm" maxLength={maxLength} placeholder={placeholder} value={value}/>
            </div>
        </>
    );
}
