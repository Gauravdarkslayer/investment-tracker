export class HelperService {
    getNumberOfDaysInYear(year: number) {
        return this.isLeapYear(year) ? 366 : 365;
    }

    private isLeapYear(year:number) {
        return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
    }
}