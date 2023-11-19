
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Card = ({type , price , offerPrice , color  , users , gb , support}) => {

    return (
        <div className="flex flex-col justify-center  rounded-md  shadow-xl p-6 gap-1 min-w-[30%]">
        <h1 className="font-bold text-xl">{type}</h1>
        <h6 className="text-xs line-through " style={{textDecorationColor:'red'}}>{price}</h6>
        <h6 className="text-lg">{offerPrice}</h6>
        <span > <button className={`text-xs bg-[${color}] px-1 py-1 rounded-md`}>Get Started <TrendingFlatIcon /> </button></span>
        <hr className="my-1"/>
        <h6 className="text-[.7rem]">what you'll get :</h6> 
        <h6 className="text-xs"> <PersonOutlineOutlinedIcon sx={{ fontSize: '14px',mr:1 }} />  Upto ${users} Users</h6>
        <h6 className="text-xs"> <CloudUploadOutlinedIcon sx={{ fontSize: '14px' ,mr:1 }} /> Upto ${gb} Storage</h6>
        <h6 className="text-xs"><EmailOutlinedIcon sx={{ fontSize: '14px' , mr: 1 }}  />  {support}</h6>
        <h6 className="ml-6  mt-3 font-bold text-sm underline"> EXPLORE FEATURES <PlayArrowIcon style={{ color }}/> </h6>

       
    </div>
    )
}

export default Card