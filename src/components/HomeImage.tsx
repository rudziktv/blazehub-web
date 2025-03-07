import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "../providers/ThemeProvider";

const HomeImage = ({ src, lightSrc, side = "left" }: HomeImageProps) => {
	const { theme } = useTheme();

	return (
		<motion.div
			className={`bg-contain w-auto bg-center ${
				side === "left" ? "self-start" : "self-end"
			} relative`}
			initial={{
				transform:
					side === "left" ? "translateX(-100%)" : "translateX(100%)",
				opacity: 0,
			}}
			animate={{ opacity: 1 }}
			whileInView={{
				transform:
					side === "left" ? "translateX(-15%)" : "translateX(15%)",
				opacity: 1,
			}}
			whileHover={{ transform: "translateX(0%)" }}
		>
			<motion.img
				className="bg-contain w-auto bg-center"
				src={src}
			></motion.img>
			<AnimatePresence>
				{theme === "light" && (
					<motion.img
						className="absolute top-0 left-0 w-full h-full"
						src={lightSrc}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					></motion.img>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

interface HomeImageProps {
	src: string;
	lightSrc: string;
	side?: "left" | "right";
}

export default HomeImage;
