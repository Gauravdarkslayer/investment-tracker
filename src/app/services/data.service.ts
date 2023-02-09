import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as Realm from 'realm-web'
const {
    BSON: { ObjectId },
} = Realm;

@Injectable()
export class DataService {
    realmApp!: Realm.App;
    mongoClient: any;
    constructor(private snackBar: MatSnackBar) {
        this.initApp();
        this.loginEmailPassword('gaurav@gmail.com', '1234412344')
    }

    private async initApp() {
        this.realmApp = new Realm.App({ id: "application-0-kmsrp" });
        this.mongoClient = this.realmApp.currentUser!.mongoClient('mongodb-atlas');
    }

    async loginEmailPassword(email: string, password: string) {
        // Create an email/password credential
        const credentials = Realm.Credentials.emailPassword(email, password);
        // Authenticate the user
        const user = await this.realmApp.logIn(credentials);
        // `App.currentUser` updates to match the logged in user
        console.assert(user.id === this.realmApp.currentUser!.id);
        console.log(user);
        this.snackBar.open('Welcome ' + user.profile.email, '', {
            duration: 2000
        });

        return user;
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
                    as: 'invesments'
                }
            }
        ]);
    }

    async getInvestmentsByCategoryId(category_id: string) {
        return await this.createOrConnectWithCollection('investment').find({ category_id: new ObjectId(category_id) });
    }
}