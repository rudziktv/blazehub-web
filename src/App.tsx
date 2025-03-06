import { ThemeProvider, useTheme } from "./providers/ThemeProvider";
import { AnimatePresence, motion } from "motion/react";
import installShot from "./assets/screenshots/Screenshot From 2025-03-06 21-10-17.png";
import installShotLight from "./assets/screenshots/Screenshot From 2025-03-06 21-10-36.png";
import queueShot from "./assets/screenshots/queue-progress-view.png";
import modeShot from "./assets/screenshots/installation-mode-choose.png";
import { RiDownload2Line, RiDownloadLine } from "@remixicon/react";

function App() {
	const { theme, setTheme } = useTheme();

	return (
		<>
			<div
				id="app"
				className="bg-background text-foreground duration-700 w-screen h-screen rounded-none"
			>
				<div id="navbar">
					<button>Download</button>
					<button
						onClick={() =>
							setTheme(theme === "light" ? "dark" : "light")
						}
					>
						Theme
					</button>
				</div>
				<div
					id="content"
					className="mt-16 bg-background duration-700 flex flex-col overflow-x-hidden gap-16"
				>
					<motion.div
						className="flex flex-col gap-2 items-start mb-[-64px]"
						initial={{ transform: "translateX(-100%)", opacity: 0 }}
						whileInView={{
							transform: "translateX(64px)",
							opacity: 1,
						}}
						transition={{ duration: 0.4 }}
					>
						<span className="text-6xl font-bold">Blaze Hub</span>
						<span className="text-2xl">
							Your new GNOME appstore
						</span>
					</motion.div>
					<motion.div
						className="bg-contain w-auto bg-center self-start relative"
						initial={{
							transform: "translateX(-100%)",
							opacity: 0,
						}}
						animate={{ opacity: 1 }}
						whileInView={{
							transform: "translateX(-15%)",
							opacity: 1,
						}}
						whileHover={{ transform: "translateX(0%)" }}
					>
						<motion.img
							className="bg-contain w-auto bg-center self-start relative"
							src={installShot}
						></motion.img>
						<AnimatePresence>
							{theme === "light" && (
								<motion.img
									className="absolute top-0 left-0 w-full h-full"
									src={installShotLight}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								></motion.img>
							)}
						</AnimatePresence>
					</motion.div>
					<motion.div
						className="flex flex-col gap-2 items-end mb-[-64px]"
						initial={{ transform: "translateX(100%)", opacity: 0 }}
						whileInView={{
							transform: "translateX(-64px)",
							opacity: 1,
						}}
						transition={{ duration: 0.4 }}
					>
						<span className="text-6xl font-bold">Control</span>
						<span className="text-2xl">
							Have more control over installing your software
						</span>
					</motion.div>
					<motion.img
						className="right-0 self-end"
						width={1286}
						height={944}
						src={modeShot}
						initial={{ transform: "translateX(100%)", opacity: 0 }}
						whileInView={{
							transform: "translateX(15%)",
							opacity: 1,
						}}
						whileHover={{ transform: "translateX(0%)" }}
					></motion.img>
					<motion.div
						className="flex flex-col gap-2 items-start mb-[-64px]"
						initial={{ transform: "translateX(-100%)", opacity: 0 }}
						whileInView={{
							transform: "translateX(64px)",
							opacity: 1,
						}}
						transition={{ duration: 0.4 }}
					>
						<span className="text-6xl font-bold">Transparent</span>
						<span className="text-2xl">
							See and manage progress of your downloads
						</span>
					</motion.div>
					<motion.img
						src={queueShot}
						width={1286}
						height={944}
						initial={{ transform: "translateX(-100%)", opacity: 0 }}
						whileInView={{
							transform: "translateX(-15%)",
							opacity: 1,
						}}
						whileHover={{ transform: "translateX(0%)" }}
					></motion.img>
					<motion.div
						className="flex flex-col gap-2 items-end pb-24"
						initial={{ transform: "translateX(100%)", opacity: 0 }}
						whileInView={{
							transform: "translateX(-64px)",
							opacity: 1,
						}}
						transition={{ duration: 0.4 }}
					>
						<span className="text-6xl font-bold">Early access</span>
						<span className="text-2xl">
							Download and become a beta tester right now!
						</span>
						<button className="action">
							Download <RiDownloadLine />
						</button>
					</motion.div>
				</div>
			</div>
		</>
	);
}

export default App;
