import React from "react";
import styled from "styled-components";

function Left() {
  return (
    <>
      <Top>
        <Schedule>
          <ScheduleTitle>Schedule</ScheduleTitle>
          <ScheduleDescription>
            <ScheduleContent>
              Hey samanta,Let's Get Ready For Next Class
            </ScheduleContent>
            <ScheduleImage>
              <ScheduleImg
                alt="image"
                src={require("../../assets/Property 1=book.svg").default}
              />
            </ScheduleImage>
          </ScheduleDescription>
        </Schedule>
        <Arrow>
          <ArrowImage>
            <ArrowImg
              alt="image"
              src={require("../../assets/Property 1=left black.svg").default}
            />
          </ArrowImage>
        </Arrow>
      </Top>
      <Bottom>
        <Courses>
          <List>
            <Item>Remaining</Item>
            <Item>Ongoing</Item>
            <Item>Completed</Item>
          </List>
          <ListCourses>
            <CourseItems>
              <CoursesImage className="one">
                <CoursesImg
                  src={require("../../assets/Frame 3466853.png")}
                  alt="image"
                />
              </CoursesImage>
              <CourseName>UI/UX design</CourseName>
              <CourseLength>03 Classes</CourseLength>
              <CourseProfile>
                <CourseProfileImage>
                  <CourseProfileList>
                    <CourseProfileImg
                      alt="profile"
                      src={require("../../assets/Frame 3466862.png")}
                    />
                  </CourseProfileList>
                  <CourseProfileList>
                    <CourseProfileImg
                      alt="profile"
                      src={require("../../assets/Frame 3466863.png")}
                    />
                  </CourseProfileList>
                  <CourseProfileList>
                    <CourseProfileImg
                      alt="profile"
                      src={require("../../assets/Frame 3466865.png")}
                    />
                  </CourseProfileList>
                </CourseProfileImage>
                <CourseButton className="one">
                  <CourseButtonImg
                    src={require("../../assets/play.svg").default}
                    alt="play"
                  />
                </CourseButton>
              </CourseProfile>
            </CourseItems>
            <CourseItems>
              <CoursesImage className="two">
                <CoursesImg
                  src={require("../../assets/Frame 3466854.png")}
                  alt="image"
                />
              </CoursesImage>
              <CourseName>UI/UX design</CourseName>
              <CourseLength>03 Classes</CourseLength>
              <CourseProfile>
                <CourseProfileImage>
                  <CourseProfileList>
                    <CourseProfileImg
                      alt="profile"
                      src={require("../../assets/Frame 3466862.png")}
                    />
                  </CourseProfileList>
                  <CourseProfileList>
                    <CourseProfileImg
                      alt="profile"
                      src={require("../../assets/Frame 3466863.png")}
                    />
                  </CourseProfileList>
                  <CourseProfileList>
                    <CourseProfileImg
                      alt="profile"
                      src={require("../../assets/Frame 3466865.png")}
                    />
                  </CourseProfileList>
                </CourseProfileImage>
                <CourseButton className="two">
                  <CourseButtonImg
                    src={require("../../assets/play.svg").default}
                    alt="play"
                  />
                </CourseButton>
              </CourseProfile>
            </CourseItems>
            <CourseItems>
              <CoursesImage className="three">
                <CoursesImg
                  src={require("../../assets/Frame 3466855.png")}
                  alt="image"
                />
              </CoursesImage>
              <CourseName>UI/UX design</CourseName>
              <CourseLength>03 Classes</CourseLength>
              <CourseProfile>
                <CourseProfileImage>
                  <CourseProfileList>
                    <CourseProfileImg
                      alt="profile"
                      src={require("../../assets/Frame 3466862.png")}
                    />
                  </CourseProfileList>
                  <CourseProfileList>
                    <CourseProfileImg
                      alt="profile"
                      src={require("../../assets/Frame 3466863.png")}
                    />
                  </CourseProfileList>
                  <CourseProfileList>
                    <CourseProfileImg
                      alt="profile"
                      src={require("../../assets/Frame 3466865.png")}
                    />
                  </CourseProfileList>
                </CourseProfileImage>
                <CourseButton className="three">
                  <CourseButtonImg
                    src={require("../../assets/play.svg").default}
                    alt="play"
                  />
                </CourseButton>
              </CourseProfile>
            </CourseItems>
          </ListCourses>
        </Courses>
        <Time>
          <Timeid>
            <Span>
              <b>Monday</b> 31 Aug
            </Span>
            <Arrows>
              <Arrow1
                src={require("../../assets/Property 1=up black.svg").default}
                alt="arrow"
              />
              <Arrow2
                src={require("../../assets/Property 1=down black.svg").default}
                alt="arrow"
              />
            </Arrows>
          </Timeid>
          <TimeSchedule>
            <BottomLeft>
              <TimeList>
                <TimeItem>
                  <SheduledTime>08:00</SheduledTime>
                  <SLine></SLine>
                  <BLine></BLine>
                  <SLine></SLine>
                </TimeItem>
                <TimeItem>
                  <SheduledTime>08:00</SheduledTime>
                  <SLine></SLine>
                  <BLine></BLine>
                  <SLine></SLine>
                </TimeItem>
                <TimeItem>
                  <SheduledTime>08:00</SheduledTime>
                  <SLine></SLine>
                  <BLine></BLine>
                  <SLine></SLine>
                </TimeItem>
                <TimeItem>
                  <SheduledTime>08:00</SheduledTime>
                  <SLine></SLine>
                  <BLine></BLine>
                  <SLine></SLine>
                </TimeItem>
                <TimeItem>
                  <SheduledTime>08:00</SheduledTime>
                  <SLine></SLine>
                  <BLine></BLine>
                  <SLine></SLine>
                </TimeItem>
                <TimeItem>
                  <SheduledTime>08:00</SheduledTime>
                  <SLine></SLine>
                  <BLine></BLine>
                  <SLine></SLine>
                </TimeItem>
              </TimeList>
            </BottomLeft>
            <BottomRight>
              <Business>
                <Line></Line>
                <BusinessImage>
                  <BusinessImg
                    alt="image"
                    src={require("../../assets/Frame 3466856.png")}
                  />
                </BusinessImage>
                <BusinessDetails>
                  <Businessshedule>08:00 - 09:00</Businessshedule>
                  <BusinessTitle>Business</BusinessTitle>
                  <BusinessDescription>
                    Bring A buisness Mind To Design, Transform Your Career
                  </BusinessDescription>
                </BusinessDetails>
                <NextBusiness>
                  <Count>75</Count>
                  <NextArrow>
                    <NextArrowImg
                      alt="arrow"
                      src={
                        require("../../assets/Property 1=right b.svg").default
                      }
                    />
                  </NextArrow>
                </NextBusiness>
              </Business>
              <BusinessTime>
                <BusinessTimeLeft>
                  <Image
                    alt="mage"
                    src={require("../../assets/Property 1=bell b.svg").default}
                  />
                  <BusinessTimeLeftTime>08:00-09:30</BusinessTimeLeftTime>
                </BusinessTimeLeft>
                <BusinessTimeMiddle>Project Team Meeting</BusinessTimeMiddle>
                <BusinessTimeRight>
                  <BusinessTimeRightImg
                    src={require("../../assets/Property 1=block.svg").default}
                    alt="image"
                  />
                </BusinessTimeRight>
              </BusinessTime>
              <Design>
                <WLine></WLine>
                <DesignImage>
                  <DesignImg
                    alt="image"
                    src={require("../../assets/Frame 3466857.png")}
                  />
                </DesignImage>
                <DesignDetails>
                  <DesignTime>08:00 - 09:30</DesignTime>
                  <DesignTitle>
                    The Design Presentation Process For Newbies
                  </DesignTitle>
                  <DesignDescription>
                    Bring A buisness Mind To Design, Transform Your Career
                  </DesignDescription>
                </DesignDetails>
                <NextDesign>
                  <NextCount>65</NextCount>
                  <DesignArrow
                    alt=""
                    src={require("../../assets/Property 1=right w.svg").default}
                  />
                </NextDesign>
              </Design>
              <Design>
                <WLine></WLine>
                <DesignImage>
                  <DesignImg
                    alt="image"
                    src={require("../../assets/Frame 3466857.png")}
                  />
                </DesignImage>
                <DesignDetails>
                  <DesignTime>08:00 - 09:30</DesignTime>
                  <DesignTitle>
                    The Design Presentation Process For Newbies
                  </DesignTitle>
                  <DesignDescription>
                    Bring A buisness Mind To Design, Transform Your Career
                  </DesignDescription>
                </DesignDetails>
                <NextDesign>
                  <NextCount>65</NextCount>
                  <DesignArrow
                    alt=""
                    src={require("../../assets/Property 1=right w.svg").default}
                  />
                </NextDesign>
              </Design>
              <Design>
                <WLine></WLine>
                <DesignImage>
                  <DesignImg
                    alt="image"
                    src={require("../../assets/Frame 3466857.png")}
                  />
                </DesignImage>
                <DesignDetails>
                  <DesignTime>08:00 - 09:30</DesignTime>
                  <DesignTitle>
                    The Design Presentation Process For Newbies
                  </DesignTitle>
                  <DesignDescription>
                    Bring A buisness Mind To Design, Transform Your Career
                  </DesignDescription>
                </DesignDetails>
                <NextDesign>
                  <NextCount>65</NextCount>
                  <DesignArrow
                    alt=""
                    src={require("../../assets/Property 1=right w.svg").default}
                  />
                </NextDesign>
              </Design>
              <Design>
                <WLine></WLine>
                <DesignImage>
                  <DesignImg
                    alt="image"
                    src={require("../../assets/Frame 3466857.png")}
                  />
                </DesignImage>
                <DesignDetails>
                  <DesignTime>08:00 - 09:30</DesignTime>
                  <DesignTitle>
                    The Design Presentation Process For Newbies
                  </DesignTitle>
                  <DesignDescription>
                    Bring A buisness Mind To Design, Transform Your Career
                  </DesignDescription>
                </DesignDetails>
                <NextDesign>
                  <NextCount>65</NextCount>
                  <DesignArrow
                    alt=""
                    src={require("../../assets/Property 1=right w.svg").default}
                  />
                </NextDesign>
              </Design>
            </BottomRight>
          </TimeSchedule>
        </Time>
      </Bottom>
    </>
  );
}

export default Left;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #d8d3e15c;
  margin-bottom: 8px;
  padding: 25px;
`;
const Schedule = styled.div``;
const ScheduleTitle = styled.h2`
  margin-bottom: 10px;
`;
const ScheduleDescription = styled.div`
  display: flex;
  font-family: "dm_sansbold";
`;
const ScheduleContent = styled.p`
  font-size: 14px;
  font-family: "dm_sansmedium";
`;
const ScheduleImage = styled.div`
  margin-left: 8px;
`;
const ScheduleImg = styled.img`
  display: block;
  width: 100%;
`;
const Arrow = styled.div`
  border: 1px solid #b3adad;
  border-radius: 5px;
`;
const ArrowImage = styled.div``;
const ArrowImg = styled.img`
  display: block;
  width: 100%;
`;

const Bottom = styled.div`
  background: #d8d3e15c;
  padding: 20px;
`;
const Courses = styled.div``;
const List = styled.ul`
  display: flex;
  margin-bottom: 10px;
`;
const Item = styled.li`
  font-size: 14px;
  font-family: "dm_sansbold";
  &:nth-child(2) {
    margin: 0 20px;
  }
`;
const ListCourses = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const CourseItems = styled.li`
  background: #6e60e7;
  padding: 10px;
  width: 30%;
  border-radius: 10px;
  &:nth-child(2) {
    background: #62d0e9;
  }
  &:nth-child(3) {
    background: #63b0e8;
  }
`;
const CoursesImage = styled.div`
  border-radius: 10px;
  width: 100%;
  padding: 15px 0;
`;
const CoursesImg = styled.img`
  display: block;
  width: 40px;
  margin: 0 auto;
`;
const CourseName = styled.span`
  display: block;
  margin: 5px 0;
  color: #fff;
`;
const CourseLength = styled.small`
  display: block;
  color: #76758a;
`;
const CourseProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;
const CourseProfileImage = styled.ul`
  display: flex;
`;
const CourseProfileList = styled.li`
  width: 20px;
`;
const CourseProfileImg = styled.img`
  display: block;
  width: 100%;
  border-radius: 50%;
`;
const CourseButton = styled.div`
  border-radius: 5px;
  padding: 12px;
`;
const CourseButtonImg = styled.img`
  display: block;
  width: 12px;
`;

const Time = styled.div`
  margin-top: 20px;
`;
const Timeid = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const Span = styled.span`
  display: block;
  margin-right: 10px;
  font-size: 12px;
  font-family: "quanticobold";
`;
const Arrows = styled.div``;
const Arrow1 = styled.img`
  display: block;
  width: 80%;
`;
const Arrow2 = styled.img`
  display: block;
  width: 80%;
`;
const TimeSchedule = styled.div`
  display: flex;
`;
const BottomLeft = styled.div`
  width: 18%;
`;
const TimeList = styled.ul`
  padding-left: 30px;
`;
const TimeItem = styled.li``;
const SheduledTime = styled.span`
  font-family: "quanticoregular";
  font-size: 12px;
  color: #76758a;
  display: block;
  margin: 25px 0;
`;
const SLine = styled.span`
  border-bottom: 1px solid #76758a;
  width: 12%;
  display: block;
`;
const BLine = styled.span`
  border-bottom: 1px solid #76758a;
  width: 25%;
  display: block;
  margin: 25px 0;
`;

const BottomRight = styled.div`
  width: 82%;
`;
const Business = styled.div`
  display: flex;
  padding: 12px;
  align-items: center;
  background: #e9e5ff;
  border-radius: 10px;
  color: #4c51e4;
`;
const Line = styled.span`
  display: block;
  border-left: 4px solid #6368ea;
  border-radius: 20px;
  height: 90px;
  margin-right: 10px;
`;
const BusinessImage = styled.div`
  width: 20%;
  margin-right: 10px;
`;
const BusinessImg = styled.img`
  display: block;
  width: 100%;
`;
const BusinessDetails = styled.div``;
const Businessshedule = styled.span`
  display: block;
  font-family: "quanticoregular";
  font-size: 11px;
  margin: 10px 0;
`;
const BusinessTitle = styled.h4`
  font-size: 15px;
  font-family: "dm_sansbold";
  margin-bottom: 10px;
`;
const BusinessDescription = styled.p`
  color: #4c51e4;
  font-size: 14px;
  font-family: "dm_sansregular";
  width: 80%;
`;
const NextBusiness = styled.div``;
const Count = styled.div`
  background: #fff;
  color: #000;
  font-family: "quanticoregular";
  font-size: 12px;
  padding: 10px;
  border-radius: 50%;
  margin-bottom: 25px;
`;
const NextArrow = styled.div`
  width: 60%;
`;
const NextArrowImg = styled.img`
  display: block;
  width: 100%;
`;

const BusinessTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #edf6ff;
  border-radius: 10px;
  margin: 15px 0;
  padding: 10px;
`;
const BusinessTimeLeft = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  display: block;
  width: 14%;
`;
const BusinessTimeLeftTime = styled.span`
  display: block;
  margin-left: 10px;
  font-size: 11px;
  font-family: "quanticoregular";
  color: #4c51e4;
`;
const BusinessTimeMiddle = styled.p`
  color: #4c51e4;
  font-size: 12px;
`;
const BusinessTimeRight = styled.div``;
const BusinessTimeRightImg = styled.img`
  display: block;
  width: 100%;
`;

const Design = styled.div`
  background: #6368ea;
  display: flex;
  padding: 12px;
  align-items: center;
  border-radius: 10px;
  color: #fff;
  margin-bottom: 20px;
`;
const WLine = styled.span`
  display: block;
  border-left: 4px solid #fff;
  height: 90px;
  margin-right: 15px;
  border-radius: 20px;
`;
const DesignImage = styled.div`
  width: 14%;
  margin-right: 25px;
`;
const DesignImg = styled.img`
  display: block;
  width: 100%;
`;
const DesignDetails = styled.div``;
const DesignTime = styled.span`
  display: block;
  font-family: "quanticoregular";
  font-size: 11px;
  margin: 10px 0;
`;
const DesignTitle = styled.h4`
  font-size: 15px;
  font-family: "dm_sansbold";
  margin-bottom: 10px;
`;
const DesignDescription = styled.p`
  color: #fff;
  font-size: 14px;
  font-family: "dm_sansregular";
  width: 80%;
`;
const NextDesign = styled.div`
  margin-left: 20px;
`;
const NextCount = styled.small`
  display: block;
  background: #fff;
  color: #000;
  font-family: "quanticoregular";
  font-size: 12px;
  padding: 10px;
  border-radius: 50%;
  margin-bottom: 25px;
`;
const DesignArrow = styled.img`
  display: block;
  width: 60%;
`;
