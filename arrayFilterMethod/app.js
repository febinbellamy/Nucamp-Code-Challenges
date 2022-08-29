const restaurants = [
    {
      "name": "ConFusion",
      "takeout": false,
      "rating": 5
    },
    {
      "name": "Cafe Geneva",
      "takeout": true,
      "rating": 6
    },
    {
      "name": "NuCafe",
      "takeout": true,
      "rating": 8
    },
    {
      "name": "Bob's Seafood",
      "takeout": false,
      "rating": 2
    }  
  ];

  document.getElementById("filterTakeoutBtn").addEventListener("click", filterTakeout);
  
  function filterTakeout() {
    let rList = "\nThese restaurants offer takeout:\n";
    // The below line creates a new array with only the restaurants that offer takeout
    const hasTakeout = restaurants.filter(restaurant => restaurant.takeout);
    
    // The below line takes the restaurant names from the array and makes a string
    hasTakeout.forEach(restaurant => { 
      rList += `\n${restaurant.name}`;
    });
    
    // The below line updates the DOM with the newly created string
    document.getElementById("list").innerText = rList;
  }
  
  document.getElementById("filterRatingsBtn").addEventListener("click", filterRatings);
  
  function filterRatings() {
     let rList = "\nThese restaurants have a rating of 5 or higher:\n";
    // The below line creates a new array with only the restaurants that offer takeout
    const hasHighRatings = restaurants.filter(restaurant => restaurant.rating >= 5);
    
    // The below line takes the restaurant names from the array and makes a string
    hasHighRatings.forEach(restaurant => { 
      rList += `\n${restaurant.name}`;
    });
    
    // The below line updates the DOM with the newly created string
    document.getElementById("list").innerText = rList;
  }
  
  document.getElementById("filterCBtn").addEventListener("click", filterC);
  
  function filterC() {
     let rList = "\nThese restaurants names begin with the letter C:\n";
    // The below line creates a new array with only the restaurants that offer takeout
    const startsWithC = restaurants.filter(restaurant => restaurant.name[0] === 'C')
    
   startsWithC.forEach(restaurant => { 
      rList += `\n${restaurant.name}`;
    });
    
    // The below line updates the DOM with the newly created string
    document.getElementById("list").innerText = rList;
  }