import Event from "../models/Event.js"

export const createEvent = async (req,res) => {
    try {
        const {heading, imgUrl, description } = req.body;
        const newEvent = new Event({
            eventHeading: heading,
            eventDescription: description,
            eventImageUrl: imgUrl
        })

    await newEvent.save();
    res.status(201).json({ newEvent, message: "Event added successfully" });
    } catch (error) {
        console.log(error)
        res.status(201).json({message: "Event was not added, try again" });
    }
}