import { Doctor } from "./doctor";

export class DoctorRanking extends Doctor{
    
    rating: number;

    constructor() {
        super();
        this.rating = 0
    }
}