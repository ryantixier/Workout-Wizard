const logout = async function () {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    //this will send user to login/sign up page
    document.location.replace("/");
  } else {
    alert("Failed to log out!");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
