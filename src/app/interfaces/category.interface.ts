import { Investment } from "./investment.interface";

export interface Category {
    _id: string;
    name: string;
    dataType?: string;
    investments: Array<Investment>;
}