"use client";

import { getGoalById } from "@/lib/apis/private/goals";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const GoalView = () => {
  const [goal, setGoal] = useState<any>({});
  const params = useParams();
  const { goal_id } = params;
  const fetchGoal = async (id: string | string[]) => {
    try {
      const response = await getGoalById(goal_id as string);
      const responseData = await response.json();

      if (response.ok) {
        setGoal(responseData);
      }
    } catch (err) {
    } finally {
    }
  };
  useEffect(() => {
    fetchGoal(goal_id);
  }, [goal_id]);

  return <div>
    <h1>Your Goal to {goal.name}</h1>
    <div className="bg-green-500 p-4 rounded-md shadow-lg border-none border-light-500 flex">
  <div className="w-1/2 border-none border-light-600 ">
    <div className="text-sm mb-2">
    <span className="font-bold">Start Date:</span>
    <span className="ml-2">{new Date(goal.date_start).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}</span>
  </div>
  <div className="text-sm mb-2">
    <span className="font-bold">End Date:</span>
    <span className="ml-2">{new Date(goal.date_completed).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}</span>
  </div>
  <div className="mb-2">
    <span className="font-bold">Status:</span>
    <span className="border border-darksecond px-2 py-1 rounded-md ml-2 text-sm">
      {goal.status}
    </span>
  </div>
  <div className="mb-2">
    <span className="font-bold">Description:</span>
    <span className="border border-darksecond px-2 py-1 rounded-md ml-2 text-sm">
      {goal.description}
    </span>
  </div>
  <div className="mb-2">
    <span className="font-bold">Do in Months:</span>
    <span className="border border-darksecond px-2 py-1 rounded-md ml-2 text-sm">
      {goal.time_duration}
    </span>
  </div></div>
  <div className="w-1.5/3 ">
    <img
    src="https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt="Description of the image"
    className=" h-65 w-120 rounded-lg"
    /></div>
   </div>

  </div>;
  
};

export default GoalView;


