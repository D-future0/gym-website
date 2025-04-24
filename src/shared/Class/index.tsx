

type Props = {
  title:string;
  description:string;
  image: string;
}

const Class = ({title, description, image}:Props) => {
  const overlayStyle = `p-5 absolute flex flex-col items-center justify-center z-30 h-[350px] w-[450px] whitespace-normal bg-[#FF6B66] opacity-0 transition duration-500 hover:opacity-90`
  return (
    <li className="relative mx-6 inline-block h-[350px] w-[450px] text-white">
      <div className={overlayStyle}>
        <p className="text-2xl">{title}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt={`${image}`}/>
    </li>
  )
}

export default Class