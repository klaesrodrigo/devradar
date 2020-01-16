import mongoose, { Schema } from 'mongoose'
import PointSchema from './utils/PointSchema'

const DevSchema = new Schema({
    github_username: String,
    name: String,
    avatar_url: String,
    bio: String,
    techs: [Strings],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
})

export default mongoose.model('dev', DevSchema)