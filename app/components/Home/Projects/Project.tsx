import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

type Props = {
	position: number;
};

const Project = ({ position }: Props) => {
	return (
		<div
			className={`w-full flex items-center ${
				position % 2 === 0 ? "flex-row-reverse" : ""
			} relative single-project xs:flex-col`}
		>
			<div
				style={{
					backgroundImage:
						"radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(0, 11, 42, 0))",
				}}
				className={`absolute w-[500px] h-[500px] -top-[100px] ${
					position % 2 == 0 ? "-left-[100px]" : "-right-[100px]"
				} filter blur-3xl rounded-full overflow-hidden`}
			></div>
			<Image
				width={550}
				height={400}
				className="w-[550px], h-[400px] md:w-[450px] md:h-[300px] sm:w-[350px] sm:h-[200px] xs:w-full xs:h-full object-cover object-center rounded-lg xs:rounded-b-none relative z-10"
				src="/images/project.png"
				alt=""
			/>
			<div className="w-full relative z-20">
				<div
					className={`relative ${
						position % 2 === 0 ? "-mr-20" : "-ml-20"
					} text-[#d9d9d9] xs:m-0`}
				>
					<p
						className={`text-2xl font-extralight absolute ${
							position % 2 === 0 ? "left-5" : "right-5"
						} top-2 opacity-60`}
					>
						{position < 10 ? 0 : ""}
						{position}
					</p>
					<h2
						className={`text-4xl md:text-3xl sm:text-xl xs:text-base font-medium bg-[#102441] px-5 py-8 md:p-5 sm:py-3 xs:py-3 rounded-lg xs:rounded-t-none ${
							position % 2 === 0 ? "text-right" : "text-left"
						}`}
					>
						Lorem Ipsum Dolur
					</h2>
				</div>

				<div className="p-5 text-[#d9d9d9]">
					<p
						className={`text-base font-extralight ${
							position % 2 === 0 ? "text-right" : "text-left"
						} md:hidden sm:hidden xs:hidden`}
					>
						In publishing and graphic design, Lorem ipsum is a placeholder text
						commonly used to demonstrate the visual form of a document or a
						typeface without relying on meaningful content.
					</p>
					<div
						className={`flex items-center gap-3 flex-wrap mt-3 md:mt-0 ${
							position % 2 === 0 ? "justify-end" : "justify-start"
						} sm:hidden xs:hidden`}
					>
						<span className="inline-block px-3 py-1 bg-[#4444443a] rounded text-sm">
							Next Js
						</span>
						<span className="inline-block px-3 py-1 bg-[#4444443a] rounded text-sm">
							Tailwind
						</span>
						<span className="inline-block px-3 py-1 bg-[#4444443a] rounded text-sm">
							Redux
						</span>
						<span className="inline-block px-3 py-1 bg-[#4444443a] rounded text-sm">
							Node js
						</span>
					</div>

					<div
						className={`flex items-center ${
							position % 2 === 0 ? "justify-end" : "justify-start"
						} gap-4 sm:gap-2 xs:gap-1 mt-8 text-base md:mt-3 sm:mt-0 md:flex-wrap sm:flex-wrap sm:text-xs xs:flex-wrap xs:text-xs xs:mt-0 xs:justify-start`}
					>
						<button className="flex items-center gap-2 font-light">
							<FiExternalLink className="text-xl xs:text-base" /> Live preview
						</button>
						<span>|</span>
						<button className="flex items-center gap-2 font-light">
							<FiGithub className="text-xl xs:text-base" /> Client repo
						</button>
						<span>|</span>
						<button className="flex items-center gap-2 font-light">
							<FiGithub className="text-xl xs:text-base" /> Server repo
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
