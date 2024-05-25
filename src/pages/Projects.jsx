import { Link } from "react-router-dom";
import { FaGithub  } from 'react-icons/fa';
import CTA from "../components/CTA";
import { projects} from "../constants";
import { arrow } from "../assets/icons";
import Footer from "../components/Footer";


const Projects = () => {
  return (
    <div>
    <section className='max-container'>
      <h1 className='head-text text-white'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-300 mt-2 leading-relaxed'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full text-white' key={project.name}>
            
              <div className={` rounded-xl `} />
              <div className='rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className=' object-contain'
                />
              </div>
            

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-300'>{project.description}</p>
              <div className='mt-4 flex flex-wrap gap-2 text-green-500' >
                  <p>{project.skills}</p>
        </div>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
             
              <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'/>

                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold blue-gradient_text'
                >
                  Live Link
                </Link>

                <FaGithub size={24}  className='w-5 h-5 object-contain'/>

                <Link
                  to={project.Github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold blue-gradient_text'
                >
                  Github
                </Link>

               
                 
              
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
    
      <Footer/>
    </div>
  );
};

export default Projects;


