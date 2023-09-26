import React from 'react';
import roomsList from '../../data/roomsList';

// Component representing an individual chat room from the list of chat rooms
const RoomItem = ({ roomName, onRoomClick, icon }) => {
  return (
    <div
      className={`h-[125px] w-[125px] rounded-lg text-center p-4 border border-gray-500 cursor-pointer transition duration-300 hover:bg-gray-800 hover:text-white justify-self-center flex flex-col justify-center`}
      onClick={onRoomClick}
      title={`Enter room ${roomName}`}
    >
      <div className='w-full h-full flex justify-center items-center'>
        {icon}
      </div>
      <h2 className='text-md'>{roomName}</h2>
    </div>
  );
};


// ChooseRoom component for displaying a list of chat rooms
const ChooseRoom = ({ onRoomClick }) => {
  return (
    <div className='flex flex-col h-[90%]'>
      <h1 className='choose-room-title text-center pt-5 pb-5'>Choose a chat room: </h1>
      <div className='room-list-container h-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center'>
        {/* Map through the list of rooms and create a RoomItem for each */}
        {roomsList.map((roomItem) => (
          <RoomItem
            key={roomItem.id}
            roomName={roomItem.roomName}
            icon={roomItem.icon}
            onRoomClick={() => {
              onRoomClick(roomItem);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ChooseRoom;
