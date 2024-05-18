import { Link } from 'react-router-dom'

export function ResultCard({result}){

    return(
        <li >
                <div className="userCard-button">
                    <img src={result.data.image.smallImageUrl}/>
                    <h2> {result.data.displayName}</h2>
                </div>
        </li>
    )
}