import React, { useState } from "react";

const MyDatePicker = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    const [selectedDate, setSelectedDate] = useState({
        year: currentYear,
        month: currentMonth,
        day: 1,
    });

    const handleDateChange = (event) => {
        const { name, value } = event.target;
        setSelectedDate((prevDate) => ({
            ...prevDate,
            [name]: parseInt(value, 10),
        }));
    };

    // 선택된 연도와 월에 따라 그 달의 일수를 계산하는 함수
    const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();

    const generateDays = () => {
        const daysInMonth = getDaysInMonth(selectedDate.year, selectedDate.month);
        return Array.from({ length: daysInMonth }, (_, index) => index + 1);
    };

    return (
        <div>
            <h2>날짜 선택</h2>
            <label>
                연도:
                <select name="year" value={selectedDate.year} onChange={handleDateChange}>
                    <option value={currentYear}>{currentYear}</option>
                    <option value={currentYear + 1}>{currentYear + 1}</option>
                    {/* 추가적인 연도 옵션들을 필요에 따라 추가합니다. */}
                </select>
            </label>
            <label>
                월:
                <select name="month" value={selectedDate.month} onChange={handleDateChange}>
                    {Array.from({ length: 12 }, (_, index) => (
                        <option key={index + 1} value={index + 1}>
                            {index + 1}월
                        </option>
                    ))}
                    {/* 추가적인 월 옵션들을 필요에 따라 추가합니다. */}
                </select>
            </label>
            <label>
                일:
                <select name="day" value={selectedDate.day} onChange={handleDateChange}>
                    {generateDays().map((day) => (
                        <option key={day} value={day}>
                            {day}일
                        </option>
                    ))}
                    {/* 추가적인 일 옵션들을 필요에 따라 추가합니다. */}
                </select>
            </label>
        </div>
    );
};

export default MyDatePicker;
