import axios from "axios";
import {REQUEST} from './useEnv'
export const useAxios = () => {
    return (axios.create({baseURL: REQUEST}))
}