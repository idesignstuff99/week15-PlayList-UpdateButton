import Songs from "./assets/Songs";
import PlaylistCard from "./PlaylistCard";

// const songs = [
//     { artist: "OIIA", name: "W&W", plays: "177M"},
//     { artist: "Crusade", name: "Gabry Ponte", plays: "38M"},
//     { artist: "Push up", name: "F4ST", plays: "27M"},
//     { artist: "I'll Fly With You", name: "Jovani & Chris Clone", plays: "32M"},
//     { artist: "I Don't Want To Wait", name: "David Guetta & One Republic", plays: "17M"}
// ]

export default function Sidebar({songs,setPlaylist,playlist}) {

    const song = songs.map((song,index) => {
        return <Songs key= { index }
                        id={ song.id } 
                        artist={ song.artist } 
                        name={ song.name} 
                        plays={ song.plays }   
                        setPlaylist={setPlaylist} 
                        playlist={playlist}/>
    });
    
  return (
    <div className="border-end bg-light p-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="../src/assets/dj.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
            <h2>PLAYLIST</h2>
            <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="d-flex justify-content-around">
          <i className="bi bi-skip-backward-fill"></i>
          <i className="bi bi-play-circle-fill"></i>
          <i className="bi bi-skip-forward-fill"></i>
          </div>
        </div>
      </div>

      <div className="card">
              <div className="card-header">
                    Available Songs
              </div>
              
              <div className="card-body">
                { song }
                </div>
            </div>
    </div>
  );
}
