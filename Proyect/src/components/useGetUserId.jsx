import { useState } from "react";

export function useGetUserId(){
    const [user, setUser] = useState("")
    const [id, setId] = useState("")
    
        
    async function GetId() {
        const url = `https://spotify23.p.rapidapi.com/search/?q=${user}&type=users&offset=0&limit=1&numberOfTopResults=5`;
        const options = {
            method: "GET",
            headers: {
            "X-RapidAPI-Key": "47028f098fmshf4fb8a15a006c35p162035jsnc87df19bf23a",
            "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
            },
        };

        try{
            const response = await fetch(url, options);
            const result = await response.json();
            setId(result.users.items[0].data.id)
        } catch (error){
            console.log(error)
        }
    
    }

    return { id, setId, user, setUser, GetId }
}