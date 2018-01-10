const express = require('express'),
      engines = require('consolidate'),
      mongoClient = require('mongodb').MongoClient,
      assert = require('assert');

const app = express();

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', `${__dirname}/views`);
