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
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
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
const eventsBox = document.querySelector(".eventsBox");
const onlineEventsBox = document.querySelector(".onlineEventsBox");
const eventNewYorkBox = document.querySelector(".eventNewYorkBox");

const goBtn = document.querySelector(".filterBtn");
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  timeZoneName: "short",
});
const filterForm = document.querySelector(".eventFilters");
const mapContainer = document.getElementById("map-container");
const mapButton = document.querySelector(".map button");
const closeMapIcon = document.querySelector(".map > img");
const selects = filterForm ? filterForm.querySelectorAll(".filter") : [];

const NY_COORDS = [40.7128, -74.006];
const INITIAL_ZOOM = 13;

// создание карточек
function createEventCard(event) {
  const isOnline = event.type === "online";
  const hasAttendees = event.attendees != null;
  const hasSpotsLeft = event.spotsLeft != null;

  const distance = !isOnline && event.distance ? ` (${event.distance} km)` : "";
  const onlineLabel = `<img src="assets/icons/camera-icon.svg" alt="" /> Online Event`;

  return `
    <article class="event">
      <div class="cardImage">
        ${isOnline ? `<span class="eventBadge">${onlineLabel}</span>` : ""}
        <img class="eventImage" src="${event.image}" alt="" loading="lazy" />
      </div>

      <div class="cardContent">
        <h3>${event.title}</h3>
        <span class="subject">${event.category}${distance}</span>

        <div class="calendar">
          <time datetime="${event.date.toISOString()}">
            <img src="assets/icons/calendar-icon.svg" alt="" />
            ${formatEventDate(event.date)}
          </time>
        </div>

        <div class="free">
          <span>
            <img src="assets/icons/chekmark-icon.svg" alt="" />
            ${event.attendees ?? 1} going
          </span>
          <span>
            <img src="assets/icons/ticket-icon.svg" alt="" /> Free
          </span>
        </div>

        ${isOnline ? `<span class="eventOnline">${onlineLabel}</span>` : ""}

        ${
          hasAttendees || hasSpotsLeft
            ? `<div class="cardMeta">
                ${hasAttendees ? `<span>${event.attendees} attendees</span>` : ""}
                ${hasSpotsLeft ? `<span class="redString">${event.spotsLeft} spots left</span>` : ""}
              </div>`
            : ""
        }
      </div>
    </article>
  `;
}
// отображение карточек
function renderIndexEvents(events, container) {
  if (!container) return;

  if (events.length === 0) {
    container.innerHTML = "<p>No events found.</p>";
    return;
  }

  container.innerHTML = events.map(createEventCard).join("");
}
// kарта
function initMap() {
  const map = L.map("map-container").setView(NY_COORDS, INITIAL_ZOOM);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  const marker = L.marker(NY_COORDS).addTo(map);
  marker.bindPopup("<b>New York, NY</b>").openPopup();

  return map;
}
function openMap(mapInstance) {
  mapContainer.classList.remove("is-blurred");
  mapButton.style.display = "none";
  mapInstance.invalidateSize();
}
function closeMap() {
  mapContainer.classList.add("is-blurred");
  if (mapButton) {
    mapButton.style.display = "flex";
  }
}
// форматирование дат
function formatDateToYYYYMMDD(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function formatEventDate(date) {
  const p = Object.fromEntries(
    dateFormatter.formatToParts(date).map(({ type, value }) => [type, value]),
  );
  return `${p.weekday}, ${p.month} ${p.day} · ${p.hour}:${p.minute} ${p.dayPeriod} ${p.timeZoneName}`;
}
//Фильтрация
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
  if (eventsBox) {
    renderIndexEvents(filteredEvents, eventsBox); // для главн
  } else if (eventNewYorkBox) {
    renderIndexEvents(filteredEvents, eventNewYorkBox); // для фильтр
  }
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
  filterForm.addEventListener("change", handleFilterChange);
}
if (goBtn) {
  goBtn.addEventListener("click", () => {
    window.location.href = "filteredPage.html";
  });
}
// Отрисовка всех событий
if (eventsBox) {
  renderIndexEvents(eventsStore, eventsBox);
}

// Отрисовка только онлайн-событий
if (onlineEventsBox) {
  const onlineEvents = eventsStore.filter((event) => event.type === "online");
  renderIndexEvents(onlineEvents, onlineEventsBox);
}
//  Отрисовка вторая страничка
if (eventNewYorkBox) {
  renderIndexEvents(eventsStore, eventNewYorkBox);
}
