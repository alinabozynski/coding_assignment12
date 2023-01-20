import React, { FC,Fragment } from 'react'
import styled from 'styled-components';
import { ImageProps } from "./Image.types"
const img = require('./../../assets/images/img.png');


const StyledImage = styled.img<ImageProps>`
  height: 20%;
  width: 25%;
  border-radius: 30px;
  filter: ${props => props.disabled ? 'grayscale(95%)' : ''};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const Image: FC<ImageProps> = ({disabled, alt, ...props}) => {
  return (
    <Fragment>
      <StyledImage disabled={disabled} src={img} alt={alt} />
    </Fragment>
  )
}

export default Image;