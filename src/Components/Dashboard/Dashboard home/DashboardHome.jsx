import { useLoaderData } from "react-router-dom";
import Statistics from "../Statistics/Statistics";
import UserInfo from "./UserInfo";
import UserProfile from "./UserProfile";
import DashboardCardContainer from "./DashboardCardContainer";
import UserMessages from "./UserMessages";


const DashboardHome = () => {
    const allplants = useLoaderData()
    // console.log(allplants)

    return (
        <div>
            <DashboardCardContainer></DashboardCardContainer>
            {/* <UserProfile></UserProfile> */}
            <div className="flex flex-col lg:flex-row justify-center gap-6 w-full">
            {/* <UserInfo></UserInfo> */}
            <UserMessages></UserMessages>
            <Statistics allplants={allplants}></Statistics>
            
        </div>
        </div>
    );
};

export default DashboardHome;