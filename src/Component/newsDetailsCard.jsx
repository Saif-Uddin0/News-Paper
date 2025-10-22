import React from "react";
import { FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  if (!news) return null;

  const {
    title,
    author,
    image_url,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags,
    others,
  } = news;

  const formattedDate = new Date(author?.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="flex flex-col ">
        <div className="">
            <h2 className='font-bold  mb-5 '>news Details</h2>
        </div>
        <div className="max-w-2xl mx-auto bg-base-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
      {/* Image section */}
      <figure className="relative">
        <img
          src={image_url || thumbnail_url}
          alt={title}
          className="w-full h-64 object-cover"
        />

        {/* Overlay badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {others?.is_today_pick && (
            <span className="badge badge-primary">Today's Pick</span>
          )}
          {others?.is_trending && (
            <span className="badge badge-secondary">Trending</span>
          )}
        </div>
      </figure>

      {/* Content */}
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-xl font-semibold text-gray-800">
          {title}
        </h2>

        {/* Author info */}
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <p className="font-medium">{author?.name}</p>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-primary leading-relaxed mt-3">{details}</p>

        {/* Rating + Views */}
        <div className="flex justify-between items-center mt-4 border-t pt-3 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <FaStar className="text-secondary" />
            <span>{rating?.number}/5</span>
            {rating?.badge && (
              <span className="badge badge-outline badge-secondary ml-2">
                {rating.badge}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <FaEye />
            <span>{total_view ? total_view.toLocaleString() : "0"} views</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags?.map((tag, i) => (
            <div key={i} className="badge badge-outline badge-primary">
              #{tag}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="card-actions justify-start mt-5">
          <Link to={`/category/${news.category_id}`} className="btn btn-secondary  text-white">
            🔖 All news in this category
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NewsDetailsCard;
