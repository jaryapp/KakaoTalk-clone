/* External dependencies */
import React from 'react';
import styled from 'styled-components';

/* Internal dependencies */
import { ThumbnailGroup } from '@components/PreviewCard';
import { IThumbnail } from '@components/PreviewCard/Thumbnail/Thumbnail';

export interface IUserGroupCardItem {
  id: number;
  groupname: string;
  groupProfileUrl: IThumbnail[];
}

const StyledUserCardItem = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 0px;
  .contents {
    display: flex;
    margin-left: 8px;
    font-size: 0.8rem;
    align-content: center;
    .title {
      color: #222;
      font-weight: 600;
    }
    .description {
      margin-top: 6px;
      color: gray;
      font-size: 0.9em;
    }
    .people-count {
      margin-left: 6px;
      font-weight: bold;
      color: #b3b3b3;
      font-size: 1.1em;
    }
  }
  &:hover {
    background: rgba(0, 0, 0, 0.034);
  }
`;

const UserCardItem: React.FC<IUserGroupCardItem> = ({
  groupname,
  groupProfileUrl,
}) => {
  return (
    <StyledUserCardItem className="user-group-card">
      <ThumbnailGroup groupProfileUrl={groupProfileUrl} />
      <div className="contents">
        <div className="title">{groupname}</div>
        <div className="people-count">{groupProfileUrl.length}</div>
      </div>
    </StyledUserCardItem>
  );
};

export default UserCardItem;
