import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  DangerButton,
  SuccessButton,
} from './components/layout/buttons/Buttons.jsx';
import { AiFillApi } from 'react-icons/ai';
import NavbarLinks from '@/app/components/layout/navbar/NavbarLinks';

const HomePage = async () => {
  const test = [
    {
      title: 'racted',
      link: '/catalog',
    },
    {
      title: 'whitoria',
      link: '/',
    },
    {
      title: 'gratueberates',
      link: '/',
    },
    {
      title: 'chershoee',
      link: '/',
    },
    {
      title: 'autone',
      link: '/',
    },
    {
      title: 'blacclusly',
      link: '/contact',
    },
  ];
  return (
    <>
      <PrimaryButton icon={<AiFillApi size={20} />}>
        Lorem ipsum dor somet!
      </PrimaryButton>
      <SecondaryButton icon={<AiFillApi size={20} />}>Dupa</SecondaryButton>
      <TertiaryButton icon={<AiFillApi size={20} />}>Dupa</TertiaryButton>
      <DangerButton icon={<AiFillApi size={20} />}>Dupa</DangerButton>
      <SuccessButton icon={<AiFillApi size={20} />}>Dupa</SuccessButton>
    </>
  );
};

export default HomePage;
