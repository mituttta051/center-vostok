import {useState} from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import {FaBoxesStacked, FaCompass, FaMoneyBillWave} from "react-icons/fa6";
import {FaTrain} from "react-icons/fa";
import SectionTitle from "@/components/common/section-title";
import Button from "@/components/common/button";
import {useRouter} from "next/navigation";
import UnderLine from "@/components/common/under-line";

function IconCard({
                      icon,
                      onMouseEnter,
                      text,
                  }: {
    icon: JSX.Element;
    onMouseEnter: () => void;
    text: string;
}) {
    return (
        <motion.div
            onMouseEnter={onMouseEnter}
            className="flex w-full flex-col items-center gap-6 lg:items-start cursor-pointer text-gray-800"
            whileHover={{scale: 1.05}} // Scale up slightly on hover
            whileTap={{scale: 0.95}} // Scale down slightly on tap
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3}}
        >
            {icon}
            <div
                className="flex max-w-[280px] flex-col items-center gap-4 text-center lg:items-start lg:gap-6 lg:text-start">
                <p className="text-xl tracking-tight">{text}</p>
            </div>
        </motion.div>
    );
}

export default function FeatureSection() {
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState(0);
    const images = [
        "/train-aesthetics/two-trains.jpg",
        "/train-aesthetics/train.jpg",
        "/train-aesthetics/cargo-chb.jpg",
        "/Multitasking.jpg",
        "/pay.jpg",
    ];

    return (
        <section
            id="about-us"
            className="w-full px-4 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col gap-8 xl:gap-16 py-20 text-center lg:flex-row mx-auto">
            {/* Left Section (Image Carousel) */}
            <motion.div
                className="hidden lg:block flex-1 rounded-2xl bg-slate-50 lg:min-w-[100px] overflow-hidden relative"
                initial={{opacity: 0, x: -100}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
            >
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="absolute top-0 left-0 w-full h-full"
                        initial={{opacity: 0}}
                        animate={{opacity: index === selectedImage ? 1 : 0}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5}}
                    >
                        <Image
                            src={image}
                            className="object-cover h-32 lg:h-[500px] w-full"
                            alt="trains"
                            width={1000}
                            height={1024}
                            priority={true}
                        />
                    </motion.div>
                ))}
            </motion.div>
            {/* Right Section (Content & Icons) */}
            <div className="flex flex-col gap-12 justify-between">
                <div className="flex flex-col gap-4 lg:text-start">
                    <SectionTitle title="Наши услуги"/>
                    <motion.div
                        initial={{scaleX: 0, originX: 1 }}
                        whileInView={{scaleX: 1 }}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}>
                        <UnderLine/>
                    </motion.div>
                </div>
                <div className="grid w-full grid-flow-row justify-items-start gap-12 md:grid-cols-2">
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        viewport={{once: true}}
                    >
                        <IconCard
                            icon={<FaTrain className="size-8"/>}
                            onMouseEnter={() => setSelectedImage(1)}
                            text="Транспортно-экспедиционные услуги"
                        />
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.05}}
                        viewport={{once: true}}
                    >
                        <IconCard
                            icon={<FaBoxesStacked className="size-8 stroke-blue-700 [&>g>circle]:stroke-blue-300"/>}
                            onMouseEnter={() => setSelectedImage(2)}
                            text="Организация перевозок грузов"
                        />
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.1}}
                        viewport={{once: true}}

                    >
                        <IconCard
                            icon={<FaCompass className="size-8 stroke-blue-700"/>}
                            onMouseEnter={() => setSelectedImage(3)}
                            text="Диспетчеризация продвижения грузов"
                        />
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.15}}
                        viewport={{once: true}}
                    >
                        <IconCard
                            icon={<FaMoneyBillWave className="size-8 stroke-blue-700"/>}
                            onMouseEnter={() => setSelectedImage(4)}
                            text="Оплата Ж/Д тарифа"
                        />
                    </motion.div>

                </div>
                <motion.div
                    className="flex gap-4 lg:text-start justify-center"
                    whileHover={{scale: 1.03}}
                    whileTap={{scale: 0.95}}
                    initial={{opacity: 0, x: 100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                >
                    <Button
                        className="bg-default-violet-500 hover:bg-default-violet-900 text-lg tracking-wide max-w-64 lg:max-w-full grow"
                        onClick={() => router.push("/request")}
                        type="button"
                    >
                        Запросить услугу
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}