import Image from "next/image"
import RightPageNav from "@/components/RightPageNav"

const WIPProjectPage = () => {
  return (
   <>
      <div className='w-full min-w-0 max-w-6xl mt-4 px-1 md:px-6 
        min-h-[calc(100vh-103px)] block' 
      >
        <figure className='flex mb-5 justify-center'>
          <Image
            src={'/WIP/WIP.png'}
            alt="Work in Progress Come back later."
            width={500}
            height={500}
          />
        </figure>
      </div>
      <RightPageNav items={[]}/>
   </>
  )
}

export default WIPProjectPage