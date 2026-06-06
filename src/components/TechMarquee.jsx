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
  { name: 'ESP32', icon: FiCpu, color: '#E7352C' },
  { name: 'Raspberry Pi', icon: SiRaspberrypi, color: '#C51A4A' },
  { name: 'Arduino', icon: SiArduino, color: '#00979D' },
  { name: 'Siemens PLC', icon: SiSiemens, color: '#005F60' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Flask', icon: SiFlask, color: '#FFFFFF' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
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
              <Icon className="marquee-icon" style={{ color: item.color }} />
              <span className="marquee-text">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

