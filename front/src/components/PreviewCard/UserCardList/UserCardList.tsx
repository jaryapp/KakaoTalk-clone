/* External dependencies */
import React from 'react';
import styled from 'styled-components';

/* Internal dependencies */
import {
  UserCardItem,
  IUserCardItem,
  IUserGroupCardItem,
  UserGroupCardItem,
} from '@components/PreviewCard';

export type cardItem = IUserCardItem | IUserGroupCardItem;

export interface IUserCardList {
  cardList: cardItem[];
}

const StyledUserCardList = styled.div`
  /* display: flex; */
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
`;

const PreviewCardItem: React.FC<IUserCardList> = ({ cardList }) => {
  function isIUserCardItem(
    card: IUserCardItem | IUserGroupCardItem,
  ): card is IUserCardItem {
    return (card as IUserCardItem).username !== undefined;
  }

  return (
    <StyledUserCardList>
      {cardList.map(card =>
        isIUserCardItem(card) ? (
          <UserCardItem key={card.id} {...card} />
        ) : (
          <UserGroupCardItem key={card.id} {...card} />
        ),
      )}
    </StyledUserCardList>
  );
};

export default PreviewCardItem;
