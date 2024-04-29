import { IoMdStarOutline, IoMdStar } from "react-icons/io";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  
  // Generate an array of stars based on the rating
  const stars = Array.from({ length: totalStars }, (_, index) => {
    if (index < rating) {
      return <IoMdStar key={index} />;
    } else {
      return <IoMdStarOutline key={index} />;
    }
  });

  return (
    <div className="flex">
      {stars}
    </div>
  );
};

export default StarRating;
