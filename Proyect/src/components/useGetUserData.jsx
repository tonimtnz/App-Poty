import { useState } from "react"

export function useGetUserData(){

    const [username, setUsername] = useState("")
    const [userData, setUserData] = useState([{}])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    async function GetUserData(){

        const url = `https://spotify23.p.rapidapi.com/user_profile/q=${username}&playlistLimit=9&artistLimit=10`
        const options = {
	        method: 'GET',
	        headers: {
		        'X-RapidAPI-Key': '45933ff01amsh2e634ad30de7456p10ec3ajsn8cb7556dbdd5',
		        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	        }
        };  
        
        try{
            const response = await fetch(url, options);
            const result = await response.json();
            setLoading(false)
            setUserData(result)
        } catch(error){
            setError(true)
        }
        console.log(userData)

    }


    return {}
}