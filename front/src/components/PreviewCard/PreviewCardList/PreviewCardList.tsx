/* External dependencies */
import React from 'react';
import styled from 'styled-components';

/* Internal dependencies */
import { PreviewCardItem } from '@components/PreviewCard';

const StyledPreviewCardList = styled.div`
  .preview-card-item {
    & > div {
      margin-bottom: 10px;
    }
  }
`;

const PreviewCardList: React.FC = () => {
  return (
    <StyledPreviewCardList>
      <PreviewCardItem title={'제리'} description={'상태메시지'} />
      <PreviewCardItem title={'제리'} description={'상태메시지'} />
      <PreviewCardItem title={'제리'} description={'상태메시지'} />
    </StyledPreviewCardList>
  );
};

export default PreviewCardList;
