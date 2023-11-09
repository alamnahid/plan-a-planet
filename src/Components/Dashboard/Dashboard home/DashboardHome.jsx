import { useLoaderData } from "react-router-dom";
import Statistics from "../Statistics/Statistics";
import UserInfo from "./UserInfo";
import UserProfile from "./UserProfile";
import DashboardCardContainer from "./DashboardCardContainer";


const DashboardHome = () => {
    const allplants = useLoaderData()
    // console.log(allplants)

    return (
        <div>
            <DashboardCardContainer></DashboardCardContainer>
            {/* <UserProfile></UserProfile> */}
            <div className="flex justify-around w-full">
            {/* <UserInfo></UserInfo> */}
            <Statistics allplants={allplants}></Statistics>
            
        </div>
        </div>
    );
};

export default DashboardHome;