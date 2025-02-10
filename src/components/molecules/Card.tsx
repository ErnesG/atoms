import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import { Image } from "../atoms/Image";
interface CardProps {
    title: string;
    onButtonClick: () => void;
    source?: ""
};


export default function Card({title, onButtonClick, source = ""}: CardProps) {

    return (
        <div className="p-4 border rounded-lg shadow-md bg-white flex items-center gap-4">
            {source && <Image src={source} alt="..." height="300px" width="300px" className="rounded-md" />}
            <div className="flex-1">
                <Heading level={3} text={title} className="font-bold"/>
                <Button onClick={onButtonClick}>Learn more</Button>
            </div>

        </div>
    )
}