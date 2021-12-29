import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/v1/customer'

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL)
    }

    postUsers(){
        return axios.post('http://localhost:8080/api/v1/customer', 
        {   
            name,
            email,
            gender
        })
        .then(res=>{
            console.log(res);
            console.log(res.data); //This line of code will redirect you once the submission is succeed
        })
        .catch(error => {
            console.error('There is an error!', error);
            console.log(' error!', error);
            console.log('There is an error!', error.message);
            console.log('There is an error!', error.data);
            console.log('There is an error!', error.request);
            console.log('There is an error!', error.response.headers);
            console.log('There is an error!', error.response.status);
            console.log('There is an error!', error.response.statusText);
            console.log('There is an error!', error.response.config);
            console.log('There is an error!', error.request.method);
            console.log('There is an error!', error.response.data);
            console.log('There is an error!', error.toJSON());
        });
    }
}
export default new UserService()