import { IUser } from '@/models/IUser';
import {
  HeaderContainer,
  HeaderLogo,
  HeaderUserSection,
  UserAvatar,
  UserName,
} from './HeaderComponents';

const Header = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}') as IUser;

  return (
    <HeaderContainer>
      <HeaderLogo>QUIZ APP</HeaderLogo>
      {Object.entries(user).length && (
        <HeaderUserSection>
          <UserName>{user.username}</UserName>
          <UserAvatar>{user.username.slice(0, 1)}</UserAvatar>
        </HeaderUserSection>
      )}
    </HeaderContainer>
  );
};

export default Header;
