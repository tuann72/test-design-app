import React from 'react'; // Import React
import NavBar, { NavBarItem } from "../components/navBar"; // Import the NavBar component
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings
} from "lucide-react"

function page() {
  return (
    <div>
      <NavBar>
        <NavBarItem icon={<LayoutDashboard size={20}/>} text={'Dashboard'}   />
        <NavBarItem icon={<BarChart3 size={20}/>} text={'Statistics'}  />
        <NavBarItem icon={<UserCircle size={20}/>} text={'Users'}  />
        <NavBarItem icon={<Boxes size={20}/>} text={'Boxes'}  />
        <NavBarItem icon={<Package size={20}/>} text={'Orders'}  />
        <NavBarItem icon={<Receipt size={20}/>} text={'Receipt'}  />
        <NavBarItem icon={<Settings size={20}/>} text={'Settings'}  />
        <NavBarItem icon={<LifeBuoy size={20}/>} text={'Help'}  />
      </NavBar>
    </div>
  )
}

export default page