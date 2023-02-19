import { Injectable } from "@angular/core";
import { Investment } from "../interfaces/investment.interface";
import { HelperService } from "./helper.service";

@Injectable()
export class FdCalculationsService {
    constructor(private helperService: HelperService) {

    }

    allCategoriesFdCalculation() {

    }

    allFdInCategoryCalculations(investmentsData: Array<Investment>) {
        // average return
        let averageReturn = 0;
        let investedValue = 0;
        let interestEarned = 0;
        let currentValue = 0;
        for (const investment of investmentsData) {
            averageReturn += investment.rateOfInterest;
            investedValue += investment.investmentAmount;
            // interest earned
            const start = new Date(investment.startDate);
            const days = Math.floor((new Date().getTime() - start.getTime()) / (1000 * 3600 * 24));
            interestEarned += investment.investmentAmount * (investment.rateOfInterest / 100) * (days / 365);
            // current value
            currentValue = investedValue + interestEarned;
        }
        averageReturn = averageReturn / investmentsData.length;
        return {
            averageReturn,
            investedValue,
            interestEarned,
            currentValue
        }
    }

    singleFdCalculation() {

    }
}