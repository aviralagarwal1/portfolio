import Image from 'next/image';
import EmailButton from '@/components/EmailButton';

// updated

type ExperienceProject = {
  company: string;
  role: string;
  location: string;
  tagline: string | null;
  description: string | null;
  logo: string;
  url: string;
};

const experiences: ExperienceProject[] = [
  {
    company: 'Boston Consulting Group',
    role: 'Incoming Summer Associate',
    location: 'Seattle, WA',
    tagline: null,
    description: null,
    logo: '/images/logos/bcg.png',
    url: 'https://www.bcg.com/',
  },
  {
    company: 'ServiceNow',
    role: 'Product Manager Intern',
    location: 'Santa Clara, CA',
    tagline: null,
    description: 'Built CRM discovery and migration product helping enterprises evaluate moves from Salesforce to ServiceNow. Led customer interviews and cross functional sessions with engineering, sales, and services teams, translating insights into product requirements and go to market workflows.',
    logo: '/images/logos/servicenow.png',
    url: 'https://www.servicenow.com/',
  },
  {
    company: 'Worksmith',
    role: 'Product Strategy Intern',
    location: 'Austin, TX',
    tagline: null,
    description: 'Led market validation and user interviews for B2B product aimed at helping solopreneurs launch retail service practices. Conducted acquisition diligence across 200 startups, narrowing to 15 targets presented to CEO and contributing to company\'s first acquisition.',
    logo: '/images/logos/worksmith.png',
    url: 'https://worksmith.com/',
  },
  {
    company: 'Shell',
    role: 'Product Manager Intern',
    location: 'Austin, TX',
    tagline: null,
    description: 'Drove EV charging network growth strategy for Shell E-Mobility, advising general manager on market analysis and mobile rewards design. Built competitive landscape dashboards and tested rewards prototypes with EV consumers to inform product design and incentive economics.',
    logo: '/images/logos/shell.png',
    url: 'http://shell.com',
  },
];

const projects: ExperienceProject[] = [
  {
    company: 'Loman AI',
    role: 'Product Manager Extern',
    location: 'Austin, TX',
    tagline: null,
    description: 'Analyzed churn and usage patterns across 339 AI voice agents to identify retention drivers in restaurant workflows. Synthesized call logs and POS data into product recommendations addressing onboarding and support gaps, presented to the CEO.',
    logo: '/images/logos/loman.svg',
    url: 'https://loman.ai/',
  },
  {
    company: 'Mobile Loaves and Fishes',
    role: 'Strategy Extern',
    location: 'Austin, TX',
    tagline: null,
    description: 'Built financial models to evaluate expansion scenarios for permanent supportive housing, translating social impact into grant-ready ROI narratives. Quantified unit economics and taxpayer savings to inform funding strategy and foundation outreach.',
    logo: '/images/logos/mlf.png',
    url: 'https://mlf.org/',
  },
  {
    company: 'Mercor',
    role: 'Expert Project Manager',
    location: 'Austin, TX',
    tagline: null,
    description: 'Designed and managed large scale evaluation workflows testing LLM performance across real world use cases. Partnered with domain experts and AI labs such as Google and OpenAI to compare model capabilities at scale.',
    logo: '/images/logos/mercor.png',
    url: 'https://www.mercor.com/',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <section className="relative max-w-4xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4 pb-1 gradient-text">
              Aviral Agarwal
            </h1>
            <div className="text-lg text-slate-600 mb-8 leading-relaxed space-y-4">
              <p>
                Hello! I'm Aviral, a junior studying Business Honors and Management Information Systems at UT Austin. I have experience across product, strategy, and growth roles at startups and most recently at ServiceNow, where I focused on CRM software and data migration. This year, I will be joining BCG as a Summer Associate in the Seattle office.
              </p>
              <p>
                I'm interested in building products that sit close to real users, complex systems, and data informed decision making.
              </p>
            </div>
            <div className="flex gap-3 text-sm">
              <a
                href="/Aviral-Agarwal-Resume.pdf"
                download="Aviral Agarwal - Resume.pdf"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg hover:from-indigo-700 hover:to-violet-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
              <a
                href="https://linkedin.com/in/AviralAgarwal05"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <EmailButton />
            </div>
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200 hover:scale-[1.02] transition-transform duration-300">
            <Image
              src="/images/headshot-new.jpg"
              alt="Aviral Agarwal"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      </div>

      {/* Education Section */}
      <section className="relative max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-10 text-slate-800 underline underline-offset-8 decoration-2 decoration-slate-300">
          Education
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          {/* Logo */}
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg flex items-center justify-center p-2 shadow-sm">
            <Image
              src="/images/logos/utaustin.png"
              alt="UT Austin seal"
              width={80}
              height={80}
              className="object-contain w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-2">
            <h3 className="text-xl font-bold text-slate-900">
              The University of Texas at Austin
            </h3>
            <p className="text-base text-slate-700">
              <span className="font-medium">Major:</span> Canfield Business Honors, Management Information Systems
            </p>
            <p className="text-base text-slate-700">
              <span className="font-medium">Minor:</span> Business Analytics, Entrepreneurship
            </p>
            <p className="text-base text-slate-700">
              <span className="font-medium">Technical Skills:</span> Python, SQL, R Studio, C#, Tableau, Power BI, Snowflake, MongoDB, AWS (RDS), Figma, Jira, Git/GitHub, Microsoft Excel, PowerPoint
            </p>
            <p className="text-base text-slate-600 pt-1">
              <span className="font-medium text-slate-700">Organizations:</span> Product@TX, Texas Consulting, Texas Management Consulting Association
            </p>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      </div>

      {/* Experience Section */}
      <section className="relative max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-10 text-slate-800 underline underline-offset-8 decoration-2 decoration-slate-300">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <article key={index}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                {/* Logo */}
                <div className="flex-shrink-0 w-24 h-12 md:w-32 md:h-16 bg-white rounded-lg flex items-center justify-center p-3 shadow-sm">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={120}
                    height={60}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-indigo-600 transition-colors duration-200"
                    >
                      {exp.company}
                    </a>
                  </h3>
                  <p className="text-lg text-slate-700">
                    {exp.role} · {exp.location}
                  </p>
                  {exp.tagline && (
                    <p className="text-base text-slate-600 italic pt-1">
                      {exp.tagline}
                    </p>
                  )}
                  {exp.description && (
                    <p className="text-base text-slate-600 leading-relaxed pt-2">
                      {exp.description}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Section Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      </div>

      {/* Projects Section */}
      <section className="relative max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-10 text-slate-800 underline underline-offset-8 decoration-2 decoration-slate-300">
          Projects
        </h2>

        <div className="space-y-8">
          {projects.map((proj, index) => (
            <article key={index}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                {/* Logo */}
                <div className="flex-shrink-0 w-24 h-12 md:w-32 md:h-16 bg-white rounded-lg flex items-center justify-center p-3 shadow-sm">
                  <Image
                    src={proj.logo}
                    alt={`${proj.company} logo`}
                    width={120}
                    height={60}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-indigo-600 transition-colors duration-200"
                    >
                      {proj.company}
                    </a>
                  </h3>
                  <p className="text-lg text-slate-700">
                    {proj.role} · {proj.location}
                  </p>
                  {proj.tagline && (
                    <p className="text-base text-slate-600 pt-1">
                      {proj.tagline}
                    </p>
                  )}
                  {proj.description && (
                    <p className="text-base text-slate-600 leading-relaxed pt-2">
                      {proj.description}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Section Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      </div>

      {/* Entrepreneurship Section */}
      <section className="relative max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8 text-slate-800 underline underline-offset-8 decoration-2 decoration-slate-300">
          Entrepreneurship
        </h2>

        <div className="grid gap-4">
          <a
            href="https://aviralag99.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 group"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Substack
                </h3>
                <p className="text-sm text-slate-600">
                  Writing on strategy, product, and technology
                </p>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>

          <a
            href="https://github.com/aviralagarwal1" 
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 group"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                <svg className="w-10 h-10 text-slate-700 group-hover:text-slate-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  GitHub
                </h3>
                <p className="text-sm text-slate-600">
                  Code projects and repositories
                </p>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>

          <a
            href="/CourtCall-Pitch.pptx"
            download
            className="block p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 group"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <img src="/images/logos/courtcall.png" alt="CourtCall" className="w-10 h-10 object-contain" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  App Pitch
                </h3>
                <p className="text-sm text-slate-600">
                  Pitch for CourtCall, a sports and social tech startup
                </p>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </a>

          <a
            href="/drone"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 group"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Drone Photography
                </h3>
                <p className="text-sm text-slate-600">
                  Aerial shots from my DJI Spark over the last 5 years
                </p>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16"></div>
    </main>
  );
}
