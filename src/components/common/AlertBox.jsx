export default function AlertBox({
                                     type = "danger",
                                     message = "",
                                     visible = true,
                                     onClose,
                                 }) {
    if (!message) return null;

    return (
        <div
            className={`alert alert-${type} fade ${visible ? "show" : ""}`}
            role="alert"
        >
            <div className="d-flex align-items-start">
                <div className="flex-shrink-0">
                    <i
                        className={`bi ${
                            type === "success"
                                ? "bi-check-circle-fill"
                                : "bi-exclamation-triangle-fill"
                        } me-2`}
                    />
                </div>

                <div className="flex-grow-1">{message}</div>

                {onClose && (
                    <button
                        type="button"
                        className="btn-close ms-2"
                        aria-label="Close"
                        onClick={onClose}
                    />
                )}
            </div>
        </div>
    );
}
