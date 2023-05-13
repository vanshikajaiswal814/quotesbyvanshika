import React, { useEffect, useState } from "react";
import {createClient} from '@sanity/client'

const Quotescategories = () => {
  // const headers = {
  //   // Add any required headers here, such as API keys or authentication tokens
  // };
  useEffect(
      ()=>
    {
      const client = createClient({
        projectId: 've3myvb4',
        dataset: 'production',
        useCdn: true, // set to `false` to bypass the edge cache
         
      })
      
       client.fetch(`count(*)`).then((data)=>{

         console.log(`Number of documents: ${data}`)
       })
    },[]
  )

   const [tabnumber, settapnumber] = useState(0);
  // const getquotes = async () => {
  //   try {
  //      await Axios.get(
  //       "https://ve3myvb4.api.sanity.io/v2021-10-21/data/query/production?query=*[_type%C2%A0==%C2%A0%22quotes%22]"
  //     ).then((response)=>console.log(response));
      
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <div className="m-5">
      <ul className="nav nav-pills">
        <li className="nav-item" onClick={() => settapnumber(1)}>
          <a className={tabnumber === 0 ? "nav-link active" : "nav-link"}>
            All
          </a>
        </li>
        <li className="nav-item" onClick={() => settapnumber(1)}>
          <a className={tabnumber === 1 ? "nav-link active" : "nav-link"}>
            Life
          </a>
        </li>
        <li className="nav-item" onClick={() => settapnumber(2)}>
          <a className={tabnumber === 2 ? "nav-link active" : "nav-link"}>
            Success
          </a>
        </li>
        <li className="nav-item" onClick={() => settapnumber(3)}>
          <a className={tabnumber === 3 ? "nav-link active" : "nav-link"}>
            Love
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Quotescategories;
