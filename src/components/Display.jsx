import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Deleteproduct } from "../redux/action/action";

function Display() {
  const displayData = useSelector((state) => state.allproducts.products);
  const dispatch = useDispatch();
  const [Data, setData] = useState("");

  useEffect(() => {
    setData(displayData);
  }, [displayData]);

  return (
    <div style={{ marginTop: "2rem" }}>
      {Data
        ? Data.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  style={{
                    backgroundColor: "red",
                    fontSize: "1rem",
                    color: "white",
                  }}

                  onClick={()=>{
                    let newdata = Data.filter((po)=>{
                        return po.id != item.id;  
                    })

                    dispatch(Deleteproduct(newdata))

                  }}
                >
                  <div style={{ display: "flex", placeContent: "center" }}>
                    <p>id: {item.id}</p>
                    <p> {item.title}</p>
                  </div>
                  <p>{item.description}</p>
                </div>
              </>
            );
          })
        : ""}
    </div>
  );
}

export default Display;
