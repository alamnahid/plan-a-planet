import { useLoaderData } from "react-router-dom";
import Statistics from "../Statistics/Statistics";


const DashboardHome = () => {
    const allplants = useLoaderData()
    // console.log(allplants)

    return (
        <div>
            <Statistics allplants={allplants}></Statistics>
            
        </div>
    );
};

export default DashboardHome;