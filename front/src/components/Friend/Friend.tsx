/* External dependencies */
import React from 'react';
import styled from 'styled-components';
import { BsPersonPlusFill } from 'react-icons/bs';

/* Internal dependencies */
import Search from '@components/Search';
import { PreviewCardGroup, PreviewCardItem } from '@components/PreviewCard';
import { ThumbnailSize } from '@components/PreviewCard/PreviewCardThumbnail';

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
      -webkit-border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.15);
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #838383;
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
        <span>친구</span>
        <BsPersonPlusFill className="icon" />
      </header>
      <Search />
      <article className="people">
        <PreviewCardItem
          title={'제리'}
          description={'상태메시지'}
          size={ThumbnailSize.lg}
        />
        <PreviewCardGroup groupName={'생일인 친구'}></PreviewCardGroup>
        <PreviewCardGroup groupName={'생일인 친구'}></PreviewCardGroup>
        <PreviewCardGroup groupName={'생일인 친구'}></PreviewCardGroup>
        <PreviewCardGroup groupName={'생일인 친구'}></PreviewCardGroup>
        <PreviewCardGroup groupName={'생일인 친구'}></PreviewCardGroup>
        <PreviewCardGroup groupName={'생일인 친구'}></PreviewCardGroup>
        <PreviewCardGroup groupName={'생일인 친구'}></PreviewCardGroup>
      </article>
    </StyledFriend>
  );
};

export default Friend;
