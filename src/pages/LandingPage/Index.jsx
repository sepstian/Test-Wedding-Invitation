import React, { useEffect, useRef } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Button, keyframes } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'; // Icon hamburger
import { IoMdMusicalNote } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Cover from '../Cover/Cover';
import Navbar from '../../components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { open_true } from '../../redux/slice/openSlice';
import { navbar_false, navbar_true } from '../../redux/slice/navbarSlice';
import WelcomingSection from '../WelcomingSection/WelcomingSection';
import MusicPlay from '../../assets/music/Music1.mp3'
import { setMusic } from '../../redux/slice/musicSlice';

const Index = () => {
  const dispatch = useDispatch()
  const audio = useRef(new Audio(MusicPlay));
  const openToggle = useSelector((state) => {
    return state.openSlice.open;
  });
  const navbarToggle = useSelector((state) => {
    return state.navbarSlice.navbar;
  });
  const musicToggle = useSelector((state) => {
    return state.musicSlice.music;
  });

  const handleClickSticky = () => {
    if (navbarToggle) {
      dispatch(navbar_false());
    } else {
      dispatch(navbar_true());
    }
  };
  
  useEffect(() => {
    audio.current.loop = true;

    if (openToggle) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
    if (musicToggle) {
      audio.current.muted = true;
      audio.current.pause(); 
    } else {
      audio.current.muted = false;
      if (openToggle) {
        audio.current.play();
      }
    }
    return () => {
      audio.current.pause();
    };
  }, [musicToggle, openToggle]);

  const slideOutAnimation = keyframes`
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-100%);
      opacity: 0;
    }
  `;

  const slideInAnimation = keyframes`
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `;

  return (
    <>
    <div style={{ width:"auto", height:"100vh", display:"flex", flexDirection:"column"}}>
        <Sidebar>
          {!openToggle &&(
            <Cover animation={openToggle === true ? `${slideOutAnimation} 2s ease forwards` : undefined} onClick={() => dispatch(open_true())}/>
          )}
          {openToggle && (
            <WelcomingSection animation={`${slideInAnimation} 2s ease forwards`} />
          )}  
          <Navbar isOpen={navbarToggle}/>
        </Sidebar>
        <div style={{ display:openToggle===false?"none":"flex" }} className='box_sticky'>
          <Button 
            className='circle_button'
            style={{ borderRadius:"50%", backgroundColor: '#997a5e', color: '#fff' }}
            size="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={handleClickSticky}
          >
            {navbarToggle === false ? (<HamburgerIcon />):(<IoMdClose/>)}
          </Button>
          <Button 
            className='circle_button'
            style={{ borderRadius:"50%", backgroundColor: '#997a5e', color: '#fff' }}
            size="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={() => dispatch(setMusic(!musicToggle))}
          >
            {musicToggle === false? (<IoMdMusicalNote />) : (
              <div style={{ position: 'relative', display: 'inline-block' }}>
              <IoMdMusicalNote />
              <IoMdClose style={{ position: 'absolute', top: '0', left: '0', color: 'white' }} />
            </div>
            )}
          </Button>
        </div>
    </div>
    </>
  )
}

export default Index
