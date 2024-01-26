import { privateRequest } from "../../base";
const root_endpoint = "user/aboutuser";
const getUser = async (token: string) => {
    const body = {
        token,

      };
    
  return privateRequest(`${root_endpoint}/`, "POST", body, "json");
};



export { getUser };
