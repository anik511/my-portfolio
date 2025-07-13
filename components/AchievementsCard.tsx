import { Award, ExternalLink } from 'lucide-react';
type Achievements= {
  year : string;
  title: string;
  description: string;
  link: string
}
const AchievementsCard = ({title,year,description,link}:Achievements) => {
  return (
    <div
      className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
    >
      <div className="flex items-start justify-between mb-4">
        <Award size={24} className="text-yellow-400 flex-shrink-0" />
        <span className="text-sm text-gray-400">{year}</span>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-1"
        >
          View Certificate <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
};

export default AchievementsCard;
