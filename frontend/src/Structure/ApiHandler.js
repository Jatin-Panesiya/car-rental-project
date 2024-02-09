const { BACKEND_URL } = require("@/config");

// function for fetch data
export async function fetchData() {
  try {
    const response = await fetch(`${BACKEND_URL}/cars`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// api handling for add car
export async function addCar(data) {
  const response = await fetch(`${BACKEND_URL}/cars`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (response.status === 200) {
    return result;
  } else {
    return {};
  }
}
// api handling for delete car

export async function deleteCar(id) {
  const response = await fetch(`${BACKEND_URL}/cars/${id}`, {
    method: "DELETE",

    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
}

// api handling for authenticate users or admin

export async function authenticate(data) {
  try {
    const response = await fetch(
      `https://5000-itsparasdev-carapi-qy1zu9h5d46.ws-us106.gitpod.io/auth/local/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    
    const result = await response.json();
  } catch (error) {
    console.error("Authentication error:", error);
  }
}

//register user
export async function registerUser(data) {
  try {
    const response = await fetch(
      `https://5000-itsparasdev-carapi-qy1zu9h5d46.ws-us106.gitpod.io/auth/local/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
  } catch (error) {
    console.error("Authentication error:", error);
  }
}

export async function editData(data, id) {
  try {
    const response = await fetch(`${BACKEND_URL}/cars/${id}`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
   } catch (error) {
    console.error("Error fetching data:", error);
  }
}

//getuser

export async function getUser() {
  try {
    const response = await fetch(`${BACKEND_URL}/auth/@me`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return {};
  }
}

//date

export async function bookDate(id, date) {
  try {
    const response = await fetch(`${BACKEND_URL}/cars/book/${id}`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({date}),
    });
    const result = await response.json();
    return result.paymentLink
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

//Review Post

export async function sendReview(data) {
  try {
    const response = await fetch(BACKEND_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    const result = await response.json();
    } catch (error) {
    console.error("Error fetching data:", error);
  }
}
