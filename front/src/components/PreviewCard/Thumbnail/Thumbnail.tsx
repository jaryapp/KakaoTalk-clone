/* External dependencies */
import React from 'react';
import styled from 'styled-components';

/* Internal dependencies */

export enum ThumbnailSize {
  lg = 'lg',
  md = 'md',
}

export interface IThumbnail {
  url: string;
  size?: string;
}

const StyledThumbnail = styled.figure<IThumbnail>`
  display: inline-block;
  background-image: url('${props => props.url}');
  background-size: cover;
  width: ${props => (props.size === 'lg' ? '50px' : '40px')};
  height: ${props => (props.size === 'lg' ? '50px' : '40px')};
  border-radius: 40%;
`;

const PreviewCardThumbnail: React.FC<IThumbnail> = props => {
  return <StyledThumbnail {...props} className="thumbnail"></StyledThumbnail>;
};

export default PreviewCardThumbnail;
