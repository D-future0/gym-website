import Htext from '@/shared/Htext';
import { SelectedPage, ClassType } from '@/shared/Types/Types'
import { motion } from 'framer-motion';
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import Class from '@/shared/Class';

const classes: Array<ClassType> = [
  {
    title:"Lorem ipsum dolor",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio nesciunt debitis iure accusantium optio.",
    image:image1,
  },
  {
    title:"Lorem ipsum dolor",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio nesciunt debitis iure accusantium optio.",
    image:image2,
  },
  {
    title:"Lorem ipsum dolor",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio nesciunt debitis iure accusantium optio.",
    image:image3,
  },
  {
    title:"Lorem ipsum dolor",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio nesciunt debitis iure accusantium optio.",
    image:image4,
  },
  {
    title:"Lorem ipsum dolor",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio nesciunt debitis iure accusantium optio.",
    image:image5,
  },
  {
    title:"Lorem ipsum dolor",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio nesciunt debitis iure accusantium optio.",
    image:image6,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: ({
      staggerChildren: 0.2, // Delay between items
    })
  },
};
// const itemVariants1 =  {
//   hidden: { x: -50, opacity: 0 },
//   show: { x: 0, opacity: 1, transition:{duration:0.5, ease:"easeInOut"} },
// };
// const itemVariants2 =  {
//   hidden: { y: 50, opacity: 0 },
//   show: { y: 0, opacity: 1, transition:{duration:0.5, ease:"easeInOut"} },
// };

type Props = {
    setSelectedPage:(value: SelectedPage) => void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <motion.section 
    onViewportEnter={()=> setSelectedPage(SelectedPage.Home)}className='w-full bg-[#FFE1E0] py-10'> 
    <motion.div
    variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount:0.2 }}
                id="home"
    > 
    <div className='md:w-3/5'>
      <Htext>Our Classes</Htext>
      <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio nesciunt debitis iure accusantium optio. Ea, illo non qui deserunt corporis ab impedit sed totam!</p>
    </div>
    <div className='mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden'>
    <ul className='w-[28000px] whitespace-nowrap'>
    {classes.map((item:ClassType , index)=>(
      <Class key={`${item.title}-${index}`}/>
    ))}
    </ul>
    </div>
    </motion.div>
    </motion.section>
  )
}

export default OurClasses