import GameStars from "components/GameStars";
import "./styles.css";

function GameScore() {

    const score = 3.5;
    const count = 13;

    return (
        <div className="lea3game-score-container">
            <p className="lea3game-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <GameStars />
            <p className="lea3game-score-count">{count} avaliações</p>
        </div>

    );
}
export default GameScore;