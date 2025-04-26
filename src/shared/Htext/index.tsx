

type Props = {
    children: React.ReactNode
}

const Htext = ({children}: Props) => {
  return (
    <h1 className="my-4 basic-3/4 font-montserrat font-bold text-3xl text-[]">{children}</h1>
  )
}

export default Htext