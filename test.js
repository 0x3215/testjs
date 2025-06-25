<script>
  fetch('https://webhook.site/8ce03918-e309-4e08-9587-f77009a6711a', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: 'Hello from JS!',
      timestamp: new Date().toISOString()
    })
  })
  .then(response => console.log('Webhook sent:', response.status))
  .catch(error => console.error('Error sending webhook:', error));
</script>
