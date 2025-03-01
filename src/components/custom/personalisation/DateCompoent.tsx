import React, { useState, ChangeEvent, useEffect } from "react";
import Button from "../../ui/Button"; 
import { BiCalendar } from "react-icons/bi";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

export type DateRange = {
  from: string;
  to: string;
};

interface DateCompoentProps {
  onApply: (dateRange: DateRange) => void;
}

const DateCompoent: React.FC<DateCompoentProps> = ({ onApply }) => {
  const [dateRange, setDateRange] = useState<DateRange>({ from: "", to: "" });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { searchPreference } = useSelector((state: RootState) => state.preference);

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>, type: "from" | "to") => {
    setDateRange((prev) => ({
      ...prev,
      [type]: e.target.value,
    }));
  };

  const handleApply = () => {
    onApply(dateRange);
    setIsOpen(false);
  };

  useEffect(() => {
      setDateRange(searchPreference.date)
  },[])

  return (
    <div className="mb-5" >
      <Button
        variant="filled"
        icon={<BiCalendar/>}
        onClick={() => setIsOpen(!isOpen)}
        className="mb-4"
      >
        {isOpen ? "Close Date Picker" : "Select Date Range"}
      </Button>

      {isOpen && (
        <div className="mt-4 bg-primary p-4 rounded-md shadow-md border border-secondary">
          <div className="flex space-x-4">
            <div className="flex flex-col">
              <label className="mb-2">From</label>
              <input
                type="date"
                value={dateRange.from}
                onChange={(e) => handleDateChange(e, "from")}
                className="border border-secondary rounded-md p-2 bg-primary"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2">To</label>
              <input
                type="date"
                value={dateRange.to}
                onChange={(e) => handleDateChange(e, "to")}
                className="border border-secondary rounded-md p-2 bg-primary" 
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end space-x-2">
            <Button
              variant="text"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="text"
              onClick={handleApply}
            >
              Apply
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateCompoent;
