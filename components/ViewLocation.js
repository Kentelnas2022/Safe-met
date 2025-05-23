<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Location - Iligan City</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    body {
      font-family: 'Inter', sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: #f3f4f6;
    }

    .top-bar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
      padding: 1rem;
      display: flex;
      align-items: center;
      background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0));
      color: white;
    }

    .search-bar {
      display: flex;
      align-items: center;
      background-color: white;
      border-radius: 9999px;
      padding: 0.75rem 1.25rem;
      flex-grow: 1;
      margin-left: 1rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .search-bar input {
      flex-grow: 1;
      border: none;
      outline: none;
      font-size: 1rem;
      color: #333;
      padding: 0 0.5rem;
    }

    .search-bar .icon {
      color: #4b5563;
    }

    #map {
      flex-grow: 1;
      height: 100vh;
      width: 100%;
      position: relative;
      z-index: 1;
    }

    .bottom-info-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 10;
      background-color: #1a2a47;
      padding: 1.5rem 1rem;
      border-top-left-radius: 1.5rem;
      border-top-right-radius: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06);
      transform: translateY(0);
      transition: transform 0.3s ease;
    }

    .bottom-info-bar button {
      background-color: white;
      color: #1a2a47;
      padding: 0.75rem 1.5rem;
      border-radius: 9999px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .map-controls {
      position: absolute;
      bottom: 8rem;
      right: 1rem;
      z-index: 10;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .map-controls button {
      background-color: white;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      color: #4b5563;
      font-size: 1.2rem;
    }
  </style>
</head>
<body>

  <div class="top-bar">
    <button class="text-white text-xl mr-4"><i class="fas fa-arrow-left"></i></button>
    <div class="search-bar">
      <i class="fas fa-search icon"></i>
      <input type="text" placeholder="Search here">
      <i class="fas fa-microphone icon ml-2"></i>
    </div>
  </div>

  <div id="map"></div>

  <div class="map-controls">
    <button><i class="fas fa-location-crosshairs"></i></button>
    <button><i class="fas fa-compass"></i></button>
  </div>

  <script>
    let map;

    function initMap() {
      const iliganCity = { lat: 8.2280, lng: 124.2452 };

      const iliganBounds = {
        north: 8.40,
        south: 8.00,
        east: 124.50,
        west: 124.00,
      };

      map = new google.maps.Map(document.getElementById("map"), {
        center: iliganCity,
        zoom: 13,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: false,
        mapId: "YOUR_MAP_ID",
        restriction: {
          latLngBounds: iliganBounds,
          strictBounds: false,
        },
      });

      new google.maps.Marker({
        position: iliganCity,
        map: map,
        title: "My Location",
        icon: {
          url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23DB2777'%3E%3Cpath d='M12 0c-4.418 0-8 3.582-8 8 0 6.666 8 16 8 16s8-9.334 8-16c0-4.418-3.582-8-8-8zm0 12c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z'/%3E%3C/svg%3E",
          scaledSize: new google.maps.Size(35, 35)
        },
      });

      document.querySelector('.map-controls button:nth-child(1)').addEventListener('click', () => {
        map.setCenter(iliganCity);
        map.setZoom(15);
      });

      document.querySelector('.map-controls button:nth-child(2)').addEventListener('click', () => {
        map.setHeading(0);
        map.setTilt(0);
      });
    }
  </script>
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_Maps_API_KEY&callback=initMap"></script>

</body>
</html>
