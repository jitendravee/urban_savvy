import { CiSearch } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
export const linkList = [
    {
        id:"1",
    href:"/",
    tag:"Search",
    icon:<CiSearch />

},
    {
        id:"2",
    href:"/account",
    tag:"",
icon:<RiAccountCircleFill />
},
    {
        id:"3",
    href:"/share",
    tag:"0",
icon:<FaShare />

},
    {
        id:"4",
    href:"/favorite",
    tag:"0",
    icon:<MdFavoriteBorder />

},
    {
        id:"5",
    href:"/inbox",
    tag:"0",
    icon:<MdOutlineForwardToInbox />
},
    {
        id:"6",
    href:"/orders",
    tag:"0",
    icon:<FaShoppingCart />

},

]