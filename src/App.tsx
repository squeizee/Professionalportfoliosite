import { Github, Linkedin, Mail } from "lucide-react";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const skills = [
    "Unity3D", "C#", "Game Design", "Physics", "Animation",
    "Shader Graph", "UI/UX", "Multiplayer", "Mobile", "VR/AR"
  ];

  const projects = [
    {
      title: "VR Adventure Game",
      description: "Immersive VR experience with procedural environments",
      tags: ["Unity", "VR", "C#"],
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGhlYWRzZXR8ZW58MXx8fHwxNzYyNjgzOTE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Mobile Puzzle Game",
      description: "Award-winning puzzle game for iOS and Android",
      tags: ["Unity", "Mobile", "UI"],
      image: "https://images.unsplash.com/photo-1732020883994-0dbe997c1662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBnYW1pbmclMjBwaG9uZXxlbnwxfHx8fDE3NjI2ODY4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Multiplayer Arena",
      description: "Real-time multiplayer combat game",
      tags: ["Unity", "Netcode", "Multiplayer"],
      image: "https://images.unsplash.com/photo-1635372708431-64774de60e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb250cm9sbGVyJTIwZXNwb3J0c3xlbnwxfHx8fDE3NjI3MjY0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Open World RPG",
      description: "Large-scale RPG with dynamic systems",
      tags: ["Unity", "PC", "AI"],
      image: "https://images.unsplash.com/photo-1759139681761-852dd24340df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjBjb2Rpbmd8ZW58MXx8fHwxNzYyNjc4MTI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-cyan-500/50">
            <span className="text-5xl">🎮</span>
          </div>
          <h1 className="mb-4 text-white">Unity Game Developer</h1>
          <p className="text-slate-400 mb-8 text-xl">
            Creating immersive gaming experiences with clean code and creative design
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-cyan-500/50 bg-transparent text-cyan-400 hover:bg-cyan-500 hover:text-black hover:border-cyan-500">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-cyan-500/50 bg-transparent text-cyan-400 hover:bg-cyan-500 hover:text-black hover:border-cyan-500">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </a>
            <a href="mailto:contact@example.com">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-lg shadow-cyan-500/50">
                <Mail className="w-5 h-5 mr-2" />
                Contact
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About & Skills */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8 text-white">About</h2>
            <p className="text-slate-400 text-center mb-12 text-lg">
              Passionate Unity developer with expertise in creating engaging games across 
              multiple platforms. I specialize in gameplay mechanics, optimization, and 
              delivering polished gaming experiences.
            </p>
            
            <h3 className="text-center mb-6 text-white">Skills</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 bg-slate-800 text-cyan-400 hover:bg-cyan-500 hover:text-black border border-cyan-500/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12 text-white">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="border border-slate-800 bg-slate-900 rounded-lg overflow-hidden hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all group"
                >
                  <div className="h-48 overflow-hidden bg-slate-800">
                    <ImageWithFallback 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-white">{project.title}</h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="border-cyan-500/50 text-cyan-400">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4 text-white">Let's Work Together</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Interested in collaborating? Feel free to reach out.
            </p>
            <a href="mailto:contact@example.com">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-lg shadow-cyan-500/50">
                Get In Touch
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center text-slate-500">
          <p>© 2025 Unity Game Developer</p>
        </div>
      </footer>
    </div>
  );
}
