import { toDoAppInterceptor } from "../utils/interceptor"
export const getSingleUser = async (id) => {
    const axiosResponse = await toDoAppInterceptor.get(`https://dummyjson.com/users/${id}`)
    const user = axiosResponse.data
    return user
}