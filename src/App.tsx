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
      tags: ["Unity", "VR", "C#"]
    },
    {
      title: "Mobile Puzzle Game",
      description: "Award-winning puzzle game for iOS and Android",
      tags: ["Unity", "Mobile", "UI"]
    },
    {
      title: "Multiplayer Arena",
      description: "Real-time multiplayer combat game",
      tags: ["Unity", "Netcode", "Multiplayer"]
    },
    {
      title: "Open World RPG",
      description: "Large-scale RPG with dynamic systems",
      tags: ["Unity", "PC", "AI"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-5xl">🎮</span>
          </div>
          <h1 className="mb-4 text-white">Unity Game Developer</h1>
          <p className="text-slate-400 mb-8 text-xl">
            Creating immersive gaming experiences with clean code and creative design
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </a>
            <a href="mailto:contact@example.com">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
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
                <Badge key={index} variant="secondary" className="px-4 py-2 bg-slate-800 text-slate-200 hover:bg-slate-700">
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
                  className="border border-slate-800 bg-slate-900 rounded-lg p-6 hover:border-purple-500 transition-colors"
                >
                  <h3 className="mb-2 text-white">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="border-slate-700 text-slate-300">
                        {tag}
                      </Badge>
                    ))}
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
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
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
