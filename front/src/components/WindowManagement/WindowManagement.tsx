/* External dependencies */
import React from 'react';
import styled from 'styled-components';
import { FiX, FiMaximize2, FiMinimize2 } from 'react-icons/fi';

/* Internal dependencies */

const StyledWindowManagement = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0 4px;
  li {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: #7f7976;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;
    color: transparent;
  }
  &:hover {
    li {
      color: black;
    }
    .close {
      background-color: #ff5f58;
    }
    .down {
      background-color: #febf2f;
    }
    .extend {
      background-color: #2bcc41;
    }
  }
`;

const WindowManagement: React.FC = () => {
  return (
    <StyledWindowManagement>
      <li className="close">
        <FiX />
      </li>
      <li className="down">
        <FiMinimize2 />
      </li>
      <li className="extend">
        <FiMaximize2 />
      </li>
    </StyledWindowManagement>
  );
};

export default WindowManagement;
