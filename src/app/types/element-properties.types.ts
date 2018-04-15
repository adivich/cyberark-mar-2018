export interface ElementProperties {
  color?: string,
  opacity?: number,
  title?: string,
  tag: string
}

export interface Project {
  id: number,
  elements: ElementProperties[]
}

export const TAGS = ['h1', 'h2', 'p', 'div'];

