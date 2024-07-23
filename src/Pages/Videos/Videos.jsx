import { useGetVideo } from "./usevideo"


export default function Videos(movieId) {
    // const {data}=useGetVideo(['movieVideo',movieId],()=>getVideo(movieId))
    const { data} = useGetVideo(movieId);
    const video = data?.results?.find(video => video.site === "YouTube");

  return (
    <div>
      {video ? (
        <div>
          <h1>{video.name}</h1>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video?.key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.name}
          ></iframe>
        </div>
      ) : (
        <p>No video available</p>
      )}
    </div>
  )
}
