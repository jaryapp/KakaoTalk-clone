/* External dependencies */
import React from 'react';
import styled from 'styled-components';

/* Internal dependencies */

const StyledPreviewCardThumbnail = styled.figure<Props>`
  display: inline-block;
  background-image: url('https://blog.kakaocdn.net/dn/cyOIpg/btqx7JTDRTq/1fs7MnKMK7nSbrM9QTIbE1/img.jpg');
  background-size: cover;
  width: ${props => (props.size === 'lg' ? '50px' : '40px')};
  height: ${props => (props.size === 'lg' ? '50px' : '40px')};
  border-radius: 40%;
`;

export enum ThumbnailSize {
  lg = 'lg',
  md = 'md',
}

interface Props {
  size?: ThumbnailSize;
}

const PreviewCardThumbnail: React.FC<Props> = ({ size = ThumbnailSize.md }) => {
  return <StyledPreviewCardThumbnail size={size}></StyledPreviewCardThumbnail>;
};

export default PreviewCardThumbnail;
