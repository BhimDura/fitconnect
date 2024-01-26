"use client";

import { getUser } from "@/lib/apis/private/user";
import { useEffect, useState } from "react";

const UserView = () => {
  const [token, setToken] = useState<string>('');

  const fetchInfo = async () => {
    try {
      const response = await getUser(token);

      if (response.ok) {
        const responseData = await response.json();
        const userDetails = responseData;
        console.log(userDetails,1);
      }
    } catch (err) {
      console.error('Error fetching user data:', err);
    } finally {
      // Code to run regardless of success or failure can go here
    }
  };

  const handleButtonClick = () => {
    // Call the function to fetch user data when the button is clicked
    fetchInfo();
  };

  const handleTokenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update the token state when the input field value changes
    setToken(event.target.value);
  };

  return (
    <div>
      <h1>About User</h1>
      <div className="mb-2">
        <span className="font-bold">Enter Your token:</span>
        <input
          type="text"
          placeholder="Enter your token here"
          value={token}
          onChange={handleTokenChange}
        />
        <button onClick={handleButtonClick}>Fetch User Info</button>
      </div>
      <div className="bg-green-500 p-4 rounded-md shadow-lg border-none border-light-500 flex">
        <div className="w-1/2 border-none border-light-600">
          {/* Your user details display code goes here */}
        </div>
      </div>
    </div>
  );
};

export default UserView;
