import path from 'path'
import fs from 'fs/promises'
import initialConfig from "../../config/initial.config";

export default defineEventHandler(async (event) => {

    let jsons = [];

    const dirFiles = await fs.readdir(initialConfig.projects.dir);

    for (const file of dirFiles) {
        jsons.push(
            JSON.parse(
                await fs.readFile(path.join(initialConfig.projects.dir, `${file}`), 'utf8')
            )
        )
    }

    return jsons
})