import React from 'react';
import './css/Sidebar.css';
import Tooltip from './Tooltip';
import { useNavigate } from 'react-router-dom';
import SidebarItem from './SidebarItem';

const Sidebar = ({ account }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/explore');
  };

  return (
    <div className='sidebar'>
      <div className="sidebar-main">
      <div className="logo">BLOCKTALK</div>
      <SidebarItem icon="fas fa-home" text="Home" route="/" />
      <SidebarItem icon="fas fa-hashtag" text="Explore" route="/explore" />
      <SidebarItem icon="far fa-bell" text="Updates" route="/updates" />
      <SidebarItem icon="fas fa-users" text="Communities" route="/communities" />
      <SidebarItem icon="far fa-bookmark" text="Bookmarks" route="/bookmarks" />
      <SidebarItem icon="fa-solid fa-heart" text="My Likes" route="/likes" />
      <SidebarItem icon="fas fa-ellipsis-h" text="More" route="/more" />
      </div>
      <Tooltip account={account}/>
    </div>
  );
}

export default Sidebar;