export type technology = {
  name: string,
  color: string
  image: string
}

export type draftTechnology = Omit<technology, 'image'>


export type project = {
  name: string,
  description: string,
  technologies: draftTechnology[],
  image: string,
  url: string
}