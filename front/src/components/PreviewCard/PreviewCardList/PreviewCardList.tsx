/* External dependencies */
import React from 'react';
import styled from 'styled-components';

/* Internal dependencies */
import { PreviewCardItem } from '@components/PreviewCard';
import { ThumbnailSize } from '@components/PreviewCard/PreviewCardThumbnail';
import { ThumbnailCount } from '@components/PreviewCard/PreviewCardThumbnailGroup';

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
      <PreviewCardItem
        title={'제리'}
        description={'상태메시지'}
        size={size}
        count={ThumbnailCount.One}
      />
      <PreviewCardItem
        title={'제리'}
        description={'상태메시지'}
        size={size}
        count={ThumbnailCount.Two}
      />
      <PreviewCardItem
        title={'제리'}
        description={'상태메시지'}
        size={size}
        count={ThumbnailCount.Three}
      />
      <PreviewCardItem
        title={'제리'}
        description={'상태메시지'}
        size={size}
        count={ThumbnailCount.Four}
      />
    </StyledPreviewCardList>
  );
};

export default PreviewCardList;
