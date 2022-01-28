import axios from 'axios';
import {Users} from "../Redux/Actions/interfacies";

export async function fetchUsers(currentPage: number): Promise<Users>  {
    const data = await axios.get(`https://randomuser.me/api/?inc=gender,name,picture,dob,location,phone,registered&results=10&page=${currentPage}`);
    const {results} = data.data;
    return results;
}

