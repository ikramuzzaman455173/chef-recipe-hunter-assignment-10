import React from 'react';

const SectionInfo = ({title,heading}) => {
  return (
    <div className='flex mb-4 flex-col text-center items-center p-2'>
      <p className='text-blue-500 font-medium text-lg'>{title}</p>
      <h3 className='text-3xl my-3 font-semibold text-slate-800'>{heading}</h3>
    </div>
  );
};

export default SectionInfo;