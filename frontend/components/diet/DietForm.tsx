"use client";

import { addDiet } from "@/lib/apis/private/goals/diet";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export interface DietFormModel {
    name:string;
      daily_calorie_consumption:string;
      date_created:string;
    date_updated:string;
    difficulty_level:string;
    id:string;
    type:string;
}

const DietForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const methods = useForm<DietFormModel>({
    defaultValues: {
      name: "",
      type: "",
      daily_calorie_consumption:"",
     difficulty_level:"" ,
     date_created: "",
     date_updated:"" ,
      },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const createDiet = async (data: DietFormModel) => {
    setLoading(true);
    try {
      const response = await addDiet(data);
      const responseData = await response.json();
      console.log("responsedata", responseData);
      if (response.ok) {
        toast.success("Diet added successfully!!");
        router.push("/dashboard");
      } else {
        throw "Error";
      }
    } catch (error) {
      toast.error("OOps!! Something went wrong!!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(createDiet)}>
      <h2 className="text-xl mb-12">Create Diet Plan</h2>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label className="mb-3 block text-black dark:text-white">Name</label>
          <input
            {...register("name")}
            type="text"
            placeholder="Default Input"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            required
          />
        </div>
        <div>
          <label className="mb-3 block text-black dark:text-white">Type</label>
          <input
            {...register("type")}
            type="text"
            placeholder="Default Input"
            required
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div>
          <label className="mb-3 block text-black dark:text-white">
            Calorie Consumption
          </label>
          <input
            {...register("daily_calorie_consumption")}
            type="text"
            placeholder="Default Input"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="flex items-center gap-3 h-full">
          <label className="block text-black dark:text-white">
            Difficulty Level
          </label>
          <input type="text" className="" {...register("difficulty_level")} />
        </div>
        <div className="">
          <label className="block text-black dark:text-white">Start Date</label>
          <input
            {...register("date_created")}
            type="date"
            required
            placeholder="Default Input"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="">
          <label className="block text-black dark:text-white">Update Date</label>
          <input
            {...register("date_updated")}
            type="date"
            required
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
       
        <div>
          
        <div className="col-span-full text-end">
          <button
            type="button"
            className="mr-2 cursor-pointer rounded-lg border border-darksecond bg-whiter py-4 px-7 text-black transition hover:bg-opacity-90 disabled:cursor-not-allowed"
            onClick={() => router.back()}
          >
            Cancel
          </button>
          <button
            disabled={loading}
            type="submit"
            value="Submit"
            className="cursor-pointer rounded-lg border border-primary bg-primary py-4 px-7 text-white transition hover:bg-opacity-90 disabled:cursor-not-allowed"
          >
            {loading ? "Submiting...." : "Submit"}
          </button>
        </div>
      </div>
      <div>

      </div>
      </div>
    </form>
  );
};

export default DietForm;
