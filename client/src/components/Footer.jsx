import React from 'react';
import GithubLogo from '../assets/logos/github.png';
import LinkedinLogo from '../assets/logos/linkedin.png';

const Footer = () => {
  return (
    <footer className='py-4 px-4 sm:px-10 flex flex-col md:flex-row justify-between items-center bg-gray-200'>
      <div className='mb-2 md:mb-0 text-center md:text-left'>
        <p className='block mb-2 sm:mb-0 sm:inline-block sm:mr-5' title='Visit My Portfolio'>
          My Portfolio
        </p>
        <a href='mailto: dobromirvzhivkov@gmail.com' className='block'>
          Send me an email
        </a>
      </div>
      <div className='flex justify-center md:justify-end mt-3 md:mt-0'>
        <a href='https://github.com/DZhivkovv' target='_blank' rel='noopener noreferrer' className='mr-5' title='Check out my Github'>
          <img src={GithubLogo} alt='Check out my Github' className='w-8' />
        </a>
        <a href='https://www.linkedin.com/in/dobromir-zhivkov-933489280/' target='_blank' rel='noopener noreferrer' title='Check out my Linkedin'>
          <img src={LinkedinLogo} alt='Check out my Linkedin' className='w-8' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
