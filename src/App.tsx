// import { useState } from 'react'
import './App.css'
import Header from "@/components/Header";
import MsgBox from '@/components/MsgBox';
import InputBox from '@/components/InputBox';


function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-gray-100">
      <Header/>
      <div className='flex'>
        <MsgBox/>
        <InputBox/>
      </div>
    </main>
  )
}

export default App
