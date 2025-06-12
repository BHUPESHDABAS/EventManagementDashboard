import Event from "../models/Event.js"

//Admin functions
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
        // console.log(error)
        res.status(201).json({message: "Event was not added, try again" });
    }
}

export const updateEvent = async (req,res) => {
    try {
        const {heading, imgUrl, description, eventId} = req.body;
        const findEvent = await Event.findOne({_id: eventId});

        findEvent.eventDescription = description;
        findEvent.eventHeading = heading;
        findEvent.eventImageUrl = imgUrl;

        await findEvent.save();
        res.status(201).json({ findEvent, message: "Event updated successfully" });

    } catch (error) {
        // console.log(error)
        res.status(201).json({message: "Unable to update, try again" });
    }
}

export const deleteEvent = async (req,res) => {
    try {
        const {eventId} = req.body;
        const findEvent = await Event.deleteOne({_id: eventId});

        res.status(201).json({ findEvent, message: "Event deleted successfully" });

    } catch (error) {
        console.log(error)
        res.status(201).json({message: "Unable to delete, try again" });
    }
}