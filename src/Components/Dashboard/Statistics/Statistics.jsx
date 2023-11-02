import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContest/AuthProvider";
import axios from "axios";
import { Cell, Legend, Pie, PieChart, Tooltip,} from "recharts";


const Statistics = ({allplants}) => {

    const {user} = useContext(AuthContext);
    // console.log(user?.email)

    const [cartloaderData, setcartLoaderData] = useState([])
    
    // console.log(cartloaderData[0].price)

    const url = `http://localhost:5000/cart?email=${user?.email}`
    
    // useEffect(()=>{
    //     fetch(url, {credentials: 'include'})
    //     .then(res=>res.json())
    //     .then(data=>)
    // },[url])

    useEffect(()=>{
        axios.get(url, {withCredentials: true})
        .then(data=>setcartLoaderData(data.data))
    }, [url])
    // console.log(cartloaderData)
    let totalPrice = 0;

    cartloaderData.forEach((item)=>{
        const itemprice = parseFloat(item?.price);
        if(!isNaN(itemprice)){
            totalPrice+=itemprice
        }
    })
    console.log(totalPrice)
    // console.log(allplants)

    let allplantstotalprice = 0;
    
    allplants.forEach((item)=>{
        const itemprice = parseFloat(item?.price);
        if(!isNaN(itemprice)){
            allplantstotalprice+=itemprice
        }
    })
    console.log(allplantstotalprice.toFixed(2))


    const data = [
        { name: 'Total Income Amount', value: totalPrice },
        { name: 'Total Plants Price', value: allplantstotalprice },
      ];
      
      const COLORS = ['#FF444A', '#00C49F'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };


    return (
        <div>
            <div className="">
            <div className="mt-20">
                <PieChart width={500} height={586}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={160}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend iconSize={80} iconType="plainline"/>
                    <Tooltip />
                </PieChart>
            </div>

        </div>
            
        </div>
    );
};

export default Statistics;