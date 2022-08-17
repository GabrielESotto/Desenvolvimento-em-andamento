import React from 'react'
import { ButtonElement } from '../ButtonElement'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  ColumnOne,
  ColumnTwo,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from './InfoElements'

const InfoSection = ({
  lightBg, 
  id, 
  imgStart, 
  topLine, 
  lightText, 
  darkText, 
  img, 
  alt, 
  headline, 
  description, 
  buttonLabel,
  primary,
  dark,
  dark2
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <ColumnOne>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <ButtonElement 
                    to='home'
                    smooth={true} 
                    duration={500}
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    primary={primary ? 1 : 0} 
                    dark={dark ? 1 : 0} 
                    dark2={dark2 ? 1 : 0}
                    >{buttonLabel}</ButtonElement>
                </BtnWrap>
              </TextWrapper>
            </ColumnOne>
            <ColumnTwo>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </ColumnTwo>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
