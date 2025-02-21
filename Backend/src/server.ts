// import express from 'express';
// import connectToDatabase from './config/db.js';
// import dotenv from 'dotenv';
// import userRouter from './routes/user.js'

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(express.json());

// app.use("/user", userRouter)

// // Simple endpoint to check if API is working
// app.get("/", (req: express.Request, res: express.Response) => {
//   res.send("Hello from Express API!");
// });

// // Connect to the MongoDB database
// connectToDatabase();

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


//Binary Search - Sort then if number less than current 

// nums[i] < i - Could check if nums[i] is negative which means we haven't started looking yet. nums[2] == -1 -> search nums[3,5];

// nums[3] == 1 < 4

// Find where positive array starts- then perform the binary search on this new positive array.

export const ans2 = function(nums: number[]){
  let ansss = nums.length + 1;
  for (let i = 0; i < nums.length; i++){
    if (nums[i] <= 0) nums[i] = nums.length + 1;
    else if (nums[i] < nums.length){ 
      nums[nums[i] - 1] = nums[nums[i] - 1] > 0 ? -nums[nums[i] - 1] : nums[nums[i] - 1];  
  }
}

export const ans = function (nums : number[]){
  nums.sort();
  let answer = 1;
  if (nums[nums.length - 1] <= 0) return 1;
  for (let i = 0; i < nums.length; i++){
    if (nums[i] > answer) return answer;
    if (nums[i] == answer) answer++
  }
  return answer;
}

console.log(answer2([1,3,1,5,2,1]));

