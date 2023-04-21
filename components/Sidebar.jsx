import { MdLink, MdOutlineSpaceDashboard, MdOutlineSupervisorAccount } from "react-icons/md";
import { HiOutlineDocumentReport, HiOutlineInbox } from "react-icons/hi";
import { FaRegImages, FaRegUserCircle } from "react-icons/fa";
import { BiStats } from "react-icons/bi";

function SideBar() {
  return (
    <div className='bg-[#101f27] min-h-screen w-64 text-[#afb7bb] py-10 px-8 select-none font-raleway flex flex-col'>
      <div>LOGO</div>
      <div className="mt-10 flex flex-col gap-y-8 flex-1">
        <div className="flex flex-col gap-y-6">
          <button className="flex gap-x-3 items-center hover:text-[#03a9f4]"><MdOutlineSpaceDashboard className=""/>Overview</button>
          <button className="flex gap-x-3 items-center hover:text-[#03a9f4]"><HiOutlineDocumentReport />Reports</button>
          <button className="flex gap-x-3 items-center hover:text-[#03a9f4]"><HiOutlineInbox />Inbox</button>
        </div>
        <div className="flex flex-col gap-y-6">
          <p className="uppercase text-xs">SOCIAL MEDIA</p>
          <button className="flex gap-x-3 items-center hover:text-[#03a9f4]"><MdOutlineSupervisorAccount className=""/>Accounts</button>
          <button className="flex gap-x-3 items-center hover:text-[#03a9f4]"><FaRegImages />Media Library</button>
          <button className="flex gap-x-3 items-center hover:text-[#03a9f4]"><BiStats />Statistics</button></div>
        <div className="flex flex-col gap-y-6">
          <p className="uppercase text-xs">SETTINGS</p>
          <button className="flex gap-x-3 items-center hover:text-[#03a9f4]"><MdLink className=""/>Integration</button>
          <button className="flex gap-x-3 items-center hover:text-[#03a9f4]"><FaRegUserCircle />Profile</button>
        </div>
      </div>
      <div>
        <button className="bg-[#03a9f4] rounded-full text-white text-sm font-semibold px-4 py-2">Need Help?</button>
      </div>
    </div>
  )
}

export default SideBar