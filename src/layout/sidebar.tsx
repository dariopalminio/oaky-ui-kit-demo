
import { MenuItemType, MenuList } from "daro-ui-kit";
import styled from "styled-components";
import { RiFunctionFill, RiHome2Fill, RiShoppingCart2Fill } from "react-icons/ri";

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
      access: ["anonymous", "user", "admin"],
      submenu: null
    },

  ];

  const handleClick = (item: MenuItemType) => {
    //Here do navigate to path
    alert(`Select item path: ${item.path}`);
  }

  //onClick: (item: MenuItemType) => void;

  return (
    <div>
      <MenuList
        onClick={(item: MenuItemType) => handleClick(item)}
        id="MenuLeft"
        permission={"user"}
        menuList={LeftMenuData} />

    </div>
  );
};

export default SideBar;