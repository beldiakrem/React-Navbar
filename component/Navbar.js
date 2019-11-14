import React from 'react';
import Navmenu from './navmenu'

const Menu = [
    { menu: 'Home' },
    { menu: 'Services', Submenu: [{ submenu: 'for entrepreneur' }, { submenu: 'for student' }, { submenu: 'for hobbyists' }] },
    { menu: 'Contact' }
]

function Navbar() {

    return (
        <ul className="menu">
            {Menu.map(el => <li className="sub"><Navmenu menu={el.menu} />
                {el.Submenu && <ul className="sub-menu"> {el.Submenu.map(el => <li ><Navmenu menu={el.submenu} /></li>)}
                </ul>}

            </li>)}

        </ul>
    )
}

export default Navbar
