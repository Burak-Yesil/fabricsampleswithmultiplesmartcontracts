/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

//const assetTransfer = require('./lib/assetTransfer');

const accountingAsset =  require('./lib/accountingAsset')
const balanceAsset = require('./lib/balanceAsset')
const queryAsset = require('./lib/queryAsset')
const submitAsset = require('./lib/submitAsset')



module.exports.accountingAsset = accountingAsset;
module.exports.balanceAsset = balanceAsset;
module.exports.queryAsset = queryAsset;
module.exports.submitAsset = submitAsset;

module.exports.contracts = [accountingAsset, balanceAsset, queryAsset, submitAsset];
