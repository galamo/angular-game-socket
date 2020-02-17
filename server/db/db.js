const mongoose = require("mongoose")

const initDbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true, createIndexes: true })
    } catch (err) {
        console.log(err.message)
        process.exit(1);
    }
}

module.exports = initDbConnection;
