import { useEffect, useState } from "react";

export function HeaderUserSearch(){
    
    const [userData, setUserData] = useState({})
    const [userSearch, setUserSearch] = useState("")
    
    async function theUserFetch(){
         
        const url = `https://spotify23.p.rapidapi.com/search/?q=${userSearch}&type=users&offset=0&limit=3&numberOfTopResults=5`
        const options = {
	        method: 'GET',
	        headers: {
		        'X-RapidAPI-Key': '45933ff01amsh2e634ad30de7456p10ec3ajsn8cb7556dbdd5',
		        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	        }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setUserData(result)
            if( userData ){
                console.log(userData)
            }
        } catch (error) {
            console.error(error);
            
        }
    }

    function handleSearchUser(e){
        setUserSearch(e.target.value)
    }


    /* useEffect(()=>{
        if(userSearch){
            theUserFetch()
        }
    },[userSearch]) */

    return(
        <div className="header-user-search-bar">
            <input onChange={handleSearchUser} placeholder="Spotify Username"/>
            <button onClick={theUserFetch}>Busca un amigo</button>
            { /*<ul className="header-mc-users-list">
                {userData && userData.map((data) => {
                    <li key={data.id}>
                        <h2>{data.displayName}</h2>
                    </li>
                })}
            </ul> */}

        </div>
    )
}