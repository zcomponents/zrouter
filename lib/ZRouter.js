#!/usr/bin/env node

'use strict';

const ZRequest = require('zrequest').ZRequest;
//const ZResponse = require('zresponse').ZResponse;
const zt = require('ztype');

class ZRouter {
  request2index(request) {
    if (request instanceof ZRequest) {

    }
    else {
      throw new Error('wrong request for index building');
    }
  }

  rule2index(rule) {
    if (rule instanceof Object) {

    }
    else {
      throw new Error('wrong rule for index building');
    }
  }

	constructor() {

	}
}

module.exports = ZRouter;
