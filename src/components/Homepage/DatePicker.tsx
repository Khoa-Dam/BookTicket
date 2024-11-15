import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths, format } from "date-fns";
import { AiOutlineCalendar } from "react-icons/ai";


interface DatePickerComponentProps {
    selectedDate: Date | null;
    onDateChange: (date: Date | null) => void;
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
    selectedDate,
    onDateChange,
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
        </div>
    );
};

export default DatePickerComponent;
