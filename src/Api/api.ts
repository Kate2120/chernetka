import axios from 'axios';
import {User} from './interfacies';

interface AxiosResponse {
    results: User[],
    status: number
}

export async function fetchAllUsers() {
    const rrr = await axios.get('https://randomuser.me/api/?inc=gender,name,picture,dob,location,phone,registered&results=20');
    console.log(rrr);
    const {res} = rrr.data;

    console.log(res);
    return res;

}

export async function fetchUsers(currentPage: number) {
    const data = await axios.get(`https://randomuser.me/api/?inc=gender,name,picture,dob,location,phone,registered&results=10&page=${currentPage}`);
    const {results} = data.data;
    console.log(data);
    console.log(results);
    return results;

}

