/* External dependencies */
import React from 'react';
import styled from 'styled-components';
import { BsPersonPlusFill } from 'react-icons/bs';

/* Internal dependencies */
import Search from '@components/Search';
import { PreviewCardGroup, PreviewCardItem } from '@components/PreviewCard';

const StyledFriend = styled.div`
  height: 100%;

  header {
    color: #404040;
    height: 40px;
    display: flex;
    font-weight: bold;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 34px);
    margin: 0 auto;
    .icon {
      font-size: 1.4rem;
    }
  }
  .people {
    padding: 10px 0px;
  }
  & > div {
    width: calc(100% - 34px);
    margin: 0 auto;
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
      <article className="people">
        <PreviewCardItem title={'제리'} description={'상태메시지'} />
        <PreviewCardGroup groupName={'생일인 친구'}></PreviewCardGroup>
      </article>
    </StyledFriend>
  );
};

export default Friend;
