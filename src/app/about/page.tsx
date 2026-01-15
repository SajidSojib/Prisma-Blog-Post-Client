import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Users,
  BookOpen,
  Calendar,
  Globe,
  Heart,
  Sparkles,
  Target,
  Code,
  MessageSquare,
  Award,
  Clock,
  Zap,
  Shield,
  Mail,
  Twitter,
  Github,
  Linkedin,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default async function AboutPage() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  // throw new Error("Something went wrong");
  // Hardcoded Data
  const stats = [
    { icon: BookOpen, label: "Total Posts", value: "1,247", color: "blue" },
    { icon: Users, label: "Active Authors", value: "89", color: "green" },
    { icon: Calendar, label: "Categories", value: "24", color: "purple" },
    { icon: MessageSquare, label: "Comments", value: "12.5K", color: "pink" },
    { icon: Award, label: "Awards Won", value: "15", color: "amber" },
    { icon: Globe, label: "Countries", value: "56", color: "indigo" },
  ];

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & Lead Developer",
      bio: "Full-stack developer with 8+ years of experience. Passionate about creating beautiful, functional web applications.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      social: { twitter: "@alexj", github: "alexjohnson" },
    },
    {
      name: "Sarah Chen",
      role: "Content Director",
      bio: "Former tech journalist turned content strategist. Curates our editorial vision and author partnerships.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      social: { twitter: "@sarahc", linkedin: "sarahchen" },
    },
    {
      name: "Marcus Rivera",
      role: "DevOps Engineer",
      bio: "Cloud infrastructure specialist. Ensures our platform is fast, secure, and always available.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      social: { twitter: "@marcusr", github: "mrivera" },
    },
    {
      name: "Priya Patel",
      role: "Community Manager",
      bio: "Builds and nurtures our author community. Organizes workshops and community events.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      social: { twitter: "@priyap", linkedin: "priyapatel" },
    },
  ];

  const techStack = [
    {
      name: "Next.js 14",
      description: "React framework with App Router",
      icon: "⚡",
      color: "black",
    },
    {
      name: "TypeScript",
      description: "Type-safe JavaScript",
      icon: "📘",
      color: "blue",
    },
    {
      name: "Prisma",
      description: "Modern database ORM",
      icon: "🗄️",
      color: "blue",
    },
    {
      name: "PostgreSQL",
      description: "Powerful relational database",
      icon: "🐘",
      color: "blue",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      icon: "🎨",
      color: "teal",
    },
    {
      name: "Shadcn/UI",
      description: "Re-usable component library",
      icon: "🎯",
      color: "purple",
    },
  ];

  const milestones = [
    {
      year: "2021",
      title: "Founded",
      description: "Started as a personal blogging project",
    },
    {
      year: "2022",
      title: "First 100 Posts",
      description: "Reached milestone of 100 published articles",
    },
    {
      year: "2023",
      title: "Community Launch",
      description: "Opened platform to external authors",
    },
    {
      year: "2024",
      title: "Redesign v3.0",
      description: "Complete platform overhaul with new features",
    },
  ];

  const features = [
    {
      title: "Blazing Fast Performance",
      description: "Edge-rendered pages with instant navigation",
      icon: Zap,
      color: "yellow",
    },
    {
      title: "Enterprise Security",
      description: "End-to-end encryption and secure authentication",
      icon: Shield,
      color: "green",
    },
    {
      title: "Real-time Updates",
      description: "Live comments and instant notifications",
      icon: Clock,
      color: "blue",
    },
  ];

  const recentPosts = [
    {
      title: "The Future of Web Development in 2024",
      author: "Alex Johnson",
      date: "2 days ago",
    },
    {
      title: "Mastering TypeScript Generics",
      author: "Sarah Chen",
      date: "1 week ago",
    },
    {
      title: "Building Scalable APIs with GraphQL",
      author: "Marcus Rivera",
      date: "2 weeks ago",
    },
  ];

  const values = [
    {
      title: "Quality Over Quantity",
      description:
        "We carefully curate every piece of content to ensure it provides real value to our readers.",
    },
    {
      title: "Community First",
      description:
        "Our platform thrives because of the amazing community of authors and readers who contribute daily.",
    },
    {
      title: "Continuous Learning",
      description:
        "We believe in staying at the forefront of technology and sharing that knowledge with others.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 py-2 px-4 text-sm">
              <Sparkles className="h-3 w-3 mr-2" />
              Since 2021
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Building the{" "}
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Future
              </span>{" "}
              of Tech Content
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We&apos;re a passionate team creating the premier platform for
              developers, engineers, and tech enthusiasts to share knowledge and
              grow together.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <BookOpen className="h-4 w-4" />
                Explore Blog
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Users className="h-4 w-4" />
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-2 hover:border-blue-500/50 transition-colors"
            >
              <CardContent className="pt-6">
                <div
                  className={`inline-flex p-3 rounded-full bg-${stat.color}-100 dark:bg-${stat.color}-900/30 mb-4`}
                >
                  <stat.icon
                    className={`h-6 w-6 text-${stat.color}-600 dark:text-${stat.color}-400`}
                  />
                </div>
                <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Mission & Values */}
            <div className="lg:col-span-2 space-y-12">
              {/* Our Story */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Target className="h-6 w-6 text-blue-600" />
                    Our Story
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg">
                    What started as a small personal blog in 2021 has grown into
                    a thriving community platform with thousands of active
                    readers and contributors.
                  </p>
                  <p>
                    We believe that the best way to learn is by sharing. Our
                    platform provides a space for developers at all levels to
                    share their experiences, challenges, and solutions.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div
                          className={`p-2 rounded-lg bg-${feature.color}-100 dark:bg-${feature.color}-900/30`}
                        >
                          <feature.icon
                            className={`h-5 w-5 text-${feature.color}-600`}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{feature.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Our Values */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Our Core Values</CardTitle>
                  <CardDescription>
                    Principles that guide everything we do
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {values.map((value, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                          <span className="text-blue-600 dark:text-blue-400 font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2">
                            {value.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Our Journey</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
                    <div className="space-y-8">
                      {milestones.map((milestone, index) => (
                        <div key={index} className="relative flex items-start">
                          <div className="absolute left-4 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900" />
                          <div className="ml-12">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-2">
                              {milestone.year}
                            </div>
                            <h4 className="text-lg font-semibold mb-1">
                              {milestone.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Tech Stack
                  </CardTitle>
                  <CardDescription>
                    Modern tools powering our platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {techStack.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{tech.icon}</span>
                          <div>
                            <h4 className="font-medium">{tech.name}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {tech.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Meet the Team */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Meet the Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teamMembers.map((member, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                      >
                        <Avatar>
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback>
                            {member.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold truncate">
                            {member.name}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full gap-2">
                    View Full Team
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </CardFooter>
              </Card>

              {/* Recent Posts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Recent Posts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPosts.map((post, index) => (
                      <div key={index} className="group">
                        <div className="flex items-start space-x-3">
                          <div className="shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-500" />
                          <div>
                            <h4 className="font-medium group-hover:text-blue-600 transition-colors">
                              {post.title}
                            </h4>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                              <span>{post.author}</span>
                              <span className="mx-2">•</span>
                              <span>{post.date}</span>
                            </div>
                          </div>
                        </div>
                        {index < recentPosts.length - 1 && (
                          <Separator className="mt-4" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full">
                    View All Posts
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-dashed border-blue-200 dark:border-blue-800 bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <CardContent className="pt-12 pb-12">
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
                  <Heart className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  Whether you&apos;re a writer, developer, or tech enthusiast,
                  there&apos;s a place for you here.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gap-2">
                    <Mail className="h-4 w-4" />
                    Subscribe to Newsletter
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Join Discord
                  </Button>
                </div>
                <div className="flex justify-center gap-4 mt-8">
                  <Button variant="ghost" size="icon">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer Note */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
          <p className="flex items-center justify-center gap-2">
            <MapPin className="h-4 w-4" />
            Made with ❤️ from San Francisco, CA
          </p>
          <p className="mt-2">© 2024 TechBlog Platform. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
