const userData = require('../models/usersModel');
const { addUserQuery, getUsersQuery, getUserByIdQuery, deleteUserByIdQuery, updateUserByIdQuery } = require('../modules/userModule');


const addUser = async (req, res) => {
    try {
        
        const result = await addUserQuery(req.body);
        // const user = new userData(req.body);
        // await user.save();
        // console.log(user);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

const getUsers = async (req, res) => {

    try {
        getUsersQuery(req, res);
        // const users = await userData.find({});
        // console.log(users);
        // res.send(users);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

const getUserById = async (req, res) => {

    try {
        getUserByIdQuery(req, res);
        // const _id = req.params.id;
        // const user = await userData.findById({_id});
        // console.log(user);
        // res.send(user);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

const deleteUserById = async (req, res) => {

    try {
        deleteUserByIdQuery(req, res);
        // const _id = req.params.id;
        // const user = await userData.findByIdAndDelete({_id});
        // console.log(user);
        // res.send(user);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

const updateUser = async (req, res) => {
    try {
        updateUserByIdQuery(req, res);
        // const _id = req.params.id;
        // const user = await userData.findByIdAndUpdate(_id, req.body);
        // console.log(user);
        // res.send(user);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

module.exports = { addUser, getUsers, getUserById, deleteUserById, updateUser }