import {Link} from 'react-router-dom'

export default function HomePage({items}) {
    return (
        <div>
            <h1>Trending Today</h1>
            <ul>
                {items.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link to={`/movies/${item.id}`}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}