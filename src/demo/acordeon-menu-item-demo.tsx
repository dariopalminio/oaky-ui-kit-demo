
import {AccessType, MenuItemType} from "oaky-ui-kit"
import {useAlertPopup} from "oaky-ui-kit";
import { RiFunctionFill, RiHome2Fill, RiShoppingCart2Fill } from "react-icons/ri";
import {AcordeonMenuList} from "oaky-ui-kit";


function AcordeonMenuItemDemo() {
    const { show, toggle } = useAlertPopup();

    const subSubMenu: MenuItemType[] = [
      {
        key: "111",
        title: ("Sub Sub Menu 1"),
        path: "/",
        icon: <RiHome2Fill />,
        access: ["anonymous", "user", "admin"],
        submenu: null
      },
      {
        key: "112",
        title: ("Sub Sub Menu 2"),
        path: "/demo",
        icon: <RiFunctionFill />,
        access: ["anonymous", "user", "admin"],
        submenu: null
      },
  
    ];

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
          submenu: subSubMenu
        },
    
      ];

      const menu: MenuItemType[] = [
        {
          key: "111",
          title: ("My Menu Acordeon A"),
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
            title: ("My Menu Acordeon C"),
            path: "/",
            icon: <RiHome2Fill />,
            access: ["anonymous", "user", "admin"],
            submenu: subMenu
          }
        ]
      ;

      const textStyle = {
          fontSize: "11px", 
      };

      const handleClick = (item: MenuItemType) => {
        //Here do navigate to path
        alert(`Select item path: ${item.title}`);
      }

    return (

        <div>
            <h2>AcordeonMenuList</h2>
            <p style={textStyle}>Componente de menú acordeón que permite mostrar y ocultar submenús. 
                Se puede usar para organizar elementos de menú en una estructura jerárquica.</p>

            <AcordeonMenuList list={menu} onClick={(item) => handleClick(item)} />
               
        </div>

    )
}

export default AcordeonMenuItemDemo