const { MongoClient } = require("mongodb");

require('dotenv').config()              // ei line ta deyar karon hoche .env file ta ke connect ba require koarar jonno

const client = new MongoClient(process.env.DATABASE_LOCAL)           // env file teke kono kichu read korte hole process.env.jeivariable ta read korte chachi setar nam   deya lagbe

console.log("Database Connected SUccessfully");

module.exports={client}





/*

1st -    npm init --y           -> eta package.json file create korar jonno
2nd -    npm i mongodb dotenv   -> eta mongodb r dotenv packege install kore
3rd -    npm i -D nodemon       -> eta nodemon packege install er jonno



.env file ta hoche ekta secrete file eta amra use kori
kono secrete information store korar jonno, .env file e
amra bivinno important information raki jeta publicli show korbo na.


(2nd -    npm i mongodb dotenv )
ekane dotenv packege ta install korar karon hoche .env file ta read kora jonno
multoto amra dotenv packegre ta install kori


.gitignore file ta create korte hoy karon ta hoche kono secrete
file jate github e upload na hoy ba je file ta amra github e upload
korte cahachi na.



*/