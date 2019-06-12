import 'reflect-metadata';
import express from 'express';
import { Projects } from './models/Projects';
import { Categories } from './models/Categories';
import { User } from './models/User';
import { Funds } from './models/Funds';
import { getConnection, createConnection } from "typeorm";
var app = express();

var main = async () => {
  const conn = await createConnection();


/////////////////////
  var projects = await Projects.find({
    relations: ["cats"]
  });
///////////////////////////

/////////////////////
  var projects = await Projects.find({
    relations: ["user"]
  });
///////////////////////////

/////////////////////
  var projects = await Projects.find({
    relations: ["funds"]
  });
///////////////////////////


  app.get('/projects', async function (req, res) {
    var projects = await Projects.find({
      relations: ["cats"]
    });
    res.send(projects);
  });

  app.listen(8080, function () {
    if(conn) {
      console.log("Conection established");
    }
    console.log('Test app listening on port 8080!');
  });
};

main();
