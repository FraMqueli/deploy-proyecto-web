import { useState } from "react";
import "./AboutUs.css";
import Navbar from "./../../componetns/navbar/Navbar";
import FooterBar from "../../componetns/footerBar/footerBar.tsx";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Mario Espinola",
    role: "Desarrollador Frontend",
    description:
      "Estudiante de 7mo año, Major Robótica, Minor Computación. Práctico judo",
    image: "./../../../public/avataresAboutUs/mario_avatar.jpg",
  },
  {
    id: 2,
    name: "Felipe Hermosilla",
    role: "Desarrollador Backend",
    description:
      "Estudiante de 3er año, Major computación, Minor Data science y analytics. Me gusta gorillaz (no sé nota)",
    image: "./../../../public/avataresAboutUs/felipe_avatar.jpg",
  },
  {
    id: 3,
    name: "Franco Montalba",
    role: "Desarrollador Fullstack",
    description:
      "Estudiante de 7mo año, Major Física, Minor Computación. Lo juro no soy otaku",
    image: "./../../../public/avataresAboutUs/franco_avatar.jpg",
  },
];

export default function AboutUs() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="landing-container">
      <Navbar />
      <main className="landing-main">
        <section className="landing-section text-center mb-12">
          <h1 className="landing-products-title text-5xl title-gradient">
            Conoce al Equipo
          </h1>
          <p className="text-gray-600 text-lg">
            Desarrolladores apasionados construyendo el futuro 🚀
          </p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden relative hover:scale-105 transition-transform duration-300"
              onMouseEnter={() => setHoveredCard(member.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                {hoveredCard === member.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
                    <div className="text-4xl mb-2">
                      {member.id === 1 ? "🤖" : member.id === 2 ? "🖥️" : "🧪"}
                    </div>
                    <p className="text-lg font-semibold">
                      Conoce más sobre {member.name.split(" ")[0]}
                    </p>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-sm text-gray-500 flex items-center gap-2 mb-1">
                  <span className="status-indicator w-2 h-2 rounded-full bg-green-400"></span>
                  {member.role}
                </h3>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h2>
                <p className="text-gray-700 text-sm">{member.description}</p>
                <div className="flex gap-2 mt-2">
                  {member.id === 1 && <div className="tech-badge">🤖</div>}
                  {member.id === 2 && <div className="tech-badge">🖥️</div>}
                  {member.id === 3 && <div className="tech-badge">🧪</div>}
                  <div className="tech-badge">💻</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <FooterBar />
    </div>
  );
}
