export const projects = [
  {
    id: 1,
    title: 'EdgePulse IIoT',
    image: '/images/edgepulse.jpg',
    pageLink: '/edgepulse.html',
    tech: ['ESP32', 'Raspberry Pi', 'Docker', 'MQTT', 'InfluxDB', 'React', 'PCB Design', 'PLC'],
    shortDescription:
      'A complete engineering prototype that connects embedded hardware, custom PCB design, PLC-style control, MQTT telemetry, a Raspberry Pi edge server, and a web dashboard for industrial machine monitoring.',
    highlights: [
      'Designed an IIoT architecture using ESP32 as the embedded controller and Raspberry Pi as the edge computing layer.',
      'Integrated vibration, temperature, and current sensing concepts for machine-condition monitoring.',
      'Planned AI/ML-based fault prediction workflow for abnormal machine behavior detection.',
      'Included IoT dashboard control, motor/actuator control, Docker deployment, MQTT communication, and PCB-level integration.',
    ],
    github: 'https://github.com/pkurukuladithya/IIoT',
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
    pageLink: '/pid-controller.html',
    youtube: 'https://youtu.be/PzMPnsz8-GM',
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
    github: 'https://github.com/pkurukuladithya/cse',
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
    id: 5,
    title: 'LittleGurd — Smart Bag IoT Monitoring System',
    image: '/images/littlegurd.png',
    pageLink: 'https://smart-bag-iot-dashboard.vercel.app/',
    tech: ['React.js', 'Vite', 'Supabase', 'Python', 'Tkinter', 'IoT'],
    shortDescription:
      'A smart IoT school bag monitoring system with a Python hardware simulator and a real-time React & Supabase cloud dashboard.',
    highlights: [
      'Developed a Python Tkinter hardware simulator to generate live GPS, weight, zip, and battery data.',
      'Built a real-time React and Vite web dashboard with Supabase backend for instant telemetry updates.',
      'Implemented secure cloud database storage and market-ready UI branding for managing multiple smart bags.',
      'Engineered live alert detection for conditions such as zip open, bag not worn, heavy bag, and low battery.',
      'Designed end-to-end architecture preparing for real ESP32/STM32 hardware integration and future React Native mobile app.',
    ],
    github: 'https://github.com/pkurukuladithya/smart-bag-iot-dashboard',
    caseStudy: {
      problem:
        'Special school children need real-time safety monitoring of their belongings and location to give parents peace of mind.',
      solution:
        'An end-to-end IoT system connecting a simulated smart bag to a live React web dashboard using Supabase Realtime.',
      architecture: [
        'Hardware Simulator (Python)',
        'GPS & Weight Sensors',
        'Supabase PostgreSQL DB',
        'Supabase Realtime Cloud',
        'React.js Dashboard',
        'Vercel Hosting',
      ],
      skills: [
        'React & Vite',
        'Supabase & PostgreSQL',
        'Python Tkinter',
        'IoT Telemetry',
        'Real-time Data Streaming',
        'UI/UX Design',
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
    id: 6,
    title: 'AgroDry-Bot — IoT Paddy Drying System',
    image: '/images/agrodry-banner.jpg',
    pageLink: 'https://iotnv.vercel.app',
    tech: ['ESP32', 'MQTT', 'HiveMQ', 'MongoDB', 'React', 'Node.js'],
    shortDescription:
      'Solar-powered IoT paddy (rice) drying monitoring system featuring real-time temperature, humidity, and moisture tracking over MQTT WebSockets.',
    highlights: [
      'Engineered an ESP32 edge device to read moisture, temperature, and humidity sensors every few seconds.',
      'Configured HiveMQ Cloud to serve as a robust MQTT broker for publishing and subscribing to continuous telemetry.',
      'Developed a Render-hosted Node.js backend to subscribe to MQTT streams and persist historical logs into MongoDB Atlas.',
      'Built a Vercel-hosted React dashboard that connects directly to HiveMQ via WebSockets for true sub-second UI updates without page refreshes.',
      'Implemented a "Virtual Actuator" software logic architecture allowing seamless future integration of physical relay-controlled fans and tumbler motors when moisture exceeds 14%.',
    ],
    github: 'https://github.com/pkurukuladithya/nv',
    caseStudy: {
      problem:
        'Traditional sun-drying of paddy grain lacks real-time moisture feedback, risking spoilage from uneven drying or over-drying.',
      solution:
        'A full-stack IoT telemetry platform that streams live moisture data from an ESP32 directly to a React frontend via MQTT WebSockets.',
      architecture: [
        'ESP32 Sensor Node',
        'HiveMQ Cloud (MQTT Broker)',
        'Node.js Backend (Render)',
        'MongoDB Atlas',
        'React Dashboard (Vercel)',
        'Direct MQTT WebSockets',
      ],
      skills: [
        'Embedded C++ (ESP32)',
        'MQTT & WebSockets',
        'React.js',
        'Node.js & Express',
        'MongoDB',
        'IoT Architecture',
      ],
    },
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
