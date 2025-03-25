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

// Add summary below the chart
var summaryText = `
  <h3>Financial Breakdown Summary</h3>
  <p><strong>Saving:</strong> $${saving.toFixed(2)} (${(saving / amount * 100).toFixed(2)}%)</p>
  <p><strong>Spending:</strong> $${spending.toFixed(2)} (${(spending / amount * 100).toFixed(2)}%)</p>
  <p><strong>Investing:</strong> $${investing.toFixed(2)} (${(investing / amount * 100).toFixed(2)}%)</p>
`;

// Inject the summary into the HTML below the chart
document.getElementById('chartSummary').innerHTML = summaryText;
