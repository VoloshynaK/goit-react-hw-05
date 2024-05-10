

export default function MovieCast ({casts}) {
  return (
    <ul>
        {casts.map((cast) => {
            return (
                <li key={cast.id}>
                    <p>Name: {cast.name}</p>
                    <p>Character: {cast.character}</p>
                </li>
            )
        })}
    </ul>
  )
}