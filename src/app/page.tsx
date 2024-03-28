import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import waveImage from "../assets/wave.svg";

const LANGUAGES = {
	java: {
		proficiency: "Intermediário",
	},
	html: {
		proficiency: "Avançado",
	},
	css: {
		proficiency: "Avançado",
	},
	js: {
		displayName: "JavaScript",
		proficiency: "Avançado",
	},
	nextjs: {
		displayName: "Next.js",
		proficiency: "Avançado",
	},
	react: {
		proficiency: "Avançado",
	},
	nodejs: {
		displayName: "Node.js",
		proficiency: "Avançado",
	},
	ts: {
		displayName: "TypeScript",
		proficiency: "Iniciante",
	},
	lua: {
		proficiency: "Avançado",
	},
	mysql: {
		proficiency: "Avançado",
	},
	mongodb: {
		proficiency: "Avançado",
	},
	jenkins: {
		proficiency: "Intermediário",
	},
	git: {
		proficiency: "Avançado",
	},
	docker: {
		proficiency: "Intermediário",
	},
	linux: {
		proficiency: "Intermediário",
	},
}

export default function Home() {
	return (
		<main className="h-full">
			<section className="relative h-full">
				<div
					className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-3/4 h-3/4 rounded-3xl"
					style={{
						backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 0)",
						backgroundSize: "40px 40px",
						backgroundPosition: "-20px -20px"
					}}
				/>

				<div className="flex flex-col items-center text-center w-fit mx-auto absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-900 rounded-full py-8">
					<div className="text-4xl font-semibold tracking-wide">
						<h5 className="flex justify-center items-center gap-x-2 text-base font-medium text-white/60">
							Olá, bem-vindo!
							<Image src={waveImage} alt="Wave" width={20} height={20} className="wave" />
						</h5>
						<h1>Meu nome é <span className="text-cyan-500">Rafael</span>.</h1>
						<h1>Sou <span className="text-cyan-500">Desenvolvedor FullStack</span></h1>
					</div>
					<p className="mt-8 w-2/3">
						Tenho 18 anos, quase <b>4 anos de experiência</b> e conhecimento em Next.js, Node.js, Java e outras tecnologias.
					</p>
				</div>

				<div className="absolute bottom-12 left-1/2 -translate-x-1/2">
					<Link href="#about-me" className="flex flex-col justify-center items-center gap-y-2 text-base font-medium text-white/40">
						<span>Descubra mais sobre mim</span>
						<FontAwesomeIcon icon={faChevronDown} className="animate-bounce" />
					</Link>
				</div>
			</section>

			<section id="about-me" className="2xl:w-2/3 mx-auto grid grid-cols-2 px-24 gap-x-12 py-16">
				<div className="flex flex-col justify-center h-auto">
					<h2 className="text-3xl font-semibold tracking-wide">
						<span className="text-cyan-500">Quem</span> sou eu?
					</h2>
					<p className="mt-8">
						Meu nome é Rafael Pereira, tenho 18 anos e sou um desenvolvedor FullStack. Atualmente, estou cursando Ciência da Computação e sou apaixonado por tecnologia.
					</p>
					<p className="mt-8">
						Desde o início da minha jornada como programador, sempre tive vontade de aprender mais e mais. Ao longo do tempo, adquiri proficiência em uma ampla gama de tecnologias, abrangendo desde <b>programação orientada a objetos</b> até o domínio de <b>bancos de dados relacionais</b> e <b>não-relacionais</b>, bem como a <b>criação de APIs</b> consumidas por aplicações web, entre outros campos. 
					</p>
					<p className="mt-8">
						Atualmente, mantenho <Link target="_blank" href="https://sirenx.heyyczer.com" className="text-cyan-500 underline">uma ferramenta</Link> que é utilizada por desenvolvedores do mundo todo e <Link target="_blank" href="https://heyyshop.com.br" className="text-cyan-500 underline">uma loja</Link>, onde vendo scripts desenvolvidos para o jogo GTA 5, em uma plataforma denominada FiveM.
					</p>
					<p className="mt-8">
						Pretendo continuar aprimorando minhas habilidades e oferencendo soluções cada vez melhores.
					</p>
				</div>

				<div className="flex flex-col justify-center h-auto">
					<h3 className="text-2xl font-semibold tracking-wide text-center">Minhas habilidades</h3>
					<div className="grid grid-cols-3 xl:grid-cols-5 gap-x-5 uppercase text-xs font-medium">
						{
							Object.entries(LANGUAGES).map(([language, { displayName, proficiency }]: [string, { displayName?: string, proficiency: string }]) => (
								<div key={language} className="flex flex-col items-center hover:opacity-60 transition-all">
									<Image
										src={`https://skillicons.dev/icons?i=${language}`}
										alt="Skills" width={60} height={60} className="mt-8"
									/>
									<p className="mt-2">{displayName ?? language}</p>
									<p className="text-cyan-500">{proficiency}</p>
								</div>
							))
						}
					</div>
				</div>
			</section>
		</main>
	);
}
