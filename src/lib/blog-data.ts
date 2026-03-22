export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image: string
  readTime: number
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Complete Guide to Boarding School Admissions in India",
    excerpt: "Learn everything you need to know about the boarding school admission process, including timelines, requirements, and tips for success.",
    content: "Boarding school admissions in India follow a structured process that varies by institution. Most schools have entrance exams, interviews, and review academic records...",
    author: "Dr. Priya Sharma",
    date: "2026-03-15",
    category: "Admissions",
    image: "https://images.unsplash.com/photo-1427504494829-991c6402078e?w=600&h=400&fit=crop",
    readTime: 8,
  },
  {
    id: "2",
    title: "Life Skills Every Boarding School Student Should Develop",
    excerpt: "Boarding school teaches much more than academics. Discover the essential life skills students develop during their boarding school journey.",
    content: "Independence, time management, emotional intelligence, and collaboration are just some of the crucial life skills that boarding school students develop...",
    author: "Mr. Rajesh Kumar",
    date: "2026-03-10",
    category: "Student Life",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop",
    readTime: 6,
  },
  {
    id: "3",
    title: "Cost Comparison: Boarding vs Day Schools in India",
    excerpt: "A comprehensive analysis of the financial aspects of boarding schools versus day schools to help families make informed decisions.",
    content: "The cost of boarding schools includes not just tuition fees, but also accommodation, meals, activities, and other miscellaneous charges...",
    author: "Ms. Ananya Patel",
    date: "2026-03-05",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1634129715249-eae3b2e7b0f9?w=600&h=400&fit=crop",
    readTime: 10,
  },
  {
    id: "4",
    title: "Top Sports Programs at Indian Boarding Schools",
    excerpt: "Explore the world-class sports facilities and programs offered by India's premier boarding schools.",
    content: "Indian boarding schools pride themselves on their comprehensive sports programs, offering facilities and coaching that rival international standards...",
    author: "Coach Vikram Singh",
    date: "2026-02-28",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
    readTime: 7,
  },
  {
    id: "5",
    title: "Choosing the Right Curriculum: CBSE vs ICSE vs IB",
    excerpt: "Understanding the differences between major curricula offered in Indian boarding schools to find the best fit for your child.",
    content: "Each curriculum has its unique strengths and focuses. CBSE follows the national curriculum, ICSE offers a broader perspective, and IB provides international standing...",
    author: "Dr. Neha Gujarati",
    date: "2026-02-21",
    category: "Curriculum",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop",
    readTime: 9,
  },
  {
    id: "6",
    title: "Parent's Guide: Staying Connected While Your Child is Away",
    excerpt: "Tips and strategies for parents to maintain a strong relationship with their boarding school children.",
    content: "Regular communication, planned visits, and creating rituals of connection help maintain strong parent-child bonds despite distance...",
    author: "Ms. Shreya Verma",
    date: "2026-02-15",
    category: "Parents",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    readTime: 6,
  },
]
