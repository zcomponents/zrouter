#!/usr/bin/env node

'use strict';

const zt = require('ztype');

const ZRequest = require('zrequest').ZRequest;
const ZResponse = require('zresponse').ZResponse;

class _go {
  get core() {
    return this._core;
  }

  get request() {
    return this._request;
  }

  get response() {
    return this._response;
  }

	constructor(request, response, core) {
		if (request instanceof ZRequest) {
      this._request = request;
    }
    else throw new Error('ZGo.constructor wrong request');
		if (response instanceof ZResponse) {
      this._response = response;
    }
    else throw new Error('ZGo.constructor wrong response');
    if (core instanceof Object) {
      this._core = core;
    }
    else throw new Error('ZGo.constructor wrong core');
	}

  console.log();

	match(_) {
    throw new Error('');
	}

	go(_) {
    throw new Error('');
	}
}

module.exports = ZRoute;
