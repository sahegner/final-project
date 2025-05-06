const { MongoClient, ObjectId } = require('mongodb')
const { uri } = require("./.secrets/.mongodb.json")

const client = new MongoClient(uri)

const getCollectionFood = async (FoodTruck, Food) => {
    await client.connect()
    return client.db(FoodTruck).collection(Food)
}

const getCollectionEvents = async (FoodTruck, Events) => {
    await client.connect()
    return client.db(FoodTruck).collection(Events)
}

module.exports = { ObjectId, getCollectionFood }
module.exports = { ObjectId, getCollectionEvents }