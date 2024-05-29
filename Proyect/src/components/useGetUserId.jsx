import { useState } from "react";

export function useGetUserId(username){

    const [id, setId] = useState('')
    
        
    async function GetId() {
        const url = `https://spotify23.p.rapidapi.com/search/?q=${username}&type=users&offset=0&limit=1&numberOfTopResults=5`;
        const options = {
            method: "GET",
            headers: {
            "X-RapidAPI-Key": "b3f90c1019msh01c2e5a00d38b74p1b3d46jsn18d558416c6f",
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

    return {id, setId, GetId}
}