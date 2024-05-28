import { useContext, useState } from "react"
import { UserContext } from "../context/userContext"

export function useGetUserData(){

    const {user, setUser} = useContext(UserContext)
    const [username, setUsername] = useState("")
    const [userData, setUserData] = useState([{}])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


    async function GetUserData(userName){

        const url = `https://spotify23.p.rapidapi.com/user_profile/?id=${userName}&playlistLimit=9&artistLimit=10`
        const options = {
	        method: 'GET',
	        headers: {
		        'X-RapidAPI-Key': 'b056a64e6fmsh46a8aeb04e6120ap1dba19jsnb66686543229',
		        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	        }
        };  
        
        try{
            const response = await fetch(url, options);
            const result = await response.json();
            setLoading(false)
            setUser(result)
        } catch(er){
            setError(true)
            console.log(er)
        }
        console.log(user)

    }


    return {username, userData, error, loading, GetUserData}
}