import axios from 'axios';
import {Users} from "../Redux/Actions/interfacies";
import {apiConfig} from "./apiConfig";
axios.defaults.baseURL = apiConfig.baseURL;

export async function fetchUsers(currentPage: number): Promise<Users>  {
    const data = await axios.get(`/?inc=gender,name,picture,dob,location,phone,registered&results=10&seed=14d1a6e3266f8a1d&page=${currentPage}`);
    const {results} = data.data;
    return results;
}

