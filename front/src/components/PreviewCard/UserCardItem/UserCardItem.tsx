/* External dependencies */
import React from 'react';
import styled from 'styled-components';
import { BsPlay } from 'react-icons/bs';

/* Internal dependencies */
import { Thumbnail } from '@components/PreviewCard';
import { IThumbnail } from '@components/PreviewCard/Thumbnail/Thumbnail';

export interface IUserCardItem {
  id: number;
  username: string;
  stateMsg?: string;
  size?: 'lg' | 'md';
  song?: string;
  profileUrl: IThumbnail;
}

const StyledUserCardItem = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 0px;
  .contents {
    width: 100%;
    display: flex;
    margin-left: 8px;
    font-size: 0.8rem;

    & > .info {
      .title {
        font-weight: 600;
      }
      .description {
        margin-top: 6px;
        color: gray;
        font-size: 0.9em;
      }
    }

    .song {
      max-width: 150px;
      align-self: center;
      margin-left: auto;
      border: 1px solid #03cd3b;
      border-radius: 10px;
      padding: 4px 7px;
      display: flex;

      .info {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 90%;
        font-size: 0.4rem;
        color: #525252;
      }
      .play {
        align-self: center;
        color: #03cd3b;
        font-size: 0.8rem;
      }
    }
  }
  &:hover {
    background: rgba(0, 0, 0, 0.034);
  }
`;

const UserCardItem: React.FC<IUserCardItem> = ({
  username,
  stateMsg,
  song,
  profileUrl,
}) => {
  return (
    <StyledUserCardItem className="user-card">
      <Thumbnail {...profileUrl} />
      <div className="contents">
        <div className="info">
          <div className="title">{username}</div>
          <div className="description">{stateMsg}</div>
        </div>
        {song && (
          <div className="song">
            <div className="info">{song}</div>
            <BsPlay className="play" />
          </div>
        )}
      </div>
    </StyledUserCardItem>
  );
};

export default UserCardItem;
