import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

export const VisitUs = () => {
  const address = "Datung Building (Wimpex), W Service Road, Sucat, Parañaque City, Philippines";
  const mapsQuery = encodeURIComponent(address);
  const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">
            Visit Us
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
            Drop By Our Sucat Office
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We welcome walk-ins for loan inquiries, applications, and repayments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 border border-gray-100 space-y-6"
          >
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-accent" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Headquarters</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Datung Building (Wimpex)<br />
                  W Service Road, Sucat<br />
                  Parañaque City, Metro Manila
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-accent" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Office Hours</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Monday – Friday: 9:00 AM – 6:00 PM<br />
                  Saturday: 9:00 AM – 1:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-accent" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Get in Touch</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  hello@datung.io
                </p>
              </div>
            </div>

            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-5 py-3 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors"
            >
              Get Directions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 rounded-2xl overflow-hidden border border-gray-100 shadow-sm min-h-[320px] lg:min-h-full"
          >
            <iframe
              title="Datung Office Location"
              src={mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 380 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
