import { Calendar, Clock, ArrowRight } from 'lucide-react';

export function Blog() {
  const featuredPost = {
    title: 'Introducing Prompt2Prod 2.0: Build Internal Tools 10x Faster',
    excerpt: 'Today, we are excited to announce Prompt2Prod 2.0 with new features that make building internal tools even faster and more powerful.',
    author: 'Alex Chen',
    date: 'Nov 10, 2024',
    readTime: '5 min read',
    category: 'Product Updates',
    image: 'Featured'
  };

  const posts = [
    {
      title: 'How to Build a Customer Portal in 30 Minutes',
      excerpt: 'A step-by-step guide to building a fully functional customer portal with authentication, data tables, and forms.',
      author: 'Sarah Williams',
      date: 'Nov 8, 2024',
      readTime: '8 min read',
      category: 'Tutorials'
    },
    {
      title: 'Best Practices for Internal Tool Development',
      excerpt: 'Learn the patterns and practices that lead to maintainable, scalable internal tools.',
      author: 'Michael Brown',
      date: 'Nov 5, 2024',
      readTime: '6 min read',
      category: 'Best Practices'
    },
    {
      title: 'Connecting to Multiple Databases: A Complete Guide',
      excerpt: 'Everything you need to know about connecting to PostgreSQL, MySQL, MongoDB, and more.',
      author: 'Emily Davis',
      date: 'Nov 3, 2024',
      readTime: '10 min read',
      category: 'Tutorials'
    },
    {
      title: 'Security Best Practices for Internal Tools',
      excerpt: 'How to keep your internal applications secure with proper authentication, authorization, and data protection.',
      author: 'David Johnson',
      date: 'Oct 30, 2024',
      readTime: '7 min read',
      category: 'Security'
    },
    {
      title: 'Case Study: How TechCorp Saved 500 Hours with Prompt2Prod',
      excerpt: 'Learn how TechCorp transformed their internal tool development process and saved thousands in development costs.',
      author: 'Lisa Martinez',
      date: 'Oct 28, 2024',
      readTime: '5 min read',
      category: 'Case Studies'
    },
    {
      title: 'Building Real-Time Dashboards with WebSockets',
      excerpt: 'Create dynamic, real-time dashboards that update automatically as your data changes.',
      author: 'James Wilson',
      date: 'Oct 25, 2024',
      readTime: '12 min read',
      category: 'Tutorials'
    }
  ];

  const categories = [
    'All Posts',
    'Product Updates',
    'Tutorials',
    'Best Practices',
    'Case Studies',
    'Security'
  ];

  return (
    <div className="min-h-screen bg-[#010731] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Blog &
            <br />
            <span className="bg-gradient-to-r from-[#00B4A8] to-[#006A67] bg-clip-text text-transparent">
              Resources
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Tutorials, product updates, and insights from the Prompt2Prod team.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                category === 'All Posts'
                  ? 'bg-gradient-to-r from-[#006A67] to-[#00B4A8] text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mb-16">
          <div className="relative bg-gradient-to-r from-[#006A67]/20 to-[#00B4A8]/20 border border-[#00B4A8]/50 rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00B4A8] to-[#006A67] opacity-10 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-[#00B4A8] text-white text-xs font-semibold rounded-full">
                  {featuredPost.category}
                </span>
                <span className="text-white/40 text-sm">Featured Post</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-white/70 text-lg mb-6 max-w-3xl">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2 text-white/60 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-white/60 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#006A67] to-[#00B4A8] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#006A67]/30 transition-all">
                <span>Read More</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.title}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#00B4A8]/50 transition-all cursor-pointer group"
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-white/10 text-white/80 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00B4A8] transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-2 text-white/60 text-xs">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/60 text-xs">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="px-8 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
            Load More Posts
          </button>
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#006A67]/20 to-[#00B4A8]/20 border border-[#00B4A8]/50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Subscribe to Our Newsletter</h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Get the latest tutorials, product updates, and insights delivered to your inbox every week.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00B4A8] transition-colors"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-[#006A67] to-[#00B4A8] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#006A67]/30 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
