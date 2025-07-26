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
          </div>
        </div>
      </div>
    </>
  );
}
