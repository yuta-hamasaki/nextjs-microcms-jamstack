export interface eyecatch{
  width:number;
  height:number;
  url:string;
}

export interface Blog {
  id: string;
  title: string;
  description?:string;
  content: string;   
  body?:string;
  category?: string[];
  eyecatch?: eyecatch;
}
