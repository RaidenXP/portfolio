import Link from "next/link"

const Linkable = ({ link, text }) => {
  return (
    <span className="underline text-violet-700 dark:text-violet-400">
      <Link
        href={link}
        target='_blank' rel='noopener noreferrer'
      >
        {text}
      </Link>
    </span>
  )
}

export default Linkable