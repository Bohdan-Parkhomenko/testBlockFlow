import {Col, Row} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import {menuItems, Settings} from "../../constants/menuItems";
import './styles.css'
import {useState} from "react";

const Layout = () => {
    const [menuActive, setMenuActive] = useState(false)

    const handleBtnMenuActive = (e) => {
        e.stopPropagation();
        setMenuActive(!menuActive)
    }

    return (
        <Row>
            <div
                className="burger-btn"
                onClick={handleBtnMenuActive}
            ></div>
            <Col xs={4} md={3} sm={3} xl={2} className={menuActive ? "" : "layout-off"}>

                <div className={"mt-8"}>
                    {menuItems.map((menuItem) => (
                        <Link to={menuItem.href}>
                            <div className={"flex items-center ml-4 mt-2 mr-4 mb-2 menu-items"}>
                                <img src={menuItem.image} alt={menuItem.title}/>
                                <p
                                    key={menuItem.href}
                                    className="text-black text-base font-semibold leading-6 ml-4 "

                                >
                                    {menuItem.title}
                                </p>

                            </div>


                        </Link>
                    ))}
                </div>
                <Link to={Settings.href} className="absolute bottom-0 mb-16 settings">
                    <div className={"flex items-center ml-4 mt-2 mr-4 mb-2"}>
                        <img src={Settings.image} alt={Settings.title}/>
                        <p
                            key={Settings.href}
                            className="text-black text-base font-semibold leading-6 ml-4"

                        >
                            Налаштування
                        </p>

                    </div>
                </Link>
            </Col>

            <Col xs={12} md={9} sm={9} xl={10}>
                <Outlet/>
            </Col>
        </Row>
    )
}

export default Layout;