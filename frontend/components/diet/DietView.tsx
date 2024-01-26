"use client";

import { getDietById } from "@/lib/apis/private/goals/diet";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const DietView = () => {
  const [diet, setDiet] = useState<any>({});
  const params = useParams();
  const { diet_id } = params;
  const fetchDiet = async (id: string | string[]) => {
    try {
      const response = await getDietById(diet_id as string);
      const responseData = await response.json();

      if (response.ok) {
        setDiet(responseData);
      }
    } catch (err) {
    } finally {
    }
  };
  useEffect(() => {
    fetchDiet(diet_id);
  }, [diet_id]);
  console.log("diet by id" + diet_id, diet);

  return <div>
    <h1>Your diet to {diet.name}</h1>
    <div className="bg-green-500 p-4 rounded-md shadow-lg border-none border-light-500 flex">
  <div className="w-1/2 border-none border-light-600 ">
  <div className="mb-2">
    <span className="font-bold">Name:</span>
    <span className="border border-darksecond px-2 py-1 rounded-md ml-2 text-sm">
      {diet.name}
    </span>
  </div>
  <div className="mb-2">
    <span className="font-bold">Type:</span>
    <span className="border border-darksecond px-2 py-1 rounded-md ml-2 text-sm">
      {diet.type}
    </span>
  </div>
    <div className="text-sm mb-2">
    <span className="font-bold">Start Date:</span>
    <span className="ml-2">{new Date(diet.date_created).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}</span>
  </div>
  <div className="text-sm mb-2">
    <span className="font-bold">Updated Date:</span>
    <span className="ml-2">{new Date(diet.date_updated).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}</span>
  </div>
  <div className="mb-2">
    <span className="font-bold">Calorie Consumption:</span>
    <span className="border border-darksecond px-2 py-1 rounded-md ml-2 text-sm">
      {diet.daily_calorie_consumption}
    </span>
  </div>
  <div className="mb-2">
    <span className="font-bold">Difficulty Level:</span>
    <span className="border border-darksecond px-2 py-1 rounded-md ml-2 text-sm">
      {diet.difficulty_level}
    </span>
  </div>
  </div>
  <div className="w-1.5/3 ">
    <img
    src="https://images.everydayhealth.com/images/diet-nutrition/mediterranean-diet/mediterranean-diet-food-list-meal-plan-722x406.jpg?sfvrsn=da69b6eb_1"
    alt="Description of the image"
    className=" h-65 w-120 rounded-lg"
    /></div>
   </div>

  </div>;
  
};

export default DietView;


