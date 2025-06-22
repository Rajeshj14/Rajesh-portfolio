import React from 'react';

const blogs = [
    {
        date: '11 Dec, 20',
        title: 'Top tools for Photographers',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.',
        img: '/blog1.jpg', // Replace with actual image path
    },
    {
        date: '12 Aug, 20',
        title: 'Take a tour of my office',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.',
        img: '/blog-2.jpg',
    },
    {
        date: '4 Feb, 20',
        title: 'How i became a Web Designer',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.',
        img: '/blog3.jpg',
    },
    {
        date: '14 Mar, 21',
        title: 'How to improve my Preformance',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.',
        img: '/blog4.jpg',
    },
    {
        date: '03 Apr, 22',
        title: 'How to work from home',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.',
        img: '/blog5.jpg',
    },
    {
        date: '10 May, 92',
        title: 'How to enjoy life without stress',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.',
        img: '/blog6.jpg',
    },
];

const BlogSection = () => {
    return (
        <section id="blog" className="bg-[#00162A] py-13 px-4 md:py-2 lg:py-6 xl:py-14 text-white relative">
            {/* Header */}
            {/* Background Text */}
            <h1
                className="absolute top-8 left-1/2 transform -translate-x-1/2 select-none z-0 uppercase"
                style={{
                    WebkitTextStrokeWidth: '1px',
                    WebkitTextStrokeColor: '#fff',
                    fontSize: '7vw',
                    color: 'transparent',
                    margin: 0,
                    fontWeight: 600,
                    lineHeight: 1,
                    opacity: 0.1,
                    letterSpacing: '0.8rem',
                }}
            >
               BLOGS
            </h1>
            <div className="relative z-10 text-center mb-8 p-0 m-1 md:p-0  sm:mt-17">
                <div className="flex justify-center items-center gap-1 md:gap-4">
                    <div className="w-6 md:w-9 lg:w-11 xl:w-12 h-1 bg-red-500" />
                    <h2 className="text-md md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">MY BLOGS</h2>
                    <div className="w-6 md:w-9 lg:w-11 xl:w-12 h-1 bg-red-500" />
                </div>
            </div>


            {/* Blog Cards */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, idx) => (
                    <div key={idx} className="transparent bg-[#12283a] rounded-md p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="relative">
                            <img src={blog.img} alt={blog.title} className="w-full h-56 object-cover rounded" />
                            <div className="absolute bottom-2 left-2 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded">
                                {blog.date}
                            </div>
                        </div>
                        <h3 className="text-lg font-bold mt-4">{blog.title}</h3>
                        <p className="text-sm text-gray-400 mt-2">{blog.desc}</p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default BlogSection;
