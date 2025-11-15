export type Feedback = {
  id: number
  name: string
  title: string
  content: string
  rating: number
  mediaType: 'video' | 'image'
  mediaSrc: string
};