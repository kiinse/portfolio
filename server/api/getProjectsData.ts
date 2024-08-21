import path from 'path'
import fs from 'fs/promises'
import initialConfig from "../../config/initial.config";

export default defineEventHandler(async (event) => {

    let jsons = [];

    const dirFiles = await fs.readdir(initialConfig.dirs.projects);

    for (const file of dirFiles) {
        jsons.push(
            JSON.parse(
                await fs.readFile(path.join(initialConfig.dirs.projects, `${file}`), 'utf8')
            )
        )
    }

    return jsons
})