import axios from 'axios';
import {User} from './interfacies';

interface AxiosResponse {
    results: User[],
    status: number
}

export async function fetchUsers() {
    const data = await axios.get('https://randomuser.me/api/?inc=gender,name,picture,dob,location,phone,registered&results=20');
    const {results} = data.data;
    console.log(data);
    console.log(results);
    return results;

}