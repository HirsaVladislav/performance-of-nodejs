const ServiceRunner = (Service, req) => {
    return async (_, res) => {
        const serviceInstance = new Service(req);
        const response = await serviceInstance();
        res.status(200).json(response);
    }
};

module.exports = ServiceRunner;
