import { useEffect, useState } from "react";


const UserInfo = () => {
    const [userinfo, setUserInfo] = useState([])

    useEffect(()=>{
        fetch('https://plan-a-plant-server-lf1d65ppi-nahid-alams-projects.vercel.app/user')
        .then(res=>res.json())
        .then(data=>setUserInfo(data))
    }, [])

    console.log(userinfo)
    return (
        <div>
            <div className="overflow-x-auto">
            <h1 className="text-2xl text-black font-bold">Logged in user</h1>
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
      
        <th>Name</th>
        <th>Email</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        userinfo?.slice(0,15).map(user=><tr key={user._id}>
            <th>{user?.name}</th>
            <td>{user?.email}</td>
            
            
          </tr>)
      }
      
     
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default UserInfo;