export type FdTypeType = 'Tax Saving' | 'Cumulative' | 'Pay Out';
export type PayOutStructureType = 'Maturity Only' | 'Monthly' | 'Quarterly' | 'Half Yearly' | 'Yearly';
export type InterestCompoundingFrequency = 'Quarterly';

export interface Investment {
  _id?: string;
  investmentAmount: number;
  rateOfInterest: number;
  startDate: string;
  year: number;
  months: number;
  days: number;
  fdType: FdTypeType;
  payOutStructure: PayOutStructureType;
  interestCompoundingFrequency: string;
  orgType: string;
  orgName: string;
  category_id: string;
  newCategoryName?: string;
  dataType?: string;
}
