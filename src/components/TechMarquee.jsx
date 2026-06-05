import {
  SiPython,
  SiCplusplus,
  SiRaspberrypi,
  SiArduino,
  SiSiemens,
  SiDocker,
  SiReact,
  SiLinux,
  SiGit,
  SiFlask,
  SiFastapi,
} from 'react-icons/si';
import { FiCpu } from 'react-icons/fi';

const marqueeItems = [
  { name: 'ESP32', icon: FiCpu },
  { name: 'Raspberry Pi', icon: SiRaspberrypi },
  { name: 'Arduino', icon: SiArduino },
  { name: 'Siemens PLC', icon: SiSiemens },
  { name: 'Python', icon: SiPython },
  { name: 'C++', icon: SiCplusplus },
  { name: 'Docker', icon: SiDocker },
  { name: 'React', icon: SiReact },
  { name: 'Linux', icon: SiLinux },
  { name: 'Git', icon: SiGit },
  { name: 'Flask', icon: SiFlask },
  { name: 'FastAPI', icon: SiFastapi },
];

export default function TechMarquee() {
  // Double the list for seamless loop animation
  const doubledItems = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {doubledItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div className="marquee-item" key={idx}>
              <Icon className="marquee-icon" />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
