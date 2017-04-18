#!/usr/bin/env node

'use strict';

const ZRequest = require('zrequest').ZRequest;
//const ZResponse = require('zresponse').ZResponse;
const zt = require('ztype');

class ZRouter {
  request2index(request) {
    if (request instanceof ZRequest) {
      return {
        method: request.method,
        host: request.host,
        path: request.path,
        port: request.port
      };
    }
    else {
      throw new Error('wrong request for index building');
    }
  }

  rule2index(rule) {
    if (rule instanceof Object) {
      const method = zt.lp(rule, ['method', 'm'], '*');
      const host = zt.lp(rule, ['host', 'h'], '*');
      const path = zt.lp(rule, ['path', 'p'], '*');
      const port = zt.lp(rule, ['method', 'm'], '*');
      return {
        method: method,
        host: host,
        path: path,
        port: port
      };
    }
    else {
      throw new Error('wrong rule for index building');
    }
  }

  index2relevance(requestIndex, routeIndex) {

  }

	constructor() {

	}
}

module.exports = ZRouter;
