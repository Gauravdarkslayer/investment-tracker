import { Injectable } from "@angular/core";
import { Category } from "../interfaces/category.interface";
import { Investment } from "../interfaces/investment.interface";
import { HelperService } from "./helper.service";

@Injectable()
export class FdCalculationsService {
    constructor(private helperService: HelperService) {

    }

    allCategoriesFdCalculation(categoriesData: Array<Category>) {
        let averageReturn = 0;
        let { investedValue, interestEarned, totalNumberOfInvestments } = categoriesData.reduce(
            (acc, category) => {
                const { investments } = category;
                acc.totalNumberOfInvestments += investments.length;
                acc.investedValue += investments.reduce((sum, { investmentAmount }) => sum + investmentAmount, 0);
                acc.interestEarned += investments.reduce((sum, { startDate, investmentAmount, rateOfInterest }) => {
                    const days = Math.floor((Number(new Date()) - Number(new Date(startDate))) / (1000 * 3600 * 24));
                    return sum + (investmentAmount * (rateOfInterest / 100) * (days / 365));
                }, 0);
                return acc;
            },
            { investedValue: 0, interestEarned: 0, totalNumberOfInvestments: 0 }
        );
    
        averageReturn = averageReturn / totalNumberOfInvestments;
        const currentValue = investedValue + interestEarned;
    
        return {
            averageReturn,
            investedValue,
            interestEarned,
            currentValue
        };
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