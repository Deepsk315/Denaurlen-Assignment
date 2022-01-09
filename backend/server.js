const app = require("./app.js")
const dotenv = require('dotenv')
const connectDatabase = require("./config/database.js")

//Handle uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`)
    console.log("Shutting down server due to uncaught Exception")
    process.exit(1)
})

//config
dotenv.config({path:"backend/config/config.env"})

//connecting to DB
connectDatabase()

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });

//Unhandled Promise Rejection
process.on("unhandledRejection",err=>{
  console.log(`Error : ${err.message}`)
  console.log("Shutting down the server due to Unhandled Promise Rejection")
  server.close(() => {
    process.exit(1)
  })
})