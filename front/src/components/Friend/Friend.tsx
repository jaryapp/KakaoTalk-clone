/* External dependencies */
import React from 'react';
import styled from 'styled-components';
import { BsPersonPlusFill } from 'react-icons/bs';

/* Internal dependencies */
import Search from '@components/Search';

const StyledFriend = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 17px;
  header {
    color: #404040;
    height: 40px;
    display: flex;
    font-weight: bold;
    justify-content: space-between;
    align-items: center;
    .icon {
      font-size: 1.4rem;
    }
  }
`;

const Friend: React.FC = () => {
  return (
    <StyledFriend>
      <header>
        <span>친구</span>
        <BsPersonPlusFill className="icon" />
      </header>
      <Search />
    </StyledFriend>
  );
};

export default Friend;
