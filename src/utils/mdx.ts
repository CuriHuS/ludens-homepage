import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { promisify } from 'util';

// Convert fs methods to promises
const readFile = promisify(fs.readFile);

/**
 * Get MDX content for a specific project by id
 * @param id The project id
 * @returns The MDX component and frontmatter, or null if not found
 */
export async function getProjectContent(id: string) {
    try {
        const filePath = path.join(process.cwd(), 'src/content/projects', `${id}.mdx`);
        const fileContent = await readFile(filePath, 'utf-8');
        const { data: frontmatter, content } = matter(fileContent);
        
        return {
            content,
            frontmatter
        };
    } catch {
        return null;
    }
}
