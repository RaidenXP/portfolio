import Image from "next/image"

const WIPPage = () => {
  return (
    <div className='grid justify-center items-center w-full min-w-0 min-h-[calc(100vh-103px)]
    p-7' 
    >
      <Image
        src={'/WIP/WIP.png'}
        alt="Work in Progress Come back later."
        width={700}
        height={700}
      />
    </div>
  )
}

export default WIPPage