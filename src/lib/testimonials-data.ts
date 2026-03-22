export interface Testimonial {
  id: string
  name: string
  role: string
  schoolName: string
  rating: number
  text: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Parent",
    schoolName: "Ecole Globale, Dehradun",
    rating: 5,
    text: "My daughter has thrived at Ecole Globale. The holistic approach to education and emphasis on character development has been transformative. Highly recommend!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    role: "Parent",
    schoolName: "Doon School, Dehradun",
    rating: 5,
    text: "The academic rigor combined with excellent sports facilities has given my son the best platform to excel. Outstanding faculty and modern infrastructure.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    name: "Ananya Patel",
    role: "Student",
    schoolName: "Bishop Cotton School, Shimla",
    rating: 5,
    text: "Bishop Cotton gave me lifelong friendships and unforgettable memories. The boarding experience shaped who I am today. Grateful for everything!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    name: "Dr. Amit Singh",
    role: "Parent",
    schoolName: "Welham Girls, Dehradun",
    rating: 4,
    text: "Excellent academic standards and wonderful pastoral care. My daughter feels safe, supported, and is developing into a confident young woman.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: "5",
    name: "Vikram Malhotra",
    role: "Student",
    schoolName: "Mayo College, Ajmer",
    rating: 5,
    text: "Mayo College is more than just a school; it's a brotherhood. The heritage, traditions, and values instilled here will stay with me for life.",
    image: "https://images.unsplash.com/photo-1463142109855-7a7aea8e3d49?w=400&h=400&fit=crop",
  },
  {
    id: "6",
    name: "Sneha Desai",
    role: "Parent",
    schoolName: "Ecole Globale, Dehradun",
    rating: 5,
    text: "The personalized attention and focus on individual development is remarkable. My son has discovered talents and passions he never knew he had.",
    image: "https://images.unsplash.com/photo-1488426862026-56bde8da51c1?w=400&h=400&fit=crop",
  },
]
