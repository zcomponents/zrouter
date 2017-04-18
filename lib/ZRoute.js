#!/usr/bin/env node

'use strict';

//const ZRequest = require('zrequest').ZRequest;
//const ZRequest = require('zrequest').ZRequest;
const ZRouteIndex = require('./ZRouteIndex');
const ZRouteGo = require('./ZRouteGo');
const zt = require('ztype');

class ZRoute {
  get index() {
    return this._index;
  }

  get go() {
    return this._go;
  }

	constructor(index, go) {
    this._index = new ZRouteIndex(index);
    this._go = new ZRouteIndex(go);
	}

  match(_){
    return this._index.match(_);
  }
}

module.exports = ZRoute;
