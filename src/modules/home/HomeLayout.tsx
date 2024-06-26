import { NavBarActions, StyledButton } from '../builder/nav-bar/atoms';
import { motion } from 'framer-motion';
import { FaFileCsv } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { Button } from '@mui/material';
import FeatureSection from './components/Feature';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const HomeLayout = () => {
  const animationEffectsFirstLoad = {
    scale: [0.9, 1],
    opacity: [0, 1],
  };
  const transtionEffects = {
    type: 'spring',
    stiffness: 400,
    damping: 17,
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} className="scroll-smooth">
      <Navbar>
        <Link href="/">
          {/* <Image src={'/icons/resume-icon.png'} alt="logo" height="36" width="50px" /> */}
          <div className="logo-pic"></div>
        </Link>
        <div className="">
          {/* <NavBarActions>
            <Link href="/builder" passHref={true}>
              <StyledButton variant="text">ResumeX</StyledButton>
            </Link>
          </NavBarActions> */}
          <NavBarActions>
            <Link href="#contribute" passHref={true}>
              <StyledButton variant="text" className="max-md:hidden">
                Contribute
              </StyledButton>
            </Link>
            <Link href={'https://github.com/zabloncharles/'} passHref={true}>
              <StyledButton variant="text">About us</StyledButton>
            </Link>
            <a
              href={'https://github.com/zabloncahrles/careerwiz'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="h-6 w-6" fill="white" />
            </a>
          </NavBarActions>
        </div>
      </Navbar>

      <TopContent>
        <Linear></Linear>
        <VerticalLines>
          <div></div>
          <div></div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </VerticalLines>
        <HeaderPic></HeaderPic>
        <HeaderDesc>
          <h3 className="header-desc1 text-xl md:text-2xl mb-2 text-resume-400">
            SIMPLEST WAY TO BUILD A
          </h3>
          <h1 className="text-5xl mb-12 text-resume-800">Professional Resume</h1>

          <div className="flex mb-10">
            <p className="header-desc2 text-lg ml-3 text-resume-800">
              &ldquo;The secret to getting ahead is getting started&rdquo;
              <br />
              —Mark Twain
            </p>
          </div>
          <Link href="/builder" passHref={true}>
            <Button variant="contained" className="button mb-2">
              BUILD YOUR RESUME
            </Button>
          </Link>
          <p className="header-desc2 xl:invisible text-resume-800">Desktop screen recommended</p>
        </HeaderDesc>

        <FlippedText>
          <div></div>
          <p>Scroll Down</p>
        </FlippedText>
      </TopContent>

      <motion.div
        className="mx-6 xl:mx-60 my-10 w-75"
        initial={{ opacity: 0 }}
        animate={animationEffectsFirstLoad}
        transition={transtionEffects}
      >
        <FirstCard>
          <div className="top-image"></div>
          <ProfileText>
            <div>more interviews</div>
            <div>more job offers</div>
            <div>resume templates</div>
          </ProfileText>
          <Secters>
            <div>
              <div className="left-top">Create Your Profile</div>
              <div className="left-bottom">Get Hired</div>
            </div>
            <div>
              <div className="right-top">
                Easily create the perfect resume for any job using our best-in-class resume builder
                platform.
              </div>
              <div className="right-bottom">
                <FaFileCsv />
              </div>
            </div>
          </Secters>
        </FirstCard>

        <FeatureSection />
      </motion.div>

      {/* THIRD SECTION */}
      <StyledFooter>
        <p>&copy; 2024 CvWizard. All rights reserved.</p>
      </StyledFooter>
    </motion.div>
  );
};

export default HomeLayout;

const Navbar = styled.div`
  // Your styles here

  backdrop-filter: blur(44px);
  background-color: #00000000;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 70px;
  left: 0;
  right: 0;
  padding: 20px 10px;
  z-index: 99;
  position: fixed;

  .logo-pic {
    background-image: url('/icons/resume-icon.png');
    width: 190px;
    height: 40px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 1000px) {
    color: white;
    font-size: 25px;
    border: 1px solid rgb(24, 24, 25);
    margin: 0;
    background-color: black;
    padding: 20px 20px;
    left: 0;
    right: 0;
    overflow: hidden;
    -webkit-box-align: center;
    align-items: center;
  }
`;

const TopContent = styled.div`
  // Your styles here

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  /* for iphone */
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: 70vh;
  }
`;
const Linear = styled.div`
  // Your styles here
  position: absolute;
  width: 100%;
  bottom: 0;
  background: linear-gradient(1deg, #000000, #000000, transparent);
  height: 50%;
  /* for iphone */
  @media screen and (max-width: 1000px) {
    position: absolute;
    width: 100%;
    top: 0;
    background: linear-gradient(177deg, #000000, #000000, transparent, black, black);
    height: 670px;
  }
`;

const HeaderPic = styled.div`
  // Your styles here
  background-color: red;
  background: url('https://cdn.dribbble.com/userupload/13091011/file/original-ad5b9b255d5eb3b70e24efc56d3e31a4.jpg?resize=2400x1969');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  /* for iphone */
  @media screen and (max-width: 1000px) {
    height: 70vh;
  }
`;
const HeaderDesc = styled.div`
  // Your styles here
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  color: white;

  .header-desc1 {
    background: linear-gradient(to right, rgb(255, 253, 253), rgb(223, 70, 0)) text;
    -webkit-text-fill-color: transparent;
    font-family: 'Spline Sans Mono', sans-serif;

    @media screen and (max-width: 1000px) {
      font-size: 16px;
    }
  }
  .header-desc2 {
    color: white;
    font-family: 'Spline Sans Mono', sans-serif;
    text-align: end;
    /* for iphone */
    @media screen and (max-width: 1000px) {
      text-align: center;
    }
  }
  .button {
    background-color: black;
  }
  > :nth-child(2) {
    font-family: 'cisnero', sans-serif;
    color: white;
    font-size: 92px;

    /* for iphone */
    @media screen and (max-width: 1000px) {
      font-size: 30px;
    }
  }
`;
const VerticalLines = styled.div`
  // Your styles here
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  gap: 20px;
  display: flex;
  justify-content: space-around;
  > div {
    width: 1px;
    height: 100%;
    background: linear-gradient(to top, transparent, #2f2e2e, transparent);
  }
`;
const FlippedText = styled.div`
  // Your styles here
  display: flex;
  gap: 10px;
  transform: rotate(90deg);
  position: absolute;
  bottom: 62px;
  left: 0;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  color: white;

  @media screen and (max-width: 1000px) {
    bottom: 199px;
    left: 30px;
    right: 30px;
    z-index: 3;
    filter: invert(1);
  }
  > :nth-child(1) {
    height: 1px;
    width: 50px;
    background-color: white;
  }
`;
const FirstCard = styled.div`
  // Your styles here
  width: 100%;
  flex: 1;

  padding: 10px;
  margin-bottom: 20px;
  .top-image {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('https://cdn.dribbble.com/users/14744021/screenshots/20460304/media/3f419e63401363e71ec7f318b7fc9504.png?resize=1600x1200&vertical=center');
    height: 250px;
    width: 100%;
    border-radius: 12px;

    @media screen and (max-width: 1000px) {
      margin-top: -150px;
      z-index: 2;
      position: relative;
    }
  }
`;
const Secters = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 20px;
  gap: 20px;
  color: white;

  /* for iphone */
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
    border-radius: 15px;
    gap: 0px;
    border: 1px solid #252222;
  }

  .left-top {
    background-color: black;
    padding: 5px 14px;
    width: fit-content;
    border-radius: 33px;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }
  .left-section {
    color: white;
    font-family: cisnero;
  }
  .left-bottom {
    font-size: 60px;
    padding-left: 10px;
    color: white;
    font-family: 'cisnero';
    background: linear-gradient(to right, rgb(255, 253, 253), rgb(255 15 54)) text;
    -webkit-text-fill-color: transparent;
  }

  > :nth-child(2) {
    line-height: 1.5;
    padding: 10px;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: end;
    justify-content: end;
    align-items: end;
    @media screen and (max-width: 1000px) {
      text-align: center;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: -10px;
    }
  }
`;
const ProfileText = styled.div`
  // Your styles here
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  font-size: 20px;
  padding: 20px;
  @media screen and (max-width: 1000px) {
    font-size: 12px;
    text-align: center;
    justify-content: space-around;
  }
`;
// Define the styles for the footer using Styled Components
const StyledFooter = styled.footer`
  background-color: #000000;
  border-top: #141414;
  color: #fff;
  padding: 20px;
  text-align: center;
`;
