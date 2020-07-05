const TOKEN = "35a569587aabd7afc23e838f5214c95d839b76c7";

export class API {
    
    static updateMovie(mov_id, body){
        return fetch(`http://localhost:8000/api/movies/${mov_id}/`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`,
                },
                body: JSON.stringify( body )
            }).then( resp => resp.json())
    }
}