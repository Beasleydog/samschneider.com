import backgroundCircle from "./backgroundCircle.module.css";

export default function BackgroundCircle({ radius, align }) {
    const styles = {
        width: `${radius}px`,
        height: `${radius}px`,
    }
    switch (align) {
        case "top":
            styles.top = "0";
            break;
        case "bottom":
            styles.bottom = "0";
            break;
        case "left":
            styles.left = "0";
            break;
        case "right":
            styles.right = "0";
            break;
        default:
            break;
    }
    return (
        <div className={backgroundCircle.backgroundCircle} style={styles} />
    );
}