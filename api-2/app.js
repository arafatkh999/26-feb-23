const data = [
    {
      _id: "60795d4e0489a32f948c4167",
      name: "Honda Sedan",
      price: "132",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
      imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
    },
    {
      _id: "60795e440489a32f948c4168",
      name: "MitoSedan",
      price: "221",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
    },
    {
      _id: "60795fc20489a32f948c4169",
      name: "Isuzu Tacoma",
      price: "105",
      description:
        "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
    },
    {
      _id: "6079615d0489a32f948c416a",
      name: "Chevrolet Crossover",
      price: "434",
      description:
        "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
      
    },
  ];

  const card1img = data[0].imageURL;
  const card1Name = data[0].name;
  const card1Description = data[0].description;
  const card1Button = data[0].price;


  const card2img = data[1].imageURL;
  const card2Name = data[1].name;
  const card2Description = data[1].description;
  const card2Button = data[1].price;


  document.getElementById('card1img').src=`${card1img}`;
  document.getElementById('card1name').innerText=`Car Name: ${card1Name}`;
  document.getElementById('card1des').innerHTML=`Car Details: ${card1Description}`;
  document.getElementById('card1button').innerHTML=`Car Price: ${card1Button}`;


  document.getElementById('card2img').src=`${card2img}`;
  document.getElementById('card2name').innerText=`Car Name: ${card2Name}`;
  document.getElementById('card2des').innerHTML=`Car Details: ${card2Description}`;
  document.getElementById('card2button').innerHTML=`Car Price: ${card2Button}`;