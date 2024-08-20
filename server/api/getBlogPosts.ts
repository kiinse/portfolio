import path from 'path'
import fs from 'fs/promises'


export default defineEventHandler(async (event) => {

    let jsons = [];

    const dirFiles = await fs.readdir('./content/blog');

    for (const file of dirFiles) {
        jsons.push(
            JSON.parse(
                await fs.readFile(path.join(process.cwd(), 'content', 'blog', `${file}`), 'utf8')
            )
        )
    }
    jsons.sort(function(a, b) {
        return +new Date(a.date) - +new Date(b.date);
    });
    jsons.reverse()
    return jsons;
})