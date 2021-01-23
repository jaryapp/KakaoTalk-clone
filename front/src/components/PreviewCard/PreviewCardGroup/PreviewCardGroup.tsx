/* External dependencies */
import React from 'react';
import styled from 'styled-components';

/* Internal dependencies */
import { PreviewCardList } from '@components/PreviewCard';
import { ThumbnailSize } from '@components/PreviewCard/PreviewCardThumbnail';

const StyledPreviewCardGroup = styled.div`
  .line {
    height: 1px;
    background: #f1f1f1;
    margin-left: 17px;
    margin-right: 17px;
    margin-bottom: 10px;
    margin-top: 6px;
  }
  .group-name {
    font-size: 0.71rem;
    color: gray;
    margin-left: 17px;
    margin-bottom: 8px;
  }
`;

interface Props {
  groupName: string;
  cardSize?: ThumbnailSize;
}

const PreviewCardGroup: React.FC<Props> = ({ groupName, cardSize }) => {
  return (
    <StyledPreviewCardGroup>
      <div className="line" />
      <p className="group-name">{groupName}</p>
      <PreviewCardList size={cardSize} />
    </StyledPreviewCardGroup>
  );
};

export default PreviewCardGroup;
