import { useEffect } from "react";

const RestaurantMenu = () => {
// Swiggy api not workings
//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=25620&catalog_qa=undefined&submitAction=ENTER"
//     );
//     const json = await data.json()
//     console.log(json)
//   };

  return (
    <div>
      <h1>Name of the Restaurans</h1>
      <h3>Menu</h3>

      <ul>
        <li>Biryani</li>
        <li>Chiken</li>
        <li>Mutton</li>
        <li>Egg</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
