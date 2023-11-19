import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const BottomCard = ({type , color  , users , gb , support,features , topButton}) => {

    return (

        <div className="bottomCard flex  flex-row  justify-between items-center rounded-md gap=3 shadow-xl p-6  max-w-[49%]">

        <div className=' max-w-[49%] flex flex-col gap-2'>
        <span > <button className={`text-xs bg-[${color}] px-1 py-1 rounded-2xl`}>{topButton} </button></span>
        <h1 className="font-bold text-xl">{type}</h1>
        <p className='text-[.7rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum neque aperiam </p>
        <span > <button className={`text-xs bg-[${color}] px-1 py-1 rounded-md`}>Get Started <TrendingFlatIcon /> </button></span>
        </div>

        <div className=' max-w-[49%]  flex flex-col gap-2' >

            
        <h6 className="text-[.7rem]">what you'll get :</h6> 
  { users &&     <h6 className="text-xs"> <PersonOutlineOutlinedIcon sx={{ fontSize: '14px',mr:1 }} />  Upto ${users} Users</h6>}      
        {gb && <h6 className="text-xs"> <CloudUploadOutlinedIcon sx={{ fontSize: '14px' ,mr:1 }} />Upto ${gb} Storage</h6>}
        {support && <h6 className="text-xs"><EmailOutlinedIcon sx={{ fontSize: '14px' , mr: 1 }}  />  {support}</h6>}
       {features && <h6 className="text-xs"><DoneAllIcon sx={{ fontSize: '14px' , mr: 1 }}  />  {features}</h6>}


        </div>

       
    </div>
    )
}

export default BottomCard