import NavBar, {NavBarItem} from "@/components/navBar";

import {
  LifeBuoy,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings
} from "lucide-react"

const OptionLayout: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  return (
        <div className="flex">
        <NavBar>
            <NavBarItem icon={<LayoutDashboard size={20}/>} text={'Gallery'} loc={"/gallery"}/>
            <NavBarItem icon={<BarChart3 size={20}/>} text={'Statistics'} loc={"/statistics"}/>
            <NavBarItem icon={<UserCircle size={20}/>} text={'Accounts'} loc={"/accounts"}/>
            <NavBarItem icon={<Package size={20}/>} text={'Orders'} loc={"/orders"}/>
            <NavBarItem icon={<Settings size={20}/>} text={'Settings'} loc={"/settings"}/>
            <NavBarItem icon={<LifeBuoy size={20}/>} text={'Help'} loc={"/help"}/>
          </NavBar>
          {children}
        </div>
  );
}

export default OptionLayout

