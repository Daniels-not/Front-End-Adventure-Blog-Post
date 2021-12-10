import axios from "axios";

export default axios.create({
    baseURL: "https://blog-post-react-dd4fa-default-rtdb.firebaseio.com/.json"
});