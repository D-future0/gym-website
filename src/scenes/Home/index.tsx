// import useMediaQuery from "@/hooks/useMediaQuery"
import { SelectedPage } from "@/shared/Types/Types"
import ActionButton from "@/shared/ActionButton"
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: ({
        staggerChildren: 0.2, // Delay between items
      })
    },
  };
const itemVariants1 =  {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1, transition:{duration:0.5, ease:"easeInOut"} },
  };
  const itemVariants2 =  {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition:{duration:0.5, ease:"easeInOut"} },
  };

const Home = ({ setSelectedPage }: Props) => {

    return (
        <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount:0.2 }}
        onViewportEnter={()=> setSelectedPage(SelectedPage.Home)}
            id="home"
            className={`bg-gray-20 md:h-full md:pb-0`}
        >
            <div className="relative mx-auto w-5/6 items-center justify-center flex flex-col md:flex-row md:h-[80vh]">

                {/*image and main header*/}
                {/*main header*/}
                <img src="/src/assets/EvolveText.png" alt="EvolveText" className="absolute hidden lg:block z-[10] top-22 -left-5 w-1/2" />
                <div
                className="z-10 my-4 mt-18 lg:mt-32 md:basis-3/5">
                    {/*headings*/}
                    <div className="pt-6">
                        <motion.div variants={itemVariants1}>
                            <img src={HomePageText} width={400} alt="home-page-text" />
                        </motion.div>
                        <motion.p variants={itemVariants1} className=" my-6">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita omnis saepe officiis necessitatibus atque, impedit.
                        </motion.p>
                    </div>
                    {/*headings*/}
                    <motion.div variants={itemVariants1} className="flex flex-row items-center gap-x-10">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join now
                        </ActionButton>
                        <AnchorLink className="text-sm font-bold text-[#FF6B66] underline hover:text-[#FFCD5B]" onClick={() => setSelectedPage(SelectedPage.ContactUs)} href={`${SelectedPage.ContactUs}`}>
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>
                {/*image*/}
                <motion.div variants={itemVariants2} className="flex justify-center items-center max-w-90 md:z-10
              sm:mt-16 md:justify-items-end lg:ml-40">
                    <img alt="home-pageGraphic" src={HomePageGraphic} />
                </motion.div>
            </div>
            <motion.div 
            onViewportEnter={()=> setSelectedPage(SelectedPage.Home)}
            variants={itemVariants2} className="h-[110px] w-full bg-[#FFE1E0] py-6">
                <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-row justify-between w-5/6 md:w-2/3">
                        <img src={SponsorRedBull} alt='sponsor red bull' />
                        <img src={SponsorForbes} alt='sponsor Forbes' />
                        <img src={SponsorFortune} alt='sponsor Fortune' />
                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default Home