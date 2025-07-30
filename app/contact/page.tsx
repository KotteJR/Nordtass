export default function Contact() {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12">
          <p className="text-[#2288ff] text-sm mb-2">• Contact</p>
          <h1 className="text-[#535353] text-3xl md:text-4xl font-medium">
            Get in Touch
          </h1>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-[#535353] text-xl font-medium mb-4">Contact Information</h2>
            <div className="space-y-4 text-[#535353]">
              <p>Email: hello@nordtass.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Smart Home Ave, Tech City, TC 12345</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-[#535353] text-xl font-medium mb-4">Send us a message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-full border border-[#e2e8f0] px-4 py-3 text-sm text-[#535353] bg-white focus:outline-none focus:border-[#2288ff]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-full border border-[#e2e8f0] px-4 py-3 text-sm text-[#535353] bg-white focus:outline-none focus:border-[#2288ff]"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full rounded-2xl border border-[#e2e8f0] px-4 py-3 text-sm text-[#535353] bg-white focus:outline-none focus:border-[#2288ff] resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-[#2288ff] text-white text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 