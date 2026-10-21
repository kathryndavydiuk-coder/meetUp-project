const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    title:
      "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and CustomerExperience",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    category: "Technology",
    distance: 10,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 75,
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
  },
];
const goBtn = document.querySelector(".filterBtn");
const filterForm = document.querySelector(".eventFilters");
const examplesContainer = document.querySelector(".examplesPart");
const mapContainer = document.getElementById("map-container");
const mapButton = document.querySelector(".map button");
const closeMapIcon = document.querySelector(".map > img");
const selects = filterForm ? filterForm.querySelectorAll(".filter") : [];

const NY_COORDS = [40.7128, -74.006];
const INITIAL_ZOOM = 13;
function initMap() {
  const map = L.map("map-container").setView(NY_COORDS, INITIAL_ZOOM);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  const marker = L.marker(NY_COORDS).addTo(map);
  marker.bindPopup("<b>New York, NY</b>").openPopup();

  return map; // Повертаємо об'єкт карти, щоб керувати ним далі
}
function openMap(mapInstance) {
  mapContainer.classList.remove("is-blurred");
  mapButton.style.display = "none";
  mapInstance.invalidateSize(); // Оновлює розміри Leaflet
}
function closeMap() {
  mapContainer.classList.add("is-blurred");
  if (mapButton) {
    mapButton.style.display = "flex";
  }
}

function formatDateToYYYYMMDD(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function handleFilterChange() {
  const selectedType = selects[0].value;
  const selectedDistance = selects[1].value;
  const selectedCategory = selects[2].value;
  const selectedDate = selects[3].value;

  const filteredEvents = eventsStore.filter((event) => {
    if (selectedType && event.type !== selectedType) {
      return false;
    }

    if (selectedDistance && event.distance > Number(selectedDistance)) {
      return false;
    }

    if (selectedCategory && event.category !== selectedCategory) {
      return false;
    }

    if (selectedDate) {
      const eventDateStr = formatDateToYYYYMMDD(event.date);
      if (eventDateStr !== selectedDate) {
        return false;
      }
    }
    return true;
  });
  renderEvents(filteredEvents);
}
function renderEvents(events) {
  examplesContainer.innerHTML = "";

  if (events.length === 0) {
    examplesContainer.innerHTML =
      "<p>No events found matching your criteria.</p>";
    return;
  }

  events.forEach((event) => {
    const cardHtml = `
      <div class="eventCard">
        <div class="cardImage">
          <img src="${event.image}" alt="image" />
          ${
            event.type === "online"
              ? `
            <span class="eventBadge">
              <img src="assets/icons/camera-icon.svg" alt="" />
              Online Event
            </span>
          `
              : ""
          }
        </div>
        <div class="cardContent">
          <span>${event.date.toUTCString()}</span>
          <h3>${event.title}</h3>
          <span>${event.category} ${event.distance ? `(${event.distance} km)` : ""}</span>
          ${
            event.attendees
              ? `
            <div class="cardMeta">
              <span>${event.attendees} attendees</span>
            </div>
          `
              : ""
          }
        </div>
      </div>
    `;
    examplesContainer.insertAdjacentHTML("beforeend", cardHtml);
  });
}

let map = null;
if (mapContainer && typeof L !== "undefined") {
  map = initMap();
}

if (mapButton && map) {
  mapButton.addEventListener("click", () => openMap(map));
}
if (closeMapIcon) {
  closeMapIcon.addEventListener("click", closeMap);
}
if (filterForm) {
  filterForm.addEventListener("change", handleFilterChange); // ✅ ОДИН раз, з guard
}
if (goBtn) {
  goBtn.addEventListener("click", () => {
    window.location.href = "filteredPage.html";
  });
}
