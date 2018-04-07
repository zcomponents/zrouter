#!/usr/bin/env node

'use strict';

const Scope = require('zscope').Scope;
const AsyncFunction = require('zasyncfunctionscope').AsyncFunction;
const AsyncFunctionsScope = require('zasyncfunctionscope').AsyncFunctionsScope;

class RouteScope extends Scope {
	static init (...args) {
		return Object.freeze(new RouteScope(...args));
	}

	constructor (...args) {
	}
};