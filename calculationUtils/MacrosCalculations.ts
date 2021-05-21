import { MacroData } from "./../types/types";

export const averageValue = (data: [MacroData]) => {
    const calcAverage = (data) =>
        data.reduce(
            (first: MacroData, next: MacroData) => first.Protein + next.Protein
        ) / data.length;
    const proteinAverage: number = calcAverage(data);
    const carbsAverage: number = calcAverage(data);
    const fatsAverage: number = calcAverage(data);
    const caloriesAverage: number = calcAverage(data);
};
