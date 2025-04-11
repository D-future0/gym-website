
import Benefit from "@/shared/Benefit/Benefit"
import Htext from "@/shared/Htext"
import { BenefitsType, SelectedPage } from "@/shared/Types/Types"
import { UserGroupIcon, HomeModernIcon, AcademicCapIcon } from "@heroicons/react/16/solid"
import { motion } from "framer-motion"


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
const itemVariants1 =  {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1, transition:{duration:0.5, ease:"easeInOut"} },
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
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            id="benefits" className="mx-auto min-h-full w-5/6 py-6">
                <div className="my-6 md:w-w-5/6">
                <motion.div variants={itemVariants1}>
                    <Htext>More Than Just A Gym</Htext>
                </motion.div>
                    <motion.p variants={itemVariants1} className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus dolorum ipsum odit laborum. Expedita beatae, ullam delectus tenetur amet voluptatibus harum ipsum facere temporibus dolores culpa modi quas. Ea.</motion.p>
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
                </div>
        </motion.section>
    )
}

export default Benefits