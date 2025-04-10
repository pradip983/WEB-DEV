import React from 'react';
import PaymentPage from '@/components/PaymentPage';
import { notFound } from 'next/navigation';
import User from '@/models/User';
import connectDB from '@/db/connectDb';

const Username = async ({ params }) => {
  // Function to check if the user exists
  const checkUser = async () => {
    await connectDB(); // Ensure the database is connected
    const user = await User.findOne({ username: params.username });
    
    if (!user) {
      notFound(); // Trigger a 404 page if the user is not found
      return null; // Return null after triggering notFound
    }
    
    return user; // Return the user document if found
  };

  const user = await checkUser(); // Call the function and await the result

  return (
    <>
      {/* Render PaymentPage only if user is found */}
      {user && <PaymentPage username={params.username} />}
    </>
  );
};

export default Username;
