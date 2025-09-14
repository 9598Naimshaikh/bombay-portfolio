import React, { useContext } from 'react'
import HeroSection from '../components/HeroSection'
import Projects from '../components/Projects'
import ImageGenerator from '../components/ImageGenerator'
import ContactForm from '../components/ContactForm'
import { DataContext } from '../context/UserContext'
import FooterPage from './FooterPage'


const HomePageContent = () => {
    const data = useContext(DataContext);
    console.log(data);
  return (
    <>
      <HeroSection username={data} />
      <Projects />
      <ImageGenerator user={data} />
      <ContactForm />
      <FooterPage />
    </>
  );
};
export default HomePageContent;
