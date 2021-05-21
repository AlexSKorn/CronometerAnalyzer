import { MacroData } from "../types/types";

export const filterCurrentWeek = (dateArray) => {
    let d: Date = new Date();
    let currentDay = d.getDay();
    let endDay = currentDay + 7;
    // dateArray.filter(day => );
};

export const filterCurrentMonth = (dateArray: any) => {
    let d: Date = new Date();
    let currentDay = d.getDay();
    let endDay = currentDay + 30;
    // dateArray.filter();
};

export const filterCurrentYear = (dateArray: any) => {
    let d: Date = new Date();
    let currentYear: number = d.getFullYear();
    return dateArray.filter(
        (day) => day.Date.substring(0, 4) == currentYear.toString()
    );
};

export const filterSevenDays = (dateArray) => {
    return dateArray.slice(dateArray.length - 8, dateArray.length - 1);
};

export const filterThirtyDays = (dateArray: any) => {
    return dateArray.slice(dateArray.length - 31, dateArray.length - 1);
};

export const filterYearDays = (dateArray: any) => {
    return dateArray.slice(dateArray.length - 366, dateArray.length - 1);
};

export const filterWeekTest = (dateArray: any) => {
    let curr: Date = new Date();
    let day: number = curr.getDay();
    let firstDay: Date = new Date(curr.getTime() - 60 * 60 * 24 * day * 1000);
    let lastDay: Date = new Date(curr.getTime() + 60 * 60 * 24 * 6 * 1000);
    return lastDay;
};
