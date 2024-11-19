import { PROJECTS } from "../constants"

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl">Projects</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) =>(
            <div key={project.id} className="group relative overflow-hidden rounded-3xl">
                <img src={project.image} alt={project.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                    <h3 className="text-xl mb-4 ">{project.name}</h3>
                    <p className="mb-12 p-4">{project.description}</p>
                    <a href={project.link} className="mt-4 text-sm font-bold text-stone-500">Visit Site</a>
                    <div className="flex items-center">
                        <span>View on Github</span>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
