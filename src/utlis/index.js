
export const convertReview = (review) => {
    let num = review.toString();
    if (review < 1000) return review;
    else if (review > 10000) return num.charAt(0) + num.charAt(1) + "K";

    return num.charAt(0) + "K";
  };
 //////*************************** */

  export const reviewStars = (rating,StarIcon)=>
  (
   [...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <StarIcon
            sx={{
              fontSize: 18,
              color: ratingValue > rating ? "#EEEDF5" :"#FF9529" ,
            }}
          />
        );
      })
  )