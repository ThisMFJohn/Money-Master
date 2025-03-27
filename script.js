// Function to get the amount from URL
function getQueryParam(param) {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Get the amount entered by the user
var amount = parseFloat(getQueryParam('amount')) || 1000;  // Default value if not provided

// Calculate percentages
var saving = amount * 0.30;  // 30% saving
var spending = amount * 0.50;  // 50% spending
var investing = amount * 0.20;  // 20% investing

// Update chart with new data
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
      labels: ['Saving', 'Spending', 'Investing'],
      datasets: [{
          label: 'Financial Breakdown',
          data: [saving, spending, investing],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          borderColor: '#fff',
          borderWidth: 1
      }]
  },
  options: {
      responsive: true,
      plugins: {
          legend: {
              position: 'top',
          }
      }
  }
});

// Store the values globally to use in script2.js
window.financialData = { amount, saving, spending, investing };
