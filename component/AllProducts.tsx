
import axios from "axios";
import PopularProducts from "./PopularProduct";
import DailyBestSells from "./DailyBestSells";
import DealsOfTheDay from "./DealsoftheDay";


async function AllProducts () {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/get-products`);
  const data = response.data;
  const { popularProducts, dealsOfTheDay, bestoftheDay} = data;
  // console.log("This is the data here ", popularProducts)

  return (
    <div>
      <div>
         <PopularProducts data={popularProducts}/>
      </div>

      <div>
        <DailyBestSells data={bestoftheDay}/>
      </div>

      <div>
        <DealsOfTheDay data={dealsOfTheDay}/>
      </div>
     
    </div>
  )
}


export default AllProducts;