import Swal from "sweetalert2";

const AddHotSaleProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const category = e.target.category.value;
        const producttype = e.target.producttype.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const rating = e.target.rating.value;
        const hotsale = e.target.hotsale.value;
        const previousprice = e.target.previousprice.value;

        const productInfo = { name, photo, category, producttype, price, description, rating, hotsale, previousprice }

        fetch('https://plan-a-plant-server.vercel.app/plants', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Product Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      form.reset()

                }
            })

    }


    return (
        <div>
             <div style={{ boxShadow: "-2px 2px 15px -1px rgba(113, 113, 113, 0.12)" }} className="w-[90vw] lg:w-[60vw] mt-16 mx-auto p-8 lg:p-16 rounded-lg bg-white text-black">
                <h1 className="text-[1.5rem] font-medium">Add New Hot Sale Product</h1>
                <p className="mt-3 text-[#717171] ">Enter Product Details</p>

                <form onSubmit={handleAddProduct}>
                    <p className="text-xl mt-6 mb-3">Product Name</p>
                    <input className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 rounded focus:outline-none bg-gray-100" type="text" name="name" placeholder="Enter Product Name" required />

                    <p className="text-xl mt-6 mb-3">Product Image</p>
                    <input className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 rounded focus:outline-none bg-gray-100" type="text" name="photo" placeholder="Enter Product Image Url" required />


                    <p className="text-xl mt-6 mb-3">Product Categories</p>
                    <div className="mb-4 relative">

                        <select name="category" className="w-full p-2 bg-gray-100 rounded border-0 border-b-2 border-blue-500 focus:outline-none">

                            <option value="Indoor Plants">Indoor Plants</option>
                            <option value="Air Purifying Plants">Air Purifying Plants</option>
                            <option value="Flower Plants">Flowering Plants</option>
                            

                        </select>
                    </div>

                    <p className="text-xl mt-6 mb-3">Type of Products</p>
                    <div className="mb-4 relative">

                        <select name="producttype" className="w-full p-2 bg-gray-100 rounded border-0 border-b-2 border-blue-500 focus:outline-none">
                            <option value="Bonsai">Bonsai</option>
                            <option value="Cactus">Cactus</option>
                            <option value="Creepers">Creepers</option>
                            <option value="Succulents">Succulents</option>
                            <option value="Seeds">Seeds</option>
                            <option value="Gifting">Gifting</option>
                           
                        </select>
                    </div>

                    <p className="text-xl mt-6 mb-3">Previous Price</p>
                    <input className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 rounded focus:outline-none bg-gray-100" type="text" name="previousprice" placeholder="Enter product Previous price" required />

                    <p className="text-xl mt-6 mb-3">Price</p>
                    <input className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 rounded focus:outline-none bg-gray-100" type="text" name="price" placeholder="Enter product price" required />

                    <p className="text-xl mt-6 mb-3">Short Description</p>
                    <input className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 rounded focus:outline-none bg-gray-100" type="text" name="description" placeholder="Enter Short description of this product" required />
                    
                    
                    <p className="text-xl mt-6 mb-3">Hot Sale</p>
                    <input className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 rounded focus:outline-none bg-gray-100" type="text" name="hotsale" defaultValue="hotsale" readOnly  required />


                    <p className="text-xl mt-6 mb-3">Rating Number</p>
                    <input className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 rounded focus:outline-none bg-gray-100" type="text" name="rating" placeholder="Enter Rating in number out of 5" />

                    <input className="w-full h-[3.5rem] text-white text-lg cursor-pointer mt-6 p-2  rounded  bg-[#3b823fcf]" type="submit" value="Add Product" />


                </form>
            </div>
            
        </div>
    );
};

export default AddHotSaleProduct;