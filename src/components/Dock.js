import React from 'react';


import {ReactComponent as LifeIcon } from '../icons/life.svg';
import {ReactComponent as CommsIcon } from "../icons/comms.svg";
import {ReactComponent as PropIcon} from "../icons/prop.svg";
import {ReactComponent as MechIcon} from "../icons/mech.svg";
import {ReactComponent as PowerIcon} from "../icons/power.svg";
import {ReactComponent as AvionicsIcon} from "../icons/avionics.svg";
import {ReactComponent as GNCIcon} from "../icons/gnc.svg";
import {ReactComponent as ThermalIcon} from "../icons/thermal.svg";
import {ReactComponent as OverviewIcon} from '../icons/overview.svg';
import { Link } from 'react-router-dom';


const bars = [
  { title: 'Overview', icon: <OverviewIcon /> },
  { title: 'Life', icon: <LifeIcon /> },
  { title: 'Comms', icon: <CommsIcon /> },
  { title: 'Prop', icon: <PropIcon /> },
  { title: 'Mech', icon: <MechIcon /> },
  { title: 'Power', icon: <PowerIcon /> },
  { title: 'Avionics', icon: <AvionicsIcon /> },
  { title: 'GNC', icon: <GNCIcon /> },
  { title: 'Thermal', icon: <ThermalIcon /> },
];



const MyComponent = () => {
  return (
    <div className="flex items-center justify-center pt-10 space-x-8">
      <div className="relative flex px-2 pt-5 pb-4 bg-blue-900 rounded-t-3xl">
        <svg
          className="fill-current text-blue-900 absolute top-0 bottom-0 left-0 -translate-x-3/4"
          width="83"
          height="86"
          viewBox="0 0 83 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M64.3029 8.65669C68.8626 3.17225 75.6254 0 82.7578 0H83V86H0L64.3029 8.65669Z" />
        </svg>
        {bars.map((bar, index) => (
          <Link key={index} className="flex flex-col items-center px-4 group">
            {bar.icon}
            <span className="text-grey-600 text-xxxs mt-1.5 group-hover:text-red">
              {bar.title}
            </span>
          </Link>
        ))}
        <svg
          className="fill-current text-blue-900 absolute top-0 bottom-0 right-0 translate-x-3/4"
          width="83"
          height="86"
          viewBox="0 0 83 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.6971 8.65669C14.1374 3.17225 7.37457 0 0.242245 0H0V86H83L18.6971 8.65669Z" />
        </svg>
      </div>
    </div>
  );
};

export default MyComponent;