import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div>
        <div className="newsletter py-20 flex items-center justify-center flex-col">
          <h2 className="text-5xl mb-3 font-bricolage">
            Subscribe to our Newsletter
          </h2>
          <p className="text-center mb-6">
            Subscribe to our email newsletter to get the latest posts delivered{" "}
            <br /> right to your email.
          </p>
          <form className="w-[80%] md:w-[45%] flex items-center bg-[#1e1e1e] rounded-xl p-2 shadow-inner">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 bg-transparent text-white placeholder-gray-400 px-4 py-2 outline-none"
            ></input>
            <button
              type="submit"
              className="font-semibold text-white bg-gray-50/10 hover:bg-gray-50/20 transition rounded p-3 px-4"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="footer pt-[50px] border-t border-[#83838380]">
          <div className="px-[8%] lg:px-[12%] py-10">
            <div className="flex flex-warp pb-7">
              <div className="w-full lg:w-2/3">
                <div className="flex items-center space-x-2">
                  <div className="bg-gray-800 p-2 px-3 rounded-lg">
                    <i className="bi bi-substack text-white text-2xl"></i>
                  </div>
                  <Link to="/">
                    <h1 className="text-3xl font-bricolage tracking-widest font-bold text-black dark:text-white">
                      I3<span className="text-[#f4e005]">Center</span>
                    </h1>
                  </Link>
                </div>
                <p className="mt-4 mb-5">
                  ٌWelcome to ultimate source for fresh perspectives! Explore{" "}
                  <br /> curated content to enlighten, entertain and engage
                  global <br /> readers.
                </p>
                <div className="social-icons flex gap-4 md:mb-10">
                  <i className="bi bi-twitter-x hover:text-yellow-400 cursor-pinter transition text-xl"></i>
                  <i className="bi bi-instagram hover:text-yellow-400 cursor-pinter transition text-xl"></i>
                  <i className="bi bi-facebook hover:text-yellow-400 cursor-pinter transition text-xl"></i>
                  <i className="bi bi-linkedin hover:text-yellow-400 cursor-pinter transition text-xl"></i>
                </div>
              </div>
              <div className="w-full lg:w-1/3 grid grid-cols-1 md:grid-cols-3 mt-5 lg:mt-0 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-bold uppercase mb-3">
                    Recent Posts{" "}
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="hover:text-yellow-400 transition">
                        Blog Setup
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-yellow-400 transition">
                        Content Plan
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-yellow-400 transition">
                        Writing Tips
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-yellow-400 transition">
                        Featured Posts
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-yellow-400 transition">
                        Blog Design
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase mb-3">
                    Recent Posts{" "}
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="hover:text-yellow-400 transition">
                        Technology
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-yellow-400 transition">
                        Travel
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-yellow-400 transition">
                        Sport
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-yellow-400 transition">
                        Business
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase mb-3">
                    Recent Posts{" "}
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="hover:text-yellow-400 transition">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-yellow-400 transition">
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-yellow-400 transition">
                        Details
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-yellow-400 transition">
                        History
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-center border-t border-[#83838380] p-5">© 2025 Amirali — Designed & Developed with ❤️ using React & TailwindCSS. <a href="#" className="text-yellow-400 font-bold">React</a></p>
          </div>
        </div>
      </div>
    </>
  );
}
