import {Col, DropdownButton, Row, Dropdown, Button} from "react-bootstrap";
import './styles.css';
import {stateItems} from "../../constants/stateItems";
import Car from '../../assets/Truck - 1 1.png';
import arrow from '../../assets/chevron-down.png';
import {useState} from "react";

const Main = () => {
    const [stateActive, setStateActive] = useState(2)

    function getCircleClass(state) {
        if (state === stateActive) {
            return "circle-in-progress";
        } else if (state < stateActive) {
            return "circle-on";
        } else {
            return "circle-off";
        }
    }



    return (
        <div className="vh-100 bg-gray-200">
            <p className="text-black text-xl font-normal leading-5 tracking-tight flex justify-center">
                Start
            </p>

            <div className="steps">
                <Row className="flex justify-between">
                    {stateItems.map((item) => (
                        <Col className="flex flex-col items-center">
                            <div className={`circle circle-on rounded-full flex items-center ${getCircleClass(item.index)}`}></div>
                            <p className="mt-2 text-black text-sm font-medium">{item.title}</p>
                        </Col>
                    ))}
                </Row>
            </div>

            <Row className="mb-4 ">
                <Col  className="w-508 h-131 flex-shrink-0 rounded-lg bg-white shadow-md mr-2 ml-10">

                    <div className="pt-2 pr-2 pb-1 pl-2">
                        <p className="text-black text-lg font-medium leading-7 mb-3">Information</p>

                        <Row>
                            <Col>
                                <p className="text-black text-default font-medium leading-6 mb-2">Info Number:</p>

                            </Col>
                            <Col>
                                <p className={"text-right text-default"}>903049</p>

                            </Col>
                        </Row>
                        <Row>
                            <Col><p className="text-black text-default font-medium leading-6">Pick up Place:</p></Col>
                            <Col><p className={"text-right text-default"}>Sweden</p></Col>
                        </Row>
                    </div>
                </Col>

                <Col className="w-508 h-131 flex-shrink-0 rounded-lg bg-white shadow-md mr-10">
                    <Row className={"h-full"}>
                        <Col className={"flex items-center justify-center"}>
                            <div>
                                <p className="flex justify-center font-extrabold leading-tight truck-text-default mb-1">We
                                    are
                                    here</p>
                                <p className="flex justify-center tex2 font-normal leading-6 truck-text">Long time to
                                    go</p>
                            </div>
                        </Col>

                        <Col className="flex items-center justify-center">
                            <img src={Car} alt="car"/>
                        </Col>

                    </Row>
                </Col>
            </Row>

            <div className="w-64.75rem h-18.4375rem flex-shrink-0 rounded-lg bg-white shadow-md mr-10 ml-10">
                <div className="pt-2 pr-2 pb-1 pl-2">
                    <p className={"text-container"}>Перезамовте Багаж</p>

                    <p className="mb-0 text-decoration-none flex flex-col justify-center flex-shrink-0 text-gray-600 text-sm font-normal leading-6">
                        dropdown
                    </p>

                    <Dropdown
                        className="wd w-62.25rem p-2.5 items-center gap-2 rounded-md border border-gray-300 bg-gray-50 mb-4">
                        <Dropdown.Toggle
                            variant="success" id="dropdown-basic"
                            className="flex flex-col flex-1 text-gray-600 text-md font-normal w-full"
                        >
                            Select option
                            <img
                                src={arrow}
                                alt="arrow"
                                className="arrow"
                            />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu-right">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                    <p className="mb-0 text-decoration-none flex flex-col justify-center flex-shrink-0 text-gray-600 text-sm font-normal leading-6">
                        dropdown
                    </p>

                    <Dropdown
                        className="wd w-62.25rem p-2.5 items-center gap-2 rounded-md border border-gray-300 bg-gray-50 mb-4">
                        <Dropdown.Toggle
                            variant="success" id="dropdown-basic"
                            className="flex flex-col flex-1 text-gray-600 text-md font-normal w-full"
                        >
                            Select option
                            <img
                                src={arrow}
                                alt="arrow"
                                className="arrow"
                            />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu-right">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                    <div className="flex justify-end">
                        <Button className="text-white text-base px-4 py-2">
                            Done
                        </Button>
                    </div>

                </div>

            </div>


        </div>


    );
}

export default Main;
