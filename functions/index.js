const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');

admin.initializeApp(functions.config().firebase);

const app = express()
const main = express()

main.use('/api',app)
main.use(bodyParser.json())
main.use(bodyParser.urlencoded({ extended:false }))

const db = admin.firestore()
export const webApi = functions.https.onRequest(main)

app.post('/saveProduct', async(req, res) => {

    const product = {
        productName:'Bag',
        productPrice:'1000'
    }

    await db.collection('productOnSale').add(product)

})