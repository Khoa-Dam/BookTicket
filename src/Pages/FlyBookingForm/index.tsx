import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import ContactForm from '../../components/FlyBookingPage/ContactForm'
import FlightSummary from '../../components/FlyBookingPage/FlightSummary'
import PassengerInfo from '../../components/FlyBookingPage/PassengerInfo'
import { ArrowRight } from 'lucide-react'

type FormData = {
    firstName: string
    lastName: string
    phone?: string
    email?: string
    nationality?: string
}

export default function FlightBookingForm() {
    const [formContact, setFormContact] = useState<FormData>({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
    })

    const [forminfor, setForminfor] = useState<FormData>({
        lastName: '',
        firstName: '',
        nationality: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormContact(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleInputInfor = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setForminfor(prev => ({ ...prev, [name]: value }))
    }
    const location = useLocation();
    const { departure, destination, airline, price, time, departureDate } = location.state || {};


    return (
        <div className="container mx-auto p-4 bg-gray-100">
            <div className="grid gap-6 md:grid-cols-3">
                {/* Contact Information Form */}
                <div className="col-span-2">
                    <div className="bg-white  p-6 rounded-lg shadow-md ml-20 w-3/4">
                        <ContactForm formData={formContact} handleInputChange={handleInputChange} />
                    </div>
                    <div className="bg-white mt-7 p-6 rounded-lg shadow-md ml-20 w-3/4">
                        <PassengerInfo
                            forminfor={forminfor}
                            handleInputInfor={handleInputInfor}
                        />
                    </div>
                </div>

                {/* Flight Summary */}
                <FlightSummary
                    departure={departure}
                    destination={destination}
                    airline={airline}
                    price={price}
                    time={time}
                    departureDate={departureDate}
                />
            </div>
            <button
                className="group flex m-auto items-center mt-8 justify-center gap-2 rounded-full bg-[#FF4D00] px-6 py-3 text-white transition-all hover:bg-[#e64600] focus:outline-none focus:ring-2 focus:ring-[#FF4D00] focus:ring-offset-2 "
                type="button"
                aria-label="Tiếp tục đến phần thanh toán"
            >
                <span className="text-base font-medium">Tiếp tục đến phần thanh toán</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </button>

        </div>
    )
}