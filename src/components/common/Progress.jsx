export default function Progress({
                                     occupancy = 0,
                                     capacity = 100,
                                     unit = "명"
                                 }) {
    const percentage = capacity > 0 ? (occupancy / capacity) * 100 : 0;
    const displayLabel = `${occupancy}${unit} / ${capacity}${unit}`;

    return (
        <div className="progress" style={{ height: "1.7em", position: "relative" }}>
            <div
                className="progress-bar progress-bar-striped"
                role="progressbar"
                style={{ width: `${percentage}%`}}
                aria-valuenow={occupancy}
                aria-valuemin="0"
                aria-valuemax={capacity}
            >
                {percentage > 20 && displayLabel}
            </div>

            {percentage <= 20 && (
                <span style={{
                    position: "absolute",
                    width: "100%",
                    textAlign: "center",
                    color: "#000",
                    fontSize: "0.8rem",
                    paddingTop: "0.2em",
                    lineHeight: "1.3em"
                }}>
                    {displayLabel}
                </span>
            )}
        </div>
    );
}