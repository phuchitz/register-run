import User from "../models/User.js";

export const createUser = async (req, res, next) => {
    const newUser = new User(req.body);

    try {
        const createUser = await newUser.save();
        res.status(200).json(createUser);
    } catch (err) {
        next(err);
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedUser)
    } catch (err) {
        next(err);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(
            req.params.id,
        )
        res.status(200).json("User has been deleted.")
    } catch (err) {
        next(err);
    }
}

export const getbyUser = async (req, res, next) => {
    try {
        const userByid = await User.findById(
            req.params.id,
        )
        res.status(200).json(userByid)
    } catch (err) {
        next(err);
    }
}

export const getallUser = async (req, res, next) => {
    try {
        const userAll = await User.find();
        res.status(200).json(userAll)
    } catch (err) {
        next(err);
    }
}