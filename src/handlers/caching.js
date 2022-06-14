const cache = new Map();

const caching = async (req, res, next) => {
  const { name, city } = req.params;
  const obj = cache.get(`${name}-${city}`);

  if (obj?.salary) {
    const salary = obj.salary;
    if (obj.expire.getTime() < new Date().getTime()) {
      cache.clear(`${name}-${city}`);
    }
    res.set('Content-Type', 'text/html');
    res.status(200).send(`<p>Cached result of salary: ${salary}</p>`)
  } else {
    next();
  }
};

const setCache = (params) => {
  const { key, value, time } = params;
  const expire = new Date();
  expire.setSeconds(expire.getSeconds() + time);
  cache.set(key, { ...value, expire });
}

module.exports = {
  caching,
  setCache,
  cache
};



return await ReportModel.aggregate(
  [
    { $sort: { "date": 1, "ad_request": -1, "matched_request": -1 } },
    {
      $match:
      {
        "property.refs_to_user": { $in: arr },
        "commission.commission_type": type,
        "day": { $gte: startDate, $lte: endDate }
      }
    },
    {
      $group: {
        "_id": `${name}`,
        "totalRequests": { $sum: "$ad_request" },
        "totalImpressions": {
          $sum: {
            $cond:
            {
              if: { $eq: ['$commission.commission_type', 'Impressions'] },
              then: { $subtract: ["$matched_request", { $multiply: [{ $divide: ['$commission.commission_number', 100] }, "$matched_request"] }] },
              else: "$matched_request"
            }
          }
        },
        "averageCPM": {
          $avg: {
            $cond:
            {
              if: { $eq: ['$commission.commission_type', 'eCPM'] },
              then: { $subtract: ['$ecpm', { $multiply: [{ $divide: ['$commission.commission_number', 100] }, "$ecpm"] }] },
              else: "$ecpm"
            }
          }
        }
      }
    }
  ]).allowDiskUse(true);