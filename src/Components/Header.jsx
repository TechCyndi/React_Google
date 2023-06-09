import Avatar from './Avatar';
import MenuItem from './MenuItem';
import '../styles/header.css';
import AppsIcon from './AppsIcon';


const Header = () => {
  return(
    <div className='app-header'>
      <div className='app-header-menu'>
       <MenuItem title={'Gmail'} href={'https://gmail.com'}/>
       <MenuItem title={'Images'} href={'https://images.google.com'} />
       </div>
        <AppsIcon/>
       <Avatar/>
       </div>
  );
};

export default Header;