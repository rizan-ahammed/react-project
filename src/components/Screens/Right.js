import React, { useState } from "react";
import styled from "styled-components";

function Right() {
  const [button, setButton] = useState([
    { button1: true, button2: false, button3: false },
  ]);
  console.log(button[0].button1);
  return (
    <>
      <SectionTop>
        <SubTop>
          <ButtonSection>
            <LeftContent>
              <FlagImage>
                <FlagImg
                  src={require("../../assets/Property 1=flag.svg").default}
                />
              </FlagImage>
              <BellImage>
                <BellImg
                  src={require("../../assets/Property 1=bell.svg").default}
                />
              </BellImage>
            </LeftContent>
          </ButtonSection>
          <ContentSection>
            <LeftImage>
              <LeftImg
                src={
                  require("../../assets/Property 1=master card b.svg").default
                }
              />
            </LeftImage>
            <MiddleContent>123***23</MiddleContent>
            <RightContent>$ 3456.20</RightContent>
            <RightImage>
              <RightImg
                src={require("../../assets/Property 1=down black.svg").default}
              />
            </RightImage>
          </ContentSection>
        </SubTop>
        <SubBottom>
          <SubTopHeading>Today's Lectures</SubTopHeading>
          <SubTopContent>
            <SubTopList>
              <SubTopLeft>
                <SubTopImage>
                  <SubTopImg src={require("../../assets/Frame 3466858.png")} />
                </SubTopImage>
                <SubTopTextContainer>
                  <SubTopText1>Maths</SubTopText1>
                  {button[0].button1 ? (
                    <SubTopText2 style={{ color: "#3ece79" }}>
                      Finished
                    </SubTopText2>
                  ) : (
                    <SubTopText2 style={{ color: "#6467ea" }}>
                      Running
                    </SubTopText2>
                  )}
                </SubTopTextContainer>
              </SubTopLeft>
              {button[0].button1 ? (
                <SubTopMiddle>
                  <SubTopMiddleLeft
                    style={{ border: "3px solid #3ece79" }}
                  ></SubTopMiddleLeft>
                  <SubTopMiddleRight></SubTopMiddleRight>
                </SubTopMiddle>
              ) : (
                <SubTopMiddle>
                  <SubTopMiddleLeft
                    style={{ border: "3px solid #6467ea" }}
                  ></SubTopMiddleLeft>
                  <SubTopMiddleRight></SubTopMiddleRight>
                </SubTopMiddle>
              )}
              <SubTopRight>
                {button[0].button1 ? (
                  <SubTopRightImg
                    src={require("../../assets/greenbutton.svg").default}
                    onClick={()=>{button[0].button1 = !button[0].button1; setButton([...button])}}
                  />
                ) : (
                  <SubTopRightImg
                    src={require("../../assets/volientbutton.svg").default} onClick={()=>{button[0].button1 = !button[0].button1; setButton([...button])}}
                  />
                )}
              </SubTopRight>
            </SubTopList>
            <SubTopList>
              <SubTopLeft>
                <SubTopImage>
                  <SubTopImg src={require("../../assets/Frame 3466859.png")} />
                </SubTopImage>
                <SubTopTextContainer>
                  <SubTopText1>History</SubTopText1>
                  {button[0].button2 ? (
                    <SubTopText2 style={{ color: "#3ece79" }}>
                      Finished
                    </SubTopText2>
                  ) : (
                    <SubTopText2 style={{ color: "#6467ea" }}>
                      Running
                    </SubTopText2>
                  )}
                </SubTopTextContainer>
              </SubTopLeft>
              {button[0].button2 ? (
                <SubTopMiddle>
                  <SubTopMiddleLeft
                    style={{ border: "3px solid #3ece79" }}
                  ></SubTopMiddleLeft>
                  <SubTopMiddleRight></SubTopMiddleRight>
                </SubTopMiddle>
              ) : (
                <SubTopMiddle>
                  <SubTopMiddleLeft
                    style={{ border: "3px solid #6467ea" }}
                  ></SubTopMiddleLeft>
                  <SubTopMiddleRight></SubTopMiddleRight>
                </SubTopMiddle>
              )}
              <SubTopRight>
                {button[0].button2 ? (
                  <SubTopRightImg
                    src={require("../../assets/greenbutton.svg").default}
                    onClick={()=>{button[0].button2 = !button[0].button2; setButton([...button])}}
                  />
                ) : (
                  <SubTopRightImg
                    src={require("../../assets/volientbutton.svg").default} onClick={()=>{button[0].button2 = !button[0].button2; setButton([...button])}}
                  />
                )}
              </SubTopRight>
            </SubTopList>
            <SubTopList>
              <SubTopLeft>
                <SubTopImage>
                  <SubTopImg src={require("../../assets/Frame 3466860.png")} />
                </SubTopImage>
                <SubTopTextContainer>
                  <SubTopText1>Biology</SubTopText1>
                  {button[0].button3 ? (
                    <SubTopText2 style={{ color: "#3ece79" }}>
                      Finished
                    </SubTopText2>
                  ) : (
                    <SubTopText2 style={{ color: "#6467ea" }}>
                      Running
                    </SubTopText2>
                  )}
                </SubTopTextContainer>
              </SubTopLeft>
              {button[0].button3 ? (
                <SubTopMiddle>
                  <SubTopMiddleLeft
                    style={{ border: "3px solid #3ece79" }}
                  ></SubTopMiddleLeft>
                  <SubTopMiddleRight></SubTopMiddleRight>
                </SubTopMiddle>
              ) : (
                <SubTopMiddle>
                  <SubTopMiddleLeft
                    style={{ border: "3px solid #6467ea" }}
                  ></SubTopMiddleLeft>
                  <SubTopMiddleRight></SubTopMiddleRight>
                </SubTopMiddle>
              )}
              <SubTopRight>
                {button[0].button3 ? (
                  <SubTopRightImg
                    src={require("../../assets/greenbutton.svg").default}
                    onClick={()=>{button[0].button3 = !button[0].button3; setButton([...button])}}
                  />
                ) : (
                  <SubTopRightImg
                    src={require("../../assets/volientbutton.svg").default} onClick={()=>{button[0].button3 = !button[0].button3; setButton([...button])}}
                  />
                )}
              </SubTopRight>
            </SubTopList>
          </SubTopContent>
        </SubBottom>
      </SectionTop>
      <SectionMiddle>
        <MiddleHeading>Your Classmates</MiddleHeading>
        <StudentContainer>
          <StudentList>
            <ProfileSection>
              <ProfileImage>
                <ProfileImg
                  src={require("../../assets/Frame 3466861.png")}
                  alt="avatar"
                />
              </ProfileImage>
              <StudentName>Ariana Black</StudentName>
            </ProfileSection>
            <CountSection>
              <StudentCredits>25 Credits</StudentCredits>
              <DateAdded>05-11-2020</DateAdded>
            </CountSection>
          </StudentList>
          <StudentList>
            <ProfileSection>
              <ProfileImage>
                <ProfileImg
                  src={require("../../assets/Frame 3466862.png")}
                  alt="avatar"
                />
              </ProfileImage>
              <StudentName>Nicki Johns</StudentName>
            </ProfileSection>
            <CountSection>
              <StudentCredits>25 Credits</StudentCredits>
              <DateAdded>05-11-2020</DateAdded>
            </CountSection>
          </StudentList>
          <StudentList>
            <ProfileSection>
              <ProfileImage>
                <ProfileImg
                  src={require("../../assets/Frame 3466863.png")}
                  alt="avatar"
                />
              </ProfileImage>
              <StudentName>Michael Joe</StudentName>
            </ProfileSection>
            <CountSection>
              <StudentCredits>25 Credits</StudentCredits>
              <DateAdded>05-11-2020</DateAdded>
            </CountSection>
          </StudentList>
          <StudentList>
            <ProfileSection>
              <ProfileImage>
                <ProfileImg
                  src={require("../../assets/Frame 3466865.png")}
                  alt="avatar"
                />
              </ProfileImage>
              <StudentName>Joey Fred</StudentName>
            </ProfileSection>
            <CountSection>
              <StudentCredits>25 Credits</StudentCredits>
              <DateAdded>05-11-2020</DateAdded>
            </CountSection>
          </StudentList>
          <StudentList>
            <ProfileSection>
              <ProfileImage>
                <ProfileImg
                  src={require("../../assets/Frame 3466866.png")}
                  alt="avatar"
                />
              </ProfileImage>
              <StudentName>Boby</StudentName>
            </ProfileSection>
            <CountSection>
              <StudentCredits>25 Credits</StudentCredits>
              <DateAdded>05-11-2020</DateAdded>
            </CountSection>
          </StudentList>
          <StudentList>
            <ProfileSection>
              <ProfileImage>
                <ProfileImg
                  src={require("../../assets/Frame 3466867.png")}
                  alt="avatar"
                />
              </ProfileImage>
              <StudentName>Monica</StudentName>
            </ProfileSection>
            <CountSection>
              <StudentCredits>25 Credits</StudentCredits>
              <DateAdded>05-11-2020</DateAdded>
            </CountSection>
          </StudentList>
          <StudentList>
            <ProfileSection>
              <ProfileImage>
                <ProfileImg
                  src={require("../../assets/Frame 3466852.png")}
                  alt="avatar"
                />
              </ProfileImage>
              <StudentName>Phoebe</StudentName>
            </ProfileSection>
            <CountSection>
              <StudentCredits>25 Credits</StudentCredits>
              <DateAdded>05-11-2020</DateAdded>
            </CountSection>
          </StudentList>
        </StudentContainer>
      </SectionMiddle>
      <SectionBottom>
        <BottomListContainer>
          <BottomList>
            <BottomLeftContainer>
              <SmallImages>
                <SmallImageContainer>
                  <SmallImg
                    src={require("../../assets/Frame 3466861.png")}
                    alt="avatar"
                  />
                </SmallImageContainer>
                <SmallImageContainer>
                  <SmallImg
                    src={require("../../assets/Frame 3466862.png")}
                    alt="avatar"
                  />
                </SmallImageContainer>
                <SmallImageContainer>
                  <SmallImg
                    src={require("../../assets/Frame 3466863.png")}
                    alt="avatar"
                  />
                </SmallImageContainer>
                <SmallImageContainer>
                  <SmallImg
                    src={require("../../assets/Frame 3466865.png")}
                    alt="avatar"
                  />
                </SmallImageContainer>
              </SmallImages>
              <RemainCount>7+ More</RemainCount>
            </BottomLeftContainer>
            <ButtonContainer>Buy Now</ButtonContainer>
          </BottomList>
          <BottomList>
            <BottomLeftContainer>
              <SmallImages>
                <SmallImageContainer>
                  <SmallImg
                    src={require("../../assets/Frame 3466861.png")}
                    alt="avatar"
                  />
                </SmallImageContainer>
                <SmallImageContainer>
                  <SmallImg
                    src={require("../../assets/Frame 3466862.png")}
                    alt="avatar"
                  />
                </SmallImageContainer>
                <SmallImageContainer>
                  <SmallImg
                    src={require("../../assets/Frame 3466863.png")}
                    alt="avatar"
                  />
                </SmallImageContainer>
                <SmallImageContainer>
                  <SmallImg
                    src={require("../../assets/Frame 3466865.png")}
                    alt="avatar"
                  />
                </SmallImageContainer>
              </SmallImages>
              <RemainCount>7+ More</RemainCount>
            </BottomLeftContainer>
            <ButtonContainer>Buy Now</ButtonContainer>
          </BottomList>
          <BottomList>
            <BottomLeftContainer>
              <SmallImages>
                <SmallImageContainer>
                  <SmallImg
                    src={require("../../assets/Frame 3466861.png")}
                    alt="avatar"
                  />
                </SmallImageContainer>
                <SmallImageContainer>
                  <SmallImg
                    src={require("../../assets/Frame 3466862.png")}
                    alt="avatar"
                  />
                </SmallImageContainer>
                <SmallImageContainer>
                  <SmallImg
                    src={require("../../assets/Frame 3466863.png")}
                    alt="avatar"
                  />
                </SmallImageContainer>
                <SmallImageContainer>
                  <SmallImg
                    src={require("../../assets/Frame 3466865.png")}
                    alt="avatar"
                  />
                </SmallImageContainer>
              </SmallImages>
              <RemainCount>7+ More</RemainCount>
            </BottomLeftContainer>
            <ButtonContainer>Buy Now</ButtonContainer>
          </BottomList>
          <BottomList>
            <BottomLeftContainer>
              <SmallImages>
                <SmallImageContainer>
                  <SmallImg
                    src={require("../../assets/Frame 3466861.png")}
                    alt="avatar"
                  />
                </SmallImageContainer>
                <SmallImageContainer>
                  <SmallImg
                    src={require("../../assets/Frame 3466862.png")}
                    alt="avatar"
                  />
                </SmallImageContainer>
                <SmallImageContainer>
                  <SmallImg
                    src={require("../../assets/Frame 3466863.png")}
                    alt="avatar"
                  />
                </SmallImageContainer>
                <SmallImageContainer>
                  <SmallImg
                    src={require("../../assets/Frame 3466865.png")}
                    alt="avatar"
                  />
                </SmallImageContainer>
              </SmallImages>
              <RemainCount>7+ More</RemainCount>
            </BottomLeftContainer>
            <ButtonContainer>Buy Now</ButtonContainer>
          </BottomList>
          <BottomList>
            <BottomLeftContainer>
              <SmallImages>
                <SmallImageContainer>
                  <SmallImg
                    src={require("../../assets/Frame 3466861.png")}
                    alt="avatar"
                  />
                </SmallImageContainer>
                <SmallImageContainer>
                  <SmallImg
                    src={require("../../assets/Frame 3466862.png")}
                    alt="avatar"
                  />
                </SmallImageContainer>
                <SmallImageContainer>
                  <SmallImg
                    src={require("../../assets/Frame 3466863.png")}
                    alt="avatar"
                  />
                </SmallImageContainer>
                <SmallImageContainer>
                  <SmallImg
                    src={require("../../assets/Frame 3466865.png")}
                    alt="avatar"
                  />
                </SmallImageContainer>
              </SmallImages>
              <RemainCount>7+ More</RemainCount>
            </BottomLeftContainer>
            <ButtonContainer>Buy Now</ButtonContainer>
          </BottomList>
        </BottomListContainer>
      </SectionBottom>
    </>
  );
}

export default Right;

const SectionTop = styled.div``;
const SubTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 60px 30px 50px;
`;
const ButtonSection = styled.div``;
const LeftContent = styled.div`
  display: flex;
  align-items: center;
`;
const FlagImage = styled.div`
  width: 20px;
  margin-right: 10px;
`;
const FlagImg = styled.img`
  width: 100%;
  display: block;
`;
const BellImage = styled.div`
  width: 20px;
`;
const BellImg = styled.img`
  width: 100%;
  display: block;
`;
const ContentSection = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  padding: 4px;
`;
const LeftImage = styled.div`
  width: 18px;
  margin-right: 10px;
`;
const LeftImg = styled.img`
  width: 100%;
  display: block;
`;
const MiddleContent = styled.h5`
  margin-right: 10px;
  font-size: 11px;
  color: #d9d9d9;
`;
const RightContent = styled.h5`
  margin-right: 10px;
  font-size: 12px;
`;
const RightImage = styled.div`
  width: 20px;
`;
const RightImg = styled.img`
  width: 100%;
  display: block;
`;
const SubBottom = styled.div`
  padding: 0 20px;
`;
const SubTopHeading = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const SubTopContent = styled.ul`
  padding: 10px 50px 0 25px;
  margin-bottom: 10px;
`;
const SubTopImage = styled.div`
  background: #6b5fe5;
  border-radius: 5px;
  padding: 5px;
  width: 50px;
  margin-right: 15px;
`;
const SubTopImg = styled.img`
  width: 100%;
  display: block;
`;
const SubTopText2 = styled.h5`
  font-size: 10px;
  color: #7e73e9;
  font-weight: 600;
`;
const SubTopMiddleLeft = styled.div`
  position: absolute;
  left: 0;
  z-index: 1;
  border: 3px solid #6467ea;
  width: 100px;
  border-radius: 5px;
`;
const SubTopList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  &:nth-child(2) {
    ${SubTopImage} {
      background: #62d0e9;
    }
    ${SubTopText2} {
      color: #3fcd79;
    }
    ${SubTopMiddleLeft} {
      border: 3px solid #3ece79;
      width: 200px;
    }
  }
  &:last-child {
    margin-bottom: 0;
    ${SubTopImage} {
      background: #63b0e8;
    }
    ${SubTopText2} {
      color: #3fcd79;
    }
    ${SubTopMiddleLeft} {
      border: 3px solid #3ece79;
      width: 200px;
    }
  }
`;
const SubTopLeft = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
`;
const SubTopTextContainer = styled.div``;

const SubTopText1 = styled.h5`
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 5px;
`;

const SubTopMiddle = styled.div`
  width: 50%;
  position: relative;
`;

const SubTopMiddleRight = styled.div`
  position: absolute;
  left: 85px;
  border: 3px solid #d9e5fb;
  width: 100px;
  border-radius: 5px;
`;
const SubTopRight = styled.div`
  width: 30px;
`;
const SubTopRightImg = styled.img`
  width: 100%;
  display: block;
`;

const SectionMiddle = styled.div`
  padding: 20px;
`;
const MiddleHeading = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const StudentContainer = styled.ul`
  padding-left: 20px;
  padding-right: 50px;
  border-bottom: 1px solid #000;
`;
const ProfileSection = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CountSection = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StudentList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const ProfileImage = styled.div`
  width: 35px;
  align-items: flex-start;
`;
const ProfileImg = styled.img`
  display: block;
  width: 100%;
  border-radius: 50%;
`;
const StudentName = styled.h4`
  margin: 0 auto;
  font-weight: 600;
  font-size: 12px;
`;
const StudentCredits = styled.h5`
  font-size: 10px;
`;
const DateAdded = styled.h5`
  font-size: 10px;
  font-family: "quanticoregular";
`;

const SectionBottom = styled.div`
  padding: 10px 50px;
`;
const BottomListContainer = styled.ul``;
const BottomList = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
const BottomLeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  position: relative;
`;
const SmallImages = styled.ul`
  display: flex;
  align-items: center;
`;
const SmallImageContainer = styled.li`
  width: 25px;
  position: absolute;
  &:last-child {
    left: 60px;
  }
  &:nth-child(3) {
    left: 40px;
  }
  &:nth-child(2) {
    left: 20px;
  }
`;
const SmallImg = styled.img`
  display: block;
  width: 100%;
  border-radius: 50%;
`;
const RemainCount = styled.h5`
  position: absolute;
  left: 100px;
  top: 7px;
  font-size: 11px;
`;
const ButtonContainer = styled.button`
  padding: 7px 14px;
  background: #6467ea;
  color: #fff;
  font-size: 11px;
  border-radius: 5px;
`;