export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'home-diy-blog',
  name: 'The Workbench',
  origin: 'https://home-diy-blog.oriz.in',
  tagline: 'Small home projects worth doing yourself',
  description:
    'Home & DIY projects with real steps, tool lists, and honest costs — organization, repairs, and budget refreshes anyone can do.',
}
