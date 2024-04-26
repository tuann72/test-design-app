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
        <NavBarItem icon={<LayoutDashboard size={20}/>} text={'Dashboard'} active={false} alert={false} />
        <NavBarItem icon={<BarChart3 size={20}/>} text={'Statistics'} active={false} alert={false} />
        <NavBarItem icon={<UserCircle size={20}/>} text={'Users'} active={false} alert={false} />
        <NavBarItem icon={<Boxes size={20}/>} text={'Boxes'} active={false} alert={false} />
        <NavBarItem icon={<Package size={20}/>} text={'Orders'} active={false} alert={false} />
        <NavBarItem icon={<Receipt size={20}/>} text={'Receipt'} active={false} alert={false} />
        <NavBarItem icon={<Settings size={20}/>} text={'Settings'} active={false} alert={false} />
        <NavBarItem icon={<LifeBuoy size={20}/>} text={'Help'} active={false} alert={false} />
      </NavBar>
    </div>
  )
}

export default page