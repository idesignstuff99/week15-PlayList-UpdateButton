import Songs from "./assets/Songs";
import { useState } from "react";

export default function PlaylistView({playlist, setPlaylist}) {
  console.log(playlist)

  const [songs, setSongs] = useState(playlist);

const handleDelete = (idToDelete) => {
  const updateSongs = playlist.filter(song => song.id !== idToDelete);
  setPlaylist(updateSongs);
};

    return (
    <div className="flex-grow-1">
        <div className="d-flex justify-content-center align-items-center bg-light">
            <div className="bg-white m-3 w-75 shadow-sm p-3 border" style={{ height: "auto" }}>
            <div className="card">
              <div className="card-header">
                    My Playlist
              </div>
              <div className="card-body">
                {playlist.filter((list)=> {

                  console.log(list);
                  if (list.isPlaylist) {
                    return(
                      <div className="card-body">
                        <p className="card-text">{list.id}</p>
                        <h5 className="card-title">{list.artist}</h5>
                        <p className="card-text">{list.name}</p>
                        <h6 className="card-subtitle mb-2 text-muted">{list.plays}</h6>
                      <button 
                      className="btn btn-danger m-1" type="button" onClick={() => handleDelete(list.id)}>
                        Delete
                        </button>
                      <hr style={{ 
                                    border: 'none', 
                                    height: '1px', 
                                    backgroundColor: 'black' 
                                }} />
                      </div>
                    )
                  }
                })}
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}