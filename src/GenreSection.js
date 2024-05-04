
const genres = [ "Drama", "Crime", "Action", "Fantasy", "Western", "Science Fiction", "Thriller", "War", "Animation", ];


const clickfun = (e) => {

    console.log("Filtering by "+e.target.innerText);
}

function Genre() {

    
    return (
        <>
            <div id="genre">
                <h3 id='genrefilter'>Filter by Geenre</h3>
                <div id='genrebtns'>
                    {
                        genres.map(index => {
                            return (
                                <button className="genrerow" onClick={clickfun} key={index}>{index}</button>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )

}

export default Genre;



