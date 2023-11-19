import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between shadow-sm ">
    {/* Left side: Image icon */}
    <div className="flex  w-[30%] ">
    
    <img src='https://media.licdn.com/dms/image/D560BAQFPvoYeqPTghg/company-logo_200_200/0/1683376259653?e=1708560000&v=beta&t=jn01g3I2Kh2dM7CCurOetA98dGPLWoIVHYfvx3z4ia0' alt="Logo" className="w-40 h-24 object-cover"/>
     
    <div style={{
      
        borderTop : '96px solid white',
        borderRight : '65px solid transparent'
    }}>

    </div>
    </div>

 

    <div className="flex items-center w-[20%] justify-center mr-4  gap-1 ">
      <div className="text-black text-sm mr-2 bg-white p-2 rounded-md shadow-md flex items-center gap-1 " >
        <AccountCircleIcon />
        <div className='userName'>
        XYZ Enterprises Pvt.Ltd
        </div>
       
        </div>
        <div className='text-sm bg-white p-1 rounded-md shadow-md flex items-center flex-shrink-0'>
            <KeyboardArrowDownIcon />

        </div>
      {/* Add your dropdown component or any other user-related actions here */}
    </div>
  </nav>
  );
};

export default Navbar;
