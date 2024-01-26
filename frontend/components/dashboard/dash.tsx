"use client";

import { getAllGoals } from "@/lib/apis/private/goals";
import { Fragment, useEffect, useState } from "react";
import CardBox from "../layout/CardBox";
import GoalsCard from "../partials/GoalsCard";
import DietCard from "../partials/DietPlanCard";
import { getAllDiet } from "@/lib/apis/private/goals/diet";
export default function Dash() {
  

  return (
    <>
      <div>
        <CardBox
          title="All Goals"
          create_link="/goal/add"
          link_label="Create Goal"
          view_all_link="/goal"
        >
         <div>Your Goals</div>
        </CardBox>
        <CardBox
          title="All Dietplans"
          create_link="/diet/add"
          link_label="Create Dietplan"
          view_all_link="/diet"
        >
          <div>A Complete Diet Plan</div>
        </CardBox>
      </div>
    </>
  );
}
