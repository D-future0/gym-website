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
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio nesciunt debitis iure accusantium optio.",
    image: image1,
  },
  {
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio nesciunt debitis iure accusantium optio.",
    image: image2,
  },
  {
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio nesciunt debitis iure accusantium optio.",
    image: image3,
  },
  {
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio nesciunt debitis iure accusantium optio.",
    image: image4,
  },
  {
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio nesciunt debitis iure accusantium optio.",
    image: image5,
  },
  {
    title: "Lorem ipsum dolor",
    image: image6,
  },
]


type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section
      className='w-full bg-[#FFE1E0] py-10'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)} 
        id="ourclasses"
        className='mt-10'
      >
        <div className='flex flex-col items-center'>
          <Htext>Our Classes</Htext>
          <div className='md:w-3/5 text-center'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio nesciunt debitis iure accusantium optio. Ea, illo non qui deserunt corporis ab impedit sed totam!</p>
          </div>
        </div>
        <div className='mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden'>
          <ul className='w-[2800px] whitespace-nowrap'>
            {classes.map((item: ClassType, index) => (
              <Class key={`${item.title}-${index}`}
                title={item.title}
                description={item.description || ""}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses