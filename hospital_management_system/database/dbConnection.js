import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
        .connect(process.env.MONGODB_URI, {
            dbName: "hospital_management_system",
        })
        .then(() => {
            console.log("Connection to database");
        })
        .catch((err) => {
            console.log(`some error occured to connect to databases:${err}`);
        });
};