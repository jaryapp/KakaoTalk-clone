/* External dependencies */
import React from 'react';
import styled from 'styled-components';

/* Internal dependencies */
import { Thumbnail } from '@components/PreviewCard';
import { IThumbnail } from '@components/PreviewCard/Thumbnail/Thumbnail';

export enum ThumbnailCount {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
}

interface Props {
  groupProfileUrl: IThumbnail[];
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
    child3: { top: '0px', left: '17.5%' },
  },
  4: {
    size: '50%',
    child1: { top: '0px', left: '0px' },
    child2: { top: '0px', right: '0px' },
    child3: { bottom: '0px', left: '0px' },
    child4: { bottom: '0px', right: '0px' },
  },
};

const StyledPreviewCardThumbnailGroup = styled.div<{ count: number }>`
  position: relative;
  width: 40px;
  height: 40px;
  figure {
    position: absolute;
    min-width: ${props => figurePostion[props.count].size};
    min-height: ${props => figurePostion[props.count].size};
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

const Name: React.FC<Props> = ({ groupProfileUrl }) => {
  function makeMocks() {
    return groupProfileUrl.map((profile, idx) => (
      // 임시키
      <Thumbnail key={idx} {...profile} />
    ));
  }

  return (
    <StyledPreviewCardThumbnailGroup
      className="thumbnail-group"
      count={groupProfileUrl.length}
    >
      {makeMocks()}
    </StyledPreviewCardThumbnailGroup>
  );
};

export default Name;
