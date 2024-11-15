import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths, format } from "date-fns";
import { AiOutlineCalendar } from "react-icons/ai";


interface DatePickerComponentProps {
    selectedDate: Date | null;
    onDateChange: (date: Date | null) => void;
    errorMessage?: string;
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
    selectedDate,
    onDateChange,
    errorMessage
}) => {
    return (
        <div className="flex flex-col items-start space-y-2">
            <label className="text-sm font-semibold text-gray-600">Chọn ngày</label>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => onDateChange(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                maxDate={addMonths(new Date(), 3)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholderText="Chọn ngày đi"
            />
            <AiOutlineCalendar className="absolute top-16  right-14 transform -translate-y-1/2 text-gray-500" size={20} />
            <div>
                {errorMessage && <p className="absolute rounded-md p-2 text-white bg-gray-600 -top-2 max-w-max">{errorMessage}<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full border-t-8 border-t-gray-600 border-l-8 border-l-transparent border-r-8 border-r-transparent"></div></p>
                }
            </div>
        </div>
    );
};

export default DatePickerComponent;
