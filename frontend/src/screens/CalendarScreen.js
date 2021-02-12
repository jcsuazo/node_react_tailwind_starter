import React from 'react';

const CalendarScreen = () => {
  const showProducts = (
    <div className='align-items-center flex h-full justify-center flex-1'>
      <div className='align-items-center bg-white flex  justify-center rounded '>
        <h1>Calendar</h1>
      </div>
    </div>
  );

  return <>{showProducts}</>;
};

export default CalendarScreen;
