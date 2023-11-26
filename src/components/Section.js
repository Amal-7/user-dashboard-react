import { Badge, Box} from "@mui/material"
import BottomCard from "./BottomCard"
import TabComponent from "./Tab"
import { blue } from "@mui/material/colors"
import NotificationsIcon from "@mui/icons-material/Notifications";
import Card from "./Card";



const drawerWidth = 160

const Section = () => {

    return (
        <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          
        }}
      >
        <div className="flex gap-2 min-h-[100vh]">

          <div className="flex flex-col justify-evenly w-[96%]  bg-white p-6 ">



            <div className="flex justify-between px-[6%] flex-wrap">

              <h1 className="font-bold text-xl pb-6">Choose a plan that's just right for you !</h1>
                <div className="flex flex-col justify-end">

                    <TabComponent />

                </div>


            </div>


            <div className=" flex  flex-wrap justify-evenly px-[4%]">          
            <Card
              {...{
                type: "Basic",
                price: "$89.99/mo",
                offerPrice: "$9.99/mo",
                color: "#fde7ab",
                users: 25,
                gb: 25,
                support: "Email Support",
              }}
            />

            <Card
              {...{
                type: "Standard",
                price: "$189.99/mo",
                offerPrice: "$99.99/mo",
                color: "#fb989d",
                users: 50,
                gb: 60,
                support: "Email+Chat Support",
              }}
            />

            <Card
              {...{
                type: "Premium",
                price: "$389.99/mo",
                offerPrice: "$199.99/mo",
                color: "#e19af6",
                users: 75,
                gb: 100,
                support: "Email+Chat+Whatsapp Support",
              }}
            />
            </div>

            <div className=" flex flex-wrap justify-evenly    px-[4%]">
            <BottomCard  {...{
                type: "Free Starter",
                color: "#d6f7a6",
                users: 75,
                gb: 100,
                support: "Email+Chat+Whatsapp Support",
                features : 'Basics of Documents, Task Flow, Voting, Accounting, Banking, Notes, Investor, Director and Team Management included ',
                topButton : 'Free Forever'
              }}/>

            <BottomCard  {...{
                type: "Enterprise Plan",
                color: "#87bcfe",
                users: 75,
                
                features : 'Basics of Documents, Task Flow, Voting, Accounting, Banking, Notes, Investor, Director and Team Management included ',
                topButton : `Let's Connect`
              }}/>
            </div>


          </div>

          <div className=" flex flex-col justify-between ">
            <div className="bg-white">
              <Badge badgeContent={1} color="error" variant="dot">
                <NotificationsIcon sx={{ color: blue[500] }} />
              </Badge>
            </div>
          </div>
        </div>
      </Box>
    )
}

export default Section 