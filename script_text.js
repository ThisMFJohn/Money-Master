// Wait until the page loads to access financial data
document.addEventListener("DOMContentLoaded", function () {
    if (window.financialData) {
        var { amount, saving, spending, investing } = window.financialData;

        // Create summary text
        var summaryText = `
          <h3>Financial Breakdown Summary</h3>
          <p><strong>Saving:</strong> $${saving.toFixed(2)} (${(saving / amount * 100).toFixed(2)}%)</p>
          <p><strong>Spending:</strong> $${spending.toFixed(2)} (${(spending / amount * 100).toFixed(2)}%)</p>
          <p><strong>Investing:</strong> $${investing.toFixed(2)} (${(investing / amount * 100).toFixed(2)}%)</p>
        `;

        // Inject summary below the chart
        document.getElementById('chartSummary').innerHTML = summaryText;
    } else {
        console.error("Financial data is not available.");
    }
});
