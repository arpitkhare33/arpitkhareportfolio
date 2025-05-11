"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import BasImage from "../components/images/bas.png"
import MDMImage from "../components/images/mdm.jpg"
import ChatbotImage from "../components/images/chatbot.jpg"
import LDAPImage from "../components/images/ldap.jpg"
import DLPImage from "../components/images/dlp.jpeg"
import UdemyImage from "../components/images/udemy.jpeg"
import CricketGPTImage from "../components/images/cricketgpt.jpeg"
import WasteManagementImage from "../components/images/waste.jpg"
import ProjectImage from "../components/images/project.jpeg"
const projects = [
  {
    title: "Breach Attack Simulation Tool",
    description:
      "Developed a tool to automate red team tasks for Endpoint Assessment and Email Phishing Attacks, enhancing cybersecurity testing capabilities.",
    image: BasImage,
    tags: ["Node.js", "Express", "React", "Postfix", "Cybersecurity"],
    category: "security",
    github: "#",
    demo: "#",
  },
  {
    title: "Mobile Device Manager (MDM)",
    description:
      "Built an MDM solution for Android to manage Reliance Retail Stores POS Devices, successfully deployed across 1800 retail store devices.",
    image: MDMImage,
    tags: ["Java", "Node.js", "React", "Enterprise Solution", "IIS", "Nginx"],
    category: "fullstack",
    github: "#",
    demo: "#",
  },
  {
    title: "Cybersecurity Awareness Chatbot",
    description:
      "Created an intelligent chatbot using LangChain and NLP, trained on organizational security policies to provide instant policy-related information.",
    image: ChatbotImage,
    tags: ["LangChain", "NLP", "Python", "AI", "Cybersecurity"],
    category: "nlp",
    github: "#",
    demo: "#",
  },
  {
    title: "LDAP Authentication API",
    description: "Developed a RESTful API for LDAP authentication for devices with Reliance Active Directory.",
    image: LDAPImage,
    tags: ["Node.js", "Express", "LDAP", "Authentication", "REST API"],
    category: "fullstack",
    github: "#",
    demo: "#",
  },
  {
    title: "DLP Integration Agent",
    description:
      "Built a Python agent to capture & reconstruct outbound emails from packet data for DLP integration with Ironport & ZScaler.",
    image: DLPImage,
    tags: ["Python", "Cybersecurity", "Data Loss Prevention", "Network Security"],
    category: "security",
    github: "#",
    demo: "#",
  },
  {
    title: "Learning Management System",
    description: "A Udemy-like portal where teachers can sell their video courses and students can attend lessons.",
    image: UdemyImage,
    tags: ["Flask", "React", "PostgreSQL", "Docker", "Nginx", "CI/CD"],
    category: "fullstack",
    github: "#",
    demo: "#",
  },
  {
    title: "Cricket GPT",
    description:
      "An LLM-powered chatbot designed to serve as an assistant for comprehending and analyzing cricket match summaries.",
    image: CricketGPTImage,
    tags: ["Python", "LLM", "React", "OpenAI", "NLP"],
    category: "nlp",
    github: "#",
    demo: "#",
  },
  {
    title: "Waste Management Analytics Dashboard",
    description: "Developed an analytics dashboard for waste management using sentiment analysis techniques.",
    image: WasteManagementImage,
    tags: ["Python", "React", "Sentiment Analysis", "Data Visualization"],
    category: "fullstack",
    github: "#",
    demo: "#",
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.05, delay: 0.05 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-slate-800">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-slate-700">
            A selection of projects that showcase my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                All
              </TabsTrigger>
              <TabsTrigger value="fullstack" onClick={() => setActiveTab("fullstack")}>
                Full-Stack
              </TabsTrigger>
              <TabsTrigger value="nlp" onClick={() => setActiveTab("nlp")}>
                NLP
              </TabsTrigger>
              <TabsTrigger value="security" onClick={() => setActiveTab("security")}>
                Security
              </TabsTrigger>
              <TabsTrigger value="devops" onClick={() => setActiveTab("devops")}>
                DevOps
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow bg-white">
                    <div className="aspect-video overflow-hidden">
                      {/* <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform hover:scale-105"
                      /> */}
                     <div className="relative w-full h-64">
  <Image
    src={project.image || ProjectImage}
    alt={project.title}
    fill
    className="object-cover transition-transform hover:scale-105"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
</div>
                      {/* <Image 
                src={project.image || './placeholder.svg'} 
                alt {project.title} 
                className="object-cover w-full h-full transition-transform hover:scale-105"
              /> */}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-slate-800">{project.title}</h3>
                      <p className="text-slate-700 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fullstack" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      {/* <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform hover:scale-105"
                      /> */}
                      <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                      layout="fill" // or use width/height
                    />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-slate-700 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="nlp" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                    <Image
  src={project.image || "/placeholder.svg"}
  alt={project.title}
  className="object-cover w-full h-full transition-transform hover:scale-105"
  layout="fill" // or use width/height
/>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-slate-700 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="security" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                    <Image
  src={project.image || "/placeholder.svg"}
  alt={project.title}
  className="object-cover w-full h-full transition-transform hover:scale-105"
  layout="fill" // or use width/height
/>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-slate-700 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="devops" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                    <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-slate-700 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
