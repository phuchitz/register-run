import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        nameTitleThai: {
            type: String,
            required: true,
            unique: false,
        },
        nameTitleEng: {
            type: String,
            required: true,
            unique: false,
        },
        surnameThai: {
            type: String,
            required: true,
            unique: false,
        },
        surnameEng: {
            type: String,
            required: true,
            unique: false,
        },
        lastNameThai: {
            type: String,
            required: true,
            unique: false,
        },
        lastNameEng: {
            type: String,
            required: true,
            unique: false,
        },
        birthDate: {
            type: String,
            unique: false,
        },
        email: {
            type: String,
            required: false,
            trim: true,
            validate(value) {
                if (!value.match(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/)) {
                throw new Error('Email is not valid.');
                }
            }
        },
        idCardNumber: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        nameBanner: {
            type: String,
            required: true,
            maxlength: 10,
        },
        everCompleted: {
            type: String,
            required: true,
        },
        expectedTimeH: {
            type: Number,
            required: false,
        },
        expectedTimeM: {
            type: Number,
            required: false,
        },
        emfullName1: {
            type: String,
            required: true,
        },
        emRelationship1: {
            type: String,
            required: true,
        },
        emTel1: {
            type: String,
            required: true,
        },
        emfullName2: {
            type: String,
        },
        emRelationship2: {
            type: String,
        },
        emTel2: {
            type: String,
        },
        medBloodType: {
            type: String,
        },
        medDrugAllery: {
            type: String,
            required: true,
        },
        medCongenitalDisease:{
            type: String,
            required: true,
        },
        medPlanChildren: {
            type: String,
            required: true,
        },
        medHistorySurgeryPosition: {
            type: String,
            required: true,
        },
        medHistorySurgeryYear: {
            type: String,
            required: true,
        },
        medRegularBasis: {
            type: String,
            required: true,
        },
        medInjuryIllness: {
            type: String,
            required: true,
        },
        medExRegularly: {
            type: String,
            required: true,
        },
        medChest : {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

export default mongoose.model("From", UserSchema);
