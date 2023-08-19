import Link from "next/link"

const SeriesCard = ({ link, title, description }) => {
  return (
    <Link
      href={link}
      className="bg-inherit group block space-y-2 rounded-md border border-inherit p-6 pt-5 shadow-md
      shadow-black/5 transition-shadow duration-300 hover:shadow-lg"
    >
      <h3 className="group-hover:text-violet-700 truncate text-lg font-medium leading-snug">
        {title}
      </h3>
      <div className="line-clamp-3 text-sm font-normal text-gray-900">
        {description}
      </div>
    </Link>
  )
}

export default SeriesCard