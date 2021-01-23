/* External dependencies */
import React from 'react';
import styled from 'styled-components';

/* Internal dependencies */
import { PreviewCardList } from '@components/PreviewCard';

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
}

const PreviewCardGroup: React.FC<Props> = ({ groupName }) => {
  return (
    <StyledPreviewCardGroup>
      <div className="line" />
      <p className="group-name">{groupName}</p>
      <PreviewCardList />
    </StyledPreviewCardGroup>
  );
};

export default PreviewCardGroup;
