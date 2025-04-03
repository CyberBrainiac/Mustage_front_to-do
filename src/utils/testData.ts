import { I_Todo } from "../interfaces/todoInterfaces";
export default function getTestData(): I_Todo[] {
  return [
    {
      id: "550e8400-e29b-41d4-a716-446655440000",
      title: "clear bath",
      description: "do deep clean",
      status: false,
      dateCreate: 1743682445871,
    },
    {
      id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
      title: "go shopping",
      description: "buy shirts",
      status: false,
      dateCreate: 1743682447871,
    },
    {
      id: "8f7c2a3d-5b9e-4f1a-b8c9-d2e4f5678901",
      title: "prepare dinner",
      description: "I want vegetable curry",
      status: true,
      dateCreate: 1743682417871,
    },
  ];
}
