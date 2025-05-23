<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
  body {
    font-family: 'Inter', sans-serif;
  }

  .top-section {
    background-color: #1a2a47;
    border-bottom-left-radius: 3rem;
    border-bottom-right-radius: 3rem;
    height: 180px;
    position: relative;
    z-index: 10;
  }

  .bottom-nav {
    position: relative;
    background-color: black;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
  }

  .nav-btn {
    position: relative;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    color: white;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .nav-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    background-color: #1F324A; /* updated color */
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.3s ease, background-color 0.3s ease;
    z-index: -1;
}

  .nav-btn.active {
    transform: translateY(-70%);
  }

  .nav-btn.active::before {
    transform: translate(-50%, -50%) scale(1);
  }

  .nav-btn i {
    z-index: 2;
    position: relative;
    transition: color 0.3s ease;
  }

  /* Hover Effect */
  .nav-btn:hover::before {
    transform: translate(-50%, -50%) scale(1);
    background-color: white;
  }

  .nav-btn:hover i {
    color: #1F324A;
  }
</style>

</head>
<body class="bg-gray-100 min-h-screen flex flex-col">
  <div class="top-section w-full flex items-center justify-center text-white text-2xl font-semibold pt-8 pb-4">
    Dashboard
  </div>

  <div class="flex-grow p-4 -mt-16 z-20">
    <div class="bg-white p-6 rounded-xl shadow-lg mb-6 text-center">
      <h2 class="text-lg font-semibold text-gray-800 mb-4">Helmet Status:</h2>
      <div class="text-indigo-600 text-5xl mb-2">
        <i class="fas fa-helmet-safety"></i>
      </div>
      <p class="text-gray-700 text-xl font-medium">Good condition</p>
    </div>

    <div class="bg-white p-5 rounded-xl shadow-lg mb-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition duration-200">
      <div class="flex items-center">
        <div class="text-indigo-600 text-2xl mr-4">
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <span class="text-lg font-medium text-gray-800">Helmet Tracker</span>
      </div>
      <div class="text-gray-500 text-xl">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>

    <div class="bg-white p-5 rounded-xl shadow-lg mb-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition duration-200">
      <div class="flex items-center">
        <div class="text-indigo-600 text-2xl mr-4">
          <i class="fas fa-history"></i>
        </div>
        <span class="text-lg font-medium text-gray-800">History Log</span>
      </div>
      <div class="text-gray-500 text-xl">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>

  <!-- Bottom Navigation -->
  <div class="w-full py-4 px-6 flex justify-around items-center rounded-t-3xl shadow-lg" style="background-color: #1F324A;">
  <div class="nav-btn text-white text-3xl cursor-pointer relative">
    <i class="fas fa-home"></i>
  </div>
  <div class="nav-btn text-white text-3xl cursor-pointer relative">
    <i class="fas fa-phone-alt"></i>
  </div>
  <div class="nav-btn text-white text-3xl cursor-pointer relative">
    <i class="fas fa-user"></i>
  </div>
</div>

  <script>
    const navButtons = document.querySelectorAll(".nav-btn");

    navButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        navButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  </script>
</body>
</html>
