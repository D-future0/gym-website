import logo from "@/assets/logo.png"


const Footer = () => {
  return (
    <footer className="bg-[#FFE1E0]">
        <div className="justify-content py-16 mx-auto w-5/6 gap-16 md:flex">
        <div className="basis-1/2">
        <img src={logo} alt="logo" width={200}/>
        <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis sint fugit laboriosam! Mollitia, accusamus esse.</p>
        <p>©Boigym  All Rights Reserved.</p>
        </div>
        <div className="mt-12 basis-1/4 md:mt-0">
        <h4 className="font-bold">Links</h4>
        <p className="my-5">Home</p>
        <p className="my-5">Benefits</p>
        <p className="my-5">Our Classes</p>
        </div>
        <div className="mt-12 basis-1/4 md:mt-0">
        <h4 className="font-bold">Contact Us</h4>
        <p className="my-5">Example@email.com</p>
        <p className="my-5">+234-567-889</p>
        <p className="my-5">Physical Address</p>
        </div>
        </div>
    </footer>
  )
}

export default Footer