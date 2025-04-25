import Htext from "@/shared/Htext";
import { SelectedPage } from "@/shared/Types/Types"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import EvolveText from "@/assets/EvolveText.png"



const itemVariants1 = {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};
const itemVariants2 = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const { trigger, register, formState: { errors } } = useForm()

    const inputStyle = `w-full rounded-md mt-5 px-5 py-3 placeholder-white bg-[#FF6B66]`
    const HandleSubmit = () => {
        const isVaild = trigger()
        if (!isVaild) {

        }
    }
    return (
        <section id="contactus" className="mx-auto md:w-5/6 p-4 pb-10">
            <motion.div
                onViewportEnter={() => (setSelectedPage(SelectedPage.ContactUs))}
                className="lg:flex items-center lg:justify-between mt-20"
            >

                <div>
                <motion.div
                    variants={itemVariants1}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full pr-10"
                >
                    <Htext>
                        <span className="text-[#FF6B66]">JOIN NOW</span> {" "} TO GET IN SHAPE
                    </Htext>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, quibusdam rem cupiditate veritatis accusamus eaque blanditiis maiores voluptas tempore error illum dignissimos eligendi aspernatur tempora!</p>
                </motion.div>
                <motion.form
                    variants={itemVariants2}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full md:pr-10"
                    onSubmit={() => HandleSubmit()}
                    method="POST"
                    action={"https://formsubmit.co/2898cdc78b1433bd26a5e8819bd060f5"}
                >
                    <input
                        className={inputStyle}
                        type="text"
                        placeholder="NAME"
                        {...register(`name`, {
                            maxLength: 50,
                            required: true,
                        })}
                    />
                    {register.name && (
                        <p className="mt-1 text-[#FF6B66]">
                            {errors.name?.type === "required" && "This field is required"}
                            {errors.name?.type === "maxLength" && "Max length is 50"}
                        </p>
                    )}
                    <input
                        className={inputStyle}
                        type="text"
                        placeholder="EMAIL"
                        {...register(`email`, {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })}
                    />
                    {register.name && (
                        <p className="mt-1 text-[#FF6B66]">
                            {errors.email?.type === "required" && "This field is required"}
                            {errors.email?.type === "pattern" && "Email is required"}
                        </p>
                    )}

                    <textarea
                        rows={4}
                        cols={50}
                        className={inputStyle}
                        placeholder="MESSAGE"
                        {...register(`message`, {
                            maxLength: 50,
                            required: true,
                        })}
                    />
                    {register.name && (
                        <p className="mt-1 text-[#FF6B66]">
                            {errors.message?.type === "required" && "This field is required"}
                            {errors.message?.type === "maxLength" && "Max length is 2000"}
                        </p>
                    )}

                    <button
                        type="button"
                        className="mt-5 rounded-md bg-[#FFC132] px-20 py-3"
                    >Submit</button>
                </motion.form>
                </div>
                <motion.div
                variants={itemVariants2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="relative w-full flex justify-center items-center mt-20 lg:mt-0 lg:max-w-1/2"
                >
                    <img src={EvolveText} alt="ContactUsPageGraphic" className="absolute md:block z-[10] -bottom-14 -left-5 hidden"/>
                    <div>
                    <img src={ContactUsPageGraphic} alt="ContactUsPageGraphic" className="max-w-2xl"/>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default ContactUs