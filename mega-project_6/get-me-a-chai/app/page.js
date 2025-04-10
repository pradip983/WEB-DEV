import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="max-h-[84.7vh] overflow-y-scroll  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className="h-[45vh] text-white flex flex-col justify-center items-center">
          <div className="text-xl font-bold flex gap-5 justify-center items-center ">Gat Me A Chai <img src="chai-tea.svg" width={35} alt="" /></div>
          <div className="font-sans">A crowdfunding platform for creater Get funded by your fans and followers start now!</div>
          <div className="m-2 p-2">
            <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
            </Link>
            <Link href={"/about"}>
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
            </Link>
          </div>
        </div>
        <div className="h-[1px] bg-white opacity-20"></div>
        <div className="text-white container mx-autu mb-4">
          <h1 className="twxt-2xl font-bold text-center my-7 ">Your Fans can buy you a chai</h1>
          <div className="flex gap-5 justify-around">
            <div className="item space-y-3 flex flex-col items-center justify-center">
              <img src="p2p-svgrepo-com.svg" width={80} alt="" className="bg-slate-400 rounded-full p-3 text-black" />
              <p className="font-bold"> Fans want to help</p>
              <p className="text-center ">your fans are available for you to help you</p>
            </div>
            <div className="item space-y-3 flex flex-col items-center justify-center">
              <img src="trophy-svgrepo-com.svg" width={80} alt="" className="bg-slate-400 rounded-full p-3 text-black" />
              <p className="font-bold"> Fans want to help</p>
              <p className="text-center ">your fans are available for you to help you</p>
            </div>
            <div className="item space-y-3 flex flex-col items-center justify-center">
              <img src="bank-svgrepo-com.svg" width={80} alt="" className="bg-slate-400 rounded-full p-3 text-black" />
              <p className="font-bold"> Fans want to help</p>
              <p className="text-center ">your fans are available for you to help you</p>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-white opacity-20"></div>
        <div className="text-white container mx-autu mb-4">
          <h1 className="twxt-2xl font-bold text-center my-7 ">Learn more about us</h1>
          <div className="flex gap-5 justify-around">
            <video src="video2.mp4" className="rounded-md" type="video/mp4" width="400" height="240" controls>
            </video>

          </div>
        </div>

      </div>
    </>
  );
}

