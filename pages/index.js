import HorizontalBarChart from '@/components/charts/HorizontalBarChart'
import PieChart from '@/components/charts/Pie'
import VerticalBarChart from '@/components/charts/VerticalBarChart'
import CustomIcon from '@/components/icons'
import { Orders } from '@/Orders'
import React from 'react'

function Home() {
  const getOverallOrderStats = (orders) => {
    let totalItemsPurchased = 0;
    let totalPrice = 0;

    orders.forEach((order) => {
      order.Items.forEach((item) => {
        totalItemsPurchased += item.Quantity;
        totalPrice += item.Total_Price;
      });
    });

    return { totalItemsPurchased, totalPrice };
  };

  const { totalItemsPurchased, totalPrice } = getOverallOrderStats(Orders);

  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-y-8 gap-x-8 max-w-7xl p-8 mx-auto'>
      <div className='grid grid-cols-1 gap-y-4'>
        <div className='container px-8 py-4 bg-white shadow-lg rounded-md overflow-hidden flex gap-x-8 items-center'>
          <div
            className={`text-center inline-block text-3xl`}
          >
            <CustomIcon name={"trolly"} />
          </div>
          <div>
            <h5 className='font-bold text-xl'>Over All Item Purchased</h5>
            <p className='text-lg font-medium'>{totalItemsPurchased}</p>
          </div>
        </div>
        <div className='container px-8 py-4 bg-white shadow-lg rounded-md overflow-hidden flex gap-x-8 items-center'>
          <div
            className={`text-center inline-block text-3xl`}
          >
            <CustomIcon name={"coinDoller"} />
          </div>
          <div>
            <h5 className='font-bold text-xl'>Total Price</h5>
            <p className='text-lg font-medium'>{totalPrice.toFixed(0)}</p>
          </div>
        </div>
      </div>
      <div className='container px-8 py-4 bg-white shadow-lg rounded-md overflow-hidden'>
        <PieChart orders={Orders} />
      </div>
      <div className='container px-8 py-4 bg-white shadow-lg rounded-md overflow-hidden'>
        <VerticalBarChart orders={Orders} />
      </div>
      <div className='container px-8 py-4 bg-white shadow-lg rounded-md overflow-hidden'>
        <HorizontalBarChart orders={Orders} />
      </div>
    </div>
  )
}

export default Home