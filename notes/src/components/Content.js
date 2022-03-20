import React, { useState } from "react";
import Colors from "./ContentUI/Colors";
import {useDispatch} from "react-redux"
import { addNote } from "redux/notes/notesSlice";
import { nanoid } from "@reduxjs/toolkit";

function Content() {
  const [content,setContent]=useState('')
  const dispatch = useDispatch();
  const handleSubmit=(e)=>{
    e.preventDefault();
   if(content)
   {
    dispatch(addNote({id:nanoid(),content}))
   }
   else{
     alert("Lütfen bir not giriniz")
   }
    setContent('')
  }
  return (
    <div className="flex items-center justify-center pt-5 ">
      <div className="h-60 w-1/2" >
        
        <textarea
          className="w-full h-full resize-none outline-none border-[1px] hover:border-blue-200 p-3 "
          placeholder="Enter your note here."
          value={content}
          onChange={(e)=> setContent(e.target.value)}
          
        ></textarea>
        <div className="flex justify-between ">
          <Colors />
          <button onClick={handleSubmit} className="bg-primary  text-white h-8 w-24 rounded-2xl font-semibold transition-all transform hover:scale-105 hover:bg-secondary scale-[1px]">Add</button>
        </div>
      </div>
    </div>
  );
}

export default Content;
