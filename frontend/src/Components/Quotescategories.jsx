import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import axios from "axios";
import dbfn from "../Firebase";
import "../index.css";
import { ReactComponent as ABC } from "../ABC.svg";
//import {ReactComponent as Red} from '../Red.svg';
import { ReactComponent as Black } from "../Black.svg";
const Quotescategories = () => {
  

  const [tabnumber, settabnumber] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [likeid, setlikeid] = useState(0);
  const [obj, setobj] = useState(null);
  
  useEffect(() => {
    const getquotes = async () => {
      try {
        await axios
          .get(
            "https://ve3myvb4.api.sanity.io/v2021-10-21/data/query/production?query=*[_type%C2%A0==%C2%A0%22quotes%22]"
          )
          .then((response) => {
            // console.log(response);
            setQuotes(response.data.result);
            
          });
          const fetchdata=async()=>
          {
            const data=await dbfn.ReadData();
            setobj(data);
            console.log(data);
          };
          fetchdata();
      } catch (error) {
        console.error(error);
      }
    };
    getquotes();
  }, []);
  

  const handletabclick = (tab) => {
    settabnumber(tab);
  };
  const handlelikeclick = (id) => {
    setlikeid(id);
    
  };

  return (
    <div className="m-5">
      <ul className="nav nav-pills">
        <li className="nav-item" onClick={() => handletabclick("all")}>
          <a className={tabnumber === "all" ? "nav-link active" : "nav-link"}>
            All
          </a>
        </li>
        <li className="nav-item" onClick={() => handletabclick("life")}>
          <a className={tabnumber === "life" ? "nav-link active" : "nav-link"}>
            Life
          </a>
        </li>
        <li className="nav-item" onClick={() => handletabclick("success")}>
          <a
            className={tabnumber === "success" ? "nav-link active" : "nav-link"}
          >
            Success
          </a>
        </li>
        <li className="nav-item" onClick={() => handletabclick("love")}>
          <a className={tabnumber === "love" ? "nav-link active" : "nav-link"}>
            Love
          </a>
        </li>
      </ul>
      <div className="card-container">
        {quotes.map((data, index) =>
          tabnumber === "all" ? (
            <div
              key={data.slug}
              className="card"
              style={{ width: "18rem" }}
            >
              <img
                src={data.imageurl}
                className="card-img-top  img-fluid rounded-start img-thumbnail"
                alt="Card image cap"
              />
              
            </div>
          ) : (
            data.quotestype === tabnumber && (
              <div
                key={data.slug}
                className="card col-md-4"
                style={{ width: "18rem" }}
              >
                <img src={data.imageurl} alt="..." className="card-img-top card-img-top  img-fluid rounded-start img-thumbnail" />
                <div className="card-body">
                  <button
                    onClick={async () => {
                      handlelikeclick(data.firebaseId);
                      dbfn.incrementLike(data.firebaseId);
                      setobj(await dbfn.ReadData());
                      }}
                    className="btn btn-light"
                  >
                    {likeid === data.firebaseId ? <ABC /> : <Black />}
                    
                  </button>

                  <div>
                    {Object.keys(obj).map((key) => (
                     
                      
                      data.firebaseId===key&&<p class="text-success fw-bold" key={key}>{obj[key].like}</p>
                      
                      
                      
                    ))}
                    
                  </div>
                  
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default Quotescategories;
