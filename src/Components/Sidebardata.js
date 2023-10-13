

import { BsCardChecklist} from 'react-icons/bs'
import { GiHouse} from 'react-icons/gi'
import {BsBox} from 'react-icons/bs'
import {TbSquareKey, TbUserSquareRounded, TbSettingsUp, TbMessageQuestion} from 'react-icons/tb'
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
                title:"Income",
                path:"/income",
                icon:<TbUserSquareRounded size={size} className={color}  />,
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