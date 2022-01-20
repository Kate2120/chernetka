import axios from 'axios';
import {User} from './interfacies';

interface AxiosResponse {
    results: User[],
    status: number
}

export async function getUsers() {
    const data = await axios.get('https://randomuser.me/api/?inc=gender,name,picture,dob');
    // const { users } = data.results;
    console.log(data);

}