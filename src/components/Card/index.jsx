import { Container } from "./styles";
import { StarRating } from '../../components/StarRating';
import { Tag } from '../../components/Tag';

export function Card({ title, text }) {
    const ratingFromDB = 3;
    const maxTextLength = 265;
    const truncatedText = text.length > maxTextLength ? text.substring(0, maxTextLength) + '...' : text;

    return (
        <Container>
            <h3>{title}</h3>
            <StarRating rating={ratingFromDB} />
            <div>
                <p>{truncatedText}</p>
            </div>
            <div className="tags">
            <Tag title={"Ficção Cientifica"}/>
            <Tag title={"Drama"}/>
            <Tag title={"Familia"}/>
            </div>
        </Container>
    );
}