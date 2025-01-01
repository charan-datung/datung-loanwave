import { Card, CardContent } from "@/components/ui/card";

const successStories = [
  {
    name: "Maria de los Reyes",
    role: "Sari-sari Store Owner",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    story: "\"The process was very simple. I only needed my ID and some pictures of my store. Within 3 days, I received ₱20,000 which I used to expand my inventory. My sales have increased by 40% since then!\""
  },
  {
    name: "Jason Castro",
    role: "Carinderia Owner",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    story: "\"I was worried about the requirements, but it was so easy. I formed a group with my fellow market vendors, and we all got approved. The loan helped me buy new equipment for my carinderia.\""
  }
];

export const SuccessStories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{story.name}</h3>
                    <p className="text-gray-600">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{story.story}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};