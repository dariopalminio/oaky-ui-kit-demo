
import { AccessType, AcordeonMenuList, ILayoutContext, LayoutContext, MenuItemType, MenuList } from "daro-ui-kit";
import styled from "styled-components";
import { RiFunctionFill, RiHome2Fill, RiShoppingCart2Fill } from "react-icons/ri";
import { useContext } from "react";

//Styled-components
const SideBarInner = styled.div`
        width: 100%;
        height: 100%;
        margin: 0px;
        background: #F9F9F9;
`;



/**
 * Patterns: Compound Components, Context Provider and Extensible Styles
 */
const SideBar: React.FC = () => {

  const { sidebarWidth,
    isSidebarOpen,
    toggleSidebar } = useContext(LayoutContext) as ILayoutContext;
    
  const LeftMenuData: MenuItemType[] = [
    {
      key: "11",
      title: ("menu.home"),
      path: "/",
      icon: <RiHome2Fill />,
      access: ["anonymous", "user", "admin"],
      submenu: null
    },
    {
      key: "12",
      title: ("menu.option2"),
      path: "/demo",
      icon: <RiFunctionFill />,
      access: ["anonymous", "user", "admin"],
      submenu: null
    },
    {
      key: "13",
      title: ("menu.option3"),
      path: "/",
      icon: <RiShoppingCart2Fill />,
      access: [AccessType.ANONYMOUS, AccessType.USER, AccessType.ADMIN],
      submenu: null
    },

  ];

  const handleClick = (item: MenuItemType) => {
    //Here do navigate to path
    alert(`Select item path: ${item.path}`);
  }

  //onClick: (item: MenuItemType) => void;

  const subMenu: MenuItemType[] = [
    {
      key: "11",
      title: ("My Sub Menu 1"),
      path: "/",
      icon: <RiHome2Fill />,
      access: ["anonymous", "user", "admin"],
      submenu: null
    },
    {
      key: "12",
      title: ("My Sub Menu option2"),
      path: "/demo",
      icon: <RiFunctionFill />,
      access: ["anonymous", "user", "admin"],
      submenu: null
    },
    {
      key: "13",
      title: ("My Sub Menu option3"),
      path: "/",
      icon: <RiShoppingCart2Fill />,
      access: [AccessType.ANONYMOUS, AccessType.USER, AccessType.ADMIN],
      submenu: null
    },

  ];

  const menu: MenuItemType[] = [
    {
      key: "111",
      title: ("My Menu A"),
      path: "/",
      icon: <RiHome2Fill />,
      access: ["anonymous", "user", "admin"],
      submenu: subMenu
    },
    {
        key: "14",
        title: ("My Menu Acordeon B"),
        path: "/",
        icon: <RiHome2Fill />,
        access: ["anonymous", "user", "admin"],
        submenu: subMenu
      },
      {
        key: "16",
        title: ("Acordeon"),
        path: "/",
        icon: <RiHome2Fill />,
        access: ["anonymous", "user", "admin"],
        submenu: subMenu
      }
    ]
  ;

  const handleClickAcordeon = (item: MenuItemType) => {
    //Here do navigate to path
    alert(`Select item path: ${item.title}`);
  }

  return (
    <div>
      <MenuList
        onClick={(item: MenuItemType) => handleClick(item)}
        id="MenuLeft"
        permission={"user"}
        menuList={LeftMenuData} 
        isOpenSidebar={isSidebarOpen}
        />

      <AcordeonMenuList isOpenSidebar={isSidebarOpen} 
      list={menu} 
      onClick={(item) => handleClickAcordeon(item)} />

    </div>
  );
};

export default SideBar;