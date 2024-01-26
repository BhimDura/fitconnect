// Import necessary modules and interfaces
"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment,useEffect, useState } from "react";
import { getAllDiet } from "@/lib/apis/private/goals/diet";
import DietCard from "@/components/partials/DietPlanCard";
import UserView from "@/components/aboutuser/UserView";


interface Diet {
    name:string;
    daily_calorie_consumption:string;
    date_created:string;
    date_updated:string;
    difficulty_level:string;
    id:string;
    type:string;
    
}

export default function dietPage() {
  const router=useRouter();
  const [diet, setdiet] = useState<Array<Diet>>([]);

  const fetchDiet = async () => {
    try {
      const response = await getAllDiet();
      const responseData = await response.json();

      if (response.ok) {
        setdiet(responseData?.results);
      } else {
        throw "ERROROR"!;
      }
    } catch (err) {
    } finally {
    }
  };

  useEffect(() => {
    fetchDiet();
  }, []);


  return (
    <>
      {/* Render the header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl">List of all diet</h2>
        <button onClick={() => router.back()} className="text-primary">
          Back
        </button>
      </div>
      <div className="p-6.5 flex flex-col gap-3">
      {diet &&
            diet?.length > 0 &&
            diet.map((d) => (
              <Fragment key={d?.id}>
                <DietCard
                   name={d?.name}
                   date_created={d?.date_created}
                   date_updated={d?.date_updated}
                   type={d?.type}
                   daily_calorie_consumption={d?.daily_calorie_consumption}
                   id={d?.id}
                   difficulty_level={d?.difficulty_level}
                
                  
                  
                
                />
              </Fragment>
            ))}

<UserView/>
            
      </div>
    </>
  );
}
