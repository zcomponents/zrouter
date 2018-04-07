#!/usr/bin/env node

'use strict';

const AsyncFunction = async function() {};

class scope {
	constructor(){
		this._scope = [];
		this.request = request;
		this.response = response;
	}

	get request(){
		return this._request;
	}

	set request(_){
		if(_ instanceof request) this._request = _;
		else throw new Error('[scope.js] set scope.request');
	}

	get response(){
		return this._response;
	}

	set response(_){
		if(_ instanceof response) this._response = _;
		else throw new Error('[scope.js] set scope.response');
	}

	get promise(){

	}
}

export.scope = scope;