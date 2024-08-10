import { HoverEffect } from "../ui/card-hover-effect";

interface Project {
	name: string;
	description: string;
	stack: string[];
	preview: string;
	demo_url?: string;
	github_url?: string;
}

const getProjects = async (): Promise<Project[]> => {
	const response = await fetch("https://cms.heyyczer.com/items/portfolio_projects");
	const { data } = await response.json();
	return data;
}

export async function ProjectsGrid() {
	const projects = await getProjects();

	return (
		<HoverEffect items={
			projects.map((project: Project) => ({
				title: project.name,
				description: project.description,
				stack: project.stack,
				preview: project.preview,
				link: project.demo_url,
				githubRepo: project.github_url
			}))
		} />
	);
}
