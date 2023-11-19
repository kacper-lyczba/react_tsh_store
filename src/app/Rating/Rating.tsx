/* eslint-disable react/prop-types */
interface RatingProps {
  rating: number;
}

export const Rating: React.FC<RatingProps> = ({ rating = 5 }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(1);
      continue;
    }

    stars.push(0);
  }

  return (
    <div className="rating">
      {stars.map((star, index) => {
        if (star === 1) {
          return (
            <svg
              key={index}
              className="rating_star rating_star--1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="star">
                <path
                  id="Path"
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  fill="currentColor"
                />
              </g>
            </svg>
          );
        }

        return (
          <svg
            key={index}
            className="rating_star rating_star--0"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="star_border">
              <path
                id="Shape"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.81 8.62L22 9.24L16.55 13.97L18.18 21L12 17.27L5.82 21L7.46 13.97L2 9.24L9.19 8.63L12 2L14.81 8.62ZM8.24 17.67L12 15.4L15.77 17.68L14.77 13.4L18.09 10.52L13.71 10.14L12 6.1L10.3 10.13L5.92 10.51L9.24 13.39L8.24 17.67Z"
                fill="currentColor"
              />
            </g>
          </svg>
        );
      })}
    </div>
  );
};
