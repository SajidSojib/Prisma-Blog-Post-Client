import Link from "next/link";
import {
  Home,
  Search,
  ArrowLeft,
  AlertCircle,
  Compass,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  // Common paths users might be looking for
  const suggestedPaths = [
    { name: "Home", path: "/", icon: <Home className="h-4 w-4" /> },
    { name: "Blog", path: "/blogs", icon: <Compass className="h-4 w-4" /> },
    { name: "About", path: "/about", icon: <Globe className="h-4 w-4" /> },
    { name: "Contact", path: "/contact", icon: <Search className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-2xl w-full mx-auto text-center">
        {/* Animated 404 Number */}
        <div className="relative mb-8">
          <div className="text-9xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            404
          </div>
          <div className="absolute -top-4 -right-4">
            <AlertCircle className="h-16 w-16 text-amber-500 opacity-70 animate-bounce" />
          </div>
        </div>

        {/* Main Message */}
        <Card className="mb-8 border-2 border-dashed border-gray-300 dark:border-gray-700">
          <CardContent className="pt-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Page Lost in the Digital Void
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              The page you&apos;re looking for seems to have wandered off into
              cyberspace. Don&apos;t worry, even the best explorers sometimes
              take wrong turns.
            </p>

            {/* Search Suggestion */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center gap-2 text-blue-700 dark:text-blue-300">
                <Search className="h-5 w-5" />
                <p className="text-sm">
                  Double-check the URL or try searching for what you need
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <ArrowLeft className="h-5 w-5" />
              Back to Homepage
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/blog">
              <Compass className="h-5 w-5" />
              Explore Blog
            </Link>
          </Button>
        </div>

        {/* Suggested Pages */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Quick Navigation
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {suggestedPaths.map((item) => (
              <Button
                key={item.name}
                asChild
                variant="ghost"
                className="flex flex-col h-auto py-4 gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <Link href={item.path}>
                  <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Fun Stats */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <p>
            While you&apos;re here, did you know? This 404 page has been viewed
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              {" "}
              ∞{" "}
            </span>
            times by lost but curious visitors like you.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent opacity-20"></div>
      <div className="fixed top-10 left-10 w-32 h-32 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="fixed bottom-10 right-10 w-48 h-48 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
    </div>
  );
}
