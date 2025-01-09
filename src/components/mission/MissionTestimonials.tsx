import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Through Datung's financial solutions, I was able to expand my small business and provide better opportunities for my family.",
    author: "Eden Dajac",
    role: "Small Business Owner",
    image: "https://images.pexels.com/photos/7706493/pexels-photo-7706493.jpeg",
  },
  {
    quote: "The process was simple and transparent. Now I can focus on growing my business without worrying about financial constraints.",
    author: "Jocelyn Bawit",
    role: "Restaurant Owner",
    image: "https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg",
  },
];

export const MissionTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Success Stories
        </h2>
        
        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <blockquote className="text-lg md:text-xl mb-4 italic text-gray-700">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="font-semibold">{testimonials[currentIndex].author}</div>
                  <div className="text-gray-600">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={previous}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};