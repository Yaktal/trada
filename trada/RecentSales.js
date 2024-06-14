const salesData = [
    {
      "_id": "#6548",
      "quantity": 3,
      "costPrice": 500,
      "sellingPrice": 1000,
      "date": "13-06-2024",
      "profit": 500,
      "__v": 0
    },
    // Add more data objects to the array as needed
  ];
  
  const salesItemTemplate = document.getElementById('sales-item-template');
  const salesDataContainer = document.querySelector('.sales-data');
  
  salesData.forEach((sale) => {
    const salesItem = salesItemTemplate.cloneNode(true);
    salesItem.querySelector('.id').textContent = sale._id;
    salesItem.querySelector('.quantity').textContent = sale.quantity;
    salesItem.querySelector('.cost-price').textContent = sale.costPrice;
    salesItem.querySelector('.selling-price').textContent = sale.sellingPrice;
    salesItem.querySelector('.date').textContent = sale.date;
    salesItem.querySelector('.profit').textContent = sale.profit;
    salesDataContainer.appendChild(salesItem);
  });