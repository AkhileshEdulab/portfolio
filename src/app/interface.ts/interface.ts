
export interface Project {
  id?:number;
  name: string;
  description: string;
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}



export interface Service {
  id: number;
  name: string;
  description: string;
  icon: string; // Font Awesome or similar icon class
}