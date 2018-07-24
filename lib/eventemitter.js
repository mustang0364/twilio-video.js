'use strict';

const { EventEmitter } = require('events');

const { makeUnderscorePrefixedPropertiesSetByConstructorNonEnumerable } = require('./util');

module.exports = makeUnderscorePrefixedPropertiesSetByConstructorNonEnumerable(EventEmitter);
