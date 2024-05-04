
const genres = [ "Drama", "Crime", "Action", "Fantasy", "Western", "Science Fiction", "Thriller", "War", "Animation", ];


const clickfun = (e) => {

    console.log("Filtering by "+e.target.innerText);
}

function Genre() {

    
    return (
        <>
            <div id="genre">
                <h2 id='genrefilter'>Filter by Geenre</h2>
                <div id='genrerow'>
                    {
                        genres.map(index => {
                            return (
                                <button className="genrebtn" onClick={clickfun} key={index}>{index}</button>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )

}

export default Genre;



