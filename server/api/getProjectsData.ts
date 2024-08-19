import path from 'path'
import fs from 'fs/promises'


export default defineEventHandler(async (event) => {

    let jsons = [];

    const dirFiles = await fs.readdir('./content/projects');

    for (const file of dirFiles) {
        jsons.push(
            JSON.parse(
                await fs.readFile(path.join(process.cwd(), 'content', 'projects', `${file}`), 'utf8')
            )
        )
    }

    return jsons
})