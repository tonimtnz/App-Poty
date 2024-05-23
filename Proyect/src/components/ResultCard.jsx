import { Link } from 'react-router-dom'


export function ResultCard({result}){

    const id = result.data.id
    const img = result.data.image.smallImageUrl

    return(
        <li >
                <div className="userCard-button">
                    <img src={result.data.image.smallImageUrl}/>
                    <h2> {result.data.displayName}</h2>
                </div>
        </li>
    )
}