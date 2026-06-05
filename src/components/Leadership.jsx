const roles = [
  {
    role: 'Batch Representative — Computer Systems Engineering Batch 02',
    org: 'Department of Computer Systems Engineering, SLIIT',
    period: 'Jan. 2024 – Present',
    desc: 'Represent the batch and coordinate academic communication, student concerns, department updates, and event-related announcements.',
  },
  {
    role: 'Executive Committee Member',
    org: 'Computer Systems Engineering Student Committee, SLIIT',
    period: 'Aug. 2025 – Present',
    desc: 'Support planning and coordination of department-level student activities, technical events, and community engagement initiatives.',
  },
  {
    role: 'Event Coordinator / Committee Member',
    org: 'IdeaSpark 2 & 3, AGMs, CodeFest 2025, Innova IoT',
    period: '2024 – Present',
    desc: 'Contributed to event planning, communication, participant coordination, and technical/community engagement activities.',
  },
];

export default function Leadership() {
  return (
    <section className="section" id="leadership">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Leadership</span>
          <h2 className="section-title">Roles & Activities</h2>
        </div>
        <div className="leadership-grid">
          {roles.map((r, i) => (
            <div className="card leadership-card fade-in" key={i}>
              <h3 className="leadership-role">{r.role}</h3>
              <p className="leadership-org">{r.org}</p>
              <p className="leadership-period">{r.period}</p>
              <p className="leadership-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
