import DietForm from "@/components/diet/DietForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Fitconnect | Create Diet ",
  description: "Create goals and complete it by tracking",
};
export default function DietAddPage() {
  return <DietForm />;
}
