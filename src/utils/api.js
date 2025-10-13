const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

async function addItems({ name, imageUrl, weather }) {
  const res = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error(`Error: ${res.status}. Could not add item.`);
  }
}

async function deleteItems(id) {
  const res = await fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error(`Error: ${res.status}. Could not delete item.`);
  }
}

export { getItems, addItems, deleteItems };
