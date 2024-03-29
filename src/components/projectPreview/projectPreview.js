import projectPreview from "./projectPreview.module.css";
import Image from "next/image";
export default function ProjectPreview({ description }) {
    const click = () => {
        window.open(description.url, "_blank");
    }
    return (
        <div id={projectPreview.mainContainer} onClick={click}>
            <div id={projectPreview.innerWrapper}>
                <Image src={description.imageUrl} fill style={{ objectFit: "cover" }} />
            </div>
            <div id={projectPreview.textWrapper}>
                <span id={projectPreview.name}>{description.name}</span>
                <div id={projectPreview.description}>{description.description}</div>
            </div>
        </div>
    )
}