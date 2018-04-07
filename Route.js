#!/usr/bin/env node

'use strict';

const AsyncFunction = require('zasyncfunctionscope').AsyncFunction;

class Route {
	static init (...args) {
		return Object.freeze(new Route(...args));
	}

	constructor (alias, check, call) {
		this.alias = alias;
		this.check = check;
		this.call = call;
	}

	get alias () {
		return this._alias;
	}

	set alias (alias) {
		if (String(alias).trim()===alias && alias.length>0) this._alias = alias;
		else throw new Error('Route.alias set with wrong alias');
	}

	get check () {
		return this._check;
	}

	set check (check) {
		if (check instanceof AsyncFunction) this._check = check;
		else throw new Error('Route.check set with non-async function');
	}

	get call () {
		return this._call;
	}

	set call (call) {
		if (call instanceof AsyncFunction) this._call = call;
		else throw new Error('Route.call set with non-async function');
	}
}

exports.Route = Route;
