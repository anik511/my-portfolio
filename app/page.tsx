"use client";
import { useState, useEffect } from "react";
import {ChevronDown, Download, Mail, Phone, Github, Linkedin,} from "lucide-react";
import AchievementsCard from "@/components/AchievementsCard";
import AcademicCard from "@/components/AcademicCard";
import SkillsSection from "@/components/technicalSkills/TechnicalSkills";
// import PersonalProjects from "@/components/personalProjects/PersonalProjects";
import WorkExperience from "@/components/workExperience/WorkExperience";
import FuzzyText from "@/components/FuzzyText";
export default function Home() {
  // Typing animation hook
  const useTypingAnimation = (text:string, speed = 100) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text, speed]);

    return displayText;
  };

  const typedText = useTypingAnimation(
    "Frontend Developer",
    100
  );
  
  // Education data
  const education = [
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      institution: 'Daffodil International University',
      year: '2020',
      icon: '🎓'
    },
    {
      degree: 'H.S.C. (Science)',
      institution: 'Royal Media College, Mymensingh',
      year: '2014',
      icon: '📚'
    },
    {
      degree: 'S.S.C. (Science)',
      institution: 'Balia High School, Mymensingh',
      year: '2012',
      icon: '🏫'
    }
  ];

  // Achievements and certifications
  const achievements = [
    {
      title: 'Road Object Detection Research',
      description: 'Published research paper on IEEE Xplore',
      year: '2020',
      link: 'https://ieeexplore.ieee.org/document/9397954'
    },
    {
      title: 'Learn Vue.js by Making Applications',
      description: 'Udemy Certification',
      year: '2021',
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-d6dd28c6-48dd-44cb-b6b5-0341b9609c03.pdf'
    },
    {
      title: 'Frontend Fundamentals',
      description: 'Pirple Certification',
      year: '2021',
      link: 'https://www.pirple.com/certificates/dh5vvohcck'
    },
    {
      title: 'Programming for Everybody (Python)',
      description: 'Coursera Certification',
      year: '2020',
      link: 'https://www.coursera.org/account/accomplishments/certificate/Z7BR9GEA4SY8dk'
    },
    {
      title: 'Machine Learning for All',
      description: 'Coursera Certification',
      year: '2020',
      link: 'https://www.coursera.org/account/accomplishments/certificate/B8MK2GV8VJCS'
    }
  ];
  
  return (
    <div>
      <section
        id="introduction"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-6xl font-bold">
                <FuzzyText
                  baseIntensity={0.1} 
                  hoverIntensity={.3} 
                  enableHover={true}
                >
                  404
                </FuzzyText>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Anik Datta
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-2 h-8">
              {typedText}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              Aiming to build a career as a Software Developer in a forward-thinking
              organization where creativity, dedication, and skill are valued.
              Seeking a challenging role that rewards performance and encourages
              continuous growth and innovation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/AnikDatta.pdf" target="_blank" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Download size={20} />
              Download CV
            </a>
            <div className="flex gap-4">
              <a
                href="mailto:anikdatta051@gmail.com"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+8801707139089"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://github.com/anik511"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/anik-datta-1051"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-white/60" />
        </div>
      </section>
      <SkillsSection/>
      <WorkExperience/>
      {/* <PersonalProjects/> */}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <p className="text-xl text-gray-400">Academic background</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <AcademicCard key={index} icon={edu.icon} degree={edu.degree} institution={edu.institution} year={edu.year} />
            ))}
          </div>
        </div>
      </section>
      <section id="achievements" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Achievements & Certifications
            </h2>
            <p className="text-xl text-gray-400">
              Recognitions and accomplishments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementsCard key={index} title={achievement.title} year={achievement.year} description={achievement.description} link={achievement.link} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
