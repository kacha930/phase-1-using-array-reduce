const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

//using a arrow f 
const totalBatteries = batteryBatches.reduce(
    //sum of prev + curr
    (prev, current) => prev + current,
    0
);