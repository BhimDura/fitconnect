import { DietFormModel } from "@/components/diet/DietForm";
import { privateRequest } from "@/lib/apis/base";
const root_endpoint = "dietplan";
const getAllDiet = async () => {
  return privateRequest(`${root_endpoint}/`, "GET", null, "json");
};

const getDietById = async (id: string) => {
  return privateRequest(`${root_endpoint}/${id}/`, "GET", null, "json");
};
const addDiet = async (body: DietFormModel) => {
  return privateRequest(`${root_endpoint}/`, "POST", body, "json");
};

export { getAllDiet, getDietById, addDiet };
