import path from 'path'
import fs from 'fs/promises'
import initialConfig from "../../config/initial.config";


export default defineEventHandler(async (event) => {

    let jsons = [];

    const dirFiles = await fs.readdir(initialConfig.dirs.blog);

    for (const file of dirFiles) {
        jsons.push(
            JSON.parse(
                await fs.readFile(path.join(initialConfig.dirs.blog, `${file}`), 'utf8')
            )
        )
    }
    jsons.sort(function(a, b) {
        return +new Date(a.date) - +new Date(b.date);
    });
    jsons.reverse()
    return jsons;
})