// import useMediaQuery from "@/hooks/useMediaQuery"
import { SelectedPage } from "@/shared/Types/SelectedPage"
import ActionButton from "@/shared/ActionButton"
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
// import SponsorRedBull from '@/assets/SponsorRedBull.png'
// import SponsorForbes from '@/assets/SponsorForbes.png'
// import SponsorFortune from '@/assets/SponsorFortune.png'
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    // const isAboveMediumScreen = useMediaQuery('(min-width:1080px')
    // const flexBetween = 'flex items-center justify-center md:justify-between'

    return (
        <section
            id="home"
            className={`gap-8 bg-gray-20 py-8 sm:py-10 md:h-full md:pb-0`}
        >
            <div className="relative mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">

                {/*image and main header*/}
                {/*main header*/}
                <img src="/src/assets/EvolveText.png" alt="" className="absolute hidden lg:block z-[10] top-18 -left-10 w-3/5"/>
                <div className="z-10 my-6 mt-32 md:basis-3/5">
                    {/*headings*/}
                    <div className="pt-0  md:-pt-20">
                            <div>
                                <img src={HomePageText} alt="home-page-text" />
                            </div>
                        <p className=" my-6">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita omnis saepe officiis necessitatibus atque, impedit quis, et earum unde ratione exercitationem odit veniam perferendis mollitia velit. Non maxime sapiente id.
                        </p>
                    </div>
                    {/*headings*/}
                    <div className="flex flex-row items-center gap-x-10">
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join now
                    </ActionButton>
                    <AnchorLink className="text-sm font-bold text-[#FF6B66] underline hover:text-[#FFCD5B]" onClick={() => setSelectedPage(SelectedPage.ContactUs)} href={`${SelectedPage.ContactUs}`}>
                        <p>Learn More</p>
                    </AnchorLink>
                    </div>
                </div>
            {/*image*/}
            <div className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end">
                <img alt="home-pageGraphic" src={HomePageGraphic} />
            </div>
            </div>
        </section>
    )
}

export default Home