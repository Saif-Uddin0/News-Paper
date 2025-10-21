import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaRegEye, FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const {
        id,
        title,
        rating,
        total_view,
        author,
        thumbnail_url,
        details,
        tags,
    } = news;

    // Format date nicely
    const date = new Date(author.published_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="rounded-md shadow-sm bg-white  mb-6 ">
            {/* Author & Actions */}
            <div className="bg-base-200 p-3 rounded-t-sm  flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-800">{author.name}</h3>
                        <p className="text-xs text-gray-500">{date}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <CiShare2 className="text-gray-500 cursor-pointer" />
                    <CiBookmark className="text-gray-500 cursor-pointer" />
                </div>

            </div>

            <div className="p-4">
                <h2 className="text-lg font-bold mb-3 text-gray-900 leading-snug">
                    {title}
                </h2>

                <img
                    src={thumbnail_url}
                    alt={title}
                    className="w-full rounded-md mb-3 object-cover"
                />

                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                    {details.length > 200 ? details.slice(0, 200) + "..." : details}
                    <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold cursor-pointer">
                        {" "}
                        Read More
                    </Link>
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between border-t pt-5 ">
                    <div className="flex items-center text-orange-500 gap-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className={i < rating.number ? "text-orange-500" : "text-gray-300"}
                            />
                        ))}
                        <span className="ml-1 text-gray-700 text-sm">{rating.number}</span>
                    </div>

                    <div className="flex items-center gap-1 text-gray-500 ">
                        <FaRegEye />
                        <span className="text-sm">{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
