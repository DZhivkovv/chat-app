//Icons for each item in the roomsList array
import {BiSolidChat, BiSolidServer} from 'react-icons/bi'
import {BsMusicNoteList, BsFillTreeFill, BsJoystick} from 'react-icons/bs'
import {SiYourtraveldottv, SiMoleculer} from 'react-icons/si'
import {LuDog} from 'react-icons/lu'
import {RiMovie2Fill} from 'react-icons/ri'
import {MdFastfood} from 'react-icons/md'
import { IoIosFitness } from "react-icons/io";
import {FaBook, FaSuitcase, FaTools} from 'react-icons/fa'
import {GiHealthNormal, GiLargePaintBrush} from 'react-icons/gi'

// Common style for all icons
const iconStyle = 'text-4xl'

// An array of room objects with associated icons.This array will be iterated over within the ChooseRoom component to render a RoomItem component for each element in the array.
const roomsList = [
    {
      id: 0,
      roomName: 'General Discussion',
      icon: <BiSolidChat className={iconStyle}/>
    },
    {
      id: 1,
      roomName: 'Travel Enthusiasts',
      icon:<SiYourtraveldottv className={iconStyle}/>
    },
    {
      id: 2,
      roomName: 'Pet Lovers',
      icon: <LuDog className={iconStyle}/>
    },
    {
      id: 3,
      roomName: 'Movie Buffs',
      icon: <RiMovie2Fill className={iconStyle}/>
    },
    {
      id: 4,
      roomName: "Foodies' Corner",
      icon: <MdFastfood className={iconStyle}/>
    },
    {
      id: 5,
      roomName: 'Tech Talk',
      icon: <BiSolidServer className={iconStyle}/>
    },
    {
      id: 6,
      roomName: 'Music Lounge',
      icon: <BsMusicNoteList className={iconStyle}/>
    },
    {
      id: 7,
      roomName: 'Fitness Freaks',
      icon: <IoIosFitness className={iconStyle}/>
    },
    {
      id: 8,
      roomName: 'Book Club',
      icon: <FaBook className={iconStyle}/>
    },
    {
      id: 9,
      roomName: 'Art and Creativity',
      icon: <GiLargePaintBrush className={iconStyle}/>
    },
    {
      id: 10,
      roomName: 'Career Advice',
      icon: <FaSuitcase className={iconStyle}/>
    },
    {
      id: 11,
      roomName: 'Gaming Zone',
      icon: <BsJoystick className={iconStyle}/>
    },
    {
      id: 12,
      roomName: 'Nature and Outdoors',
      icon: <BsFillTreeFill className={iconStyle}/>
    },
    {
      id: 13,
      roomName: 'Science and Discovery',
      icon: <SiMoleculer className={iconStyle}/>
    },
    {
      id: 14,
      roomName: 'Health and Wellness',
      icon: <GiHealthNormal className={iconStyle}/>
    },
    {
      id: 15,
      roomName: 'DIY and Home Improvement',
      icon: <FaTools className={iconStyle}/>
    }
  ];

export default roomsList;