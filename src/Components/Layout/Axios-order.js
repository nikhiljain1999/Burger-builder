import axios from 'axios';
import Axios from 'axios';
const instance =axios.create({
    baseURL:'https://burger-builder-6ae16-default-rtdb.firebaseio.com/'
})
export default instance;