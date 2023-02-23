export class HelperService {
    getNumberOfDaysInYear(year: number) {
        return this.isLeapYear(year) ? 366 : 365;
    }

    private isLeapYear(year:number) {
        return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
    }

    getMaturityDate(year: number, month: number, day: number) {
        const maturityDate = new Date();
    
        maturityDate.setFullYear(maturityDate.getFullYear() + year);
        maturityDate.setMonth(maturityDate.getMonth() + month);
        maturityDate.setDate(maturityDate.getDate() + day);
    
        const maturityDateString = maturityDate.toISOString().substring(0, 10); // format: yyyy-mm-dd
    
        return maturityDateString; // outputs the maturity date in the specified format
    
      }
}