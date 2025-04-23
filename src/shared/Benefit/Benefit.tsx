import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "../Types/Types"
import { motion } from "framer-motion";

type Props = {
    icon: React.ReactNode;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void
}

const itemVariants2 = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
    return (
        <motion.div
            variants={itemVariants2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}
            className='mt-5 rounded-md border border-[#DFCCCC] px-5 py-8 mx-3 text-center'>
            <div className='mb-4 flex justify-center'>
                <div className='p-2 rounded-full border boreder-[#DFCCCC] bg-[#FFE1E0]'>
                    {icon}
                </div>
            </div>
            <h3 className='font-bold'>
                {title}
            </h3>
            <p className='my-3'>
                {description}
            </p>
            <AnchorLink className="text-sm font-bold text-[#FF6B66] underline hover:text-[#FFCD5B]" onClick={() => setSelectedPage(SelectedPage.ContactUs)} href={`${SelectedPage.ContactUs}`}>
                <p>Learn More</p>
            </AnchorLink>
        </motion.div>
    )
}

export default Benefit