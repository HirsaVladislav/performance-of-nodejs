const express = require('express');
const router = express.Router();

const { workerThreads } = require('../services/worker-threads');

const { clustering } = require('../services/clustering');
const { parallelize } = require('../services/parallelize');
const { runner } = require('../handlers/runner');
const { getUserSalary } = require('../services/get-user-salary');
const { caching } = require('../handlers/caching');
const { processBigArray } = require('../services/process-big-array');
const { processBigArrayStreams } = require('../services/process-big-array-streams');
const { getCachedUserSalary } = require('../services/get-cached-user-salary');

// Also we can use different tools for caching (redis, node-cache, etc).
router.get('/cached-user-salary/name/:name/city/:city', caching, runner(getCachedUserSalary));
router.get('/user-salary/name/:name/city/:city', runner(getUserSalary));

// Streams
router.get('/process-big-array-streams/', processBigArrayStreams);
router.get('/process-big-array/', runner(processBigArray));

router.get('/clustering', runner(clustering));
router.get('/worker-threads', runner(workerThreads));
router.get('/parallelize', runner(parallelize));

module.exports = router;
