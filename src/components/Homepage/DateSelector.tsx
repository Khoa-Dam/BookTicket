import React from 'react';
import Datepicker from "react-tailwindcss-datepicker";




interface DateSelectorProps {
    value?: string;
    setValue: React.Dispatch<string | undefined>;
    MIN_DATE: Date;
    MAX_DATE: Date;
}
const DateSelector: React.FC<DateSelectorProps> = ({ value = { startDate: undefined }, setValue, MIN_DATE, MAX_DATE }) => { // Default value added

    return (
        <div className='grid grid-row-2 gap-1'>
            <label htmlFor='date' className='block text-text-color'>Ngày đi:</label>
            <Datepicker
                primaryColor={"blue"}
                asSingle={true}
                value={value} // value is now guaranteed to be DateValueType
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
                onChange={newValue => setValue({ newValue })} // Ensure newValue is of type Date
                displayFormat="DD/MM/YYYY"
            />
        </div>
    );
};

export default DateSelector;