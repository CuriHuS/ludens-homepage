import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { promisify } from 'util';

// Convert fs methods to promises
const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);

// Define types for MDX modules
type MDXContent = React.ComponentType<any>;

interface MDXModule {
    default: MDXContent;
    frontmatter?: Record<string, any>;
}

// Helper type for the return value of getProjectContent
interface ProjectContent {
    Component: MDXContent;
    frontmatter: Record<string, any>;
}

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
    } catch (error) {
        return null;
    }
}

// export async function getProjectList() {
//     const projectDir = path.join(process.cwd(), 'src/content/projects');
    
//     try {
//         const files = await readdir(projectDir);
        
//         const projects = await Promise.all(
//             files
//                 .filter(file => file.endsWith('.mdx'))
//                 .map(async (file) => {
//                     const filePath = path.join(projectDir, file);
//                     const fileContent = await readFile(filePath, 'utf-8');
//                     const { data: frontmatter } = matter(fileContent);
                    
//                     return {
//                         ...frontmatter,
//                         id: file.replace('.mdx', ''),
//                     };
//                 })
//         );
        
//         return projects;
//     } catch (error) {
//         console.error('Error reading projects:', error);
//         return [];
//     }
// }