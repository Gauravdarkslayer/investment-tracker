import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as Realm from 'realm-web'

@Injectable()
export class DataService {
    realmApp!: Realm.App;
    mongoClient: any;
    constructor(private snackBar:MatSnackBar) {
        this.initApp();
        this.loginEmailPassword('gaurav@gmail.com','1234412344')
    }

    async initApp() {
        this.realmApp = new Realm.App({ id: "application-0-kmsrp" });
        this.mongoClient = this.realmApp.currentUser!.mongoClient('mongodb-atlas');
        this.createOrConnectWithCollection()
    }

    async loginEmailPassword(email: string, password: string) {
        // Create an email/password credential
        const credentials = Realm.Credentials.emailPassword(email, password);
        // Authenticate the user
        const user = await this.realmApp.logIn(credentials);
        // `App.currentUser` updates to match the logged in user
        console.assert(user.id === this.realmApp.currentUser!.id);
        console.log(user);
        this.snackBar.open('Welcome ' + user.profile.email,'',{
            duration: 3000
          });

        return user;
    }

    async createOrConnectWithCollection() {
        const collection = this.mongoClient.db('investment-tracker').collection('category');
        console.log(await collection.insertOne({name:"MyFirstCategory"}))
        return collection;
    }
}