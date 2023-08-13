import React, { Component } from 'react';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import { SiNextdotjs, SiPlanetscale, SiPython, SiReact, SiTailwindcss } from 'react-icons/si';
import elitlabs from '../assets/elitlabs.png';
import l0n3ly from '../assets/l0n3ly.png';
import polsu from '../assets/polsu.png';

class ProjectCards extends Component {
	render() {
		const { title, desc, tech, role, url, obj, centered } = this.props;

		return (
			<div
				className={
					'mx-auto w-full rounded-xl drop-shadow-xl' +
					(centered ? ' md:col-span-2 md:max-w-[calc(50%-1.25rem)]' : '')
				}>
				<a
					href={url}
					target="_blank"
					rel="noreferrer"
					className="card-zoom relative flex aspect-video items-center justify-center overflow-hidden rounded-b-xl rounded-t-xl drop-shadow-2xl lg:h-auto lg:w-full">
					<img
						src={obj}
						alt={title}
						className="card-zoom-img absolute -z-10 h-full w-full transform drop-shadow-sm transition-all duration-[350ms] ease-in-out"
					/>
					<div className="absolute h-full w-full bg-black opacity-25" />
					<div className="card-zoom-text absolute flex h-full max-h-[87.5%] max-w-[87.5%] flex-col items-center justify-center rounded-xl md:rounded-2xl bg-neutral-900/60 p-4 shadow-2xl transition-all duration-[350ms]">
						<h1 className="text-xl md:text-2xl font-bold text-white">{title}</h1>
						<div className="flex flex-col h-full w-full justify-center">
							<p className="text-md md:text-xl text-neutral-50">{desc}</p>
							<p className="text-lg font-medium text-neutral-50/90">
								Technologies: <span className="text-md md:text-lg">{tech}</span>
							</p>
							<p>{role}</p>
						</div>
					</div>
					<BsArrowUpRightSquare className="card-zoom-icon absolute bottom-0 right-0 m-2 md:m-4 scale-100 transform text-4xl md:text-5xl text-neutral-50 opacity-80 transition-all duration-500 ease-in-out" />
				</a>
			</div>
		);
	}
}

class Projects extends Component {
	render() {
		return (
			<section
				className="mx-auto flex w-full max-w-[85%] flex-col items-center justify-center gap-y-10 pt-[4.75rem] md:grid md:grid-cols-2 md:gap-x-10 md:pt-[5.6rem]"
				id="work">
				<ProjectCards
					title="ElitLabs"
					desc="An online tutoring class for introduction to Python."
					tech={
						<>
							<SiReact className="inline-block text-[#61DAFB]" />
							<span className="font-bold">{' | '}</span>
							<SiTailwindcss className="inline-block text-[#06B6D4]" />
						</>
					}
					url="https://elitlabs.com"
					obj={elitlabs}
				/>
				<ProjectCards
					title="l0n3ly.com"
					desc="A portfolio commisioned by loadingl0n3ly."
					tech={
						<>
							<SiReact className="inline-block text-[#61DAFB]" />
							<span className="font-bold">{' | '}</span>
							<SiTailwindcss className="inline-block text-[#06B6D4]" />
						</>
					}
					url="https://l0n3ly.com"
					obj={l0n3ly}
				/>
				<ProjectCards
					title="Polsu"
					desc="A multi-purpose discord bot with hypixel stats."
					tech={
						<>
							<SiReact className="inline-block text-[#61DAFB]" />
							<span className="font-bold">{' | '}</span>
							<SiPython className="inline-block text-[#3776AB]" />
							<span className="font-bold">{' | '}</span>
							<SiTailwindcss className="inline-block text-[#06B6D4]" />
						</>
					}
					url="https://polsu.xyz"
					obj={polsu}
				/>
				<ProjectCards
					title="Quiz"
					desc="A simple quiz game for learning country flags and capitals."
					tech={
						<>
							<SiNextdotjs className='inline-block text-red-500' />
							<span className="font-bold">{' | '}</span>
							<SiTailwindcss className='inline-block text-red-500' />
							<span className="font-bold">{' | '}</span>
							{/* < className='inline-block text-red-500' /> */} {/* Find an auth one */}
							{/* <span className="font-bold">{' | '}</span> */}
							<SiPlanetscale className='inline-block text-red-500' />
						</>
					}
				/>
			</section>
		);
	}
}

export default Projects;
