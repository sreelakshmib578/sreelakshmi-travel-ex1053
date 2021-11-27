const TravelRequests = require("../models/request");
var RequestDao = {
    create: createRequest,
    getAll: getAllRequest,
    findById: findById,
    update: updateRequest,
    delete: deleteRequest
}
function createRequest(request) {
    var newRequest = new TravelRequests(request);
    console.log("newRequest", newRequest);
    return newRequest.save();
}
function getAllRequest() {
    return TravelRequests.findAll();
}
function findById(id) {
    return TravelRequests.findByPk(id)
}
function updateRequest(request, id) {
    var updatedRequest = {
        "cause_travel": request.cause_travel,
        "source": request.source,
        "destination": request.destination,
        "mode": request.mode,
        "from_date": request.from_date,
        "to_date": request.to_date,
        "no_of_days": request.no_of_days,
        "priority": request.priority,
        "project": request.project,
        "emp": request.emp,
        "status": request.status
    }
    return TravelRequests.update(updatedRequest, {where: {req_id: id}})
}

function deleteRequest(id) {
    return TravelRequests.destroy({where: {req_id: id}})
}
module.exports = RequestDao;