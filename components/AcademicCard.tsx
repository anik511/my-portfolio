type Education ={
  icon: string;
  degree: string;
  institution: string;
  year: string
}

const AcademicCard = ({icon, degree, institution, year}:Education) => {
  return (
    <div
      className="backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300 group cursor-pointer  text-center "
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{degree}</h3>
      <p className="text-gray-300 mb-2">{institution}</p>
      <p className="text-blue-400 font-semibold">{year}</p>
    </div>
  )
}

export default AcademicCard