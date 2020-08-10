const TOKEN = "35a569587aabd7afc23e838f5214c95d839b76c7";

export class API {
    static loginUser(body){
        return fetch(`http://localhost:8000/auth/`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify( body )
            }).then( resp => resp.json())
    }

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

    static createMovie(body){
        return fetch(`http://localhost:8000/api/movies/`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`,
                },
                body: JSON.stringify( body )
            }).then( resp => resp.json())
    }

    static deleteMovie(mov_id){
        return fetch(`http://localhost:8000/api/movies/${mov_id}/`, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`,
                }
            })    
    }
}