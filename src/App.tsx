import { useTheme } from "./providers/ThemeProvider";
import { AnimatePresence, motion } from "motion/react";
import installShot from "./assets/screenshots/installed-tab-dark.png";
import installShotLight from "./assets/screenshots/installed-tab-light.png";
import queueShot from "./assets/screenshots/progress-tab-dark.png";
import queueShotLight from "./assets/screenshots/progress-tab-light.png";
import modeShot from "./assets/screenshots/mode-selection-dark.png";
import modeShotLight from "./assets/screenshots/mode-selection-light.png";
import { RiDownloadLine, RiMoonClearLine, RiSunFill } from "@remixicon/react";
import HomeImage from "./components/HomeImage";
import InstalledTab from "./components/linux-app/InstalledTab";

function App() {
	const { theme, setTheme } = useTheme();

	const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");

	return (
		<>
			<div
				id="app"
				className="bg-background text-foreground duration-700 w-screen h-screen rounded-none"
			>
				<div className="navbar">
					<span className="text-2xl font-bold text-center">
						Blaze Hub
					</span>
					<div className="flex-1"></div>
					<div className="flex gap-2">
						<button
							className="transparent circular"
							onClick={changeTheme}
						>
							<AnimatePresence>
								{theme === "dark" ? (
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									>
										<RiSunFill />
									</motion.div>
								) : (
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									>
										<RiMoonClearLine />
									</motion.div>
								)}
							</AnimatePresence>
						</button>
						<button className="action text-lg mono">
							Download <RiDownloadLine />
						</button>
					</div>
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
					<HomeImage src={installShot} lightSrc={installShotLight} />
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
					<HomeImage
						src={modeShot}
						lightSrc={modeShotLight}
						side="right"
					/>
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
					<HomeImage src={queueShot} lightSrc={queueShotLight} />
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
						<button
							className="action text-2xl mono"
							onClick={changeTheme}
						>
							Download <RiDownloadLine />
						</button>
					</motion.div>

					<InstalledTab />
				</div>
			</div>
		</>
	);
}

export default App;
