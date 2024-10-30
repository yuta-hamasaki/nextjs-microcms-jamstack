import Link from "next/link"
 interface Blog{
  title:string;
  id:string;
  description?:string;
 }

const blogCard = ({title, id, description}:Blog) => {
  return (
    <Link href={`/blogs/${id}`}>
      <div className="content rounded shadow-lg m-10 p-5">
        <h2 className="font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  )
}

export default blogCard
