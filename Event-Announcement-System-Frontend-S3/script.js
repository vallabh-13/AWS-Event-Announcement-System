const notifyEndpoint = "https://2vh6wjwzme.execute-api.us-east-2.amazonaws.com/Prod/Nofity";
const subscribeEndpoint = "https://2vh6wjwzme.execute-api.us-east-2.amazonaws.com/prd/subscribe";

function sendNotification() {
  const message = document.getElementById("message").value.trim();
  if (!message) {
    document.getElementById("status").innerText = "⚠️ Please enter a message.";
    return;
  }

  fetch(notifyEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  })
  .then(res => res.ok ? res.json() : Promise.reject(res))
  .then(data => {
    document.getElementById("status").innerText = `✅ ${data.status}`;
  })
  .catch(err => {
    document.getElementById("status").innerText = "❌ Error occurred.";
    console.error(err);
  });
}

function subscribeUser() {
  const email = document.getElementById("email").value.trim();
  if (!email) {
    document.getElementById("subscribeStatus").innerText = "⚠️ Please enter an email.";
    return;
  }

  fetch(subscribeEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  })
  .then(res => res.ok ? res.json() : Promise.reject(res))
  .then(data => {
    document.getElementById("subscribeStatus").innerText = `✅ ${data.status}`;
  })
  .catch(err => {
    document.getElementById("subscribeStatus").innerText = "❌ Error occurred.";
    console.error(err);
  });
}
