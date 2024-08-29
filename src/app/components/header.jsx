import { callIcon, downarrowIcon, dropdownIcon, HeartIcon, locationIcon, logoIcon, menuIcon, profileIcon, searchIcon, shopcartIcon } from "@/assests/icons";
import Image from "next/image";
import NavLink from "./navLink";


export default function Home() {
  
    return (
      <main >
  
        <header className="mx-10">
          
          
          {/*first header*/}
  
          <div className="flex items-center justify-between my-4  text-gray-500 text-body-small">
            <div className="flex">
              <Image src={locationIcon} alt="location"/>
              <p className="ml-2 "> Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
            </div> 
            
           
            <div className="flex">
              <span className="flex mr-5">
                <span className="mr-1.5">Eng </span>
                <Image src={dropdownIcon} alt="dropdown"/>
               
              </span>
  
              <span className="flex">
                 <span className="mr-1.5">USD</span>
                 <Image src={dropdownIcon} alt="dropdown"/>
              </span>
              
            </div>
            
          </div>
          
          {/*border */}
          <div className="border border-gray-400"></div>
          
         
          {/*second header*/}
          <div className="flex items-center justify-between py-6">
            <div className="col-span-2">
                <Image src={logoIcon} alt="logo" width={143} height={38}/>
            </div>
            
           
            <div className="flex items-center border border-gray-100 rounded overflow-hidden col-span-8">
              <div className="flex items-center py-3 pl-4 ">
                <label htmlFor="Searchinput">
                  <Image src={searchIcon} alt="search"/>
                </label>
                
                <input type="text" id="Searchinput" placeholder="Search" className="outline-none ml-4 w-64"/>
              </div>
  
              <button className="bg-sucess h-[50px] text-white text-body-small py-3 px-6">Search</button>
              
            </div>
  
            
            <div className="flex items-center col-span-2">
              <Image src={callIcon} alt="call" width={40} height={40}/>
              <div className="ml-3">
                <p className="text-body-small text-gray-400">Customer Services</p>
                <p className="text-body-xl font-medium">(219) 555-0114</p>
              </div>
              
            </div>
          </div>
  
          
          {/*third header*/}
          <div className="flex justify-between items-center bg-gray-900 pr-6 ">
            
            <div className="flex items-center">
                <div className="p-4 bg-sucess">
                    <Image src={menuIcon} alt="Menu Icon" className="h-8 w-8"/>
                </div>
                

                <div className="flex items-center justify-between bg-gray-800 py-5 pl-4 pr-6 w-[25.5rem]">
                    <span className="text-white">All categories</span>
                    <Image src={dropdownIcon} alt="Down-arrow" className="h-5 w-5"/>

                  
                </div>


                <NavLink title="Home" active/>
                <NavLink title="Shop"/>
                <NavLink title="Pages"/>
                <NavLink title="Blogs"/>
                <NavLink title="About us" hideIcon={true}/>
                <NavLink title="Contact us" hideIcon={true}/>
            </div>
            
            
            
            <div className="flex items-center">
                <div className="py-4"><Image src={HeartIcon} alt="heart" className="h-8 w-8"/></div>
                <div className="py-4 relative">
                  <Image src={shopcartIcon} alt="cart" className="h-8 w-8 mx-6"/>
                  <span className="text-white absolute top-3 right-5 text-[10px] w-5 h-5 bg-sucess-dark flex items-center justify-center rounded-full border border-gray-800">2</span>
                </div>
                <div className="py-4"><Image src={profileIcon} alt="profile" className="h-8 w-8"/></div>
            </div>
          </div>
          
  
        </header>
  
        
      </main>
    );
  }
  