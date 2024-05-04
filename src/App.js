import './App.css';
import Genre from "./GenreSection";
import Movie from "./MovieSection";

function App() {


  return(
    <>
      <div id='main'>
        <h1>Top 15 Movies of All Time</h1>
        <div id='genrebox'> 
          <Genre />
        </div>
        <div id='moviebox'>
          <Movie />
        </div>
      </div>
    </>
  )
}


export default App;
