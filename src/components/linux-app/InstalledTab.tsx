import {
	RiCloseFill,
	RiLayoutGridFill,
	RiLoopRightFill,
	RiSearchLine,
} from "@remixicon/react";

const InstalledTab = () => {
	return (
		<div className="linux">
			<div className="window">
				<div className="headerbar">
					<div className="tabswitcher">
						<button>
							<RiSearchLine /> Search
						</button>
						<button>
							<RiLayoutGridFill /> Installed
						</button>
						<button>
							<RiLoopRightFill /> Updates
						</button>
					</div>
					<div className="windowcontrolbtns">
						<button>
							<RiCloseFill />
						</button>
					</div>
				</div>
				<div className="content">Installed applications</div>
			</div>
		</div>
	);
};

export default InstalledTab;
