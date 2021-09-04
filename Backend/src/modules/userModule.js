const userData = require('../models/usersModel');
const mongoose = require('mongoose');
const Users = require('../models/usersModel')

const addUserQuery = (data) => new Promise((resolve, reject) => {

    Users.create(data)
        .then((doc) => {
            resolve(doc)
        }).catch((error) => reject(error))

    // Users.create(data)
    //     .then((doc) => {
    //         resolve(doc)
    //     }).catch((error) => reject(error))

})

const checkMobileExistQuery = (phone) => new Promise((resolve, reject) => {

    Users.find({ phone: phone })
        .then((doc) => {
            resolve(doc)
        }).catch((error) => reject(error))

})

const getUsersQuery = async (req, res) => {
    const users = await userData.find({});
    console.log(users);
    res.send(users);
}

const getUserByIdQuery = async (req, res) => {
    // const _id = req.params.id;
    // const user = await userData.findById({ _id });
    // console.log(user);
    // res.send(user);
}

const deleteUserByIdQuery = async (req, res) => {
    // const _id = req.params.id;
    // const user = await userData.findByIdAndDelete({ _id });
    // console.log(user);
    // res.send(user);
}

const updateUserByIdQuery = async (req, res) => {
    // const _id = req.params.id;
    // const user = await userData.findByIdAndUpdate(_id, req.body);
    // console.log(user);
    // res.send(user);
}

module.exports = { addUserQuery, getUsersQuery, getUserByIdQuery, deleteUserByIdQuery, updateUserByIdQuery,checkMobileExistQuery };