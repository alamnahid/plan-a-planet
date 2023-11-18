import axios from "axios";
import { useEffect, useState } from "react";


const UserMessages = () => {
    const [userMessage, setUserMessage] = useState([])

    useEffect(()=>{
        axios.get('https://plan-a-plant-server.vercel.app/contact')
        .then(res=>setUserMessage(res.data))
    }, [])
    // console.log(userMessage)



    return (
        <div>

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Message</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        userMessage?.map((message, index)=><tr key={message._id}>
            <th>{index}</th>
            <td>{message.name}</td>
            <td>{message.email}</td>
            <td>{message.message}</td>
          </tr>)
      }
     
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default UserMessages;