import { Link } from 'react-router-dom'


export function ResultCard({result}){

    const id = result.data.id
    const name = result.data.displayName
    const img = result.data.image.smallImageUrl

    return(
        <li>
                <Link className="userCard-button">
                    <img src={img}/>
                    <h2> {name}</h2>
                </Link>
        </li>
    )
}