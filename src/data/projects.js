export const projects = [
  {
    id: 1,
    title: 'IIoT Predictive Maintenance System',
    image: '/images/predictive-maintenance.png',
    tech: ['ESP32', 'Raspberry Pi', 'AI/ML', 'Docker', 'MQTT', 'IoT Dashboard', 'Sensors', 'PCB'],
    shortDescription:
      'Industrial IoT predictive maintenance system designed to monitor machine health using sensor data, edge processing, and dashboard-based control.',
    highlights: [
      'Designed an IIoT architecture using ESP32 as the embedded controller and Raspberry Pi as the edge computing layer.',
      'Integrated vibration, temperature, and current sensing concepts for machine-condition monitoring.',
      'Planned AI/ML-based fault prediction workflow for abnormal machine behavior detection.',
      'Included IoT dashboard control, motor/actuator control, Docker deployment, MQTT communication, and PCB-level integration.',
    ],
    github: 'https://github.com/pkurukuladithya',
    // Case study data
    caseStudy: {
      problem:
        'Industrial machines can fail unexpectedly when temperature, vibration, and current behavior are not monitored properly.',
      solution:
        'An IIoT-based predictive maintenance system using ESP32 for embedded sensing/control and Raspberry Pi for edge processing, dashboard hosting, and AI/ML-based fault prediction.',
      architecture: [
        'Sensor Layer',
        'ESP32 Controller',
        'MQTT Communication',
        'Raspberry Pi Edge Layer',
        'Dashboard',
        'AI/ML Prediction',
        'Motor/Actuator Control',
      ],
      skills: [
        'Embedded Systems',
        'IIoT',
        'Sensor Interfacing',
        'Raspberry Pi Linux',
        'MQTT',
        'Docker',
        'PCB Design',
        'Dashboard Control',
        'AI/ML Concept Design',
      ],
    },
  },
  {
    id: 2,
    title: 'PID Motor Control System & IIoT SCADA',
    image: '/images/pid-scada.png',
    tech: ['Raspberry Pi', 'Python', 'Flask', 'Chart.js', 'PID', 'Encoder', 'TB6612FNG', 'DSP'],
    shortDescription:
      'Closed-loop DC motor speed control system with Raspberry Pi, encoder feedback, real-time PID tuning, and a live IIoT SCADA dashboard.',
    highlights: [
      'Built closed-loop DC motor speed control using Raspberry Pi, 6V N20 DC motor, 700-PPR optical encoder, and TB6612FNG motor driver.',
      'Derived empirical motor transfer function using open-loop step response testing and system identification.',
      'Developed Flask-based SCADA dashboard with Chart.js for live RPM monitoring, PID tuning, setpoint control, and emergency stop.',
      'Implemented real-time PID control in Python with anti-windup, dynamic delta-time calculation, and PWM control.',
      'Applied DSP moving-average filtering to reduce encoder quantization noise and automated data logging using pandas, matplotlib, and scipy.',
    ],
    github: 'https://github.com/pkurukuladithya',
    caseStudy: {
      problem:
        'A DC motor needs stable speed control under real hardware limitations such as encoder noise, timing jitter, and mechanical non-idealities.',
      solution:
        'A Raspberry Pi-based closed-loop PID controller with encoder feedback, real-time Python control loop, DSP filtering, and Flask SCADA dashboard.',
      architecture: [
        'DC Motor + Encoder',
        'Raspberry Pi GPIO',
        'Python PID Control',
        'TB6612FNG Motor Driver',
        'Flask SCADA Dashboard',
        'Live Graphs & PID Tuning',
      ],
      skills: [
        'Control Systems',
        'PID Tuning',
        'Encoder Feedback',
        'Python',
        'Raspberry Pi',
        'Linux Timing Compensation',
        'Flask',
        'Chart.js',
        'DSP Filtering',
        'Data Logging',
        'Hardware Testing',
      ],
    },
  },
  {
    id: 3,
    title: 'Autonomous Line Following, Obstacle Detection & Parking Robot',
    image: '/images/robot-car.png',
    tech: ['Arduino Uno', 'AVR Assembly', 'IR Sensors', 'Ultrasonic Sensor', 'TB6612FNG', 'PWM'],
    shortDescription:
      'Autonomous embedded robot car developed using low-level AVR Assembly for line following, obstacle detection, and automatic parking.',
    highlights: [
      'Developed Arduino Uno-based robot car using AVR Assembly for low-level sensor reading and motor control.',
      'Interfaced IR sensors for line detection, ultrasonic sensor for obstacle detection, and TB6612FNG motor driver.',
      'Implemented priority-based control where obstacle detection overrides movement for safe operation.',
      'Designed state-machine logic for line following, correction, parking-zone detection, and automatic parking.',
      'Used Timer0-based PWM motor speed control and ATmega328P digital I/O pins.',
    ],
    github: 'https://github.com/pkurukuladithya',
  },
  {
    id: 4,
    title: 'BJT Audio Amplifier Circuit',
    image: '/images/bjt-amplifier.png',
    tech: ['Analog Electronics', 'BJT', 'PCB', 'Signal Amplification', 'Soldering', 'Debugging'],
    shortDescription:
      'Common-emitter BJT audio amplifier circuit designed for voice/audio signal amplification with approximately 20x voltage gain.',
    highlights: [
      'Designed and built a common-emitter BJT audio amplifier.',
      'Selected and tested biasing resistors, coupling capacitors, and emitter bypass components.',
      'Practiced circuit design, soldering, waveform observation, debugging, and analog signal analysis.',
    ],
    github: 'https://github.com/pkurukuladithya',
  },
];
