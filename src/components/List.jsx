import React from 'react';

const List = React.memo(({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
});

export { List };