/* External dependencies */
import React from 'react';
import styled from 'styled-components';

const StyledBallonNotification = styled.div`
  position: relative;
  // 초점맞추기
  .point {
    position: absolute;
    width: 30px;
    min-height: 10px;
    top: -8px;
    right: -11px;
    display: flex;
    justify-content: center;
  }
  .label {
    font-size: 0.7rem;
    background-color: #ed6754;
    border-radius: 10px;
    padding: 0.3em 0.5em;
    color: white;
    font-weight: bold;
  }
`;

interface Props {
  label: string;
}

const BallonNotification: React.FC<Props> = ({ children, label }) => {
  return (
    <StyledBallonNotification>
      {/* <div className="label">{label}</div> */}
      <div className="point">
        <div className="label">{label}</div>
      </div>
      {children}
    </StyledBallonNotification>
  );
};

export default BallonNotification;
