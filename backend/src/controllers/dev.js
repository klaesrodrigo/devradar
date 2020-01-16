import axios from 'axios'
import parseStringToArray from '../utils/parseStringToArray'
class DevController {  
    async create(req, res) {
        const { GITHUB_URL_API } = process.env
        const { github_username, techs } = req.body
        
        const apiResponse = await axios.get(`${GITHUB_URL_API}/${github_username}`)
        const { name = login, bio, avatar_url } = apiResponse.data

        console.log({
            name,
            github_username,
            bio,
            avatar_url,
            techs: parseStringToArray(techs)
        });
        
        res.json({ status: 'ok' })
    }
    
}

export default DevController



