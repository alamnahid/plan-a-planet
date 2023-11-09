import { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo/logo.png"
import axios from "axios";
import { AuthContext } from "../AuthContest/AuthProvider";
import "./Invoice.css"

const Invoice = () => {

    const [orderData, setOrderData] = useState([])
    const {user} = useContext(AuthContext)
    

    const url = `http://localhost:5000/order?email=${user?.email}`

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(data => setOrderData(data.data))
    }, [url])

    const handlePrint = () => {
        window.print();
      };

      const handleDownload = ()=>{
        const invoiceContent = orderData?.map(plant=>
            <section key={plant._id} className="py-20 bg-[#F0F5F0]">
            <div className="max-w-5xl mx-auto py-16 bg-white">
             <article className="overflow-hidden">
              <div className="bg-[white] rounded-b-md">
               <div className="p-9">
                <div className="space-y-6 text-slate-700">
                 <img className="object-cover h-12" src={logo} />
           
                 <p className="text-xl font-extrabold tracking-tight uppercase font-body">
                  Plan a Planet
                 </p>
                </div>
               </div>
               <div className="p-9">
                <div className="flex w-full">
                 <div className="grid grid-cols-4 gap-12">
                  <div className="text-sm font-light text-slate-500">
                   <p className="text-sm font-normal text-slate-700">
                    Invoice Detail:
                   </p>
                   <p>Plan a Planet</p>
                   <p>Mirpur Dhaka Bangladesh</p>
                   <p></p>
                   
                  </div>
                  <div className="text-sm font-light text-slate-500">
                   <p className="text-sm font-normal text-slate-700">Billed To</p>
                   <p>{plant?.name}</p>
                   <p>{plant?.number}</p>
                   <p>{plant?.address}</p>
                  </div>
                  <div className="text-sm font-light text-slate-500">
                   <p className="text-sm font-normal text-slate-700">Invoice Number</p>
                   <p>{plant?._id}</p>
           
                   <p className="mt-2 text-sm font-normal text-slate-700">
                    Date of Issue
                   </p>
                   <p>{plant?.issuetime}</p>
                  </div>
                  
                 </div>
                </div>
               </div>
           
               <div className="p-9">
                <div className="flex flex-col mx-0 mt-8">
                 <table className="min-w-full divide-y divide-slate-500">
                  <thead>
                   <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0">
                     Description
                    </th>
                    <th scope="col" className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
                     Quantity
                    </th>
                    <th scope="col" className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
                     Rate
                    </th>
                    <th scope="col" className="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0">
                     Amount
                    </th>
                   </tr>
                  </thead>
                  <tbody>
                   <tr className="border-b border-slate-200">
                    <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                     {
                        plant?.itemnames.map((itemname, index)=><div key={index} className="font-medium text-slate-700 mt-4">{itemname}</div>)
                     }
                     
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                     {
                        plant?.quantity.map((item, index)=><p key={index}>{item}</p>)
                     }
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                     {
                        plant?.itemprices.map((item, index)=><p key={index}>${item}.00</p>)
                     }
                    </td>
                    <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                     {
                        plant?.itemtotalpric.map((item, index)=><p key={index}>${item}.00</p>)
                     }
                    </td>
                   </tr>
                  
                  
                   
           
                  </tbody>
                  <tfoot>
                   <tr>
                    <th scope="row" colspan="3" className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
                     Subtotal
                    </th>
                    <th scope="row" className="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
                     Subtotal
                    </th>
                    <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                     ${plant?.subtotal}.00
                    </td>
                   </tr>
                   <tr>
                    <th scope="row" colspan="3" className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
                     Delivery Charge
                    </th>
                    <th scope="row" className="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
                    Delivery Charge
                    </th>
                    <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                     $10.00
                    </td>
                   </tr>
                   <tr>
                    <th scope="row" colspan="3" className="hidden pt-4 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
                     Discount
                    </th>
                    <th scope="row" className="pt-4 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
                    Discount
                    </th>
                    <td className="pt-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                     $0.00
                    </td>
                   </tr>
                   <tr>
                    <th scope="row" colspan="3" className="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0">
                     Total
                    </th>
                    <th scope="row" className="pt-4 pl-4 pr-3 text-sm font-normal text-left text-slate-700 sm:hidden">
                     Total
                    </th>
                    <td className="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
                     ${plant?.totalprice}.00
                    </td>
                   </tr>
                  </tfoot>
                 </table>
                </div>
               </div>
           
               <div className="mt-48 p-9">
                <div className="border-t pt-9 border-slate-200">
                 <div className="text-sm font-light text-slate-700">
                  <p>
                   Payment terms are 14 days. Please be aware that according to the
                   Late Payment of Unwrapped Debts Act 0000, freelancers are
                   entitled to claim a 00.00 late fee upon non-payment of debts
                   after this time, at which point a new invoice will be submitted
                   with the addition of this fee. If payment of the revised invoice
                   is not received within a further 14 days, additional interest
                   will be charged to the overdue account and a statutory rate of
                   8% plus Bank of England base of 0.5%, totalling 8.5%. Parties
                   cannot contract out of the Act’s provisions.
                  </p>
                 </div>
                </div>
               </div>
              </div>
             </article>
            </div>

            <div className="text-center mt-8 flex justify-center items-center gap-6">


           
            </div>



           </section>)

const blob = new Blob([invoiceContent], { type: 'application/pdf' }); // Adjust the 'type' as needed
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'invoice.pdf'; // Provide a suitable file name
a.click();
URL.revokeObjectURL(url);
      }

    console.log(orderData)



    return (
        <div>
            <div className="pt-20">
            {
                orderData?.map(plant=>
                <section key={plant._id} className="py-20 bg-[#F0F5F0]">
                <div className="max-w-5xl mx-auto py-16 bg-white">
                 <article className="overflow-hidden">
                  <div className="bg-[white] rounded-b-md">
                   <div className="p-9">
                    <div className="space-y-6 text-slate-700">
                     <img className="object-cover h-12" src={logo} />
               
                     <p className="text-xl font-extrabold tracking-tight uppercase font-body">
                      Plan a Planet
                     </p>
                    </div>
                   </div>
                   <div className="p-9">
                    <div className="flex w-full">
                     <div className="grid grid-cols-4 gap-12">
                      <div className="text-sm font-light text-slate-500">
                       <p className="text-sm font-normal text-slate-700">
                        Invoice Detail:
                       </p>
                       <p>Plan a Planet</p>
                       <p>Mirpur Dhaka Bangladesh</p>
                       <p></p>
                       
                      </div>
                      <div className="text-sm font-light text-slate-500">
                       <p className="text-sm font-normal text-slate-700">Billed To</p>
                       <p>{plant?.name}</p>
                       <p>{plant?.number}</p>
                       <p>{plant?.address}</p>
                      </div>
                      <div className="text-sm font-light text-slate-500">
                       <p className="text-sm font-normal text-slate-700">Invoice Number</p>
                       <p>{plant?._id}</p>
               
                       <p className="mt-2 text-sm font-normal text-slate-700">
                        Date of Issue
                       </p>
                       <p>{plant?.issuetime}</p>
                      </div>
                      
                     </div>
                    </div>
                   </div>
               
                   <div className="p-9">
                    <div className="flex flex-col mx-0 mt-8">
                     <table className="min-w-full divide-y divide-slate-500">
                      <thead>
                       <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0">
                         Description
                        </th>
                        <th scope="col" className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
                         Quantity
                        </th>
                        <th scope="col" className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
                         Rate
                        </th>
                        <th scope="col" className="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0">
                         Amount
                        </th>
                       </tr>
                      </thead>
                      <tbody>
                       <tr className="border-b border-slate-200">
                        <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                         {
                            plant?.itemnames.map((itemname, index)=><div key={index} className="font-medium text-slate-700 mt-4">{itemname}</div>)
                         }
                         
                        </td>
                        <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                         {
                            plant?.quantity.map((item, index)=><p key={index}>{item}</p>)
                         }
                        </td>
                        <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                         {
                            plant?.itemprices.map((item, index)=><p key={index}>${item}.00</p>)
                         }
                        </td>
                        <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                         {
                            plant?.itemtotalpric.map((item, index)=><p key={index}>${item}.00</p>)
                         }
                        </td>
                       </tr>
                      
                      
                       
               
                      </tbody>
                      <tfoot>
                       <tr>
                        <th scope="row" colspan="3" className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
                         Subtotal
                        </th>
                        <th scope="row" className="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
                         Subtotal
                        </th>
                        <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                         ${plant?.subtotal}.00
                        </td>
                       </tr>
                       <tr>
                        <th scope="row" colspan="3" className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
                         Delivery Charge
                        </th>
                        <th scope="row" className="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
                        Delivery Charge
                        </th>
                        <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                         $10.00
                        </td>
                       </tr>
                       <tr>
                        <th scope="row" colspan="3" className="hidden pt-4 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
                         Discount
                        </th>
                        <th scope="row" className="pt-4 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
                        Discount
                        </th>
                        <td className="pt-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                         $0.00
                        </td>
                       </tr>
                       <tr>
                        <th scope="row" colspan="3" className="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0">
                         Total
                        </th>
                        <th scope="row" className="pt-4 pl-4 pr-3 text-sm font-normal text-left text-slate-700 sm:hidden">
                         Total
                        </th>
                        <td className="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
                         ${plant?.totalprice}.00
                        </td>
                       </tr>
                      </tfoot>
                     </table>
                    </div>
                   </div>
               
                   <div className="mt-48 p-9">
                    <div className="border-t pt-9 border-slate-200">
                     <div className="text-sm font-light text-slate-700">
                      <p>
                       Payment terms are 14 days. Please be aware that according to the
                       Late Payment of Unwrapped Debts Act 0000, freelancers are
                       entitled to claim a 00.00 late fee upon non-payment of debts
                       after this time, at which point a new invoice will be submitted
                       with the addition of this fee. If payment of the revised invoice
                       is not received within a further 14 days, additional interest
                       will be charged to the overdue account and a statutory rate of
                       8% plus Bank of England base of 0.5%, totalling 8.5%. Parties
                       cannot contract out of the Act’s provisions.
                      </p>
                     </div>
                    </div>
                   </div>
                  </div>
                 </article>
                </div>

                <div className="text-center mt-8 flex justify-center items-center gap-6">


                <button onClick={handlePrint} className="print-button"><span className="print-icon"></span></button>


                <div>
                    
                    <div className="buttonn">
                    <input type="radio" className="radion" />
                    <a onClick={handleDownload} className="downloadn">Download</a>
                    <a className="openn" href="https://giphy.com/gifs/artificial-intelligence-singularity-CVtNe84hhYF9u/fullscreen" download>Open File</a>
                    </div>

                    <p className="copyn"></p>
                </div>
                </div>



               </section>)

               
            }
        </div>
        </div>
    );
};

export default Invoice;