


import React, { useState } from 'react';
import './Inventions.css'; // Ensure you have this CSS file

const Inventions = () => {
  const inventions = [
    {
      name: "Antikythera Mechanism",
      desc: "An ancient Greek analog computer used to predict astronomical positions.",
      img: "https://www.researchgate.net/publication/264389831/figure/fig13/AS:669678783442957@1536675272417/Exploded-computer-reconstruction-of-the-Antikythera-Mechanism-On-the-left-the-front.png",
      keyPoints: [
        "Developed in ancient Greece around 150-100 BC.",
        "Used for astronomical calculations.",
        "Considered the world's first analog computer."
      ]
    },
    {
      name: "Baghdad Battery",
      desc: "Believed to be an ancient galvanic cell used for electroplating or experimentation.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwU4qzllWsv53UWJfdbHWHS78Mi39ZzF7IA&s",
      keyPoints: [
        "Discovered in Iraq, dating back to 250 BC.",
        "Could generate a small electric current.",
        "Possibly used for electroplating gold."
      ]
    },
    {
      name: "Printing Press",
      desc: "Invented by Johannes Gutenberg, it revolutionized the spread of knowledge.",
      img: "https://t4.ftcdn.net/jpg/00/74/53/23/360_F_74532304_K7pQhnCfkLasKAN6DKzzaqFJv3XSMwAX.jpg",
      keyPoints: [
        "Introduced in the 15th century.",
        "Enabled mass production of books.",
        "Facilitated the spread of the Renaissance."
      ]
    },
    {
      name: "Steam Engine",
      desc: "James Watt’s powerful engine fueled the Industrial Revolution.",
      img: "https://i.ytimg.com/vi/P3F20t6PoYQ/maxresdefault.jpg",
      keyPoints: [
        "Developed in the late 18th century.",
        "Transformed transportation and manufacturing.",
        "Key driver of the Industrial Revolution."
      ]
    },
    {
      name: "Internet",
      desc: "A global network that changed the way we connect, communicate, and learn.",
      img: "https://images.saymedia-content.com/.image/t_share/MTc2Mjg4ODUwMDk4NzkxNTk3/famous-inventions-of-the-20th-century.jpg",
      keyPoints: [
        "Originated in the late 20th century.",
        "Facilitated instant communication worldwide.",
        "Enabled the rise of social media and e-commerce."
      ]
    },
    {
      name: "Telephone",
      desc: "Alexander Graham Bell’s revolutionary communication device.",
      img: "https://m.media-amazon.com/images/I/71affGlkNtL.jpg",
      keyPoints: [
        "Patented in 1876.",
        "Revolutionized personal and business communication.",
        "Laid the foundation for modern telecommunications."
      ]
    },
    {
      name: "Airplane",
      desc: "The Wright brothers' invention that brought humans to the sky.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBSKRhCHag25JCVJ36LyEHiq9vBdJLOosuzYxLKnJXGtz86vsVxXRRlW0Mf5CmwXoee8&usqp=CAU",
      keyPoints: [
        "First successful flight in 1903.",
        "Transformed global travel and commerce.",
        "Enabled rapid transportation of goods and people."
      ]
    },
    {
      name: "Vaccination",
      desc: "A method to prevent disease, pioneered by Edward Jenner.",
      img: "https://chinaobservers.eu/wp-content/uploads/2022/09/covid-still-life-with-vaccine-2-e1664458442814.jpg",
      keyPoints: [
        "Introduced in the late 18th century.",
        "Significantly reduced mortality from infectious diseases.",
        "Foundation of modern immunology."
      ]
    },
    {
      name: "Telescope",
      desc: "Revealed the stars, used by Galileo to explore space.",
      img: "https://www.pbs.org/wgbh/nova/media/images/inventing-telescopes-01.width-990_aMDNQeV.jpg",
      keyPoints: [
        "First used in the early 17th century.",
        "Revolutionized astronomy and our understanding of the universe.",
        "Enabled discoveries of celestial bodies."
      ]
    },
    {
      name: "Electric Light Bulb",
      desc: "Thomas Edison's invention that illuminated the world.",
      img: "https://www.electricalapparatus.net/wp-content/uploads/thomas-edison-inventions.jpeg",
      keyPoints: [
        "Patented in 1879.",
        "Transformed daily life and industry.",
        "Enabled longer working hours and improved safety."
      ]
    },
    {
      name: "Refrigerator",
      desc: "A household appliance that revolutionized food preservation.",
      img: "https://www.mondialframec.com/admin/public/news_traduzione//thumb999_img-small_02_1596732039_1596732039.jpg",
      keyPoints: [
        "Commercially available in the early 20th century.",
        "Changed food storage and consumption habits.",
        "Reduced food spoilage and waste."
      ]
    },
    {
      name: "Computer",
      desc: "A device that processes data and performs calculations.",
      img: "https://images.saymedia-content.com/.image/t_share/MTc2Mjg4ODUwMDk4NzkxNTk3/famous-inventions-of-the-20th-century.jpg",
      keyPoints: [
        "First electronic computers developed in the 1940s.",
        "Revolutionized business, education, and entertainment.",
        "Foundation of the digital age."
      ]
    },
    {
      name: "Camera",
      desc: "A device that captures images, revolutionizing photography.",
      img: "https://media.macphun.com/img/uploads/macphun/blog/2963/WhenWasTheFirstCameraInventedAHistoryOfTheCameraISkylum.jpg",
      keyPoints: [
        "First successful photograph taken in 1826.",
        "Transformed art and documentation.",
        "Enabled the rise of visual media."
      ]
    },
    {
      name: "Microwave Oven",
      desc: "A kitchen appliance that cooks food using microwave radiation.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/1971rr4.jpg/250px-1971rr4.jpg",
      keyPoints: [
        "Invented in the 1940s.",
        "Revolutionized cooking and food preparation.",
        "Enabled quick and convenient meal preparation."
      ]
    },
    {
      name: "Smartphone",
      desc: "A handheld device that combines mobile phone and computing functions.",
      img: "https://a.storyblok.com/f/252707/4096x2304/4cd871740d/blog_header_marting_cooper_2.webp",
      keyPoints: [
        "First smartphones emerged in the late 1990s.",
        "Transformed communication, entertainment, and productivity.",
        "Enabled access to the internet on-the-go."
      ]
    },
    {
      name: "Wheel",
      desc: "One of humanity’s earliest inventions that revolutionized transport and machinery.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcsYd77gq-NzSeNA3h_uzovJMWfi_4T66xQ&s",
      keyPoints: [
        "Dates back to around 3500 BC in Mesopotamia.",
        "Crucial for transportation and pottery.",
        "Foundation for mechanical engineering."
      ]
    },
    {
      name: "Compass",
      desc: "A navigation tool that allowed explorers to travel across the seas with accuracy.",
      img: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/compass-on-old-texture-dny59.jpg",
      keyPoints: [
        "Invented in China around the 11th century.",
        "Guided the Age of Exploration.",
        "Used magnetism to find direction."
      ]
    },
    {
      name: "Gunpowder",
      desc: "An explosive powder that transformed warfare and mining.",
      img: "https://danielyuan12.files.wordpress.com/2013/08/imagescacc9e9n2.jpg",
      keyPoints: [
        "Developed in 9th century China.",
        "Led to the invention of firearms and cannons.",
        "Revolutionized military technology."
      ]
    },
    {
      name: "Mechanical Clock",
      desc: "A device to accurately measure time using gears and weights.",
      img: "https://cdn-hknml.nitrocdn.com/DxpUZdRnafqmigJpeZnzxumWUqbnNIRJ/assets/images/optimized/rev-6e58ea4/memorycherish.com/wp-content/uploads/v2-e3ib6-fo7wl.jpg",
      keyPoints: [
        "First appeared in Europe in the 14th century.",
        "Improved timekeeping and daily schedules.",
        "Led to development of modern watches."
      ]
    },
    {
      name: "Printing with Movable Type",
      desc: "Chinese innovation that predated Gutenberg’s press for flexible printing.",
      img: "https://miro.medium.com/v2/resize:fit:960/0*8LMKZqPYU_lZ3Hs5.",
      keyPoints: [
        "Invented by Bi Sheng in 1040 AD.",
        "Allowed reusable characters for printing.",
        "Inspired future printing technology."
      ]
    },
    {
      name: "Parachute",
      desc: "A device that slows down a fall from great heights.",
      img: "https://www.juliantrubin.com/bigten/davinciparachute_files/leonardo_da_vinci_parachute.jpg",
      keyPoints: [
        "Concepts by Leonardo da Vinci in the 15th century.",
        "Used in aviation and space exploration.",
        "Essential for skydiving and safety."
      ]
    },
    {
      name: "Battery",
      desc: "A device that stores and provides electrical energy.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6KGJX8lgltjS2DndcMgLGVNIhsVZscD3FMofF6Qi4MLClePZQDgB9ABEIpt_OANf_FJs&usqp=CAU",
      keyPoints: [
        "Invented by Alessandro Volta in 1800.",
        "Enabled portable electric devices.",
        "Foundation of modern electronics."
      ]
    },
    {
      name: "Locomotive",
      desc: "Steam-powered trains that transformed land transport.",
      img: "https://www.northeastmuseums.org.uk/images/900/bzM5-4812-content.jpg",
      keyPoints: [
        "Pioneered by George Stephenson in 1829.",
        "Allowed mass transport of goods and people.",
        "Integral to the Industrial Revolution."
      ]
    },
    {
      name: "Photography",
      desc: "The art and science of capturing light to create images.",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201807/The-Daguerreotype-Camera-1839-1_0-647x568.jpg?7SrP1vmMK5ISIwGqS97aKrXBdOS_7zg_",
      keyPoints: [
        "Developed in the early 19th century.",
        "Documented history and culture visually.",
        "Led to cinema and digital cameras."
      ]
    },
    {
      name: "Penicillin",
      desc: "The first widely used antibiotic that saved millions of lives.",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201807/The-Daguerreotype-Camera-1839-1_0-647x568.jpg?7SrP1vmMK5ISIwGqS97aKrXBdOS_7zg_",
      keyPoints: [
        "Discovered by Alexander Fleming in 1928.",
        "Revolutionized medicine and surgery.",
        "Fights bacterial infections effectively."
      ]
    },
    {
      name: "Radio",
      desc: "Wireless communication technology that connected the world.",
      img: "https://services.meteored.com/img/article/sono-passati-150-anni-dalla-nascita-inventore-della-radio-guglielmo-marconi-1714385160875_512.jpg",
      keyPoints: [
        "Developed by Guglielmo Marconi in 1895.",
        "Enabled long-distance wireless messaging.",
        "Foundation for broadcasting and Wi-Fi."
      ]
    },
    {
      name: "Television",
      desc: "A medium for broadcasting visual content to the masses.",
      img: "https://www.thoughtco.com/thmb/0qmRzKjWu0OuI5i_VSSMHNevNzw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-680882197-58f4d5d65f9b582c4dd4a776.jpg",
      keyPoints: [
        "Invented in the early 20th century.",
        "Changed entertainment and information sharing.",
        "Evolved to color and digital formats."
      ]
    },
    {
      name: "Satellite",
      desc: "Artificial objects orbiting Earth for communication, navigation, and research.",
      img: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2002/01/tiros_satellite/9149093-6-eng-GB/TIROS_satellite_pillars.jpg",
      keyPoints: [
        "Sputnik 1 launched in 1957.",
        "Enabled GPS, weather monitoring, and TV broadcasts.",
        "Key for modern space exploration."
      ]
    },
    {
      name: "Nuclear Reactor",
      desc: "Harnesses nuclear fission to produce energy.",
      img: "https://cdn.mos.cms.futurecdn.net/FC8fsR53AUmaSMG2dtYaZE-1200-80.jpg",
      keyPoints: [
        "First achieved in 1942 at Chicago Pile-1.",
        "Basis for nuclear power plants.",
        "Provides clean but regulated energy."
      ]
    },
    {
      name: "Smartwatch",
      desc: "A wearable device that combines a watch with digital features.",
      img: "https://static.toiimg.com/thumb/msid-107659384,width-400,resizemode-4/107659384.jpg",
      keyPoints: [
        "Popularized in the 2010s.",
        "Monitors health, notifications, and fitness.",
        "Integrates with smartphones and IoT."
      ]
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredInventions, setFilteredInventions] = useState(inventions);
  const [selectedInvention, setSelectedInvention] = useState(null);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = inventions.filter(inv => 
      inv.name.toLowerCase().includes(value) || 
      inv.desc.toLowerCase().includes(value)
    );
    setFilteredInventions(filtered);
  };

  return (
    <>
      <div className="inventions-container">
        <header>
          <input 
            type="text" 
            id="searchInput" 
            placeholder="Search inventions or place..." 
            value={searchTerm}
            onChange={handleSearch}
          />
        </header>

        <main className="inventions-gallery" id="inventionGallery">
          {filteredInventions.map(inv => (
            <div 
              className="invention-card" 
              key={inv.name}
              onClick={() => setSelectedInvention(inv)}
            >
              <img src={inv.img} alt={inv.name} />
              <h3>{inv.name}</h3>
              <p>{inv.desc}</p>
              <ul>
                {inv.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </main>
      </div>

      {/* Modal Overlay */}
      {selectedInvention && (
        <div className="invention-modal-overlay" onClick={() => setSelectedInvention(null)}>
          <div className="invention-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="invention-modal-close" onClick={() => setSelectedInvention(null)}>✖</button>
            <img src={selectedInvention.img} alt={selectedInvention.name} />
            <h3>{selectedInvention.name}</h3>
            <p>{selectedInvention.desc}</p>
            <ul>
              {selectedInvention.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Inventions;