import { FiCpu, FiSettings, FiZap, FiCode, FiGlobe, FiTool, FiTerminal } from 'react-icons/fi';

export const skillCategories = [
  {
    id: 'embedded-iot',
    title: 'Embedded & IoT',
    icon: FiCpu,
    color: '#00d4ff',
    skills: [
      'Arduino', 'ESP32', 'ESP32-S3', 'Raspberry Pi', 'GPIO', 'UART', 'I2C', 'SPI',
      'PWM', 'ADC', 'Timers', 'Interrupts', 'MQTT', 'WebSocket', 'Sensor Interfacing',
    ],
  },
  {
    id: 'robotics-control',
    title: 'Robotics & Control',
    icon: FiSettings,
    color: '#ff6b35',
    skills: [
      'DC Motor Control', 'Encoder Feedback', 'PID Control', 'Line Following',
      'Obstacle Detection', 'Motor Drivers', 'TB6612FNG', 'L298N', 'Real-Time Control Logic',
    ],
  },
  {
    id: 'pcb-electronics',
    title: 'PCB & Electronics',
    icon: FiZap,
    color: '#00e676',
    skills: [
      'EasyEDA', 'Proteus', 'PCB Design', 'PCB Etching', 'Dot Board Soldering',
      'Soldering', 'Circuit Design', 'Debugging', 'Multimeter Testing', 'Power Distribution',
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    icon: FiCode,
    color: '#ab47bc',
    skills: ['C', 'C++', 'Python', 'JavaScript', 'HTML/CSS', 'Bash', 'AVR Assembly', 'SQL'],
  },
  {
    id: 'web-software',
    title: 'Web & Software',
    icon: FiGlobe,
    color: '#ffab00',
    skills: [
      'Flask', 'FastAPI', 'MERN Stack Basics', 'Node.js', 'Express.js', 'React',
      'Firebase', 'REST APIs', 'Chart.js', 'Git', 'GitHub',
    ],
  },
  {
    id: 'industrial-automation',
    title: 'Industrial Automation',
    icon: FiTool,
    color: '#ef5350',
    skills: [
      'Siemens S7-200', 'Siemens S7-1200', 'PLC Programming', 'PLC Wiring',
      'Ladder Logic Basics', 'Automation Troubleshooting',
    ],
  },
  {
    id: 'linux-devops',
    title: 'Linux & DevOps',
    icon: FiTerminal,
    color: '#26c6da',
    skills: [
      'Raspberry Pi OS', 'Linux Terminal', 'SSH', 'Docker', 'Basic CI/CD', 'Web App Deployment',
    ],
  },
];
