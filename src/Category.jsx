import { TiThSmallOutline } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { RiRestaurantLine } from "react-icons/ri";
import { LiaPizzaSliceSolid } from "react-icons/lia";
import { PiHamburgerBold } from "react-icons/pi";
export const categories=[
    {
        id:1,
        name:"All",
        image:<TiThSmallOutline className="w-[60px] h-[60px] text-green-600"/>,
    },{
        id:2,
        name:"Breakfast",
        image:<MdFreeBreakfast className="w-[60px] h-[60px] text-green-600" />,
    },
    {
        id:3,
        name:"Soups",
        image:<TbSoup className="w-[60px] h-[60px] text-green-600"/>,
    },
    {
        id:4,
        name:"Pasta",
        image:<CiBowlNoodles className="w-[60px] h-[60px] text-green-600"/>,
    },
    {
        id:5,
        name:"Main_course",
        image:<RiRestaurantLine className="w-[60px] h-[60px] text-green-600"/>,
    },
    {
        id:6,
        name:"Pizza",
        image:<LiaPizzaSliceSolid className="w-[60px] h-[60px] text-green-600 "/>,
    },
    {
        id:7,
        name:"burger",
        image:<PiHamburgerBold className="w-[60px] h-[60px] text-green-600"/>,
    }
]
