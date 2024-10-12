import image1 from "../../assets/th.jpg";
import image2 from "../../assets/OIP.jpg";
import image3 from "../../assets/5403292396_0804de9bcf_b.jpg";
import image4 from "../../assets/download.jpg";

export default function Resources() {
  const blogData = [
    {
      title: "Understanding the Challenges of Modern Life",
      date: "June 1, 2024",
      views: "2.1K views",
      imgSrc: image1,
      category: "Lifestyle",
    },
    {
      title: "Exploring the Depths of Human Emotions",
      date: "June 2, 2024",
      views: "2.2K views",
      imgSrc: image2,
      category: "Psychology",
    },
    {
      title: "The Future of Technology: Innovations Ahead",
      date: "June 3, 2024",
      views: "2.3K views",
      imgSrc: image3,
      category: "Technology",
    },
    {
      title: "Healthy Living: Tips for a Balanced Life",
      date: "June 4, 2024",
      views: "2.4K views",
      imgSrc: image4,
      category: "Health",
    },
  ];

  return (
    <section className="px-6 lg:px-12 py-2">
      <h1 className="text-4xl text-center mb-2 font-bold text-secondary sm:text-6xl sm:leading-snug">
        {" "}
        {/* Reduced margin */}
        Resources
      </h1>
      <article className="py-1 sm:py-4">
        <div className="container p-3 mx-auto space-y-2">
          <div className="space-y-1 text-center">
            <h2 className="text-3xl font-bold">Discover Valuable Insights</h2>
            <p className="text-sm mb-2">
              {" "}
              {/* Reduced bottom margin */}
              Explore various topics to enhance your knowledge and well-being.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
            {blogData.map((blog, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 border rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={blog.imgSrc}
                  alt={blog.title}
                  className="w-48 h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-center mb-1">
                  {blog.title}
                </h3>
                <p className="text-sm">{blog.date}</p>
                <p className="text-sm">{blog.views}</p>
                <p className="text-sm">{blog.category}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
