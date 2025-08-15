import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import separate CSS file
import InventionModal from './InventionModal'; // Adjust path if needed


// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const HomePage = () => {
  const [selectedInvention, setSelectedInvention] = useState(null); 
  const navigate = useNavigate();
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [filteredInventions, setFilteredInventions] = useState([]);
  const [selectedEra, setSelectedEra] = useState('');

 const inventionsData = [
  {
    name: 'Antikythera Mechanism',
    era: 'Ancient',
    lat: 36.8,
    lng: 23.5,
    desc: 'An ancient Greek analog computer used to predict astronomical positions and eclipses.',
    image:'https://www.researchgate.net/publication/264389831/figure/fig13/AS:669678783442957@1536675272417/Exploded-computer-reconstruction-of-the-Antikythera-Mechanism-On-the-left-the-front.png',
   videoUrl: 'https://www.youtube.com/embed/xARloincj0k', 
  },
  {
    name: 'Printing Press',
    era: 'Renaissance',
    lat: 49.99,
    lng: 8.27,
    desc: 'Invented by Johannes Gutenberg, it revolutionized the production of books in Europe.',
    image:'https://t4.ftcdn.net/jpg/00/74/53/23/360_F_74532304_K7pQhnCfkLasKAN6DKzzaqFJv3XSMwAX.jpg',
    //  videoUrl:'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoUrl:'https://www.youtube.com/watch?v=yeikqw0kyqI&pp=ygUYb2xkIHByaW50aW5nIHByZXNzIHZpZGVv',
     },
  {
    name: 'Steam Engine',
    era: 'Industrial',
    lat: 51.5,
    lng: -0.12,
    desc: "James Watt's improved steam engine drove the Industrial Revolution.",
    image:'https://i.ytimg.com/vi/P3F20t6PoYQ/maxresdefault.jpg',
    videoUrl:'https://www.youtube.com/embed/ATfwSa82XGM&pp/ygUMc3RlYW0gZW5naW5l',
        },
  {
    name: 'Internet',
    era: 'Modern',
    lat: 37.4,
    lng: -122.1,
    desc: 'A global system of interconnected computer networks originating in the late 20th century.',
    image: 'https://images.saymedia-content.com/.image/t_share/MTc2Mjg4ODUwMDk4NzkxNTk3/famous-inventions-of-the-20th-century.jpg',
    videoUrl:'https://www.youtube.com/embed/h8K49dD52WA',
       },
  {
    name: 'Electricity',
    era: 'Modern',
    lat: 39.0,
    lng: -77.0,
    desc: 'The discovery and harnessing of electricity transformed the world.',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHxuf-OEgPMg5E8Ja5SXmKX610qkRRqe74g&s',
    videoUrl:'https://www.youtube.com/embed/_JLYZUQ8M4U',
  },
{
      name: 'Telephone',
      era: 'Modern',
      lat: 42.0,
      lng: -71.0,
      desc: "Alexander Graham Bell's invention revolutionized communication.",
      image: 'https://m.media-amazon.com/images/I/71affGlkNtL.jpg',
      videoUrl:"https://www.youtube.com/embed/caIRCw_vWE4",
    },
    {
      name: 'Wheel',
      era: 'Ancient',
      lat: 33.3,
      lng: 44.4,
      desc: 'One of the earliest inventions in Mesopotamia that revolutionized transport and machinery.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcsYd77gq-NzSeNA3h_uzovJMWfi_4T66xQ&s',
      videoUrl:'https://www.youtube.com/embed/W-lx6blYNPo',
    },
    {
      name: 'Gunpowder',
      era: 'Medieval',
      lat: 34.0,
      lng: 108.9,
      desc: 'Invented in China, gunpowder transformed warfare and weaponry in the medieval era.',
      image: 'https://danielyuan12.files.wordpress.com/2013/08/imagescacc9e9n2.jpg',
      videoUrl:'https://www.youtube.com/embed/dVBzEiXK-7c',
    },
    {
      name: 'Compass',
      era: 'Medieval',
      lat: 31.2,
      lng: 121.5,
      desc: 'The magnetic compass allowed accurate navigation and fueled the Age of Exploration.',
      image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/compass-on-old-texture-dny59.jpg',
      videoUrl:'https://www.youtube.com/embed/WXtS7FkB86k',
    },
    {
      name: 'Telescope',
      era: 'Renaissance',
      lat: 52.0,
      lng: 5.1,
      desc: 'Developed in the Netherlands, and later used by Galileo to explore the heavens.',
      image: 'https://www.pbs.org/wgbh/nova/media/images/inventing-telescopes-01.width-990_aMDNQeV.jpg',
      videoUrl:'https://www.youtube.com/embed/603Uq8HKIQ0',
    },
    {
      name: 'Light Bulb',
      era: 'Industrial',
      lat: 40.7,
      lng: -74.0,
      desc: 'Thomas Edison’s practical electric light bulb illuminated homes and cities worldwide.',
      image: 'https://www.electricalapparatus.net/wp-content/uploads/thomas-edison-inventions.jpeg',
      videoUrl:'https://www.youtube.com/embed/5v7bN13PjZ8',
    },
    {
      name: 'Airplane',
      era: 'Modern',
      lat: 39.7,
      lng: -84.1,
      desc: 'The Wright brothers achieved the first powered flight in 1903, revolutionizing travel.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBSKRhCHag25JCVJ36LyEHiq9vBdJLOosuzYxLKnJXGtz86vsVxXRRlW0Mf5CmwXoee8&usqp=CAU',
      videoUrl:'https://www.youtube.com/embed/6emu6xo6uxw',
    },
    {
      name: 'Computer',
      era: 'Modern',
      lat: 51.5,
      lng: -0.1,
      desc: 'The development of computers in the 20th century transformed information processing.',
      image: 'https://images.saymedia-content.com/.image/t_share/MTc2Mjg4ODUwMDk4NzkxNTk3/famous-inventions-of-the-20th-century.jpg',
      videoUrl:'https://www.youtube.com/embed/Ow1BLT29p9w',
    },
    {
      name: 'Vaccination',
      era: 'Modern',
      lat: 51.75,
      lng: -1.25,
      desc: 'Edward Jenner’s smallpox vaccine laid the foundation for modern immunology.',
      image: 'https://chinaobservers.eu/wp-content/uploads/2022/09/covid-still-life-with-vaccine-2-e1664458442814.jpg',
      videoUrl:'https://www.youtube.com/embed/qRhKe9yLhPM',
    },
    {
      name: 'Radio',
      era: 'Modern',
      lat: 45.0,
      lng: 7.7,
      desc: 'Guglielmo Marconi’s invention allowed wireless communication across long distances.',
      image: 'https://services.meteored.com/img/article/sono-passati-150-anni-dalla-nascita-inventore-della-radio-guglielmo-marconi-1714385160875_512.jpg',
      videoUrl:'https://www.youtube.com/embed/F1FzqlfdNak',
    },

     {
      name: 'Paper',
      era: 'Ancient',
      lat: 34.2,
      lng: 108.9,
      desc: 'Invented in China around 105 AD, paper revolutionized record-keeping and communication.',
      image: 'https://exploremyindia.in/wp-content/uploads/2015/06/Who-Invented-Paper-568x430.jpg',
      videoUrl:'https://www.youtube.com/embed/jQJOarYaEfo',
    },
    {
      name: 'Concrete',
      era: 'Ancient',
      lat: 41.9,
      lng: 12.5,
      desc: 'Developed by the Romans, concrete allowed the creation of massive enduring structures.',
      image: 'https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/gettyimages-990225936?_a=BAVAZGDX0',
      videoUrl:'https://www.youtube.com/embed/4X4pR0y0r5s',
    },
    {
      name: 'Mechanical Clock',
      era: 'Medieval',
      lat: 51.5,
      lng: -0.12,
      desc: 'Medieval Europe developed mechanical clocks, improving timekeeping accuracy.',
      image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/194195/478863/main-image',
      videoUrl:'https://www.youtube.com/embed/G3c6Ds2b6LQ',
    },
    {
      name: 'Stirrups',
      era: 'Medieval',
      lat: 35.0,
      lng: 103.0,
      desc: 'Stirrups originated in China, transforming cavalry tactics and medieval warfare.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/%E9%8E%8F%E9%87%91%E6%9C%A8%E8%8A%AF%E9%A9%AC%E9%95%AB06337.jpg/640px-%E9%8E%8F%E9%87%91%E6%9C%A8%E8%8A%AF%E9%A9%AC%E9%95%AB06337.jpg',
      videoUrl:'https://www.youtube.com/embed/KEu7KUpCX0g',
    },
    {
      name: 'Microscope',
      era: 'Renaissance',
      lat: 51.9,
      lng: 4.5,
      desc: 'Invented in the Netherlands, the microscope opened the door to microbiology.',
      image: 'https://preview.redd.it/aydbgeny4ol91.jpg?width=640&crop=smart&auto=webp&s=afbfcb7d9a63b937c6299a491331e14c28f6f2a6',
      videoUrl:'https://www.youtube.com/embed/yxJJ_fnZMlk',
    },
    {
      name: 'Locomotive',
      era: 'Industrial',
      lat: 55.0,
      lng: -1.6,
      desc: 'George Stephenson’s steam locomotive pioneered modern railway transport.',
      image: 'https://www.northeastmuseums.org.uk/images/900/bzM5-4812-content.jpg',
      videoUrl:'https://www.youtube.com/embed/nd2Ii4OGQ4k',
    },
    {
      name: 'Photography',
      era: 'Industrial',
      lat: 48.85,
      lng: 2.35,
      desc: 'Louis Daguerre and Joseph Nicéphore Niépce developed photography in the 19th century.',
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201807/The-Daguerreotype-Camera-1839-1_0-647x568.jpg?7SrP1vmMK5ISIwGqS97aKrXBdOS_7zg_',
      videoUrl:'https://www.youtube.com/embed/XF1v8sS9-5s',
    },
    {
      name: 'Television',
      era: 'Modern',
      lat: 55.9,
      lng: -3.2,
      desc: 'Developed in the early 20th century, television transformed global entertainment and communication.',
      image: 'https://www.thoughtco.com/thmb/0qmRzKjWu0OuI5i_VSSMHNevNzw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-680882197-58f4d5d65f9b582c4dd4a776.jpg',
      videoUrl:'https://www.youtube.com/embed/TszSjE_kQwg',
    },
    {
      name: 'Penicillin',
      era: 'Modern',
      lat: 51.5,
      lng: -0.13,
      desc: 'Discovered by Alexander Fleming in 1928, penicillin revolutionized medicine as the first true antibiotic.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Sample_of_penicillin_mould_presented_by_Alexander_Fleming_to_Douglas_Macleod%2C_1935_%289672239344%29.jpg',
      videoUrl:'https://www.youtube.com/embed/9qFJIh7cByQ',
    },
    {
      name: 'Satellite',
      era: 'Modern',
      lat: 28.6,
      lng: 77.2,
      desc: 'Sputnik and later satellites revolutionized communication, navigation, and space exploration.',
      image: 'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2002/01/tiros_satellite/9149093-6-eng-GB/TIROS_satellite_pillars.jpg',
      videoUrl:'https://www.youtube.com/embed/ror4P1UAv_g',
    },

      {
      name: 'Abacus',
      era: 'Ancient',
      lat: 34.3,
      lng: 108.9,
      desc: 'An ancient calculating tool used in Mesopotamia, China, and Egypt for arithmetic operations.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmDKO4M-dn9rqjxHUc_4Pr0QKq0FCczPo6NvUXW5vgZ91k6O1prkqwupDiYLdGh5PY1uo&usqp=CAU',
      videoUrl:'https://www.youtube.com/embed/q92yHexx-dg',
    },
    {
      name: 'Water Mill',
      era: 'Ancient',
      lat: 37.9,
      lng: 23.7,
      desc: 'Used in ancient Greece and Rome to grind grain and power simple machinery with flowing water.',
      image: 'https://www.shutterstock.com/image-photo/working-watermill-wheel-falling-water-260nw-1447290644.jpg',
      videoUrl:'https://www.youtube.com/embed/UI_sIDS-U_4',
    },
    {
      name: 'Windmill',
      era: 'Medieval',
      lat: 52.1,
      lng: 5.1,
      desc: 'First developed in Persia and popularized in Europe for grinding grain and pumping water.',
      image: 'https://windcycle.energy/wp-content/uploads/2022/11/windmills-definition-2-1.jpg',
      videoUrl:'https://www.youtube.com/embed/0TKfQc7RwFQ',
    },
    {
      name: 'Astrolabe',
      era: 'Medieval',
      lat: 36.7,
      lng: 3.0,
      desc: 'An ancient astronomical device used by Islamic scholars to measure celestial positions for navigation.',
      image: 'https://idsb.tmgrup.com.tr/2015/07/16/GenelBuyuk/a-depiction-of-mariam-al-ijliya-a-famous-astrolabe-1437076290534_rs.jpg',
      videoUrl:'https://www.youtube.com/embed/YW7njI_Qvr8',
    },
    {
      name: 'Printing with Movable Type',
      era: 'Renaissance',
      lat: 35.0,
      lng: 103.0,
      desc: 'Bi Sheng in China invented movable clay type printing in the 11th century, a precursor to Gutenberg’s press.',
      image: 'https://miro.medium.com/v2/resize:fit:960/0*8LMKZqPYU_lZ3Hs5.',
      videoUrl:'https://www.youtube.com/embed/uaI5UIH--JA',
    },
    {
      name: 'Parachute',
      era: 'Renaissance',
      lat: 45.4,
      lng: 9.2,
      desc: 'Concepts by Leonardo da Vinci led to parachute designs to safely descend from heights.',
      image: 'https://www.juliantrubin.com/bigten/davinciparachute_files/leonardo_da_vinci_parachute.jpg',
      videoUrl:'https://www.youtube.com/embed/q92yHexx-dg',
    },
    {
      name: 'Battery',
      era: 'Industrial',
      lat: 45.1,
      lng: 7.7,
      desc: 'Alessandro Volta created the first electric battery in 1800, enabling portable power.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6KGJX8lgltjS2DndcMgLGVNIhsVZscD3FMofF6Qi4MLClePZQDgB9ABEIpt_OANf_FJs&usqp=CAU',
      videoUrl:'https://www.youtube.com/embed/695u5qyyR-U',
    },
    {
      name: 'Typewriter',
      era: 'Industrial',
      lat: 40.7,
      lng: -74.0,
      desc: 'The typewriter revolutionized writing efficiency in the 19th century, shaping modern communication.',
      image: 'https://nationalcioreview.com/wp-content/uploads/2023/06/typewriter-Remington-Standard-Frederick-Douglass.webp',
      videoUrl:'https://www.youtube.com/embed/2cXI0yU4GeA',
    },
    {
      name: 'Nuclear Reactor',
      era: 'Modern',
      lat: 41.8,
      lng: -87.6,
      desc: 'The first controlled nuclear chain reaction took place in Chicago in 1942, leading to nuclear energy.',
      image: 'https://cdn.mos.cms.futurecdn.net/FC8fsR53AUmaSMG2dtYaZE-1200-80.jpg',
      videoUrl:'https://www.youtube.com/embed/P99C051arMo',
    },
    {
      name: 'Smartphone',
      era: 'Modern',
      lat: 37.3,
      lng: -122.0,
      desc: 'Combining computing, communication, and multimedia, smartphones revolutionized modern life.',
      image: 'https://a.storyblok.com/f/252707/4096x2304/4cd871740d/blog_header_marting_cooper_2.webp',
      videoUrl:'https://www.youtube.com/embed/Hi7wb139ShU',
    }



];


  // Initialize Leaflet map
  useEffect(() => {
    const mapInstance = L.map('map').setView([20, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }).addTo(mapInstance);

    setMap(mapInstance);
    setFilteredInventions(inventionsData);
    updateMarkers(inventionsData, mapInstance);

    return () => {
      mapInstance.remove();
    };
  }, []);

  // Update map markers
  const updateMarkers = (inventions, mapInstance = map) => {
    if (!mapInstance) return;

    // Remove old markers
    markers.forEach((marker) => mapInstance.removeLayer(marker));
    const newMarkers = inventions.map((inv) => {
      const marker = L.marker([inv.lat, inv.lng]).addTo(mapInstance);
      // marker.bindPopup(`
      //   <strong>${inv.name}</strong><br>
      //   ${inv.desc}<br>
      //   <img src="${inv.image}" width="150">
      // `);
      const popupContent = document.createElement("div");
popupContent.innerHTML = `
  <strong>${inv.name}</strong><br>
  ${inv.desc}<br>
  <img src="${inv.image}" width="150" style="margin-top: 8px;" />
`;
marker.bindPopup(popupContent);

      return marker;
    });

    setMarkers(newMarkers);
  };

  // Filter inventions by era
  const filterInventions = (era) => {
    setSelectedEra(era);
    const filtered = inventionsData.filter(
      (inv) => inv.era === era || era === ''
    );
    setFilteredInventions(filtered);
    updateMarkers(filtered);
  };

  // Search by name
  const searchLocation = () => {
    const searchValue = document
      .getElementById('searchInput')
      .value.trim()
      .toLowerCase();
    const searchResults = inventionsData.filter((inv) =>
      inv.name.toLowerCase().includes(searchValue)
    );
    setFilteredInventions(searchResults);
    updateMarkers(searchResults);
  };

  return (
    <div className="homepage-container">
      {/* Filter Options */}
      <div className="filter-controls">
        <label htmlFor="eraSelect">Filter by Era:</label>
        <select
          id="eraSelect"
          value={selectedEra}
          onChange={(e) => filterInventions(e.target.value)}
        >
          <option value="">All</option>
          <option value="Ancient">Ancient</option>
          <option value="Medieval">Medieval</option>
          <option value="Renaissance">Renaissance</option>
          <option value="Industrial">Industrial</option>
          <option value="Modern">Modern</option>
        </select>
      </div>

      {/* Search Controls */}
      <div className="controls">
        <input
          type="text"
          id="searchInput"
          placeholder="Search invention or place"
        />
        <button onClick={searchLocation}>Search</button>
      </div>

      {/* Map */}
      <div id="map"></div>

      {/* Featured Inventions */}
      <section className="featured-inventions">
        <h2>Featured Inventions</h2>
        <div className="invention-grid">
          {filteredInventions.map((inv) => (
            <div className="invention-card" key={inv.name}>
              <img src={inv.image} alt={inv.name} />
              <h3>{inv.name}</h3>
              <p>{inv.desc}</p>
              <button onClick={() => setSelectedInvention(inv)}> 
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section> 
      {selectedInvention && (
        <>
    {console.log(selectedInvention)}
  <InventionModal
    invention={selectedInvention}
    onClose={() => setSelectedInvention(null)}
  />
    </>
)}

    </div>
  );
};

export default HomePage;
