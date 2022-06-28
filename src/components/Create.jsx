import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { Addproduct } from "../redux/action/action";

function Create() {

    const dispatch = useDispatch();
    const [myId,setId] = useState(0);
    const [myTitle,setTitle] = useState(0);
    const [myDescription,setDescription] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "5rem",
        placeItems: "center",
        placeContent: "center",
      }}
    >
      <input type="text" placeholder="id" onChange={(e)=>{
        setId(e.target.value)
      }} />
      <br />
      <input type="text" placeholder="title" onChange={(e)=>{
        setTitle(e.target.value)
      }} />
      <br />
      <input type="text" placeholder="description" onChange={(e)=>{
        setDescription(e.target.value)
      }} />
      <br />
      <button onClick={()=>{

        let data = {
            id:myId,
            title:myTitle,
            description:myDescription
        }

        dispatch(Addproduct(data));
        console.log(data);
        
      }}>submit</button>
    </div>
  );
}

export default Create;
