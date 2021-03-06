/* External dependencies */
import React from 'react';
import styled from 'styled-components';
import { BsPersonPlusFill } from 'react-icons/bs';

/* Internal dependencies */
import Search from '@components/Search';
import { UserCardList } from '@components/PreviewCard';
import { ChatRooms } from '~/src/__mocks__/CardList';

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
    height: calc(100vh - 72px);
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 14px;
    }
    ::-webkit-scrollbar-track {
      background-color: #fff;
      border: solid 30px transparent;
    }

    ::-webkit-scrollbar-thumb {
      height: 6px;
      border: 3px solid rgba(0, 0, 0, 0);
      background-clip: padding-box;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.15);
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #838383;
    }

    .line,
    .group-name,
    .user-card,
    .user-group-card {
      padding-left: 17px;
      padding-right: 17px;
    }
  }
  & > div {
    width: calc(100% - 34px);
    margin: 0 auto;
    margin-bottom: 10px;
  }
`;

const Friend: React.FC = () => {
  return (
    <StyledFriend>
      <header>
        <span>채팅</span>
        <BsPersonPlusFill className="icon" />
      </header>
      <Search placeholder="채팅방 이름, 참여자 검색" />
      <article className="people">
        <UserCardList cardList={ChatRooms} />
      </article>
    </StyledFriend>
  );
};

export default Friend;
