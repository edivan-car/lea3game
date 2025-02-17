import GameScore from "components/GameScore";
import { Link } from "react-router-dom";

const game = {
    id: 1,
    image: "https://cdn-l-thewitcher.cdprojektred.com/meta/TW3NG_thumbnail_en.png",
    title: "The Witcher 3 - Wild Hunt",
    count: 2,
    score: 4.5
};

function GameCard() {
    return (
        <div>
            <img className="lea3game-movie-card-image" src={game.image} alt={game.title} />
            <div className="lea3game-card-bottom-container">
                <h3>{game.title}</h3>
                <GameScore />
                <Link to={`/form/${game.id}`}>
                    <div className="btn btn-primary lea3game-btn">Rate</div>
                </Link>
            </div>
        </div>

    );
}

export default GameCard;