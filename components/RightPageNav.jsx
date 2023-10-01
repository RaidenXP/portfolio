import Link from "next/link";

const RightPageNav = ({ items }) => {
  return (
    <nav
      className='w-56 shrink-0 order-last hidden lg:block'
    >
      <div className='sticky top-[126px] h-[calc(100vh-121px)]'>
        <div className='mb-1 mt-[7px] text-sm font-medium text-black dark:text-white'>
          On this page
        </div>
        <div className='relative'>
          <ul className='space-y-2.5 py-2 text-sm overflow-y-auto max-h-[70vh]'>
            {items.map((item) => (
              <li key={item.id}>
                <Link href={item.id} 
                  className={`block text-gray-600 dark:text-gray-300 hover:text-violet-700 
                  dark:hover:text-violet-400 leading-[1.6]
                  ${(item.inView) ?
                    'text-violet-700 dark:text-violet-400' : ''
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='pt-5 mt-3 space-y-2 text-sm text-gray-900 border-t border-gray-300'></div>
      </div>
    </nav>
  )
}

export default RightPageNav