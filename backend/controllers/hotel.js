import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {
        const createHotel = await newHotel.save();
        res.status(200).json(createHotel);
    } catch (err) {
        next(err);
    }
}

export const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedHotel);
    } catch (err) {
        next(err);
    }
};

export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(
            req.params.id,
        )
        res.status(200).json("Hotel has been deleted.")
    } catch (err) {
        next(err);
    }
}

export const getbyHotel = async (req, res, next) => {
    try {
        const hotelByid = await Hotel.findById(
            req.params.id,
        )
        res.status(200).json(hotelByid)
    } catch (err) {
        next(err);
    }
}

export const getallHotel = async (req, res, next) => {
    const {min,max, ...others} = req.query;
    try {
        const hotelAll = await Hotel.find({
            ...others,
            cheapestPrice: {$gt:min | 1, $lt:max || 999},
        }).limit(req.query.limit);  
        res.status(200).json(hotelAll)
    } catch (err) {
        next(err);
    }
}

export const countByCity = async (req, res, next) => {

    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities, map(city => {
            return Hotel.countDocuments({ city: city })
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err);
    }
}