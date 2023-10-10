import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

export default function Home() {
  const [userName, setUserName] = useState("");

  async function getUserName() {
    const response = await axios.get("https://fakestoreapi.com/users/1");
    if (response.data) {
      const name = response.data.name.firstname;
      const firstLetterUppercase = name[0].toUpperCase() + name.substring(1);
      setUserName(firstLetterUppercase);
    }
  }

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <>
      <Header userName={userName} />
      <main className="bg-gray-50 px-20 py-8 min-h-screen">
        <Outlet />
      </main>
    </>
  );
}