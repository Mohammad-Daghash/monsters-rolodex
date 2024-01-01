import React from 'react';

type Props = {
  children: React.ReactNode;
  props: React.ReactNode;
};

const Scroll = (props: Props) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '5px solid black',
        height: '800px',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
