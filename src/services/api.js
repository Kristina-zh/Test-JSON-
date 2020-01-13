import axios from "axios";

const baseUrl = "https://tested-23ea6.firebaseio.com/users.json";

export const getUsers = () => axios.get(baseUrl);

export const somethingFunc = () => {};
