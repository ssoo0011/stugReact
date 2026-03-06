export default function ReadOnlyField({
                                          label,
                                          id,
                                          name,
                                          options,
                                          width = ""
                                      }) {
    return (
        <>
            <div className={"mb-4 " + width}>
                <label className="form-label" htmlFor={id}>{label}</label>
                <select id={id} name={name} className="form-control form-control-sm">
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}
