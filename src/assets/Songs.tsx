type SongsProps = {
    id: number,
    artist: string,
    name: string,
    plays?: string,
    setPlaylist: React.Dispatch<React.SetStateAction<any[]>>, // Pass setPlaylist from parent
    playlist: any[],
}

export default function Songs(props: SongsProps) {
    const { id, artist, name, plays, setPlaylist, playlist } = props;
    const handleChange = () => {
        const updatedPlaylist = playlist.map(song => {
          if (song.id === id) {
            return {
              ...song,
              plays:parseInt( song.plays ) +1
            };
          }
          return song;
        });
        console.log(updatedPlaylist)
        setPlaylist(updatedPlaylist);
      };
console.log(props);
    return(
        <div className="card-body">
        {/* <p className="card-text">{ id }</p> */}
        <p className="card-text">{ id }</p>
        <h5 className="card-title">{ artist }</h5>
        <p className="card-text">{ name }</p>
        <p className="card-text">{ plays }</p>
        <button className="btn btn-primary m-1" onClick={
          ()=>  setPlaylist([...playlist,{id, artist, name, plays, isPlaylist: true}])
        }type="button">Add</button>
        <button
        className="btn btn-warning m-1"
        onClick={handleChange}
        type="button">Like</button>
        </div>
    )
}