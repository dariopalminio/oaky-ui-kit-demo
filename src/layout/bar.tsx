import { MenuIconButton, MenuItemType } from "oaky-ui-kit";
import { RiAccountCircleFill, RiShieldUserFill, RiUserAddFill } from "react-icons/ri";

const Bar: React.FC = () => {

    const SubMenu: MenuItemType[] = [
        {
            key: "11",
            title: ("menu.home"),
            path: "/menu.home",
            icon: <RiShieldUserFill />,
            access: ["anonymous", "user", "admin"],
            submenu: null
        },
        {
            key: "12",
            title: ("menu.option2"),
            path: "/menu.option2",
            icon: <RiShieldUserFill />,
            access: ["anonymous", "user", "admin"],
            submenu: null
        },
        {
            key: "13",
            title: ("menu.option3"),
            path: "/menu.option3",
            icon: <RiUserAddFill />,
            access: ["anonymous", "user", "admin"],
            submenu: null
        },

    ];

    const myMenu: MenuItemType[] = [
        {
            key: "15",
            title: ("menu.user"),
            path: "/menu.user",
            icon: <RiAccountCircleFill size={24} />,
            access: ["anonymous", "user", "admin"],
            submenu: SubMenu
        },
    ];

    const handleClick = (item: MenuItemType) => {
        //Here do navigate to path
        alert(`Select item path: ${item.path}`);
      }

    return (
        <div>
            <MenuIconButton
                onClick={(item: MenuItemType) => handleClick(item)}
                permission={"user"}
                menuList={myMenu} />
        </div>
    );
};

export default Bar;