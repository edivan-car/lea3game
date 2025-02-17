import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import "./styles.css";

function Pagination() {
    return (
        <div className="lea3game-pagination-container">
            <div className="lea3game-pagination-box">
                <button className="lea3game-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="lea3game-pagination-button" disabled={false} >
                    <Arrow className="lea3game-flip-horizontal" />
                </button>
            </div>
        </div>

    );
}

export default Pagination;