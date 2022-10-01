import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../feature/Car/carSlice"; // imported reduxfile
import { useSelector } from "react-redux";

function Header() {
  const [BurgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars); // can access redux anywhere now.
  console.log(cars);
  return (
    <Container>
      <a href="">
        <img src="./images/logo.svg" alt="logo" />
      </a>
      <Menu>
        {/* using reduxState here*/}
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
        {/* <a href="#">Model S</a>
        <a href="#">Model Y</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a> */}
      </Menu>
      <Rightmenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
      </Rightmenu>
      {/* on click of hamburgermenu BurgerStatus value will change to true which will open the options.*/}
      <CustomMenu onClick={() => setBurgerStatus(true)} />
      <BurgerMenu show={BurgerStatus}>
        <CloseWrapper>
          {/* on click of customclose the burgerstatus will change to false which will drap the menu to righ side with his full width. Its gone.*/}
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {/* using reduxState below*/}
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trading</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Insurance</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
      </BurgerMenu>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  min-height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Rightmenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerMenu = styled.div`
  position: fixed;
  list-style: none;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  z-index: 16;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  // translate move the element. we are using this for hamburger menu.
  transform: ${(props) => (props.show ? `translateX(0)` : `translateX(100%)`)};
  // translate 0 will not move hamburger menu at all. it will be visible
  // agar value false aali tar move hambburger menu right n side with his full width. 100% gayab kar hamburger menu la.
  transiton: transform 0.2s;
  // add some effect on click of close(X).
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

// to add close sign to topright.
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Header;
