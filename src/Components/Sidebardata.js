

import { BsCardChecklist} from 'react-icons/bs'

import {BsBox} from 'react-icons/bs'
import {TbSquareKey,TbMoneybag, TbUserSquareRounded, TbSettingsUp, TbMessageQuestion} from 'react-icons/tb'
import {GiReceiveMoney, GiPayMoney} from 'react-icons/gi'

const color="hover:text-[#4cc69f] "
const size="20px"
export const Sidebardata = [
            {
                title:"Dashboard",
                path:"/",
                icon:<TbSquareKey size={size}  />,
            },
            {
                title:"Product",
                path:"/product",
                icon:<BsBox size={size} className={color}  />,
            },
            {
                title:"Customer",
                path:"/customer",
                icon:<TbUserSquareRounded size={size} className={color}  />,
            },
            {
                title:"Income",
                path:"/income",
                icon:<TbMoneybag size={size} className={color}  />,
            },
            {
                title:"Promote",
                path:"/promote",
                icon:<TbSettingsUp size={size} className={color}  />,
            },
            {
                title:"Help",
                path:"/help",
                icon:<TbMessageQuestion size={size}  />,
            }
           
        ]