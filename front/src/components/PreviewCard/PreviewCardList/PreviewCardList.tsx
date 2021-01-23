/* External dependencies */
import React from 'react';
import styled from 'styled-components';

/* Internal dependencies */
import { PreviewCardItem } from '@components/PreviewCard';
import { ThumbnailSize } from '@components/PreviewCard/PreviewCardThumbnail';

const StyledPreviewCardList = styled.div`
  .preview-card-item {
    & > div {
      margin-bottom: 10px;
    }
  }
`;

interface Props {
  size?: ThumbnailSize;
}

const PreviewCardList: React.FC<Props> = ({ size }) => {
  return (
    <StyledPreviewCardList>
      <PreviewCardItem title={'제리'} description={'상태메시지'} size={size} />
      <PreviewCardItem title={'제리'} description={'상태메시지'} size={size} />
      <PreviewCardItem title={'제리'} description={'상태메시지'} size={size} />
    </StyledPreviewCardList>
  );
};

export default PreviewCardList;
