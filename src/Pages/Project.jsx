import React from 'react'

export default function Project() {

  const projects = [
  { name:"about me", github: "https://github.com/Tsiko01/homework-1", vercel: "https://homework-1-alpha-inky.vercel.app/", image: "/favicon.svg" },
  { name:"Batman Shop", github: "https://github.com/Tsiko01/homework-2", vercel: "https://homework-2-beryl.vercel.app/", image: "/Batman PNG.png" },
  { name:"UFC Fighters", github: "https://github.com/Tsiko01/homework-3", vercel: "https://homework-3-weld-delta.vercel.app/", image: "/ilia.jpeg" },
  { name:"TO Do app", github: "https://github.com/Tsiko01/homework-4", vercel: "https://homework-4-five.vercel.app/", image: "/do.svg" },
  { name:"Deteqtor", github: "https://github.com/Tsiko01/homework-5", vercel: "https://homework-5-sooty.vercel.app/", image: "/search.svg" },
  { name:"Accept advice", github: "https://github.com/Tsiko01/homework-6", vercel: "https://homework-6-dusky.vercel.app/", image: "/ok.svg" },
  { name:"Raiting app", github: "https://github.com/Tsiko01/homework-7", vercel: "https://homework-7-taupe.vercel.app/", image: "/star.svg" },
  { name:"EXAM 20/20", github: "https://github.com/Tsiko01/homework-8", vercel: "https://homework-8-dusky.vercel.app/", image: "/img.png" },
  { name:"Z00M, Timer, Video  ", github: "https://github.com/Tsiko01/homework-9", vercel: "https://homework-9-xi.vercel.app/", image: "/3d.svg" },
  { name:"Planets ", github: "https://github.com/Tsiko01/homework-11", vercel: "homework-11-nu.vercel.app", image: "/planet-earth-internal.svg" },
  { name:"Blog araa saintereso  ", github: "https://github.com/Tsiko01/homework-12", vercel: "homework-12-mocha.vercel.app", image: "/bad.svg" },
  { name:"fantelebi  ", github: "https://github.com/Tsiko01/homework-13", vercel: "homework-13-rust.vercel.app", image: "/favicon.svg" },
  { name:"Exam inglisuri sityvebi  ", github: "https://github.com/Tsiko01/homework-14", vercel: "homework-14-zeta.vercel.app", image: "/gg.svg" }

];

  return (
    <div>
      <h2 className='h2-project' >Project</h2>

         <div className='projets'>
        {projects.map((item) => (
          <div key={item.github}>
                <p className='p_100'>{item.name}</p>
            <img src={item.image} alt="project" width="100" />
            <p>
              <a href={item.github} target="_blank">GitHub</a>
            </p>
            <p>
              <a href={item.vercel} target="_blank">Live</a>
            </p>
          </div>
        ))}
      </div>
        <div className="footer">
          © 2025 ყველა უფლება არ არის დაცული ბაჩო წიკლაურის მიერ
        </div>
    </div>
  )
}
