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
    feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=880&q=80",
    name: "Robbert",
    position: "CTO, Robert Consultency",
  },
  {
    id: 2,
    feedback: "Sit ea tempora dolores qui eius pariatur odit ad voluptas iste.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=761&q=80",
    name: "Jeny Doe",
    position: "CEO, Jeny Consultency",
  },
  {
    id: 3,
    feedback: "Cum accusantium beatae tempore quasi nesciunt distinctio.",
    image:
      "https://images.unsplash.com/photo-1499470932971-a90681ce8530?auto=format&fit=crop&w=1470&q=80",
    name: "Mia Brown",
    position: "Marketing Manager at Stech",
  },
  {
    id: 4,
    feedback: "Sit ea tempora dolores qui eius pariatur odit ad voluptas iste.",
    image:
      "https://images.unsplash.com/photo-1488508872907-592763824245?auto=format&fit=crop&w=1470&q=80",
    name: "Lead Designer",
    position: "Developer at Stech",
  },
];