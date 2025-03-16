import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export default function BlogPage() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Sustainable Construction in Kenya",
      excerpt:
        "Exploring how innovative building technologies like interlocking blocks are transforming the construction landscape in East Africa.",
      content: `<p>The construction industry in Kenya is undergoing a significant transformation, with sustainable building practices taking center stage. Traditional construction methods, while familiar, often come with substantial environmental costs, including high carbon emissions, excessive waste, and inefficient resource utilization.</p>

<p>Interlocking block technology represents a revolutionary approach to addressing these challenges. By eliminating the need for mortar in most applications, these precision-engineered blocks not only reduce construction time by up to 50% but also minimize waste and lower the overall carbon footprint of building projects.</p>

<p>At Sajour Agencies Limited, we've witnessed firsthand how this technology is changing the construction landscape across East Africa. Projects that once took months to complete are now finished in weeks, with superior structural integrity and at a lower cost.</p>

<p>The benefits extend beyond just efficiency. Buildings constructed with our interlocking and hollow block technology demonstrate remarkable energy efficiency, with many clients reporting up to 35% reduction in heating and cooling costs due to the superior insulation properties of our blocks.</p>

<p>As Kenya continues to develop its infrastructure, the adoption of sustainable construction technologies will play a crucial role in ensuring that growth doesn't come at the expense of environmental health. By embracing innovations like interlocking block systems, we can build a future where construction contributes positively to both economic development and environmental sustainability.</p>`,
      author: "Jorum Githuku",
      date: "June 15, 2023",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Sustainability",
    },
    {
      id: 2,
      title: "Cost Comparison: Traditional vs. Interlocking Block Construction",
      excerpt:
        "A detailed analysis of the cost benefits of using interlocking block technology compared to conventional construction methods.",
      content: `<p>When planning a construction project, cost is often one of the most significant considerations. Traditional construction methods using conventional blocks and mortar have been the standard for decades, but how do they compare financially to newer technologies like interlocking blocks?</p>

<p>Our analysis of dozens of projects completed over the past five years reveals some compelling data. On average, interlocking block construction reduces overall project costs by 20-30% compared to traditional methods. These savings come from multiple sources:</p>

<ul>
<li><strong>Material Costs:</strong> Interlocking blocks eliminate or significantly reduce the need for mortar, resulting in material savings of approximately 15%.</li>
<li><strong>Labor Costs:</strong> The simplified construction process requires fewer skilled laborers and reduces construction time by up to 50%, translating to labor cost savings of 25-35%.</li>
<li><strong>Time Value:</strong> Faster project completion means earlier occupancy or operational start, which has significant financial implications, especially for commercial projects.</li>
<li><strong>Maintenance Costs:</strong> The superior structural integrity of interlocking block construction typically results in lower maintenance costs over the building's lifetime.</li>
</ul>

<p>For a typical 3-bedroom residential project in Nairobi, our data shows that using interlocking block technology can save approximately KSh 600,000-800,000 compared to conventional construction methods.</p>

<p>While the initial investment in quality interlocking blocks may be slightly higher than traditional blocks, the overall project economics strongly favor this innovative approach. As more contractors and developers become familiar with the technology, we expect these cost advantages to become even more pronounced.</p>`,
      author: "Sarah Kamau",
      date: "May 22, 2023",
      image:
        "https://images.unsplash.com/photo-1604689598793-b43e9c3e0894?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Cost Analysis",
    },
    {
      id: 3,
      title:
        "Hollow Block Technology: Improving Energy Efficiency in Buildings",
      excerpt:
        "How hollow block construction creates more comfortable, energy-efficient spaces through superior insulation and thermal regulation.",
      content: `<p>In the face of rising energy costs and growing environmental concerns, building energy efficiency has become a critical consideration in modern construction. Hollow block technology offers a compelling solution to this challenge, providing superior thermal performance compared to solid alternatives.</p>

<p>The science behind this efficiency is straightforward but powerful. The air cavities within hollow blocks create natural insulation barriers that slow heat transfer through walls. This physical property has significant implications for building performance:</p>

<ul>
<li><strong>Temperature Regulation:</strong> Buildings constructed with hollow blocks maintain more stable internal temperatures, reducing the need for heating and cooling.</li>
<li><strong>Energy Savings:</strong> Our clients report average energy savings of 30-35% for climate control in buildings constructed with our hollow block technology.</li>
<li><strong>Comfort Improvement:</strong> Beyond mere energy savings, the improved thermal regulation creates more comfortable living and working environments.</li>
<li><strong>Sound Insulation:</strong> An added benefit is superior sound dampening, making hollow block construction ideal for urban environments or multi-unit buildings.</li>
</ul>

<p>A case study from our Riverside Apartments project in Nakuru demonstrates these benefits clearly. After one full year of occupancy, energy consumption for heating and cooling was 35% lower than comparable apartments constructed with traditional solid blocks. Residents also reported significantly higher satisfaction with sound isolation between units.</p>

<p>As Kenya continues to implement more stringent energy efficiency standards for new construction, hollow block technology offers a proven, cost-effective approach to meeting and exceeding these requirements while creating better buildings for occupants.</p>`,
      author: "David Mwangi",
      date: "April 10, 2023",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Technology",
    },
    {
      id: 4,
      title: "Training the Next Generation of Construction Professionals",
      excerpt:
        "Our comprehensive training programs are equipping contractors and builders with the skills needed to implement innovative building technologies.",
      content: `<p>The construction industry is evolving rapidly, with new technologies and methods transforming how we build. However, the adoption of these innovations depends critically on having a workforce skilled in their implementation. At Sajour Agencies Limited, we recognize this challenge and have developed comprehensive training programs to address it.</p>

<p>Our Construction Training Program focuses on practical, hands-on learning that equips professionals with the skills needed to excel with interlocking and hollow block technologies. Since launching the program in 2018, we've trained over 200 contractors and more than 500 construction workers across East Africa.</p>

<p>The curriculum covers several key areas:</p>

<ul>
<li><strong>Technical Fundamentals:</strong> Understanding the engineering principles behind interlocking and hollow block systems.</li>
<li><strong>Installation Techniques:</strong> Hands-on practice with proper block placement, alignment, and finishing.</li>
<li><strong>Quality Control:</strong> Methods for ensuring structural integrity and aesthetic excellence.</li>
<li><strong>Project Management:</strong> Optimizing workflows and team coordination for maximum efficiency.</li>
<li><strong>Problem-Solving:</strong> Addressing common challenges and adapting to unique project requirements.</li>
</ul>

<p>The impact of this training extends beyond individual careers. By building a skilled workforce familiar with advanced construction technologies, we're accelerating the industry's transition toward more efficient, sustainable building practices.</p>

<p>Graduates of our program report an average 40% increase in project efficiency and a significant competitive advantage in securing contracts for modern construction projects. Many have gone on to establish successful businesses specializing in interlocking block construction.</p>

<p>As we continue to refine and expand our training offerings, we remain committed to developing the human capital necessary to transform the construction landscape in East Africa.</p>`,
      author: "Grace Ochieng",
      date: "March 5, 2023",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Training",
    },
    {
      id: 5,
      title: "Custom Block Manufacturing: Balancing Aesthetics and Performance",
      excerpt:
        "How our custom block manufacturing capabilities are enabling architects and designers to achieve unique aesthetic visions without compromising structural integrity.",
      content: `<p>In the world of architecture and construction, the tension between form and function is ever-present. Designers seek to create visually striking buildings that express unique aesthetic visions, while engineers focus on ensuring structural integrity and performance. Our custom block manufacturing service bridges this gap, enabling both beautiful and sound construction.</p>

<p>The Highland Luxury Resort project exemplifies this balance. The architect envisioned a structure that would blend seamlessly with the natural landscape of the Nanyuki highlands. Through our custom manufacturing process, we created interlocking blocks in three specialized earth tones that perfectly complemented the surrounding environment.</p>

<p>The customization process involves several key steps:</p>

<ul>
<li><strong>Design Consultation:</strong> Working closely with architects and designers to understand their vision.</li>
<li><strong>Material Selection:</strong> Identifying the optimal mix of materials to achieve desired colors and textures while maintaining structural properties.</li>
<li><strong>Prototype Development:</strong> Creating sample blocks for approval before full production.</li>
<li><strong>Quality-Controlled Manufacturing:</strong> Producing blocks to exact specifications with rigorous testing.</li>
<li><strong>Installation Support:</strong> Providing guidance to ensure proper implementation of the custom blocks.</li>
</ul>

<p>Beyond aesthetics, our custom manufacturing capabilities extend to performance characteristics as well. For the TechInnovate Manufacturing Facility, we developed specialized high-density blocks with enhanced vibration dampening properties to meet the specific requirements of sensitive manufacturing equipment.</p>

<p>As construction technology continues to advance, the possibilities for customization grow ever more exciting. From color and texture to size, shape, and performance characteristics, custom block manufacturing is opening new frontiers in architectural expression while maintaining the practical benefits of interlocking block technology.</p>`,
      author: "Daniel Kimani",
      date: "February 18, 2023",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Design",
    },
    {
      id: 6,
      title: "The Role of Interlocking Block Technology in Affordable Housing",
      excerpt:
        "Examining how innovative construction methods can help address Kenya's affordable housing challenges while maintaining quality and sustainability.",
      content: `<p>Kenya, like many developing nations, faces significant challenges in providing adequate, affordable housing for its growing population. Traditional construction methods often result in housing that is either too expensive for many citizens or of substandard quality. Interlocking block technology offers a promising solution to this dilemma.</p>

<p>The economics of interlocking block construction make it particularly well-suited for affordable housing initiatives:</p>

<ul>
<li><strong>Reduced Material Costs:</strong> The elimination of mortar in most applications significantly reduces material expenses.</li>
<li><strong>Labor Efficiency:</strong> The simplified construction process requires fewer skilled laborers, further reducing costs.</li>
<li><strong>Speed of Construction:</strong> Faster building completion means quicker occupancy and return on investment.</li>
<li><strong>Durability:</strong> The superior structural integrity of interlocking block construction reduces long-term maintenance costs.</li>
<li><strong>Energy Efficiency:</strong> Lower energy costs for heating and cooling benefit residents throughout the building's lifetime.</li>
</ul>

<p>Our collaboration with the Sunrise County Government on a 100-unit affordable housing project demonstrated these advantages clearly. The project was completed 40% faster than initially projected using traditional methods, came in 25% under budget, and resulted in homes with significantly better thermal performance and durability than comparable affordable housing developments.</p>

<p>Beyond the economic benefits, the aesthetic versatility of interlocking blocks allows for dignified, attractive housing that residents can take pride in. This psychological aspect of housing quality is often overlooked but plays a crucial role in creating sustainable communities.</p>

<p>As Kenya works toward its ambitious affordable housing goals, interlocking block technology represents a valuable tool for delivering quality homes at accessible price points while supporting environmental sustainability objectives.</p>`,
      author: "Jorum Githuku",
      date: "January 30, 2023",
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Housing",
    },
  ];

  const [selectedPost, setSelectedPost] = React.useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Insights, updates, and expertise from our team on construction
              innovation, interlocking block technology, and industry trends.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${selectedCategory === category ? "bg-black text-white" : "border-gray-300"}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-gray-500 mb-2">
                    {post.category} • {post.date}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      By {post.author}
                    </span>
                    <Button
                      variant="link"
                      className="p-0 h-auto font-medium text-black hover:text-gray-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPost(post);
                      }}
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedPost && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative">
                  <div className="h-64 md:h-80 overflow-hidden">
                    <img
                      src={selectedPost.image}
                      alt={selectedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
                    onClick={() => setSelectedPost(null)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded">
                      {selectedPost.category}
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded">
                      {selectedPost.date}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">
                    {selectedPost.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-6">
                    By {selectedPost.author}
                  </p>

                  <div
                    className="prose max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  />

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-bold mb-4">
                      Share this article
                    </h3>
                    <div className="flex space-x-4">
                      <Button variant="outline" className="border-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                        Facebook
                      </Button>
                      <Button variant="outline" className="border-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                        Twitter
                      </Button>
                      <Button variant="outline" className="border-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Stay updated with the latest insights, industry trends, and news
              about innovative construction technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent flex-grow"
              />
              <Button className="bg-black text-white hover:bg-gray-800">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
