/* External dependencies */
import React from 'react';
import styled from 'styled-components';

/* Internal dependencies */
import {
  PreviewCardThumbnail,
  PreviewCardThumbnailGroup,
} from '@components/PreviewCard';
import { ThumbnailSize } from '@components/PreviewCard/PreviewCardThumbnail';
import { ThumbnailCount } from '@components/PreviewCard/PreviewCardThumbnailGroup';

const StyledPreviewCardItem = styled.div`
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

interface Props {
  title: string;
  description: string;
  size?: ThumbnailSize;
  count: ThumbnailCount;
}

const PreviewCardItem: React.FC<Props> = ({
  title,
  description,
  size,
  count,
}) => {
  return (
    <StyledPreviewCardItem>
      <PreviewCardThumbnailGroup size={size} count={count} />
      <div className="contents">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </StyledPreviewCardItem>
  );
};

export default PreviewCardItem;
