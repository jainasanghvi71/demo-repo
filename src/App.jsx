import { useState } from "react";
import "./App.css";

function App() {
  // Function to sort an array
  const sortArray = (arr, ascending = true) => {
    return [...arr].sort((a, b) => {
      if (ascending) {
        return a > b ? 1 : -1;
      } else {
        return a < b ? 1 : -1;
      }
    });
  };

  // Function to remove duplicates from an array
  const removeDuplicates = (arr) => {
    return [...new Set(arr)];
  };

  // Function to sort and remove duplicates in one step
  const sortAndRemoveDuplicates = (arr, ascending = true) => {
    const uniqueArray = removeDuplicates(arr);
    return sortArray(uniqueArray, ascending);
  };

  // Function to find second largest number using for loop
  const findSecondLargest = (arr) => {
    if (arr.length < 2) {
      return "Array must have at least 2 elements";
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      
      if (current > largest) {
        // Current number is larger than largest
        secondLargest = largest;
        largest = current;
      } else if (current > secondLargest && current < largest) {
        // Current number is between largest and second largest
        secondLargest = current;
      }
    }

    if (secondLargest === -Infinity) {
      return "No second largest number found (all elements might be the same)";
    }

    return secondLargest;
  };

  // Example usage
  const sampleArray = [5, 2, 8, 2, 1, 9, 5, 3, 8];
  const arrayWithDuplicates = [10, 10, 10, 5, 5, 3, 3];
  const sortedArray = sortArray(sampleArray);
  const uniqueArray = removeDuplicates(sampleArray);
  const sortedUniqueArray = sortAndRemoveDuplicates(sampleArray);
  const secondLargest1 = findSecondLargest(sampleArray);
  const secondLargest2 = findSecondLargest(arrayWithDuplicates);

  return (
    <>
      <div className="main-content">
        <h1>Sort and Remove Duplicates Demo</h1>
        
        <div style={{ margin: "20px 0" }}>
          <h3>Original Array:</h3>
          <p>[{sampleArray.join(", ")}]</p>
        </div>

        <div style={{ margin: "20px 0" }}>
          <h3>Sorted Array:</h3>
          <p>[{sortedArray.join(", ")}]</p>
        </div>

        <div style={{ margin: "20px 0" }}>
          <h3>Array with Duplicates Removed:</h3>
          <p>[{uniqueArray.join(", ")}]</p>
        </div>

        <div style={{ margin: "20px 0" }}>
          <h3>Sorted Array with Duplicates Removed:</h3>
          <p>[{sortedUniqueArray.join(", ")}]</p>
        </div>

        <div style={{ margin: "20px 0", borderTop: "2px solid #ccc", paddingTop: "20px" }}>
          <h2>Second Largest Number Demo</h2>
          
          <div style={{ margin: "15px 0" }}>
            <h4>Array 1: [{sampleArray.join(", ")}]</h4>
            <p><strong>Second Largest:</strong> {secondLargest1}</p>
          </div>

          <div style={{ margin: "15px 0" }}>
            <h4>Array 2 (with many duplicates): [{arrayWithDuplicates.join(", ")}]</h4>
            <p><strong>Second Largest:</strong> {secondLargest2}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
