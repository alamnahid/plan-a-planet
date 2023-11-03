import { useContext } from "react";
import { AuthContext } from "../../AuthContest/AuthProvider";


const UserProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="w-[40rem] bg-green-400">

            <div>
                <h1 className="text-3xl font-bold text-black">Welcome to Admin Dashboard</h1>


            </div>

                <img src="" alt="" />

            
        </div>
    );
};

export default UserProfile;