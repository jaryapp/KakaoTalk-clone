/* External dependencies */
import React from 'react';
import styled from 'styled-components';

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
    margin-left: 8px;
    font-size: 0.8rem;
    .title {
      font-weight: 600;
    }
    .description {
      margin-top: 6px;
      color: gray;
      font-size: 0.9em;
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
        <div className="title">{username}</div>
        <div className="description">{stateMsg}</div>
        <div className="song">{song}</div>
      </div>
    </StyledUserCardItem>
  );
};

export default UserCardItem;
