import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Aside() {
  return (
    <>
      <Container>
        <Top>
          <Profile>
            <ProfileImage>
              <Image
                src={require("../../assets/Frame 3466852.png")}
                alt="avatar"
              />
            </ProfileImage>
            <ProfileName>Melissa Brown</ProfileName>
            <Title>Sr. Visual Designer</Title>
          </Profile>
          <Pro>
            <Button>
              <ButtonImage
                src={require("../../assets/Property 1=horse w.svg").default}
                alt="image"
              />
              <Become>Become a pro</Become>
            </Button>
          </Pro>
        </Top>
        <Middle>
          <Menu>
            <MenuItem
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/">
              <MenuImage>
                <MenuImg
                  src={require("../../assets/Property 1=account b.svg").default}
                  alt="menu"
                />
              </MenuImage>
              <MenuName
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/">
                Profile
              </MenuName>
            </MenuItem>
            <MenuItem to="/dashboard">
              <MenuImage>
                <MenuImg
                  src={
                    require("../../assets/Property 1=dash board b.svg").default
                  }
                  alt="menu"
                />
              </MenuImage>
              <MenuName>Dashboard</MenuName>
            </MenuItem>
            <MenuItem to="/statistics">
              <MenuImage>
                <MenuImg
                  src={require("../../assets/Property 1=graph b.svg").default}
                  alt="menu"
                />
              </MenuImage>
              <MenuName>Statistics</MenuName>
            </MenuItem>
            <MenuItem to="/payment">
              <MenuImage>
                <MenuImg
                  src={require("../../assets/Property 1=note b.svg").default}
                  alt="menu"
                />
              </MenuImage>
              <MenuName>Payment</MenuName>
            </MenuItem>
            <MenuItem to="/transaction">
              <MenuImage>
                <MenuImg
                  src={require("../../assets/Property 1=refresh b.svg").default}
                  alt="menu"
                />
              </MenuImage>
              <MenuName>Transaction</MenuName>
            </MenuItem>
            <MenuItem to="/settings">
              <MenuImage>
                <MenuImg
                  src={require("../../assets/Property 1=settings b.svg").default}
                  alt="menu"
                />
              </MenuImage>
              <MenuName>Settings</MenuName>
            </MenuItem>
            <MenuItem to="/support">
              <MenuImage>
                <MenuImg
                  src={require("../../assets/Property 1=message b.svg").default}
                  alt="menu"
                />
              </MenuImage>
              <MenuName>Support</MenuName>
            </MenuItem>
            <MenuItem to="/logout">
              <MenuImage>
                <MenuImg
                  src={require("../../assets/Property 1=log out b.svg").default}
                  alt="menu"
                />
              </MenuImage>
              <MenuName>Logout</MenuName>
            </MenuItem>
          </Menu>
        </Middle>
        <Bottom>
          <Storage>
            <StorageImage>
              <StorageImg
                src={require("../../assets/Property 1=file.svg").default}
                alt="file"
              />
            </StorageImage>
            <StorageTitle>Buy More Storage</StorageTitle>
            <Upgrade>Buy Now</Upgrade>
          </Storage>
        </Bottom>
      </Container>
    </>
  );
}

export default Aside;

const Container = styled.aside`
  width: 20%;
  padding: 70px 25px;
`;
const Top = styled.div`
  text-align: center;
`;
const Profile = styled.div``;
const ProfileImage = styled.div`
  width: 60px;
  margin: 0 auto;
  margin-bottom: 15px;
`;
const Image = styled.img`
  display: block;
  border-radius: 50%;
  width: 100%;
`;
const ProfileName = styled.h2`
  font-family: "dm_sansbold";
  font-size: 18px;
  margin-bottom: 8px;
`;
const Title = styled.span`
  display: block;
  font-size: 12px;
  color: #76758a;
  font-family: "dm_sansregular";
`;
const Pro = styled.div`
  margin-top: 30px;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #51459f;
  font-family: "dm_sansregular";
  color: #fff;
  font-size: 12px;
  padding: 10px 0;
  border-radius: 5px;
`;
const ButtonImage = styled.img`
  display: block;
  width: 20px;
`;
const Become = styled.span`
  display: block;
  margin-left: 10px;
`;

const Middle = styled.div`
  margin-top: 40px;
`;
const Menu = styled.div``;
const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const MenuImage = styled.div`
  margin-right: 35px;
`;
const MenuImg = styled.img`
  display: block;
  width: 100%;
  filter: grayscale();
`;
const MenuName = styled.span`
  font-family: "dm_sansmedium";
  color: #76758a;
  display: block;
  &.active {
    color: red;
  }
`;

const Bottom = styled.div`
  margin-top: 60px;
  text-align: center;
`;
const Storage = styled.div`
  padding: 15px 0;
  box-shadow: 6px 9px 12px -6px rgba(114, 116, 136, 1);
`;
const StorageImage = styled.div`
  width: 60%;
  margin: 0 auto;
`;
const StorageImg = styled.img`
  display: block;
  width: 100%;
`;
const StorageTitle = styled.span`
  font-family: "dm_sansbold";
  display: block;
  margin: 20px 0;
`;
const Upgrade = styled.div`
  margin: 0 auto;
  color: #fff;
  background: #51459f;
  font-family: "dm_sansregular";
  padding: 10px;
  width: 70%;
  border-radius: 5px;
`;
