'use client'
import { useState, useRef } from "react";
import html2canvas from 'html2canvas';
import BusinessCard from "./components/BusinessCard";

export default function App() {
  const [firstName, setfirstName] = useState<string>("")
  const [lastName, setlastName] = useState<string>("")
  const [companyName, setcompanyName] = useState<string>("")
  const [positon, setPositon] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [color, setColor] = useState<string>("#E6E6E6");
  const [textColor, setTextColor] = useState<string>("#00000");
  const card = useRef<HTMLDivElement>(null);

  const handleDownloadImage = async () => {
    const element = card.current;
    const canvas = await html2canvas(element!);

    const data = canvas.toDataURL('image/png');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.png';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return(
    <div className={`w-1/2 bg-white justify-center flex flex-col p-5 rounded-lg place-self-center`}>
    <input className={`text-black placeholder-slate-400 p-1 max-w-fit`} placeholder={`first name`} onChange={(e) => {
      setfirstName(e.target.value)
    }}/>
    <input className={`text-black placeholder-slate-400 p-1 max-w-fit`} placeholder={`last name`} onChange={(e) => {
      setlastName(e.target.value)
    }}/>
    <input className={`text-black placeholder-slate-400 p-1 max-w-fit`} placeholder={`position`} onChange={(e) => {
      setPositon(e.target.value)
    }}/>
    <input className={`text-black placeholder-slate-400 p-1 max-w-fit`} placeholder={`company name`} onChange={(e) => {
      setcompanyName(e.target.value)
    }}/>
    <input className={`text-black placeholder-slate-400 p-1 max-w-fit`} placeholder={`email`} onChange={(e) => {
      setEmail(e.target.value)
    }}/>
    <input className={`text-black placeholder-slate-400 p-1 max-w-fit`} placeholder={`phone number`} onChange={(e) => {
      setPhoneNumber(e.target.value)
    }}/>

   <div className={`flex flex-row space-x-5`}>
    <span className={`flex flex-col justify-center items-center`}>
    <label className={`text-black`}>
      Background Color
    </label>
    <input
    type={`color`}
    value={color}
    onChange={(e) => {
      setColor(e.target.value)
    }}
    />
    </span>
    <span className={`flex flex-col justify-center items-center`}>
    <label className={`text-black`}>
      Text Color
    </label>
    <input
    type={`color`}
    value={textColor}
    onChange={(e) => {
      setTextColor(e.target.value)
    }}
    />
    </span>
   </div>
    <BusinessCard firstName={firstName} lastName={lastName} companyName={companyName} position={positon} email={email} phoneNumber={phoneNumber} ref={card} color={color} textColor={textColor}/>
    <button onClick={handleDownloadImage} className={`text-white bg-blue-600 rounded-md max-w-fit p-2.5 font-bold place-self-center hover:bg-blue-400 transition-all`}>
      Download
    </button>
    </div>
  );
}