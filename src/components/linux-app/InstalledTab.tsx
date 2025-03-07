import {
	RiCloseFill,
	RiLayoutGridFill,
	RiLoopRightFill,
	RiSearchLine,
	RiSquareLine,
} from "@remixicon/react";
import ListBox from "../reusable/ListBox";
import Separator from "./Separator";

const InstalledTab = () => {
	return (
		<div className="linux p-8">
			<div className="window">
				<div className="headerbar">
					<div className="flex-1"></div>
					<div className="tabswitcher">
						<button>
							<RiSearchLine /> Search
						</button>
						<button className="selected">
							<RiLayoutGridFill /> Installed
						</button>
						<button>
							<RiLoopRightFill /> Updates
						</button>
					</div>
					<div className="flex-1"></div>
					<div className="windowcontrolbtns pr-1.5">
						<button>
							<RiSquareLine className="scale-75" />
						</button>
						<button>
							<RiCloseFill />
						</button>
					</div>
				</div>
				<div className="content flex justify-center p-4">
					<div className="boxed-list flex-1 max-w-[768px]">
						<ListBox
							// separator={div}
							separator={Separator}
							source={["Nie Blazehub", "BlazeHub"]}
							render={(i) => <div>{i}</div>}
						/>
						<div className="listitem p-4">Blaze Hub v0.1.0-alpha Download</div>
						<div className="separator"></div>
						<div className="listitem p-4">Blaze Hub v0.1.0-alpha Download</div>
						<div className="separator"></div>
						<div className="listitem p-4">Blaze Hub v0.1.0-alpha Download</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InstalledTab;
