import "./styles.css";

function Form() {

    const game = {
        id: 1,
        image: "https://cdn-l-thewitcher.cdprojektred.com/meta/TW3NG_thumbnail_en.png",
        title: "The Witcher 3 - Wild Hunt",
        count: 2,
        score: 4.5
    };


    return (
        <div className="lea3game-form-container">
            <img className="lea3game-movie-card-image" src={game.image} alt={game.title} />
            <div className="lea3game-card-bottom-container">
                <h3>{game.title}</h3>
                <form className="lea3game-form">
                    <div className="form-group lea3game-form-group">
                        <label htmlFor="email">Enter your email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group lea3game-form-group">
                        <label htmlFor="score">Report your review</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="lea3game-form-btn-container">
                        <button type="submit" className="btn btn-primary lea3game-btn">Save</button>
                    </div>
                </form >
                <button className="btn btn-primary lea3game-btn mt-3">Cancel</button>
            </div >
        </div >

    );
}

export default Form;