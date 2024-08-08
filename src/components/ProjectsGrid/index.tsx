import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

interface Project {
	name: string;
	description: string;
	stack: string[];
	preview: string;
	demo_url: string;
}

const getProjects = async (): Promise<Project[]> => {
	const response = await fetch("https://cms.heyyczer.com/items/portfolio_projects");
	const { data } = await response.json();
	return data;
}

const list = [1, 2, 5, 6, 9, 10, 13, 14];

export async function ProjectsGrid() {
	const projects = await getProjects();

	return (
		<BentoGrid className="max-w-4xl mx-auto">
			{projects.map((project, i) => (
				<BentoGridItem
					key={i}
					title={project.name}
					description={project.description}
					header={(
						<div className="min-h-[120px] max-h-[120px] h-[120px] w-auto flex flex-1 rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative overflow-hidden">
							{project.preview && (
								// eslint-disable-next-line @next/next/no-img-element
								<img
									src={`https://cms.heyyczer.com/assets/${project.preview}`}
									alt={project.name}
									className="h-full w-full rounded-xl object-cover"
								/>
							)}
						</div>
					)}
					icon={<FontAwesomeIcon icon={faCode} className="text-neutral-500" />}
					className={twMerge(list.includes(i) && "md:col-span-2", "overflow-hidden justify-start")}
				/>
			))}
		</BentoGrid>
	);
}
