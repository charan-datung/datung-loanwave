import { Card, CardContent } from "@/components/ui/card";

const stories = [
  {
    name: "Carlos Mendoza",
    role: "Ambassador",
    image: "https://images.pexels.com/photos/7706493/pexels-photo-7706493.jpeg",
    story: "\"As a Datung Ambassador, I've been able to earn while helping small businesses in my community. In just 6 months, I've helped over 30 entrepreneurs access the funding they need to grow their businesses.\"",
  },
  {
    name: "Miguel Santos",
    role: "Ambassador",
    image: "https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg",
    story: "\"Being a Datung Ambassador has allowed me to earn while making a real difference in my community. I've helped dozens of small businesses access the funding they need to grow.\"",
  },
];

export const SuccessStories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stories.map((story, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
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