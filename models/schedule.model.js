const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        
    }
)