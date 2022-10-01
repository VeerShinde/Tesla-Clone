import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade'; 

function Section({title, description, backgroundImg, leftBtnText, rightBtnText}) {
  return (
    <Wrap bgimage={backgroundImg}>
        {/* now create text-area the model name and many more */}
        {/* the below code is a effect (fade) which is given by using react-reveal. */}
        <Fade bottom>   
          <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
          </ItemText>
        </Fade>
        <Buttons>
          <Fade bottom>
            <ButtonGroup>
              <LeftButton>
                  {leftBtnText}
              </LeftButton>
              {rightBtnText && <RightButton>
                  {rightBtnText}
              </RightButton>}
            </ButtonGroup>
            </Fade>
          <DownArrow src="./images/down-arrow.svg"/>
        </Buttons>
    </Wrap>
  )
}
 
const Wrap = styled.div`
    width : 100vw;
    height : 100vh;
    background-image : url("./images/model-s.jpg");
    background-size : cover;                   // background size cover the whole backgound in the width of the vh and vw.
    background-position : center;
    background-repeat : no-repeat;
    display : flex;
    flex-direction : column;
    justify-content : space-between;         // vertical
    align-items : center;                    // horizontal
    background-image : ${props => `url("./images/${props.bgimage}")`}
`

const ItemText = styled.div`
  padding-top : 15vh;
  text-align : center; 
`

const ButtonGroup = styled.div`
  display : flex;
  margin-bottom : 40px;
  @media (max-width:768px){
    flex-direction : column
  }
`

const LeftButton = styled.div`
    background-color : rgb(26, 26, 32, 0.8);
    height : 40px;
    width : 256px;
    color : white;
    display : flex;
    justify-content : center;
    align-items : center; 
    border-radius : 100px;
    opacity : 0.85;
    text-transform : uppercase;
    font-size : 12px;
    cursor : pointer;
    margin : 8px;
`

const RightButton = styled(LeftButton)`
background-color : white;
opacity : 0.65;
color : black;
`

const DownArrow = styled.img`
  margin-top : 20px;
  height : 40px;
  animation : animateDown infinite 1.5s;
  overflow-x : hidden; 
`
const Buttons = styled.div`

`

export default Section