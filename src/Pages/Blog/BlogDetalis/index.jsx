import React from "react";
import blogData from "../../../Blogs.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog)
    return <div className="p-10 text-center text-white">Blog not found</div>;
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-[12%] py-10 mt-12 text-center">
        <div className="mx-auto">
          <p className="text-sm mb-1 mt-5">
            Home <span className="mx-1">&gt;</span>
            <span className="font-semibold">{blog.title}</span>
          </p>
          <h1
            className="text-3xl md:text-5xl font-bold leading-tight mb-4 mt-5"
            style={{ fontFamily: "var(--Bricolage-font)" }}
          >
            {blog.title}
          </h1>
          <p className="max-w-2xl mb-6 text-center mx-auto">{blog.excerpt}</p>
          <div className="rounded-2xl overflow-hidden mb-10 shadow-lg relative">
            <div className="flex justify-between items-center w-full px-6 absolute top-1- left-0">
              <div className="flex item-center gap-2 flex-wrap">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-black text-white text-md font-medium px-4 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-white text-lg bg-black px-5 py-2 rounded-full">
                {blog.author} &nbsp {blog.date}
              </p>
            </div>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[65vh] object-cover rounded-xl blog-details-img"
            />
          </div>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%]">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-8/12">
            <p className="text-black dark:text-[var(--text-light)] mb-6 leading-relaxed">
              In today's ever-evolving world, storytelling has become a powerful
              tool for connection. Revision provides a unique platform for
              individuals to share their stories.
            </p>
            <p className="text-black dark:text-[var(--text-light)] mb-6 leading-relaxed">
              Revision is more than a typical content hub. It’s a dynamic space
              for meaningful conversations and personal stories that resonate
              with people on an emotional level. Whether you are looking for
              inspiration, comfort, or just a different perspective on life,
              Revision offers a wide range of narratives to explore.
            </p>
            <p className="text-black dark:text-[var(--text-light)] mb-6 leading-relaxed">
              So, What makes Revision stand out as the place for heartfelt
              reflections?
            </p>
            <p className="text-black dark:text-[var(--text-light)] mb-6 leading-relaxed">
              Revision is more than a typical content hub. It’s a dynamic space
              for meaningful conversations and personal stories that resonate
              with people on an emotional level. Whether you are looking for
              inspiration, comfort, or just a different perspective on life,
              Revision offers a wide range of narratives to explore.
            </p>
            <p className="text-black dark:text-[var(--text-light)] mb-6 leading-relaxed">
              With categories covering everything from love and relationships to
              personal development and lifestyle, it encourages readers to
              explore topics that touch on their emotions and experiences.
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--Bricolage-font)" }}
            >
              Stories that Matter
            </h2>

            <p className="text-black dark:text-[var(--text-light)] mb-4">
              At the core of Revision is a commitment to delivering stories that
              matter. Unlike traditional media platforms or news, Revision
              invites readers into a world of deeply personal narratives. The
              website’s title, “Heartfelt Reflections: Stories of Love, Loss,
              and Growth,” signals this intent clearly, inviting you to journey
              through the most intimate aspects of human experience.
            </p>
            <p className="text-black dark:text-[var(--text-light)] mb-4">
              But we’re not just talking about written content — there are many
              ways that Revision fosters connection and creativity. The
              different types of features include:
            </p>
            <ul
              className="list-disc pl-5 mb-6 text-[var(--text-light)]
            space-y-2"
            >
              <li className="text-black dark:text-[var(--text-light)]">
                Author Profiles: Each contributor has a detailed profile,
                allowing readers to connect with their personal journey and
                social media presence.
              </li>
              <li className="text-black dark:text-[var(--text-light)]">
                Experience Widgets: Contributors showcase their professional
                growth and skills, giving readers insight into their expertise.
              </li>
              <li className="text-black dark:text-[var(--text-light)]">
                Technologies Section: Creators highlight the tools they use,
                such as Figma, Photoshop, and more, providing transparency in
                their creative processes.
              </li>
              <li className="text-black dark:text-[var(--text-light)]">
                Creating Widget: A space where contributors can link to external
                projects and portfolios, expanding their reach beyond the
                platform.
              </li>
            </ul>
            <div className="rounded-xl overflow-hidden mb-6">
              <img
                src="../../../../public/assets/hero-slide-3.png"
                alt="Desk Tech"
                className="rounded-xl w-full"
              />
              <p
                className="text-sm mt-2 text-black dark:text-[var(--text-light)]
              "
              >
                How to raise customer loyalty.
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                How do I create meaningful connections
              </h2>
              <p className="text-black dark:text-[var(--text-light)] mb-6">
                There are several ways to ensure your content builds these
                connections effectively. Here’s what they are:
              </p>
              <h3 className="text-xl font-semibold mb-2">
                1. Understand your audience
              </h3>
              <p className="text-black dark:text-[var(--text-light)] mb-4">
                The first step to creating meaningful connections is
                understanding who your audience is. This involves researching
                their demographics, interests, preferences, and needs. Are they
                young professionals looking for lifestyle tips? Or perhaps
                seasoned entrepreneurs seeking business insights? Once you have
                a clear picture of who your readers are, you can start shaping
                content that resonates with their unique preferences.
              </p>
              <p className="text-black dark:text-[var(--text-light)] mb-4">
                For instance, knowing that your audience values emotional,
                personal stories can guide your content to be more reflective
                and heartfelt, making it easier for them to relate to the
                subject matter. Furthermore, understanding your audience allows
                you to tailor your tone and style to better connect with them.
              </p>
              <h3 className="text-xl font-semibold mb-2">
                2. Provide diverse perspectives
              </h3>
              <p className="text-black dark:text-[var(--text-light)] mb-4">
                Before you create content that truly connects, everyone involved
                in the creation process needs to understand the importance of
                incorporating diverse perspectives. This includes things like:
              </p>
              <ul
                className="list-disc pl-5 mb-6 text-[var(--text-light)]
            space-y-2"
              >
                <li className="text-black dark:text-[var(--text-light)]">
                  Featuring contributors from different backgrounds
                </li>
                <li className="text-black dark:text-[var(--text-light)]">
                  showcasing a variety of life experiences
                </li>
                <li className="text-black dark:text-[var(--text-light)]">
                  Including global viewpoints
                </li>
                <li className="text-black dark:text-[var(--text-light)]">
                  highlighting diverse professional expertise
                </li>
              </ul>
              <p className="text-black dark:text-[var(--text-light)] mb-6">
                Going through this checklist will ensure that your content
                covers multiple angles, making it richer and more inclusive.
                This approach prevents your content from feeling one-dimensional
                or narrowly focused—allowing it to resonate with a broader and
                more diverse audience.
              </p>
              <p className="text-black dark:text-[var(--text-light)] mb-6">
                When diverse perspectives are incorporated, readers are more
                likely to see their own experiences reflected, creating a
                stronger emotional connection with the content.
              </p>

              <div className="bg-zinc-900 p-6 rounded-xl mb-6">
                <p className="text-lg text-white italic font-medium leading-relaxed">
                  Stories are the threads that bind us; through them, we
                  understand each other, grow, and heal
                </p>
                <span className="block text-right text-sm mt-2 text[var(--text-light)]">
                  John Noord
                </span>
                <p className="text-[var(--text-light)] mb-6">
                  By showcasing different perspectives, you encourage readers
                  from all walks of life to engage with your content, feel
                  represented, and contribute their own viewpoints. This
                  ultimately enhances the value of the platform, transforming it
                  into a more inclusive and dynamic community.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-4/12 sticky top-[80px] left-0 h-full">
            <div className="bg-gray-50/10 rounded-lg border border-[#83838380] p-4">
              <span className="uppercase text-[14px]">About</span>
              <div className="flex items-center my-3 gap-1">
                <img
                  src="../../../public/assets/about.png"
                  className="w-16 rounded-full p-1"
                  alt=""
                />
                <div>
                  <h3 className="font-bold">Ethan Caldwell</h3>
                  <p className="uppercase text-[13px]">Reflective Blogger</p>
                </div>
              </div>
              <p>
                Ethan Caldwell shares thoughtful insights and reflections on
                life, culture, and personal growth. His work explores the
                intersections of creativity and experience, offering readers
                unique perspectives.
              </p>
              <h5 className="font-bold my-3">
                <i className="bi bi-geo-alt-fill"></i>
                Paris, France
              </h5>
              <div className="social-icons flex gap-4">
                <i className="bi bi-twitter-x hover:text-yellow-400 cursor-pointer transition text-xl"></i>
                <i className="bi bi-instagram hover:text-yellow-400 cursor-pointer transition text-xl"></i>
                <i className="bi bi-facebook hover:text-yellow-400 cursor-pointer transition text-xl"></i>
                <i className="bi bi-linkedin hover:text-yellow-400 cursor-pointer transition text-xl"></i>
              </div>
            </div>
            <h2 className="uppercase my-5 font-bold">Featured Posts</h2>
            {/* Mini Slide */}
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 1500,
              }}
              className="rounded-md"
            >
              <SwiperSlide>
                <div className="mini-slide p-5 flex flex-col justify-between">
                  <div>
                    <span
                      className="bg-gray-200/20 px-5 py-1 rounded-full
                             font-bold hover:gray-200/30 cursor-pointer text-white"
                    >
                      Business
                    </span>
                  </div>
                  <div className="">
                    <p className="text-[#cdcdcd]">
                      <span className="text-white font-bold">
                        Ethan Caldwell
                      </span>{" "}
                      on July 16,2025
                    </p>

                    <h1 className="text-white font-bold font-bricolage text-2xl my-1">
                      How Tech Shapes the Future of Work in 2025
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
              {/* Slide2 */}
              <SwiperSlide>
                <div className="mini-slide mini-slide2 p-5 flex flex-col justify-between">
                  <div>
                    <span
                      className="bg-gray-200/20 px-5 py-1 rounded-full
                          font-bold hover:gray-200/30 cursor-pointer text-white"
                    >
                      Sport
                    </span>
                  </div>
                  <div className="">
                    <p className="text-[#cdcdcd]">
                      <span className="text-white font-bold">
                        Ethan Caldwell
                      </span>{" "}
                      on April 20,2025
                    </p>
                    <h1 className="text-white font-bold font-bricolage text-2xl my-1">
                      How Tech Shapes the Future of Work in 2025
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
              {/* Slide3 */}
              <SwiperSlide>
                <div className="mini-slide mini-slide3 p-5 flex flex-col justify-between">
                  <div>
                    <span
                      className="bg-gray-200/20 px-5 py-1 rounded-full
                               font-bold hover:gray-200/30 cursor-pointer text-white"
                    >
                      Trends
                    </span>
                  </div>
                  <div className="">
                    <p className="text-[#cdcdcd]">
                      <span className="text-white font-bold">
                        Ethan Caldwell
                      </span>{" "}
                      on April 29,2025
                    </p>
                    <h1 className="text-white font-bold font-bricolage text-2xl my-1">
                      How Tech Shapes the Future of Work in 2025
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* Box 2 */}
            <div className="bg-gray-50/10 rounded-lg border border-[#83838380] p-4 mt-10">
              <span className="uppercase text-[14px]">Work Experience</span>
              <div
                className="flex flex-col my-3 border-b border-[#83838380]
                          pb-4"
              >
                <div className="flex justify-between w-full">
                  <h2>Product Desinger</h2>
                  <h5>2022 - Now</h5>
                </div>
                <p className="text-gray-400">Pioneer</p>
              </div>
              <div
                className="flex flex-col my-3 border-b border-[#83838380]
                          pb-4"
              >
                <div className="flex justify-between w-full">
                  <h2>Product Desinger</h2>
                  <h5>2022 - 2025</h5>
                </div>
                <p className="text-gray-400">Pioneer</p>
              </div>
              <div className="flex flex-col my-3">
                <div className="flex justify-between w-full">
                  <h2>Product Desinger</h2>
                  <h5>2022 - 2025</h5>
                </div>
                <p className="text-gray-400">Pioneer</p>
              </div>
            </div>
            {/* Box 3 */}
            <div className="bg-gray-50/10 rounded-lg border border-[#83838380] p-4 mt-10">
              <span className="uppercase text-[14px]">Work Experience</span>
              <div className="flex items-center gap-3 my-6">
                <img
                  src="../../../public/assets/figma.png"
                  alt=""
                  className="w-12 rounded-lg"
                />
                <div>
                  <h2 className="font-bold text-xl">Figma</h2>
                  <p className="font-[300]">
                    Collaborate and design interface real-time.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 my-6">
                <img
                  src="../../../public/assets/notion.png"
                  alt=""
                  className="w-12 rounded-lg"
                />
                <div>
                  <h2 className="font-bold text-xl">Notion</h2>
                  <p className="font-[300]">
                    Organize,track, and collaborate on project easily.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 my-6">
                <img
                  src="../../../public/assets/AI.png"
                  alt=""
                  className="w-12 rounded-lg"
                />
                <div>
                  <h2 className="font-bold text-xl">Illustrator</h2>
                  <p className="font-[300]">
                    Create precise vector graphics and Illustrator.
                  </p>
                </div>
              </div>
            </div>
            {/* Box 4 */}
            <div className="bg-gray-50/10 rounded-lg border border-[#83838380] p-4 mt-10">
              <span className="uppercase text-[14px]">Creating</span>

              <div className="my-5">
                <h2
                  className="pb-2 font-bold text-xl hover:text-yellow-400
                          cursor-pointer transition"
                >
                  Heartfelt Reflections
                  <i className="bi bi-box-arrow-in-up-right"></i>
                </h2>
                <p>
                  A deep dive into emotional experiences and personal growth,
                  sharing valuable insights on life's most meaningful moments.
                </p>
              </div>
              <div className="my-5">
                <h2
                  className="pb-2 font-bold text-xl hover:text-yellow-400
                          cursor-pointer transition"
                >
                  Latest Tech Gadgets
                  <i className="bi bi-box-arrow-in-up-right"></i>
                </h2>
                <p>
                  Explore the newest and most innovative technology products
                  hitting the market, from smart devices to cutting-edge tools.
                </p>
              </div>
              <div className="my-5">
                <h2
                  className="pb-2 font-bold text-xl hover:text-yellow-400
                          cursor-pointer transition"
                >
                  Trends for 2025
                  <i className="bi bi-box-arrow-in-up-right"></i>
                </h2>
                <p>
                  A look ahead at the emerging trends that will shape the world
                  in 2024, from lifestyle shifts to groundbreaking innvations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
