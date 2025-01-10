// import { useState } from 'react'
import "./App.css";
import Header from "@/components/Header";
import MsgBox from "@/components/MsgBox";
import InputBox from "@/components/InputBox";

function App() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center  bg-gray-100">
      <Header />
      <div className="flex flex-1 flex-col bg-gray-100">
          <MsgBox />
      </div>
      <footer className="h-16 w-full bg-slate-300 flex items-center justify-center">
        <InputBox />
      </footer>
    </main>
  );
}

export default App;
