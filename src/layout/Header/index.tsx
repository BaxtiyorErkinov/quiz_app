import { IUserResponse } from '@/models/IUser';
import {
  HeaderContainer,
  HeaderLogo,
  HeaderToggle,
  HeaderUserSection,
  Toggle,
  UserAvatar,
  UserName,
} from './HeaderComponents';

import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

interface IHeaderProps {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

const Header: React.FC<IHeaderProps> = ({ isOpen, setIsOpen }) => {
  const user = JSON.parse(
    localStorage.getItem('user') || '{}',
  ) as IUserResponse;

  console.log(isOpen, setIsOpen);

  return (
    <HeaderContainer>
      <HeaderToggle>
        <Toggle onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <GrClose /> : <AiOutlineMenu />}
        </Toggle>
        <HeaderLogo>QUIZ APP</HeaderLogo>
      </HeaderToggle>
      {Object.entries(user).length && (
        <HeaderUserSection>
          <UserName>{user.FullName}</UserName>
          <UserAvatar>{user.FullName.slice(0, 1)}</UserAvatar>
        </HeaderUserSection>
      )}
    </HeaderContainer>
  );
};

export default Header;
