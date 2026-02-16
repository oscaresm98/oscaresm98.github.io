export type technologyArea = "web" | "data"

export type technology = {
  name: string,
  color: string
  image: string
  area: technologyArea
}

export type draftTechnology = Omit<technology, 'image' | 'area'>

export type projectCategory = "web" | "data"

export type project = {
  name: string,
  description: string,
  technologies: draftTechnology[],
  image: string,
  url: string,
  category: projectCategory
}
