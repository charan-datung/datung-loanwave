import { Building2, Users, Rocket, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";

const AboutUs = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 opacity-5 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216')", // Professional team collaboration
        }}
      />
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae')", // Manila skyline
          }}
        />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Transforming Financial Inclusion in the Philippines
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Building bridges between traditional community values and modern technology to create accessible financial solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 bg-white relative">
        <div 
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582280577339-c39771df3546')", // Filipino marketplace
          }}
        />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Datung was born from a simple yet powerful observation: millions of Filipino micro-entrepreneurs and employees lack access to fair financing, despite their vital contribution to our economy.
            </p>
            <p className="text-lg text-gray-700">
              Through deep market research and community engagement, we built solutions that address the real needs of our people, combining traditional values with innovative technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50 relative">
        <div 
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952')", // Business meeting
          }}
        />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
            <p className="text-lg text-gray-700">
              We envision a future where every Filipino business owner and employee has access to fair, transparent financial services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <Building2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Empowering MSMEs</h3>
                <p className="text-gray-700">
                  Supporting micro, small, and medium enterprises with accessible financing solutions that fuel their growth.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community First</h3>
                <p className="text-gray-700">
                  Building on Filipino values of 'bayanihan' while leveraging modern technology to create inclusive financial solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white relative">
        <div 
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf')", // Technology and community
          }}
        />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Approach</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Community-Based Lending</h3>
                <p className="text-gray-700 mb-6">
                  Our JAG model builds on traditional Filipino community values, creating a network of trust and mutual support.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Technology Innovation</h3>
                <p className="text-gray-700 mb-6">
                  We leverage artificial intelligence and computer vision technology to make lending more efficient and accessible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 relative">
        <div 
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab')", // Modern city development
          }}
        />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Future Vision</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <LineChart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Expansion</h3>
                <p className="text-gray-700">
                  Growing our lending operations to reach more communities across the Philippines.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Rocket className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-700">
                  Continuous development of our technology platform to enhance financial services.
                </p>
              </CardContent>
            </Card>
            <Card className="md:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Partnerships</h3>
                <p className="text-gray-700">
                  Building strategic partnerships to expand our impact and reach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;