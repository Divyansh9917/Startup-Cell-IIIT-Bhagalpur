import { useState } from 'react';

const galleryCategories = [
  'All',
  'Hackathons',
  'Demo Days',
  'Workshops',
  'Founder Talks',
  'Incubation Lab',
];

const galleryItems = [
  {
    id: 1,
    title: 'Annual Hack-a-Startup 48-Hour Sprint',
    category: 'Hackathons',
    date: 'February 2026',
    location: 'Main Auditorium',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85',
    desc: 'Over 50 teams building AI and IoT prototypes across an intense 48-hour marathon.',
  },
  {
    id: 2,
    title: 'Angel Syndicate Demo Day & VC Pitching',
    category: 'Demo Days',
    date: 'January 2026',
    location: 'Senate Hall',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85',
    desc: 'Student founders pitching to marquee angel investors and venture capital partners.',
  },
  {
    id: 3,
    title: 'Hardware & IoT Rapid Prototyping Workshop',
    category: 'Workshops',
    date: 'November 2025',
    location: 'Maker Lab',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
    desc: 'Hands-on session with 3D printers, PCB micro-soldering, and sensor calibration.',
  },
  {
    id: 4,
    title: 'Fireside Chat with Unicorn Founder Alumni',
    category: 'Founder Talks',
    date: 'October 2025',
    location: 'Virtual & Hybrid Hub',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=85',
    desc: 'Invaluable insights on navigating early product market fit and international expansion.',
  },
  {
    id: 5,
    title: '24/7 Student Co-Working & Ideation Pods',
    category: 'Incubation Lab',
    date: 'Active Daily',
    location: 'Startup Incubation Wing',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85',
    desc: 'Founding teams collaborating and shipping code in our fully serviced incubation desks.',
  },
  {
    id: 6,
    title: 'Patent Drafting & Intellectual Property Clinic',
    category: 'Workshops',
    date: 'September 2025',
    location: 'Conference Room B',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=85',
    desc: 'IP attorneys helping student inventors draft provisional patent specifications.',
  },
  {
    id: 7,
    title: 'National Startup Day Celebrations',
    category: 'Demo Days',
    date: 'January 2025',
    location: 'Campus Open Quad',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=85',
    desc: 'Exhibition of 30+ prototypes developed under the pre-incubation grants.',
  },
  {
    id: 8,
    title: 'AI & Cloud Infrastructure Boot Camp',
    category: 'Workshops',
    date: 'August 2025',
    location: 'High Performance Compute Center',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=85',
    desc: 'Deep dive into deploying scalable LLMs and cloud microservices on cloud credits.',
  },
  {
    id: 9,
    title: 'Venture Capital Round Table & Networking',
    category: 'Founder Talks',
    date: 'July 2025',
    location: 'Executive Lounge',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85',
    desc: 'Informal discussions between seed investors and early-stage student founders.',
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalImage, setActiveModalImage] = useState(null);

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-24 pb-20 bg-[#EEE3D4]">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#EEE3D4] via-[#E5D6C5] to-[#EEE3D4] text-[#292825] pt-16 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-b border-[#D8C5B0]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D8C5B0]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#B85C3A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D8C5B0] text-[#B85C3A] text-xs font-bold uppercase tracking-widest mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#B85C3A] animate-pulse" />
            Campus Life & Events
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#292825]">
            Ecosystem <span className="text-[#B85C3A]">Gallery</span>
          </h1>
          <p className="text-[#292825]/80 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Capturing the passion, sleepless hackathon nights, breakthrough pitches, and milestones across our vibrant innovation community.
          </p>
        </div>
      </section>

      {/* Gallery Filter & Grid Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 bg-white p-2.5 sm:p-3 rounded-2xl sm:rounded-full shadow-sm border border-[#D8C5B0] max-w-3xl mx-auto">
          {galleryCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#B85C3A] text-white shadow-sm font-bold'
                    : 'text-[#292825]/80 hover:text-[#B85C3A] hover:bg-[#EEE3D4]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalImage(item)}
              className="group bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-[#D8C5B0] hover:border-[#B85C3A] cursor-pointer hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Image Preview Container */}
              <div className="relative h-64 overflow-hidden bg-[#292825]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs font-semibold text-[#D8C5B0] flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#B85C3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
                    </svg>
                    Click to enlarge preview
                  </span>
                </div>
                <span className="absolute top-3 right-3 text-xs font-semibold bg-[#292825]/90 text-[#D8C5B0] border border-[#B85C3A]/30 px-3 py-1 rounded-full backdrop-blur-md">
                  {item.category}
                </span>
              </div>

              {/* Card Meta */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#6F6B5E] font-semibold mb-2">
                    <span>📅 {item.date}</span>
                    <span>•</span>
                    <span>📍 {item.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#292825] mb-2 group-hover:text-[#B85C3A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#292825]/80 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Image Lightbox Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-[#292825]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#292825] rounded-3xl overflow-hidden border border-[#B85C3A]/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-[#B85C3A] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close image modal"
            >
              ✕
            </button>

            <img
              src={activeModalImage.image}
              alt={activeModalImage.title}
              className="w-full max-h-[65vh] object-cover"
            />

            <div className="p-6 sm:p-8 text-white">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D8C5B0] bg-[#B85C3A]/20 border border-[#B85C3A]/40 px-3 py-1 rounded-full">
                  {activeModalImage.category}
                </span>
                <span className="text-xs text-[#D8C5B0]/80">
                  {activeModalImage.date} • {activeModalImage.location}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {activeModalImage.title}
              </h3>
              <p className="text-[#D8C5B0]/90 text-sm sm:text-base leading-relaxed">
                {activeModalImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
