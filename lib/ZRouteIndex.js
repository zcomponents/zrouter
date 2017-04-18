#!/usr/bin/env node

'use strict';

//const ZRequest = require('zrequest').ZRequest;
//const ZResponse = require('zresponse').ZResponse;
const zt = require('ztype');

class ZRouteIndex {
	constructor(options) {
    try {
      this._method = zt.lp(options, ['method', 'm'], '*').toLowerCase();
      if(!/^*|get|post$/i.test(this._method)) throw 'method';
      this._path = zt.lp(options, ['path', 'p', 'uri', 'u'])
    } catch (e) {
      throw new Error('ZRouteIndex.constructor wrong index given');
    }
	}

  match(_) {

  }
}

module.exports = ZRoute;
