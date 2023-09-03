import { FaHome,FaUser } from 'react-icons/fa'
import {MdMessage} from 'react-icons/md'
import {BiAnalyse  } from 'react-icons/bi'
import { AiTwotoneFileExclamation, AiFillSetting } from 'react-icons/ai'
import { BsCartCheck } from 'react-icons/bs'
export const route = [
    {
        path: "/",
        name: 'Home',
        icon: <FaHome size={25} />
    }, 
    {
        path: "/",
        name: 'User',
        icon: <FaUser size={25} />
    },
    {
        path: "/",
        name: 'Messages',
        icon: <MdMessage size={25} />
    },
    {
        path: "/",
        name: 'Analitics',
        icon: <BiAnalyse size={25} />
    },
    {
        path: "/file",
        name: 'File manager',
        icon: <AiTwotoneFileExclamation size={25} />
    },
    {
        path: "/",
        name: 'Order',
        icon: <BsCartCheck size={25} />
    },
    {
        path: "/",
        name: 'Saved',
        icon: <FaHome size={25} />
    },
    {
        path: "/",
        name: 'Setting',
        icon: <AiFillSetting size={25} />
    }

]