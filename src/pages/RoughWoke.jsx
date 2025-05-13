// SHOP MENU PAGE

// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom"


// const ShopMenu = () => {
//   const products = [
//     {
//       id: 1,
//       title: "Chinese Spring Roll Starter",
//       price: "£35",
//       reviews: 711,
//       rating: 4.3,
//       image: "https://cdn.pixabay.com/photo/2024/05/11/00/48/spring-roll-8753837_1280.jpg", // Default image
//       hoverImage: "https://cdn.pixabay.com/photo/2024/02/19/09/22/ai-generated-8582953_1280.png", // Hover image
//     },
//     {
//       id: 2,
//       title: "Texas BBQ Steak & Burger ",
//       price: "£25",
//       reviews: 1263,
//       rating: 4.4,
//       image: "https://cdn.pixabay.com/photo/2024/04/07/10/05/bbq-8681089_1280.png",
//       hoverImage: "https://cdn.pixabay.com/photo/2022/07/15/18/16/beef-burger-7323692_1280.jpg",
//       bestseller: "#5 BESTSELLER in Food And Drink Gifts",
//     },
//     {
//       id: 3,
//       title: "French Cheese Cake",
//       price: "£20",
//       reviews: 4073,
//       rating: 4.7,
//       image: "https://cdn.pixabay.com/photo/2023/03/26/19/38/cheese-cake-7878989_1280.jpg",
//       hoverImage: "https://cdn.pixabay.com/photo/2023/04/03/08/21/cheese-cake-7896245_1280.jpg",
//     },
//     {
//       id: 4,
//       title: "Fresh Fruit Drink",
//       price: "£18",
//       reviews: 1025,
//       rating: 4.4,
//       image: "https://cdn.pixabay.com/photo/2024/05/13/02/14/summer-drink-8757946_1280.jpg",
//       hoverImage: "https://cdn.pixabay.com/photo/2024/05/10/16/20/summer-drink-8753320_1280.jpg",
//     },

//     {
//       id: 5,
//       title: "Table d'Hote Menu",
//       price: "£118",
//       reviews: 1025,
//       rating: 4.4,
//       image: "https://cdn.pixabay.com/photo/2024/10/21/11/47/japanese-9137127_1280.jpg",
//       hoverImage: "https://cdn.pixabay.com/photo/2022/08/27/14/08/mix-grill-7414547_1280.jpg",
//     },
//   ];

//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);
  
//     useEffect(() => {
//       setIsVisible(true);
//     }, []); 

//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStars = rating % 1 !== 0 ? 1 : 0;
//     return (
//       <span className="text-yellow-500">
//         {"★".repeat(fullStars)}
//         {halfStars ? "★" : ""}
//         {"☆".repeat(5 - fullStars - halfStars)}
//       </span>
//     );
//   };

//   return (
//     <div className=" mt-16 ">
//         {/* Hero image */}
//       <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/01/26/02/06/christmas-wallpaper-2009590_1280.jpg')" }}>
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="relative flex flex-col items-center justify-center h-full text-white">
//         <h1
//         className={`text-6xl md:text-6xl font-bold text-white transition-transform duration-700 ease-out transform ${
//           isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
//         }`}
//       >
//         Menu
//       </h1>
//           <div className="w-24 h-1 mt-2 bg-white"></div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 h-[550px] gap-8 p-8 bg-black">
//         {/* Left Grid */}
//         <div
//           className="relative bg-cover bg-center flex items-center justify-center text-white h-full"
//           style={{
//             backgroundImage: "url('https://cdn.pixabay.com/photo/2024/05/09/19/26/ai-generated-8751683_1280.jpg')",
//           }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//           <div className="relative text-center p-6">
//             <h1 className="text-2xl md:text-4xl font-bold">
//               Free Chardonnay bottle of red wine for orders above <span>&#8358;200,000</span>
//             </h1>
//           </div>
//         </div>

//         {/* Right Grid */}
//         <div
//           className="relative bg-cover bg-center flex items-center justify-center text-white h-full"
//           style={{
//             backgroundImage: "url('https://cdn.pixabay.com/photo/2014/09/14/09/31/dinner-table-444797_1280.jpg')",
//           }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//           <div className="relative text-center p-6">
//             <h1 className="text-2xl md:text-4xl font-bold">
//               30% off when you book for our private dining Valentine's Day experience
//             </h1>
//           </div>
//         </div>
//       </div>



//       {/* Title and Description */}
//       <div className=" p-8 bg-slate-950 ">
//         <h1 className="text-5xl font-semibold text-white text-center mb-2">Our Menu</h1>
//         <p className="text-lg text-white leading-loose">
//          Discover a weekly lineup of gourmet delights, from savoury classics to exotic creations. Our chefs curate a menu that will tantalize your taste buds and leave you craving for more.
//          Discover a weekly lineup of gourmet delights, from savoury classics to exotic creations. Our chefs curate a menu that will tantalize your taste buds and leave you craving for more.
//         </p>
//       </div>

//       {/* Filter Section */}
//       <div className="flex items-center justify-between pb-5 py-6 bg-black ">
//         <div className="relative flex gap-6 p-4">
//           <button className="flex items-center font-semibold text-white focus:outline-none">
//             Category
//             <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//             </svg>
//           </button>

//           <button className="flex items-center font-semibold text-white focus:outline-none">
//             Price
//             <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//             </svg>
//           </button>
//           {/* Dropdown options can be added here */}
//         </div>


//       </div>

//       <div className="flex items-center justify-between bg-slate-950 p-4 pb-2">
//         <div className="relative flex gap-3">
//           <button className="flex items-center text-white focus:outline-none">
//             5 Items
//             <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//             </svg>
//           </button>


//           {/* Dropdown options can be added here */}
//         </div>

//         <div className="relative">
//           <button className="flex items-center font-semibold text-white focus:outline-none gap-4">
//             Relevance
//             <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//             </svg>
//           </button>
//           {/* Dropdown options can be added here */}
//         </div>
//       </div>

//       <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-slate-950 gap-6 p-4">
//         {products.map((product) => (
//           <Link to={`/Details/${product.id}`}
//             key={product.id}
//             className="text-left"
//             onMouseEnter={() => setHoveredProduct(product.id)}
//             onMouseLeave={() => setHoveredProduct(null)}
//           >
//             <div className="relative">
//               {/* Image change on hover */}
//               <img
//                 src={hoveredProduct === product.id ? product.hoverImage : product.image}
//                 alt={product.title}
//                 className="transition duration-500 ease-in-out"
//               />
//               {product.bestseller && (
//                 <span className="absolute top-2 left-2 bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1">
//                   {product.bestseller}
//                 </span>
//               )}
//             </div>

//             <p className="text-lg font-semibold text-red-500 mt-4">{product.price}</p>

//             {/* Title with underline on hover and left-aligned text */}
//             <h3 className="text-md font-medium text-white hover:underline">
//               {product.title}
//             </h3>

//             <div className="flex items-center justify-start mt-2">
//               {renderStars(product.rating)}
//               <p className="ml-2 text-sm text-gray-100 underline">{product.reviews} reviews</p>
//             </div>


//           </Link>
//         ))}
//       </div>
//       <div className='h-[300px] bg-slate-950'> </div>
//     </div>
//   );
// };

// export default ShopMenu; 










// PRODUCT DETAIL PAGE 

// import { useState } from 'react';
// import { useParams } from 'react-router-dom';


// const Details = () => {
//   const { id } = useParams(); // Extract product ID from URL

//   const products = [
//     {
//       id: 1,
//       title: "Chinese Spring Roll Starter",
//       price: "£35",
//       reviews: 711,
//       rating: 4.3,
//       image: "https://cdn.pixabay.com/photo/2024/05/11/00/48/spring-roll-8753837_1280.jpg", // Default image
//       hoverImage: "https://cdn.pixabay.com/photo/2024/02/19/09/22/ai-generated-8582953_1280.png", // Hover image
//       description: "The perfect delicous starter for any meal.",
//     },
//     {
//       id: 2,
//       title: "Texas BBQ Steak & Burger ",
//       price: "£25",
//       reviews: 1263,
//       rating: 4.4,
//       image: "https://cdn.pixabay.com/photo/2024/04/07/10/05/bbq-8681089_1280.png",
//       hoverImage: "https://cdn.pixabay.com/photo/2022/07/15/18/16/beef-burger-7323692_1280.jpg",
//       bestseller: "#5 BESTSELLER in Food And Drink Gifts",
//       description: "You can't go wrong with a classic BBQ steak and burger.",
//     },
//     {
//       id: 3,
//       title: "French Cheese Cake",
//       price: "£20",
//       reviews: 4073,
//       rating: 4.7,
//       image: "https://cdn.pixabay.com/photo/2023/03/26/19/38/cheese-cake-7878989_1280.jpg",
//       hoverImage: "https://cdn.pixabay.com/photo/2023/04/03/08/21/cheese-cake-7896245_1280.jpg",
//       description: "indulge in the rich flavors of French cheese cake.",
//     },
//     {
//       id: 4,
//       title: "Fresh Fruit Drink",
//       price: "£18",
//       reviews: 1025,
//       rating: 4.4,
//       image: "https://cdn.pixabay.com/photo/2024/05/13/02/14/summer-drink-8757946_1280.jpg",
//       hoverImage: "https://cdn.pixabay.com/photo/2024/05/10/16/20/summer-drink-8753320_1280.jpg",
//       description: "The refreshing taste of a fresh fruit drink.",
//     },

//     {
//       id: 5,
//       title: "Table d'Hote Menu",
//       price: "£118",
//       reviews: 1025,
//       rating: 4.4,
//       image: "https://cdn.pixabay.com/photo/2024/10/21/11/47/japanese-9137127_1280.jpg",
//       hoverImage: "https://cdn.pixabay.com/photo/2022/08/27/14/08/mix-grill-7414547_1280.jpg",
//       description: "The perfect meal package including starter, main course and dessert.",
//     },
//   ];

//   const [size, setSize] = useState("Medium");
//   const [toppings, setToppings] = useState([]);
//   const [instructions, setInstructions] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const basePrice = 0; // Base price of the item
//   const toppingPrice = 2; // Price for each topping

//   const toppingOptions = ["Cheese", "Bacon", "Mushrooms", "Onions"];

//   const calculatePrice = () => {
//     return basePrice + toppings.length * toppingPrice * quantity;
//   };

//   const handleToppingChange = (topping) => {
//     if (toppings.includes(topping)) {
//       setToppings(toppings.filter((t) => t !== topping));
//     } else {
//       setToppings([...toppings, topping]);
//     }
//   };

//   const product = products.find((product) => product.id === parseInt(id));
//   const [hovered, setHovered] = useState(false);
//   const [activeAccordion, setActiveAccordion] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [rating, setRating] = useState(0);
//   const [reviewText, setReviewText] = useState("");
//   const [termsChecked, setTermsChecked] = useState(false);

//   const toggleAccordion = (index) => {
//         setActiveAccordion(activeAccordion === index ? null : index);
//     };

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStars = rating % 1 !== 0 ? 1 : 0;
//     return (
//       <span className="text-yellow-500">
//         {"★".repeat(fullStars)}
//         {halfStars ? "★" : ""}
//         {"☆".repeat(5 - fullStars - halfStars)}
//       </span>
//     );
//   };

//   const handleStarClick = (index) => {
//     setRating(index + 1);
//   };

//   return (
//     <div className="container bg-slate-950 mt-16 mx-auto">
//       <div className="container mx-auto pl-4 p-1">
//         <nav className="text-sm text-white semi-bold mb-4">
//           <ol className="list-reset flex">
//             <li>
//               <a href="#" className="hover:underline">
//                 Home
//               </a>
//             </li>
//             <li>
//               <span className="mx-2">/</span>
//             </li>
//             <li>
//               <a href="#" className="hover:underline">
//                 Gifts voucher
//               </a>
//             </li>
//             <li>
//               <span className="mx-2">/</span>
//             </li>
//             <li>
//               <a href="#" className="hover:underline">
//                 Food & Drink
//               </a>
//             </li>
//             <li>
//               <span className="mx-2">/</span>
//             </li>
//             <li className="text-gray-200">Meals</li>
//           </ol>
//         </nav>
//       </div>
//       <div className="relative h-auto max-w-7xl mx-auto py-4 px-4">
//         {/* Outer Grid Container */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
//           {/* Left Grid: Hover Image */}
//           <div className="flex flex-col gap-6 h-full overflow-hidden">
//             <div
//               className="w-full h-full bg-cover bg-center transition-all duration-300"
//               style={{
//                 backgroundImage: `url(${product.image})`,
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.backgroundImage = `url(${product.hoverImage})`;
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.backgroundImage = `url(${product.image})`;
//               }}
//             ></div>
//           </div>

//           {/* Right Grid: Fixed Text Details */}
//           <div className="sticky top-0 self-start">
//             <h2 className="text-2xl text-white font-bold mb-4">{product.title}</h2>
//             <p className="text-gray-200 mb-4">Product Code: #{product.id}</p>

//             {/* Star Reviews */}
//             <div className="flex items-center mb-4">
//               {renderStars(product.rating)}
//               <span className="ml-2 text-gray-200 underline">{product.reviews} reviews</span>
//             </div>

//             {/* Price */}
//             <p className="text-2xl text-red-600 font-semibold mb-2">{product.price}</p>
//             <p className="text-xl text-blue-400 font-bold">Custom Price: £{calculatePrice()}</p>

//             <h2 className="text-2xl text-white font-bold mb-4">Customize Your Order</h2>

//             {/* Size Selection */}
//             <div className="mb-4">
//               <label className="block text-white font-semibold mb-2">Choose Size:</label>
//               <div className="flex text-white gap-4">
//                 {["Small", "Medium", "Large"].map((option) => (
//                   <label key={option} className="flex items-center">
//                     <input
//                       type="radio"
//                       name="size"
//                       value={option}
//                       checked={size === option}
//                       onChange={() => setSize(option)}
//                       className="mr-2"
//                     />
//                     {option}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Toppings Selection */}
//             <div className="mb-4 text-white">
//               <label className="block font-semibold mb-2">Choose Toppings:</label>
//               <div className="grid grid-cols-2 gap-2">
//                 {toppingOptions.map((topping) => (
//                   <label key={topping} className="flex items-center">
//                     <input
//                       type="checkbox"
//                       checked={toppings.includes(topping)}
//                       onChange={() => handleToppingChange(topping)}
//                       className="mr-2"
//                     />
//                     {topping}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Special Instructions */}
//             <div className="mb-4 text-white">
//               <label className="block font-semibold mb-2">Special Instructions:</label>
//               <textarea
//                 placeholder="Any specific preferences? Example no pepper, sugar or salt please"
//                 value={instructions}
//                 onChange={(e) => setInstructions(e.target.value)}
//                 className="w-full border rounded p-2"
//               />
//             </div>

//             {/* Quantity */}
//             <div className="mb-4 text-white">
//               <label className="block font-semibold mb-2">Quantity:</label>
//               <div className="flex items-center">
//                 <button
//                   onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
//                   className="px-3 py-1 border"
//                 >
//                   -
//                 </button>
//                 <span className="px-4">{quantity}</span>
//                 <button
//                   onClick={() => setQuantity(quantity + 1)}
//                   className="px-3 py-1 border"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             {/* Add to Bag Button */}
//             <button className="bg-orange-500 font-medium hover:bg-orange-800 w-full text-white py-2 px-6 mb-6 transition-all">
//               Order
//             </button>

//             {/* Product Description */}
//             <div className="mb-4 text-white">
//               <p>{product.description}</p>
//             </div>

//             {/* Product Details Accordion */}
//             <div className="accordion">
//               <h3
//                 className="bg-gray-200 p-4 cursor-pointer border-b border-gray-300"
//                 onClick={() => toggleAccordion(1)}
//               >
//                 Product Details
//                 <span
//                   className={`float-right transition-transform ${activeAccordion === 1 ? "rotate-180" : ""}`}
//                 >
//                   ▼
//                 </span>
//               </h3>
//               {activeAccordion === 1 && (
//                 <div className="p-4 border text-white border-gray-300">
//                   <p>Details about the product.</p>
//                   <p>Details about the product.</p>
//                   <p>Details about the product.</p>
//                   <p>Details about the product.</p>
//                   <p>Details about the product.</p>
//                   <p>Details about the product.</p>
//                   <p>Details about the product.</p>
//                   <p>Details about the product.</p>
//                   <p>Details about the product.</p>
//                 </div>
//               )}
//             </div>

//             {/* Delivery Accordion */}
//             <div className="accordion">
//               <h3
//                 className="bg-gray-200 p-4 cursor-pointer border-b border-gray-300"
//                 onClick={() => toggleAccordion(2)}
//               >
//                 Delivery
//                 <span
//                   className={`float-right transition-transform ${activeAccordion === 2 ? "rotate-180" : ""}`}
//                 >
//                   ▼
//                 </span>
//               </h3>
//               {activeAccordion === 2 && (
//                 <div className="p-4 border text-white border-gray-300">
//                   <p>Information about delivery options.</p>
//                   <p>Details about the product.</p>
//                   <p>Details about the product.</p>
//                   <p>Details about the product.</p>
//                   <p>Details about the product.</p>
//                   <p>Details about the product.</p>
//                   <p>Details about the product.</p>
//                   <p>Details about the product.</p>
//                   <p>Details about the product.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>



//       {/* REVIEW PART */}

//       <div className='bg-slate-950  p-4 m-[auto] mt-10 w-[90%] h-[1500px]'>
//         <div className="p-6 bg-black">
//           {/* Reviews Heading */}
//           <div className="flex justify-between items-center mb-4">
//             <h1 className="text-3xl font-bold">Reviews (1273)</h1>
//           </div>


//           {/* Grid container to place rating section and quality rating side by side */}
//           <div className="grid grid-cols-2 gap-6">

//             {/* Rating Section */}
//             <div className="flex flex-col bg-white justify-between items-center  mb-6">
//               <div className="flex items-center mb-4">
//                 <span className="text-3xl mt-4 font-semibold">4.4</span>
//                 <div className="ml-2 mt-4 flex">
//                   {/* Black Stars for Rating */}
//                   <span className="text-black text-2xl">★</span>
//                   <span className="text-black text-2xl">★</span>
//                   <span className="text-black text-2xl">★</span>
//                   <span className="text-black text-2xl">★</span>
//                   <span className="text-black text-2xl">★</span>
//                 </div>
//               </div>
//               <span className="text-gray-600 mb-4">66% Recommended this product</span>

//               {/* Write Review Button */}
//               <button
//                 className="bg-transparent text-black font-semibold px-4 py-2 mb-10  rounded-md"
//                 onClick={() => setIsModalOpen(true)}
//               >
//                 Write a Review
//               </button>

//               {/* Modal for Review Submission */}
//               {isModalOpen && (
//                 <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
//                   <div className="bg-white p-6 rounded-lg relative w-96">
//                     {/* Close Button */}
//                     <button
//                       className="absolute top-2 right-2 text-gray-500"
//                       onClick={() => setIsModalOpen(false)}
//                     >
//                       ✖
//                     </button>

//                     {/* Modal Content */}
//                     <h2 className="text-xl font-bold mb-4">Share your thoughts</h2>

//                     <div className="mb-4">
//                       <h3 className="text-lg mb-2">Rate your experience</h3>
//                       {/* Star Rating */}
//                       <div className="flex">
//                         {[...Array(5)].map((_, index) => (
//                           <span
//                             key={index}
//                             onClick={() => handleStarClick(index)}
//                             className={`cursor-pointer text-2xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'
//                               }`}
//                           >
//                             ★
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Text Area */}
//                     <textarea
//                       value={reviewText}
//                       onChange={(e) => setReviewText(e.target.value)}
//                       className="w-full p-2 border rounded-md mb-4"
//                       rows="4"
//                       placeholder="Write your review..."
//                     ></textarea>

//                     {/* Terms and Conditions Checkbox */}
//                     <div className="flex items-center mb-4">
//                       <input
//                         type="checkbox"
//                         checked={termsChecked}
//                         onChange={(e) => setTermsChecked(e.target.checked)}
//                         className="mr-2"
//                       />
//                       <span className="text-gray-600">I agree to the terms and conditions</span>
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                       className="bg-blue-500 text-white px-4 py-2 rounded-md float-right"
//                       disabled={!termsChecked || !reviewText || !rating}
//                     >
//                       Submit
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Quality Rating */}
//             <div className="flex flex-col bg-white justify-between">
//               <div className="mb-6">
//                 <div className="flex justify-around mt-10 p-6 items-center">
//                   <span className="text-gray-600">Quality</span>
//                   <div className="w-3/4 bg-gray-200 rounded-full ">
//                     <div className="bg-gray-500 h-2 rounded-full "></div>
//                   </div>
//                   <span className="ml-2 text-gray-600">Excellent</span>
//                 </div>
//               </div>
//             </div>
//           </div>



//           {/* Mention Tags */}
//           <h2 className='font-semibold'>Mentions</h2>
//           <div className="flex flex-wrap gap-2 mt-4 mb-6">
//             {[
//               'satisfaction', 'purchase', 'freshness', 'quality',
//               'for gift', 'appearance', 'price', 'delicious',
//               'value', 'disappointing'
//             ].map((mention, index) => (
//               <span
//                 key={index}
//                 className="bg-white text-gray-800 px-3 py-1  text-sm"
//               >
//                 {mention}
//               </span>
//             ))}
//           </div>

//           {/* Rating Filter */}
//           <div className="flex gap-4">
//             <select className="border w-60 p-2  text-gray-700">
//               <option>All ratings</option>
//               <option>5 stars</option>
//               <option>4 stars</option>
//               <option>3 stars</option>
//               <option>2 stars</option>
//               <option>1 star</option>
//             </select>

//             <select className="border p-2 w-60 text-gray-700">
//               <option>Most Recent</option>
//               <option>Most Helpful</option>
//             </select>
//           </div>
//         </div>


//         <div className="grid mt-20px mb-4 bg-white grid-cols-3 gap-4">

//           {/* Left Section */}
//           <div className='mt-10 pl-10' >
//             <p className="text-sm text-gray-500 mb-2">30 September 2024</p>
//             <p className="font-bold text-lg mb-2">Eye28</p>
//             <p className="text-sm text-gray-500">VERIFIED PURCHASE</p>
//           </div>

//           {/* Middle Section */}
//           <div className="mb-10  col-span-2">
//             {/* Reviewer Ratings */}
//             <div className="text-right mt-10 pr-10 ">
//               <p className="text-sm font-semibold mb-2">Reviewer Ratings</p>
//               <p className="text-sm font-semibold mb-2"> Quality Excellent </p>
//               <p className="text-sm text-gray-700">
//                 Value for Money <span className="font-bold"></span>
//               </p>
//             </div>

//             {/* Review Section */}
//             <div>
//               {/* Star Ratings */}
//               <div className="flex items-center space-x-1 mt-[-65px]">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 text-black">
//                     <path d="M12 17.75L6.6 20.58l1-5.92L3 9.92l5.96-.86L12 3.75l2.04 5.31 5.96.86-4.6 4.74 1 5.92z" />
//                   </svg>
//                 ))}
//               </div>
//               <p className="mt-2 text-lg font-semibold">Excellent. Easy to order and lovely fruit.</p>
//               {/* Recommendation */}
//               <div className="flex items-center mt-2">
//                 <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-3.293a1 1 0 011.415 0l3-3a1 1 0 10-1.415-1.415L10 12.586 8.293 10.88a1 1 0 00-1.415 1.415l3 3z" clipRule="evenodd" />
//                 </svg>
//                 <p className="ml-2 text-sm text-gray-700">Yes, I recommend this</p>
//               </div>
//               <p className="mt-2 text-gray-700">Bought for my daughter as a little surprise treat. She was very pleased.</p>
//               {/* Read More */}
//               <p className="mt-2 text-blue-600 cursor-pointer hover:underline">Read more</p>
//             </div>

//             {/* Helpful Section */}
//             <div className="flex items-center mt-4">
//               <p className="text-gray-500">Helpful?</p>
//               <button className="ml-2 flex items-center text-gray-600">
//                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M5 10h10a1 1 0 100-2H5a1 1 0 100 2z" />
//                 </svg>
//                 <span className="ml-1">0</span>
//               </button>
//               <button className="ml-2 flex items-center text-gray-600">
//                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M15 10H5a1 1 0 100 2h10a1 1 0 100-2z" />
//                 </svg>
//                 <span className="ml-1">0</span>
//               </button>
//               <p className="ml-4 text-blue-600 cursor-pointer hover:underline">Report Review</p>
//             </div>
//           </div>

//             {/* review 2 */}

//           {/* Left Section */}
//           <div className='mt-10 pl-10' >
//             <p className="text-sm text-gray-500 mb-2">30 September 2024</p>
//             <p className="font-bold text-lg mb-2">Eye28</p>
//             <p className="text-sm text-gray-500">VERIFIED PURCHASE</p>
//           </div>

//           {/* Middle Section */}
//           <div className="mb-10  col-span-2">
//             {/* Reviewer Ratings */}
//             <div className="text-right mt-10 pr-10 ">
//               <p className="text-sm font-semibold mb-2">Reviewer Ratings</p>
//               <p className="text-sm font-semibold mb-2"> Quality Excellent </p>
//               <p className="text-sm text-gray-700">
//                 Value for Money <span className="font-bold"></span>
//               </p>
//             </div>

//             {/* Review Section */}
//             <div>
//               {/* Star Ratings */}
//               <div className="flex items-center space-x-1 mt-[-65px]">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 text-black">
//                     <path d="M12 17.75L6.6 20.58l1-5.92L3 9.92l5.96-.86L12 3.75l2.04 5.31 5.96.86-4.6 4.74 1 5.92z" />
//                   </svg>
//                 ))}
//               </div>
//               <p className="mt-2 text-lg font-semibold">Excellent. Easy to order and lovely fruit.</p>
//               {/* Recommendation */}
//               <div className="flex items-center mt-2">
//                 <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-3.293a1 1 0 011.415 0l3-3a1 1 0 10-1.415-1.415L10 12.586 8.293 10.88a1 1 0 00-1.415 1.415l3 3z" clipRule="evenodd" />
//                 </svg>
//                 <p className="ml-2 text-sm text-gray-700">Yes, I recommend this</p>
//               </div>
//               <p className="mt-2 text-gray-700">Bought for my daughter as a little surprise treat. She was very pleased.</p>
//               {/* Read More */}
//               <p className="mt-2 text-blue-600 cursor-pointer hover:underline">Read more</p>
//             </div>

//             {/* Helpful Section */}
//             <div className="flex items-center mt-4">
//               <p className="text-gray-500">Helpful?</p>
//               <button className="ml-2 flex items-center text-gray-600">
//                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M5 10h10a1 1 0 100-2H5a1 1 0 100 2z" />
//                 </svg>
//                 <span className="ml-1">0</span>
//               </button>
//               <button className="ml-2 flex items-center text-gray-600">
//                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M15 10H5a1 1 0 100 2h10a1 1 0 100-2z" />
//                 </svg>
//                 <span className="ml-1">0</span>
//               </button>
//               <p className="ml-4 text-blue-600 cursor-pointer hover:underline">Report Review</p>
//             </div>
//           </div>

//           {/* Left Section */}
//           <div className='mt-10 pl-10' >
//             <p className="text-sm text-gray-500 mb-2">30 September 2024</p>
//             <p className="font-bold text-lg mb-2">Eye28</p>
//             <p className="text-sm text-gray-500">VERIFIED PURCHASE</p>
//           </div>

//           {/* Middle Section */}
//           <div className="mb-10  col-span-2">
//             {/* Reviewer Ratings */}
//             <div className="text-right mt-10 pr-10 ">
//               <p className="text-sm font-semibold mb-2">Reviewer Ratings</p>
//               <p className="text-sm font-semibold mb-2"> Quality Excellent </p>
//               <p className="text-sm text-gray-700">
//                 Value for Money <span className="font-bold"></span>
//               </p>
//             </div>

//             {/* Review Section */}
//             <div>
//               {/* Star Ratings */}
//               <div className="flex items-center space-x-1 mt-[-65px]">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 text-black">
//                     <path d="M12 17.75L6.6 20.58l1-5.92L3 9.92l5.96-.86L12 3.75l2.04 5.31 5.96.86-4.6 4.74 1 5.92z" />
//                   </svg>
//                 ))}
//               </div>
//               <p className="mt-2 text-lg font-semibold">Excellent. Easy to order and lovely fruit.</p>
//               {/* Recommendation */}
//               <div className="flex items-center mt-2">
//                 <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-3.293a1 1 0 011.415 0l3-3a1 1 0 10-1.415-1.415L10 12.586 8.293 10.88a1 1 0 00-1.415 1.415l3 3z" clipRule="evenodd" />
//                 </svg>
//                 <p className="ml-2 text-sm text-gray-700">Yes, I recommend this</p>
//               </div>
//               <p className="mt-2 text-gray-700">Bought for my daughter as a little surprise treat. She was very pleased.</p>
//               {/* Read More */}
//               <p className="mt-2 text-blue-600 cursor-pointer hover:underline">Read more</p>
//             </div>

//             {/* Helpful Section */}
//             <div className="flex items-center mt-4">
//               <p className="text-gray-500">Helpful?</p>
//               <button className="ml-2 flex items-center text-gray-600">
//                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M5 10h10a1 1 0 100-2H5a1 1 0 100 2z" />
//                 </svg>
//                 <span className="ml-1">0</span>
//               </button>
//               <button className="ml-2 flex items-center text-gray-600">
//                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M15 10H5a1 1 0 100 2h10a1 1 0 100-2z" />
//                 </svg>
//                 <span className="ml-1">0</span>
//               </button>
//               <p className="ml-4 text-blue-600 cursor-pointer hover:underline">Report Review</p>
//             </div>
//           </div>

//         </div>

        

//         <div className='h-52'></div>

//       </div>
      
//     </div>
    
//   );
// };

// export default Details; 

//  src="https://cdn.pixabay.com/video/2017/08/30/11691-231758938_large.mp4"
 

// import { useState } from 'react';

// function FilterSection() {
//   const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

//   const toggleCategoryDropdown = () => {
//     setCategoryDropdownOpen(!isCategoryDropdownOpen);
//   };

//   return (
//     <div className="flex items-center justify-between pb-5 py-6 bg-black">
//       <div className="relative flex gap-6 p-4">
//         {/* Category Button */}
//         <div className="relative">
//           <button
//             className="flex items-center font-semibold text-white focus:outline-none"
//             onClick={toggleCategoryDropdown}
//           >
//             Category
//             <svg
//               className="w-4 h-4 ml-1"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M19 9l-7 7-7-7"
//               ></path>
//             </svg>
//           </button>

//           {/* Dropdown Options */}
//           {isCategoryDropdownOpen && (
//             <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
//               <ul className="py-1 text-gray-800">
//                 {[
//                   'Starter',
//                   'Main Course',
//                   'Dessert',
//                   'Drinks',
//                   'Table d\'Hote',
//                   'Topping',
//                 ].map((item) => (
//                   <li
//                     key={item}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                   >
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>

//         {/* Price Button */}
//         <button className="flex items-center font-semibold text-white focus:outline-none">
//           Price
//           <svg
//             className="w-4 h-4 ml-1"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M19 9l-7 7-7-7"
//             ></path>
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default FilterSection;

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewAll = () => {
  const [pendingadmins, setPendingadmins] = useState([
    {
      firstName: "James",
      lastName: "Joey",
      email: "james.joey@example.com",
      phone: "1234567890",
      status: "Pending",
    },
    {
      firstName: "Janet",
      lastName: "Smithen",
      email: "janet.smithen@example.com",
      phone: "2345678901",
      status: "Pending",
    },
    {
      firstName: "Ann",
      lastName: "Brownvile",
      email: "ann.brownvile@example.com",
      phone: "3456789012",
      status: "Pending",
    },
    {
      firstName: "Bobby",
      lastName: "Javis",
      email: "bobby.javis@example.com",
      phone: "4567890123",
      status: "Pending",
    },
  ]);

  const getStatusStyles = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Denied":
        return "bg-red-100 text-red-700";
      case "Pending":
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleApprove = (index) => {
    const updatedAdmins = [...pendingadmins];
    updatedAdmins[index].status = "Approved";
    setPendingadmins(updatedAdmins);
    toast.success("Admin approved successfully!", { theme: "colored" });
  };

  const handleDeny = (index) => {
    const updatedAdmins = [...pendingadmins];
    updatedAdmins[index].status = "Denied";
    setPendingadmins(updatedAdmins);
    toast.error("Admin denied.", { theme: "colored" });
  };

  return (
    <div className="container mx-auto py-8">
      {/* Pending Admins Table */}
      <h2 className="text-2xl font-bold mb-6 text-center">View All Pending Admins</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-black">
              <th className="px-4 py-2 text-left font-medium text-gray-200">Number</th>
              <th className="px-4 py-2 text-left font-medium text-gray-200">First Name</th>
              <th className="px-4 py-2 text-left font-medium text-gray-200">Last Name</th>
              <th className="px-4 py-2 text-left font-medium text-gray-200">Email</th>
              <th className="px-4 py-2 text-left font-medium text-gray-200">Phone</th>
              <th className="px-4 py-2 text-left font-medium text-gray-200">Status</th>
              <th className="px-4 py-2 text-left font-medium text-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingadmins.map((admin, index) => (
              <tr key={index} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{admin.firstName}</td>
                <td className="px-4 py-2">{admin.lastName}</td>
                <td className="px-4 py-2">{admin.email}</td>
                <td className="px-4 py-2">{admin.phone}</td>
                <td className={`px-4 py-2 font-semibold ${getStatusStyles(admin.status)}`}>
                  {admin.status}
                </td>
                <td className="px-4 py-3 space-x-2">
                  <button
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    onClick={() => handleApprove(index)}
                  >
                    Approve
                  </button>
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleDeny(index)}
                  >
                    Deny
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ViewAll;





import React, { useState } from "react";
import { FaStar, FaTrash } from "react-icons/fa";

const RecentReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      customer: "John Doe",
      dish: "Grilled Salmon",
      rating: 5,
      comment: "Amazing food! Highly recommend.",
      date: "2025-01-20",
    },
    {
      id: 2,
      customer: "Jane Smith",
      dish: "Spaghetti Carbonara",
      rating: 4,
      comment: "Great service but a bit pricey.",
      date: "2025-01-18",
    },
    {
      id: 3,
      customer: "Alice Brown",
      dish: "BBQ Chicken Pizza",
      rating: 3,
      comment: "Food was okay, expected better.",
      date: "2025-01-15",
    },
  ]);

  const handleDelete = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Recent Reviews</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2 text-left">Customer</th>
              <th className="px-4 py-2 text-left">Dish</th>
              <th className="px-4 py-2 text-left">Rating</th>
              <th className="px-4 py-2 text-left">Review</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review.id} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{review.customer}</td>
                <td className="px-4 py-2 font-medium">{review.dish}</td>
                <td className="px-4 py-2">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <FaStar key={i} className="inline text-yellow-500" />
                  ))}
                </td>
                <td className="px-4 py-2">{review.comment}</td>
                <td className="px-4 py-2">{review.date}</td>
                <td className="px-4 py-2">
                  <button
                    className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleDelete(review.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentReviews;

