/* External dependencies */
import React from 'react';
import styled from 'styled-components';

/* Internal dependencies */

const StyledPreviewCardThumbnail = styled.figure`
  display: inline-block;
  background-image: url('https://blog.kakaocdn.net/dn/cyOIpg/btqx7JTDRTq/1fs7MnKMK7nSbrM9QTIbE1/img.jpg');
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 20px;
`;

const PreviewCardThumbnail: React.FC = () => {
  return <StyledPreviewCardThumbnail></StyledPreviewCardThumbnail>;
};

export default PreviewCardThumbnail;
