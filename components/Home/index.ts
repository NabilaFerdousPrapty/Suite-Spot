// index.ts
export interface Testimonial {
  id: number;
  feedback: string;
  image: string;
  name: string;
  position: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    feedback: "This is the best platform I've used for finding great services. The customer support is exceptional!",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=880&q=80",
    name: "Robbert",
    position: "CTO, Robert Consultancy",
  },
  {
    id: 2,
    feedback: "I had a fantastic experience! The team was extremely responsive, and the service provided was beyond my expectations.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=761&q=80",
    name: "Jeny Doe",
    position: "CEO, Jeny Consultancy",
  },
  {
    id: 3,
    feedback: "Highly recommend this platform. It's easy to navigate, and I found exactly what I needed quickly. A real time-saver!",
    image:
      "https://images.unsplash.com/photo-1499470932971-a90681ce8530?auto=format&fit=crop&w=1470&q=80",
    name: "Mia Brown",
    position: "Marketing Manager at Stech",
  },
  {
    id: 4,
    feedback: "The platform is incredibly user-friendly, and the quality of services offered is top-notch. A must-try for anyone looking for reliable solutions.",
    image:
      "https://images.unsplash.com/photo-1488508872907-592763824245?auto=format&fit=crop&w=1470&q=80",
    name: "Alex Smith",
    position: "Lead Designer, Developer at Stech",
  },
];
