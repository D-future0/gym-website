
import ActionButton from "@/shared/ActionButton"
import Benefit from "@/shared/Benefit/Benefit"
import Htext from "@/shared/Htext"
import { BenefitsType, SelectedPage } from "@/shared/Types/Types"
import { UserGroupIcon, HomeModernIcon, AcademicCapIcon } from "@heroicons/react/16/solid"
import { motion } from "framer-motion"
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
import Sparkles from '@/assets/Sparkles.png'
import AbstractWaves from '@/assets/AbstractWaves.png'


type Props = {
    setSelectedPage: (value: SelectedPage) => void
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
const itemVariants1 = {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

const benefit: Array<BenefitsType> = [
    {
        icon: <HomeModernIcon width={32} />,
        title: "Lorem ipsum dolor sit amet.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, officiis? Accusantium libero corporis ut perferendis modi?"
    },
    {
        icon: <UserGroupIcon width={32} />,
        title: "Lorem ipsum dolor sit amet.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, officiis? Accusantium libero corporis ut perferendis modi?"
    },
    {
        icon: <AcademicCapIcon width={32} />,
        title: "Lorem ipsum dolor sit amet.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, officiis? Accusantium libero corporis ut perferendis modi?"
    },
]

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}
            id="benefits" className="mx-auto min-h-full w-5/6 py-10">
            <div className="mt-16">
                <div className="flex flex-col md:items-center">
                <motion.div variants={itemVariants1}>
                    <Htext>More Than Just A Gym</Htext>
                </motion.div>
                <div className='md:w-5/6 md:text-center text-left'>
                <motion.p variants={itemVariants1} className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus dolorum ipsum odit laborum. Expedita beatae, ullam delectus tenetur amet voluptatibus harum ipsum facere temporibus dolores culpa modi quas. Ea.</motion.p>
                </div>
                </div>
                <div className="md:flex items-center justify-between">
                    {benefit.map((benefit) => {
                        return (
                            <div>
                                <Benefit
                                    key={benefit.title}
                                    icon={benefit.icon}
                                    title={benefit.title}
                                    description={benefit.description}
                                    setSelectedPage={setSelectedPage}
                                />
                            </div>
                        )
                    })}
                </div>
                <div className="lg:flex items-center lg:justify-between gap-20 mt-20">
                    <motion.div 
                    variants={itemVariants1}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}
                    className="w-full lg:w-1/2 flex items-center justify-center">
                    <img src={BenefitsPageGraphic} alt="BenefitsPageGraphic" />
                    </motion.div>
                    <motion.div 
                    variants={itemVariants1}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="lg:w-1/2 ">
                        <div className="relative py-5">
                            <img src={AbstractWaves} alt="AbstractWaves" className="absolute lg:block z-[10] -top-14 -left-5"/>
                            <div>
                                <Htext>MILLIONS OF HAPPY MEMBERS GETTING{" "} <span className="text-[#FF616A]">FIT</span></Htext>
                            </div>
                        </div>
                        <div>
                            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odio necessitatibus tempore exercitationem debitis eligendi facilis, sint, minus officiis aperiam sequi. Suscipit adipisci fugit natus.</p>
                            <p className="mb-5 z-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odio necessitatibus tempore exercitationem debitis eligendi facilis, sint, minus officiis aperiam sequi. Suscipit adipisci fugit natus.</p>
                        </div>
                        <div>
                            <div className="relative">
                            <ActionButton setSelectedPage={setSelectedPage}>Join now</ActionButton>
                            <img src={Sparkles} alt="Sparkles" className="absolute lg:block w-32 -bottom-20 right-5"/>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default Benefits