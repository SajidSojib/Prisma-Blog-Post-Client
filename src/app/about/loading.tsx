import React from "react";
import {
  Card,
  CardContent,
  //   CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
// import {
//   Users,
//   BookOpen,
//   Calendar,
//   TrendingUp,
//   Globe,
//   Heart,
//   Sparkles,
// } from "lucide-react";

export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header Skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-48 mx-auto mb-4" />
            <Skeleton className="h-6 w-3/4 max-w-2xl mx-auto mb-8" />
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-8 w-20 rounded-full" />
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <Card
                key={i}
                className="border-2 border-dashed border-gray-200 dark:border-gray-700"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Skeleton className="h-12 w-12 rounded-full mb-3" />
                    <Skeleton className="h-6 w-24 mb-2" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Left Column - Mission */}
            <div className="lg:col-span-2">
              <Card className="h-full border-2 border-dashed border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <Skeleton className="h-8 w-40 mb-2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
                  <Skeleton className="h-4 w-2/3" />

                  {/* Team Section */}
                  <div className="mt-8">
                    <Skeleton className="h-6 w-32 mb-4" />
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="flex flex-col items-center">
                          <Skeleton className="h-20 w-20 rounded-full mb-2" />
                          <Skeleton className="h-4 w-16 mb-1" />
                          <Skeleton className="h-3 w-12" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <Card className="border-2 border-dashed border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <Skeleton className="h-6 w-32" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <Skeleton className="h-4 w-4 rounded" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="border-2 border-dashed border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <Skeleton className="h-6 w-40" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <div className="flex items-center space-x-2">
                          <Skeleton className="h-3 w-16" />
                          <Skeleton className="h-3 w-20" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Timeline/History Section */}
          <Card className="mb-12 border-2 border-dashed border-gray-200 dark:border-gray-700">
            <CardHeader>
              <Skeleton className="h-8 w-48 mx-auto" />
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

                <div className="space-y-12">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`flex items-center ${
                        i % 2 === 0 ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div className="w-1/2 px-8">
                        <Card
                          className={`border-2 border-dashed border-gray-200 dark:border-gray-700 ${
                            i % 2 === 0 ? "text-right" : ""
                          }`}
                        >
                          <CardContent className="pt-6">
                            <Skeleton
                              className={`h-5 w-32 ${
                                i % 2 === 0 ? "ml-auto" : ""
                              } mb-2`}
                            />
                            <Skeleton className="h-4 w-full mb-1" />
                            <Skeleton className="h-4 w-3/4" />
                          </CardContent>
                        </Card>
                      </div>
                      <div className="w-8 h-8">
                        <Skeleton className="h-8 w-8 rounded-full" />
                      </div>
                      <div className="w-1/2 px-8">
                        <Skeleton className="h-6 w-24" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <Skeleton className="h-10 w-48 mx-auto mb-6" />
            <div className="flex flex-wrap justify-center gap-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-12 w-40 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-20" />
      <div className="fixed top-20 right-10 w-40 h-40 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
      <div className="fixed bottom-20 left-10 w-60 h-60 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000" />
    </div>
  );
}
