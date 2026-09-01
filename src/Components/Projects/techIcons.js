import {
    SiReact,
    SiBootstrap,
    SiNodedotjs,
    SiExpress,
    SiPrisma,
    SiPostgresql,
    SiJsonwebtokens,
    SiFirebase,
    SiMongodb,
    SiJavascript,
    SiTypescript,
    SiDotnet,
    SiMicrosoftsqlserver,
    SiSwagger,
} from 'react-icons/si'
import { FaCode } from 'react-icons/fa'

// Add an entry here whenever a project lists a technology this map doesn't
// cover yet. Anything missing falls back to a generic icon instead of
// breaking the build.
export const TECH_ICONS = {
    'React': SiReact,
    'Bootstrap': SiBootstrap,
    'Node.js': SiNodedotjs,
    'Express': SiExpress,
    'Prisma': SiPrisma,
    'PostgreSQL': SiPostgresql,
    'JWT': SiJsonwebtokens,
    'Firebase': SiFirebase,
    'MongoDB': SiMongodb,
    'JavaScript': SiJavascript,
    'TypeScript': SiTypescript,
    // No dedicated ASP.NET Core icon exists in react-icons — the general
    // .NET logo is the closest available match.
    'ASP.NET Core': SiDotnet,
    'SQL Server': SiMicrosoftsqlserver,
    'Swagger': SiSwagger,
    // No Entity Framework Core icon exists anywhere in react-icons; falls
    // through to DEFAULT_TECH_ICON until a real logo asset is supplied.
}

export const DEFAULT_TECH_ICON = FaCode
