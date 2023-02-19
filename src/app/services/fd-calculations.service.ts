import { Injectable } from "@angular/core";
import { Investment } from "../interfaces/investment.interface";

@Injectable()
export class FdCalculations {


    allCategoriesFdCalculation() {

    }

    allFdInCategoryCalculations(investmentsData: Array<Investment>) {
        // average return
        let averageReturn = 0;
        let investedValue = 0;
        let interestEarned = 0;
        for (const investment of investmentsData) {
            averageReturn += investment.rateOfInterest;
            investedValue += investment.investmentAmount;

            // interest earned
            investment.investmentAmount
            investment.rateOfInterest
            investment.startDate
            const today = Date.now();   



        }
        averageReturn = averageReturn / investmentsData.length;


    }

    singleFdCalculation() {

    }
}