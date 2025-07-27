import DataImage from "./data";
import { listTools, listProject } from "./data";

function App() {
  return (
    <>
    <div className="hero grid md:grid-cols-2 items-center pt-3 xl:gap-0 gap-6 grid-cols-1">
      <div className="animate__animated animate__fadeInUp animate__delay-2s">
      <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
        <q>Professional & Confident. 😊</q>
      </div>
        <h1 className="text-3xl/tight font-bold mb-6">Hi, My Name Ronald Satiawan</h1>
        <p className="text-base/loose mb-6 opacity-50">I’m a passionate web developer who enjoys turning complex problems into simple, clean, and efficient code.
            With experience in front-end and back-end development using technologies like ReactJS, VueJS, and Laravel, I build web applications that are responsive, secure, and scalable.
            This portfolio showcases projects I've built independently and collaboratively—each reflecting my commitment to code quality, user experience, and continuous learning.
        </p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a href="#" className="bg-blue-500 p-4 rounded-2xl hover:bg-blue-600">Download CV <i className="ri-download-line ri-lg"></i></a>
          <a href="#project" className="bg-pink-500 p-4 rounded-2xl hover:bg-pink-600">View Project <i className="ri-arrow-down-double-line ri-lg"></i></a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] rounded-md md:ml-auto animate__animated animate__zoomIn animate__delay-3s" loading="lazy" />
    </div>

    {/* About */}
    <div className="about mt-20 py-10" id="about">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
        <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
        <p className="text-base/loose mb-10">
          Hy, My Name Ronald Satiawan Hello! I’m Ivan, a web developer who loves turning ideas into functional and beautiful websites. Whether it’s a landing page or a full-stack web app, I enjoy solving problems with code and learning new tools along the way.
        </p>
        <div className="flex items-center justify-between">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">
                45<span className="text-pink-500">+</span>
              </h1>
              <p>Project Completed</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1">
                4<span className="text-pink-500">+</span>
              </h1>
              <p>Experience Project</p>
            </div>
          </div>
        </div>
      </div>

      <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">Tools Used</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" data-aos-once="true">These are some of the tools I frequently use for web development and design purposes.</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map(tool => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="2000" data-aos-delay={tool.dad} data-aos-once="true">
                <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"/>
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
              </div>
             ))}

        </div>
      </div>
    </div>

    {/* Project */}
    <div className="proyek mt-32 py-10" id="project">
      <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">Project</h1>
      <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" data-aos-once="true">Take a look at some of the projects I’ve created</p>
      <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {listProject.map(project => (
          <div key={project.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="2000" data-aos-delay={project.dad} data-aos-once="true">
            <img src={project.gambar} alt="project Image" loading="lazy" />
            <div>
              <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
              <p className="text-base/loose mb-4">{project.desk}</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tools, index) => (
                  <p className="py-1 px-3 border border-zinc-500 bg-zinc-500 rounded-md font-semibold" key={index}>{tools}</p>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a href="#" className="bg-blue-500 p-3 rounded-lg block border border-zinc-600 hover:bg-blue-600">View Website</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Project */}

    {/* Kontak */}
    <div className="contact mt-32 sm:p-10 p-0" id="contact">
      <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-once="true">Contact</h1>
      <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" data-aos-once="true">Connect with me</p>
      <form action="https://formsubmit.co/ivanalissetiyan1998@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500" data-aos-once="true">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Name</label>
            <input type="text" name="name" placeholder="Enter your name" className="border border-zinc-500 p-2 rounded-md" autoComplete="off" required />
          </div>
           <div className="flex flex-col gap-2">
            <label className="font-semibold">Email</label>
            <input type="email" name="email" placeholder="Enter your email" className="border border-zinc-500 p-2 rounded-md" autoComplete="off" required />
          </div>
           <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-semibold">Message</label>
            <textarea name="message" id="message" cols="50" rows="7" className="border border-zinc-500 p-2 rounded-md" placeholder="Enter your message" autoComplete="off" required />
          </div>
           <div className="text-center">
            <button type="submit" className="bg-blue-500 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-blue-600">Send Message</button>
          </div>
        </div>
      </form>
    </div>
    {/* Kontak */}

    </>
  );
}

export default App;
