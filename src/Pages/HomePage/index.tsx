import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import videoHomepage from "../../assets/video.mp4";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import Icon from '../../components/Homepage/icon';
import Datepicker from "react-tailwindcss-datepicker";
import AirportInput from "../../components/Homepage/AirportInput";

const links = [
    { name: 'Đặt vé', href: '/' },
    { name: 'Gửi hành lý', href: '' },
];

const MIN_DATE = new Date();
MIN_DATE.setDate(MIN_DATE.getDate());

const MAX_DATE = new Date();
MAX_DATE.setDate(MAX_DATE.getDate() + 4);

export default function HomePage() {
    const [departure, setDeparture] = React.useState<string>("");
    const [destination, setDestination] = React.useState<string>("");
    const [showDepartureDropdown, setShowDepartureDropdown] = React.useState<boolean>(false);
    const [showDestinationDropdown, setShowDestinationDropdown] = React.useState<boolean>(false);
    const [searchDeparture, setSearchDeparture] = React.useState<string>("HCM (SGN)");
    const [searchDestination, setSearchDestination] = React.useState<string>("Hà Nội (HAN)");
    const [errorMessagedep, setErrorMessagedep] = React.useState<string>("");
    const [errorMessagedis, setErrorMessagedis] = React.useState<string>("");
    const [errorMessagedate, setErrorMessagedate] = React.useState<string>("");
    const [value, setValue] = React.useState({ startDate: null });

    const handleAirportSelect = (selectedAirport: string, type: "departure" | "destination") => {
        if (type === "departure") {
            setDeparture(selectedAirport);
            setSearchDeparture(selectedAirport);
            setShowDepartureDropdown(false); // Ẩn dropdown sau khi chọn
        } else if (type === "destination") {
            setDestination(selectedAirport);
            setSearchDestination(selectedAirport);
            setShowDestinationDropdown(false); // Ẩn dropdown sau khi chọn
        }
    };

    const checkInputs = (): boolean => {
        if (!searchDeparture) {
            setErrorMessagedep("Vui lòng chọn điểm cất cánh.");
            return false;
        }
        if (!searchDestination) {
            setErrorMessagedis("Vui lòng chọn điểm hạ cánh.");
            return false;
        }
        if (searchDeparture === searchDestination) {
            setErrorMessagedep("Departure và Destination không thể giống nhau!");
            return false;
        }
        if (value) {
            setErrorMessagedate("Vui lòng chọn ngày đi.");
        }
        setErrorMessagedep("");
        setErrorMessagedis("");
        setErrorMessagedate("");
        return true;
    };

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>, type: "departure" | "destination") => {
        const value = event.currentTarget.value;

        if (type === "departure") {
            setSearchDeparture(value);
            setShowDepartureDropdown(true); // Hiện dropdown khi có giá trị
        } else if (type === "destination") {
            setSearchDestination(value);
            setShowDestinationDropdown(true); // Hiện dropdown khi có giá trị
        }

        // Check inputs after updating search value
        checkInputs();
    };

    const handleBlur = (type: "departure" | "destination") => {
        setTimeout(() => {
            if (type === "departure") {
                setShowDepartureDropdown(false);
            } else if (type === "destination") {
                setShowDestinationDropdown(false);
            }
        }, 150);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent page refresh
        if (checkInputs()) {
            // Gather data to send
            const formData = {
                departure: searchDeparture,
                destination: searchDestination,
                date: value,
            };
            console.log("Form Data Submitted:", formData);
            // Here you can add code to send the data to an API or another component
            // Example: axios.post('/api/submit', formData)
        }
    };

    useEffect(() => {
        // Check inputs based on selected departure and destination
        checkInputs();
    }, [searchDeparture, searchDestination]);

    return (
        <div className="relative isolate overflow-hidden py-24 sm:py-20 w-full min-h-screen flex flex-col md:flex-row">
            <video autoPlay muted loop className='absolute w-screen h-95 object-cover opacity-3 top-0 left-0 bottom-0 right-0 '>
                <source src={videoHomepage} type="video/mp4" />
            </video>
            <div className="absolute ml-44 mt-12 max-w-full px-6 lg:px-8 flex-col items-center justify-center">
                <div className='relative'>
                    <div className="max-w-2xl lg:mx-0  ">
                        <h2 className="text-base font-bold tracking-tight text-white sm:text-3xl ">BOOK YOUR FLIGHT</h2>
                        <p className="mt-3 text-lg leading-5 text-white">Đưa bạn đến bất cứ đâu</p>
                    </div>
                    <div className="mx-auto mt-5 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            {links.map((link) => (
                                <Link key={link.name} to={link.href} className='transition-transform duration-300 ease-in-out hover:translate-x-0.5 hover:text-[#1c89e3]'>
                                    {link.name} <span aria-hidden="true">&rarr;</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <form className='relative px-8 py-8 bg-white-color rounded-xl grid grid-cols-3 gap-4' onSubmit={handleSubmit}>
                        <div className='col-span-2 flex justify-center space-x-5'>
                            <div className='flex justify-center'>
                                <AirportInput
                                    label="Đi từ"
                                    placeholder="Nhập vào điểm đi"
                                    value={searchDeparture}
                                    onFocus={() => setShowDepartureDropdown(true)} // Hiện dropdown khi focus
                                    onBlur={() => handleBlur("departure")}
                                    onChange={(event) => onInputChange(event, "departure")}
                                    showDropdown={showDepartureDropdown}
                                    onSelect={(selectedAirport) => handleAirportSelect(selectedAirport, "departure")}
                                    errorMessage={errorMessagedep}
                                    icon={FaPlaneDeparture}
                                />
                                <div className='flex items-center w-6 h-6 relative top-1/2 mx-4'>
                                    <Icon />
                                </div>
                                <AirportInput
                                    label="Đến"
                                    placeholder="Nhập điểm muốn đến"
                                    value={searchDestination}
                                    onFocus={() => setShowDestinationDropdown(true)} // Hiện dropdown khi focus
                                    onBlur={() => handleBlur("destination")}
                                    onChange={(event) => onInputChange(event, "destination")}
                                    showDropdown={showDestinationDropdown}
                                    onSelect={(selectedAirport) => handleAirportSelect(selectedAirport, "destination")}
                                    errorMessage={errorMessagedis}
                                    icon={FaPlaneArrival}
                                />
                            </div>
                        </div>
                        <div className='grid grid-row-2 gap-1'>
                            <label htmlFor='date' className='block text-text-color'>Ngày đi:</label>
                            <Datepicker
                                primaryColor={"blue"}
                                asSingle={true}
                                value={value.startDate}
                                minDate={MIN_DATE}
                                maxDate={MAX_DATE}
                                configs={{
                                    shortcuts: {
                                        yesterday: "Yesterday",
                                        customToday: {
                                            text: "Custom Today",
                                            period: {
                                                start: new Date(),
                                                end: new Date()
                                            }
                                        },
                                        next8Days: {
                                            text: "Next 8 days",
                                            period: {
                                                start: new Date(new Date().setDate(new Date().getDate() + 1)),
                                                end: new Date(new Date().setDate(new Date().getDate() + 8))
                                            }
                                        }
                                    },
                                }}
                                onChange={newValue => setValue(newValue?.startDate)}
                                displayFormat="DD/MM/YYYY"
                            />
                            {errorMessagedate && <p className="absolute rounded-md p-2 text- -top-16 max- bg-black text-white">{errorMessagedate}</p>}
                        </div>
                    </form>
                </div>
            </div>
            <div className="p-14"></div>
        </div>
    );
}