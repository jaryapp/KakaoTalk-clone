/* External dependencies */
import React from 'react';
import styled from 'styled-components';

/* Internal dependencies */
import { PreviewCardThumbnail } from '@components/PreviewCard';
import { ThumbnailSize } from '@components/PreviewCard/PreviewCardThumbnail';

export enum ThumbnailCount {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
}

const figurePostion: any = {
  1: {
    size: '100%',
    child1: { top: '0px', left: '0px' },
  },
  2: {
    size: '70%',
    child1: { top: '0px', left: '0px' },
    child2: { bottom: '0px', right: '0px' },
  },
  3: {
    size: '60%',
    child1: { bottom: '0px', left: '0px' },
    child2: { bottom: '0px', right: '0px' },
    child3: { top: '0px', left: '7px' },
  },
  4: {
    size: '50%',
    child1: { top: '0px', left: '0px' },
    child2: { top: '0px', right: '0px' },
    child3: { bottom: '0px', left: '0px' },
    child4: { bottom: '0px', right: '0px' },
  },
};

const StyledPreviewCardThumbnailGroup = styled.div<Props>`
  position: relative;
  width: 40px;
  height: 40px;
  figure {
    position: absolute;
    width: ${props => figurePostion[props.count].size};
    height: ${props => figurePostion[props.count].size};
    border: 1px solid white;
  }
  figure:nth-child(1) {
    left: ${props => figurePostion[props.count].child1?.left};
    right: ${props => figurePostion[props.count].child1?.right};
    top: ${props => figurePostion[props.count].child1?.top};
    bottom: ${props => figurePostion[props.count].child1?.bottom};
    z-index: 1;
  }
  figure:nth-child(2) {
    left: ${props => figurePostion[props.count].child2?.left};
    right: ${props => figurePostion[props.count].child2?.right};
    top: ${props => figurePostion[props.count].child2?.top};
    bottom: ${props => figurePostion[props.count].child2?.bottom};
    z-index: 2;
  }
  figure:nth-child(3) {
    left: ${props => figurePostion[props.count].child3?.left};
    right: ${props => figurePostion[props.count].child3?.right};
    top: ${props => figurePostion[props.count].child3?.top};
    bottom: ${props => figurePostion[props.count].child3?.bottom};
    z-index: 3;
  }
  figure:nth-child(4) {
    left: ${props => figurePostion[props.count].child4?.left};
    right: ${props => figurePostion[props.count].child4?.right};
    top: ${props => figurePostion[props.count].child4?.top};
    bottom: ${props => figurePostion[props.count].child4?.bottom};
    z-index: 4;
  }
`;

interface Props {
  size?: ThumbnailSize;
  count: ThumbnailCount;
}

const Name: React.FC<Props> = ({ size, count }) => {
  function makeMocks() {
    const mocks = [];
    for (let i = 0; i < count; i++) {
      mocks.push(<PreviewCardThumbnail size={size} />);
    }
    return mocks;
  }

  return (
    <StyledPreviewCardThumbnailGroup className="thumbnail-group" count={count}>
      {makeMocks()}
    </StyledPreviewCardThumbnailGroup>
  );
};

export default Name;
