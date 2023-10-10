import { FiBox } from "react-icons/fi";

export default function Header({ userName }) {
  return (
    <header className="flex justify-between items-center h-16 bg-white shadow px-20">
      <div className="flex gap-2 items-center">
        <FiBox className="text-3xl" />
        <p className="font-bold text-3xl">DigiBox</p>
      </div>
      <div>
        <p>Olá, {userName}</p>
      </div>
    </header>
  );
}