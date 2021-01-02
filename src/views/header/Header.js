// import Image from 'next/image';
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiGit,
  SiJavascript,
  SiTypescript,
  SiWebpack,
  SiEslint,
  SiPrettier,
  SiReact,
  SiRedux,
  SiGatsby,
  SiNextDotJs,
  SiNodeDotJs,
  SiMongodb,
  SiElectron,
} from 'react-icons/si';
import { motion } from 'framer-motion';
//Styles
import { StyledHeader, Shade, Content, MotionH1 } from './Header.styled';

const duration = 0.5;
const delay = 0.3;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Shade />
        <Content>
          <motion.h1
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hello World
          </motion.h1>
          <motion.h1
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I'm Igor Dudek
          </motion.h1>
          <motion.p
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Fullstack Developer
          </motion.p>

          {/* <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiTypescript />
          <SiReact />
          <SiGatsby />
          <SiNextDotJs /> */}
        </Content>
      </StyledHeader>
    </>
  );
};

export default Header;
