import React from 'react';

interface Props {
  success: boolean;
}

const Status: React.FC<Props> = ({ success }) => {
  if (!success) {
    return (
      <div className="errorMessage">Fail</div>
    );
  }

  return (
    <div>Success</div>
  );
};

export default Status;
