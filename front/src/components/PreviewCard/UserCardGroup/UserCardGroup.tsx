/* External dependencies */
import React from 'react';
import styled from 'styled-components';

/* Internal dependencies */
import { UserCardList, IUserCardList } from '@components/PreviewCard';

const StyledUserCardGroup = styled.div`
  .line {
    height: 1px;
    background: #f1f1f1;
    margin-bottom: 10px;
    margin-top: 6px;
  }
  .group-name {
    font-size: 0.71rem;
    color: #ababab;
  }
`;

interface IUserCardGroup extends IUserCardList {
  cardGroupName: string;
}

const UserCardGroup: React.FC<IUserCardGroup> = ({
  cardGroupName,
  cardList,
}) => {
  return (
    <StyledUserCardGroup>
      <p className="group-name">{cardGroupName}</p>
      <UserCardList cardList={cardList} />
      <div className="line" />
    </StyledUserCardGroup>
  );
};

export default UserCardGroup;
