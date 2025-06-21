// File: script.js
// Mục đích: Xử lý logic tương tác giữa các trang, như chuyển trang sau khi đăng nhập, xử lý lưu trữ dữ liệu người dùng bằng localStorage hoặc json-server.


// File: script.js
// Purpose: Handle login routing logic for Smart Hotel Manager system

// Demo credentials
const credentials = {
  admin: { username: "admin", password: "admin123" },
  reception: { username: "reception", password: "reception123" },
  guest: { username: "guest", password: "guest123" }
};

// Handle login form submit
const form = document.getElementById("loginForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;

    const validUser = credentials[role];

    if (validUser && username === validUser.username && password === validUser.password) {
      // Redirect to appropriate dashboard
      if (role === "admin") {
        window.location.href = "admin.html";
      } else if (role === "reception") {
        window.location.href = "reception.html";
      } else {
        window.location.href = "guest.html";
      }
    } else {
      alert("Sai thông tin đăng nhập. Vui lòng thử lại!");
    }
  });
}
