import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as Realm from 'realm-web'
import { Investment } from '../interfaces/investment.interface';
const {
    BSON: { ObjectId },
} = Realm;

@Injectable()
export class DataService {
    private static realmApp: Realm.App;
    mongoClient: any;
    constructor(private snackBar: MatSnackBar) {
        // this.loginEmailPassword('gaurav@gmail.com', '1234412344');
        // this.initApp();
    }

    async getAppInstance() {
        if (!DataService.realmApp) {
            this.initApp();
        }
        return DataService.realmApp;
    }

    private async initApp() {
        // DataService.realmApp = new Realm.App({ id: "application-0-kmsrp" });
        this.mongoClient = DataService.realmApp.currentUser!.mongoClient('mongodb-atlas');
    }

    async loginEmailPassword(email: string, password: string) {
        try {
            DataService.realmApp = new Realm.App({ id: "application-0-kmsrp" });

            // Create an email/password credential
            const credentials = Realm.Credentials.emailPassword(email, password);
            // Authenticate the user
            const user = await DataService.realmApp.logIn(credentials);
            await this.initApp();
            // `App.currentUser` updates to match the logged in user
            // console.assert(user.id === DataService.realmApp.currentUser!.id);
            console.log(user);
            console.log(DataService.realmApp.currentUser);
            console.log(this.mongoClient.db);

            this.snackBar.open('Welcome ' + user.profile.email, '', {
                duration: 2000
            });

            return user;
        } catch (error) {
            alert(JSON.stringify(error))
            return null;
        }

    }

    createOrConnectWithCollection(collectionName: string) {
        const collection = this.mongoClient.db('investment-tracker').collection(collectionName);
        // console.log(await collection.insertOne({name:"MyFirstCategory"}))
        return collection;
    }

    async getCategories() {
        return await this.createOrConnectWithCollection('category').find();
    }

    async createCategory(catName: string) {
        return await this.createOrConnectWithCollection('category').insertOne({ name: catName })
    }

    async createInvestment(investmentData: any) {
        return await this.createOrConnectWithCollection('investment').insertOne(investmentData);
    }

    async getAllCategoriesGroupedWithInvestments() {
        return await this.createOrConnectWithCollection('category').aggregate([
            {
                $lookup: {
                    from: 'investment',
                    localField: '_id',
                    foreignField: 'category_id',
                    as: 'investments'
                }
            }
        ]);
    }

     async getInvestmentsByCategoryId(category_id: string): Promise<Investment[]> {
        return await this.createOrConnectWithCollection('investment').find({ category_id: new ObjectId(category_id) });
    }

    async getInvestmentById(investment_id: string) {
        return await this.createOrConnectWithCollection('investment').findOne({ _id: new ObjectId(investment_id) });
    }

    async deleteCategory(category_id: string) {
        try {
            this.createOrConnectWithCollection('investment').deleteMany({ category_id: new ObjectId(category_id) });
            return await this.createOrConnectWithCollection('category').deleteOne({ _id: new ObjectId(category_id) });
        } catch (error) {
            return false;
        }
    }
}