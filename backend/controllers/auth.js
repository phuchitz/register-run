import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


import { createError } from "../utils/error.js"

export const register = async (req, res, next) => {
    try {
        // const salt = bcrypt.genSaltSync(10);
        // const hash = bcrypt.hashSync(req.body.password, salt);
        const payload = req.body;

        var imgUrl = "";
        if (req.file) var imgUrl = `storage/images/${req.file.filename}`;
        // payload.image = imgUrl;

        const newUser = new User({
            // username: req.body.username,
            // email: req.body.email,
            nameTitleThai: req.body.nameTitleThai,
            nameTitleEng: req.body.nameTitleEng,
            surnameThai: req.body.surnameThai,
            surnameEng: req.body.surnameEng,
            lastNameThai: req.body.lastNameThai,
            lastNameEng: req.body.lastNameEng,
            birthDate: req.body.birthDate,
            email: req.body.email,
            idCardNumber: req.body.idCardNumber,
            image: req.body.image = imgUrl,
            nameBanner: req.body.nameBanner,
            everCompleted: req.body.everCompleted,
            expectedTimeH: req.body.expectedTime,
            expectedTimeM: req.body.expectedTime,
            emfullName1: req.body.emfullName1,
            emRelationship1: req.body.emRelationship1,
            emTel1: req.body.emTel1,
            emfullName2: req.body.emfullName2,
            emRelationship2: req.body.emRelationship2,
            emTel2: req.body.emTel2,
            medBloodType: req.body.medBloodType,
            medDrugAllery: req.body.medDrugAllery,
            medCongenitalDisease: req.body.medCongenitalDisease,
            medHistorySurgeryPosition: req.body.medHistorySurgeryPosition,
            medHistorySurgeryYear: req.body.medHistorySurgeryYear,
            medPlanChildren: req.body.medPlanChildren,
            medRegularBasis: req.body.medRegularBasis,
            medInjuryIllness: req.body.medInjuryIllness,
            medExRegularly: req.body.medExRegularly,
            medChest: req.body.medChest,
            // password: hash,
        });

        await newUser.save();
        res.status(200).send("User has been create successfully");
    } catch (error) {
        next(error);
    }
};
//host gradess to add authcention

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ idCardNumber: req.body.idCardNumber });
        if (!user) return next(createError(404, "ไม่พบผู้ใช้งาน!"));

        // const isPasswordCorrect = await bcrypt.compare(
        //     req.body.password,
        //     user.password
        // );
        // if (!isPasswordCorrect)
        //     return next(createError(400, "ผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง!"));

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)

        const { isAdmin, ...otherDetails } = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({ ...otherDetails });
    } catch (error) {
        next(error);
    }
};
