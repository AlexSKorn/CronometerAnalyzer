export const filterSevenDays = (dateArray) => {
    dateArray.filter();
};

export const filterMonth = (dateArray: any) => {};

export const filterCurrentYear = (dateArray: any) => {
    let d: Date = new Date();
    let currentYear: number = d.getFullYear();
    return dateArray.filter(
        (day) => day.Date.substring(0, 4) == currentYear.toString()
    );
};

export const filterWeek = (dateArray: any) => {
    let curr: Date = new Date();
    let day: number = curr.getDay();
    let firstDay: Date = new Date(curr.getTime() - 60 * 60 * 24 * day * 1000);
    let lastDay: Date = new Date(curr.getTime() + 60 * 60 * 24 * 6 * 1000);
    return lastDay;
};
