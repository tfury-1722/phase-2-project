import React from 'react';
import { SidebarContainer,
     SidebarMenu,
      SidebarLink, 
      SidebarRoute,
      SideBtnWrap, 
      Icon, 
      CloseIcon } from './SideBarElements';


const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarMenu>
            <SidebarLink to="/">Shop Men</SidebarLink>
            <SidebarLink to="">Shop Women</SidebarLink>
            <SidebarLink to="">Shop Kids</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to="/">See More</SidebarRoute>
        </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar