import Link from "next/link";

const DietCard = ({
  
  name,
  date_created,
  date_updated,
  difficulty_level,
  id,
  type,
  daily_calorie_consumption,
}: {
  name:string;
    daily_calorie_consumption:string;
    date_created:string;
  date_updated:string;
  difficulty_level:string;
  id:string;
  type:string;
  
  
}) => {
  return (
    <div className="border border-darksecond p-3">
    <div>
      <span>Name:</span>
      <span className="border border-darksecond p-1 rounded-md text-sm">
        {name}
      </span>
    </div>
    <div className="text-sm">
      <span>Start Date:</span>
      <span>
        {new Date(date_created).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </span>
    </div>
    <div className="text-sm mb-3">
      <span>Updated Date:</span>
      <span>
        {new Date(date_updated).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </span>
    </div>
   
    <div>
      <span>Calorie Consumption:</span>
      <span className="border border-darksecond p-1 rounded-md text-sm">
        {daily_calorie_consumption}
      </span>
    </div>
    <div>
      <span>Difficulty Level:</span>
      <span className="border border-darksecond p-1 rounded-md text-sm">
        {difficulty_level}
      </span>
    </div>
    <div className="text-end">
      <Link
        href={`/diet/view/${id}`}
        className="text-primary mt-6.5 inline-block"
      >
        View Detail
      </Link>
    </div>
  </div>
  );
};

export default DietCard;
