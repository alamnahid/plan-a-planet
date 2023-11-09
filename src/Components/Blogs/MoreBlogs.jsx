/* eslint-disable react/no-unknown-property */


const MoreBlogs = () => {
    return (
        <div>
            <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800">
      <div className="sticky top-0 start-0 py-8 lg:ps-4 ">
      
        <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700">
          <a className="block flex-shrink-0" href="#">
            <img className="h-10 w-10 rounded-full" src="https://i.ibb.co/RP6xR8L/Md-Nahid-Alam-removebg-preview.png" alt="Image Description"/>
          </a>

          <a className="group grow block" href="">
            <h5 className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-900">
             Nahid Alam
            </h5>
            <p className="text-sm text-gray-500">
             Web Developer
            </p>
          </a>

          <div className="grow">
            <div className="flex justify-end">
              <button type="button" className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
                Follow
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <a className="group flex items-center gap-x-6" href="#">
            <div className="grow">
              <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-900 dark:group-hover:text-blue-500">
              Air Purifying Plants You Should Take Home Today
              </span>
            </div>

            <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
              <img className="w-full h-full absolute top-0 start-0 object-cover rounded-lg" src="https://i.ibb.co/NrJXzJY/spider-plant-benefits-for-health.jpg" alt="Image Description"/>
            </div>
          </a>
          <a className="group flex items-center gap-x-6" href="#">
            <div className="grow">
              <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-900 dark:group-hover:text-blue-500">
              The Healing Power of Plants: How Greenery Enhances Well-Being
              </span>
            </div>

            <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
              <img className="w-full h-full absolute top-0 start-0 object-cover rounded-lg" src="https://i.ibb.co/8PqYwdS/devils-ivy.jpg" alt="Image Description"/>
            </div>
          </a>
          <a className="group flex items-center gap-x-6" href="#">
            <div className="grow">
              <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-900 dark:group-hover:text-blue-500">
              Indoor Gardening 101: Tips for Thriving Houseplants
              </span>
            </div>

            <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
              <img className="w-full h-full absolute top-0 start-0 object-cover rounded-lg" src="https://i.ibb.co/hD7XdcC/download.jpg" alt="Image Description"/>
            </div>
          </a>
        </div>
      </div>
    </div>
            
        </div>
    );
};

export default MoreBlogs;