const RequestDao = require("../dao/request.dao");
const TravelRequests = require("../models/request");
var RequestController = {
    create: createRequest,
    getAllRequest: getAllRequest,
    getRequestById: getRequestById,
    updateRequest: updateRequest,
    deleteRequest: deleteRequest
}

async function createRequest(req, res) {
    const request = req.body;
    console.log("request", request)
    RequestDao.create(request)
        .then((data) => {
            res.status(200).json({
                status: "success",
                data: data
            })
        })
        .catch(error => {
            res.status(400).json({
                status: "failed",
                data: error
            })
        })
    
}

function getAllRequest(req, res) {
    RequestDao.getAll()
        .then((data) => {
            res.status(200).json({
                status: "success",
                data: data
            })
        })
        .catch(error => {
            res.status(400).json({
                status: "failed",
                data: data
            })
        })
}

function getRequestById(req, res) {
    RequestDao.findById(req.params.id)
        .then((data) => {
            res.status(200).json({
                status: "success",
                data: data
            })
        })
        .catch(error => {
            res.status(400).json({
                status: "failed",
                data: error
            });
        })
}

function updateRequest(req, res) {
    RequestDao.update(req.body, req.params.id)
        .then(data => {
            res.status(200).json({
                status: "success",
                data: data
            })
        })
        .catch(error => {
            res.status(400).json({
                status: "failed",
                data: error
            })
        })
}

function deleteRequest(req, res) {
    RequestDao.delete(req.params.id)
        .then(data => {
            res.status(200).json({
                status: "success",
                data: data
            })
            .catch(error => {
                res.status(400).json({
                    status: "failed",
                    data: error
                })
            })
        })
}
module.exports = RequestController;