import { I_todo } from "../interfaces/todoInterfaces";
export default function getTestData(): I_todo[] {
  return [
    { title: "clear bath", description: "do deep clean", status: false, dateCreate: 1743682445871 },
    { title: "go shopping", description: "buy shirts", status: false, dateCreate: 1743682447871 },
    {
      title: "prepare dinner",
      description: "I want vegetable curry",
      status: true,
      dateCreate: 1743682417871,
    },
  ];
}
