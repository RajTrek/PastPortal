


import React, { useState } from 'react';
import './CenturyMap.css';

function CenturyMap() {
  const [selectedCentury, setSelectedCentury] = useState('15');
  const [zoomLevel, setZoomLevel] = useState(1);

  const centuries = ['15', '16', '17', '18', '19', '20', '21'];

  const mapData = {
    '15': {
      title: '15th Century Ptolemaic World Map',
      description: 'Based on Ptolemy’s 2nd-century geography, this map reflects European understanding before global exploration.',
      inventor: {
        name: 'Claudius Ptolemy',
        bio: 'Greek mathematician and geographer whose work shaped medieval cartography.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQultMW2hIkallFo3wPT09kWnmf6XhpGJnnIw&sS',
        wiki: 'https://en.wikipedia.org/wiki/Ptolemy'
      },
      image: 'https://c8.alamy.com/comp/H9HRKP/martellus-henricus-15th-century-map-of-the-world-H9HRKP.jpg',
      method: 'Compiled from ancient texts and astronomical observations.',
      fact: 'Ptolemy’s maps were rediscovered during the Renaissance and influenced European explorers.'
    },
    '16': {
      title: '16th Century Mercator Projection',
      description: 'Mercator’s 1569 projection revolutionized navigation by preserving angles for sailors.',
      inventor: {
        name: 'Gerardus Mercator',
        bio: 'Flemish cartographer known for his cylindrical map projection.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Gerardo_Mercatore_-_Gerardus_Mercator.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Gerardus_Mercator'
      },
      image: 'https://media.sciencephoto.com/e0/56/00/73/e0560073-800px-wm.jpg',
      method: 'Used mathematical formulas to flatten the globe into a rectangle.',
      fact: 'Still used today in many web-based maps despite distortion near the poles.'
    },
    '17': {
      title: '17th Century World Map by Blaeu',
      description: 'Willem Blaeu’s map showcased expanding global knowledge and colonial ambitions.',
      inventor: {
        name: 'Willem Blaeu',
        bio: 'Dutch cartographer and publisher of influential maps.',
        image: 'https://freeyorkk.b-cdn.net/wp-content/uploads/2016/12/3618020deb973dd690a6a631a6b7939b.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Willem_Blaeu'
      },
      image: 'https://m.media-amazon.com/images/I/81tMBpfgz9L._UF1000,1000_QL80_.jpg',
      method: 'Printed using copperplate engraving and hand-colored.',
      fact: 'Blaeu’s atlases were considered luxury items in Europe.'
    },
    '18': {
      title: '18th Century Map of North America',
      description: 'Illustrates colonial boundaries and territorial disputes in North America.',
      inventor: {
        name: 'John Mitchell',
        bio: 'English cartographer known for his detailed colonial maps.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBNsZvDjEEuEVW-CNbTF_AmoPBIxR4vXOnhZMUeFm1U9QQyq0HOjipxmu9dTWGUrqV24&usqp=CAU',
        wiki: 'https://en.wikipedia.org/wiki/John_Mitchell_(geographer)'
      },
      image: 'https://media.sciencephoto.com/image/e0560050/800wm',
      method: 'Surveyed and compiled from colonial records.',
      fact: 'Used during boundary negotiations after the American Revolution.'
    },
    '19': {
      title: '19th Century Industrial Map',
      description: 'Maps reflected industrial growth and imperial expansion.',
      inventor: {
        name: 'Alexander Keith Johnston',
        bio: 'Scottish geographer known for thematic maps.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZDzKpPtJL5NTYeoB-l1HrYQUyjMvDjAxGEw&s',
        wiki: 'https://en.wikipedia.org/wiki/Alexander_Keith_Johnston'
      },
      image: 'https://c7.alamy.com/comp/2PDYM6K/a-late-19th-century-map-of-the-world-including-the-only-discovered-parts-of-antarctica-2PDYM6K.jpg',
      method: 'Used lithography and statistical overlays.',
      fact: 'Popular in classrooms and political propaganda.'
    },

    '20': {
      title: '20th Century Political Map',
      description: 'Maps reflected shifting borders due to wars and global politics.',
      inventor: {
        name: 'Richard Edes Harrison',
        bio: 'American cartographer who popularized perspective maps.',
        image: 'https://certainbooks.cdn.bibliopolis.com/pictures/24561_1.jpg?auto=webp&v=1578598551',
        wiki: 'https://en.wikipedia.org/wiki/Richard_Edes_Harrison'
      },
      image: 'https://c7.alamy.com/comp/2K0AE6C/world-map-british-showing-the-colonies-of-the-imperial-powers-1912-2K0AE6C.jpg',
      method: 'Used isometric projections and modern printing.',
      fact: 'Helped Americans visualize global strategy during WWII.'
    },
    '21': {
      title: '21st Century Digital Map',
      description: 'Interactive, real-time maps powered by satellite and AI.',
      inventor: {
        name: 'Google Maps Team',
        bio: 'Engineers and designers behind the world’s most used mapping platform.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0SyP0AI2THqOdgdwFsHQt3dpuV9MQ519TAg&s',
        wiki: 'https://en.wikipedia.org/wiki/Google_Maps'
      },
      image: 'https://images-cdn.ubuy.co.in/64ceb0743813ea669d4a9f5c-24x36-world-classic-premier-3d-wall-map.jpg',
      method: 'Combines satellite imagery, GPS, and user data.',
      fact: 'Used by over a billion people monthly.'

    }
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.1, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.1, 0.5));
  };

  return (
    <div className="century-map-container">
      <h1>Historical Maps Explorer</h1>

      <div className="century-slider">
        <label>Select a Century: {selectedCentury}th</label>
        <input
          type="range"
          min="15"
          max="21"
          value={selectedCentury}
          onChange={(e) => {
            setSelectedCentury(e.target.value);
            setZoomLevel(1);
          }}
        />
      </div>

      {selectedCentury && (
        <div className="map-container active">
          <div className="map-image-container">
            <img
              src={mapData[selectedCentury].image}
              alt={mapData[selectedCentury].title}
              className="map-image"
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: 'center'
              }}
            />
            <div className="map-zoom-controls">
              <button className="zoom-btn" onClick={handleZoomIn}>+</button>
              <button className="zoom-btn" onClick={handleZoomOut}>-</button>
            </div>
          </div>

          <div className="map-info">
            <h2 className="map-title">{mapData[selectedCentury].title}</h2>
            <p className="map-description">{mapData[selectedCentury].description}</p>
            <p><strong>How it was made:</strong> {mapData[selectedCentury].method}</p>
            <p><strong>Fun Fact:</strong> {mapData[selectedCentury].fact}</p>
            <p><strong>Wikipedia:</strong> <a href={mapData[selectedCentury].inventor.wiki} target="_blank" rel="noopener noreferrer">Learn more</a></p>
          </div>

          <div className="inventor-info">
            <img
              src={mapData[selectedCentury].inventor.image}
              alt={`Portrait of ${mapData[selectedCentury].inventor.name}`}
              className="inventor-image"
            />
            <div>
              <h3 className="inventor-name">{mapData[selectedCentury].inventor.name}</h3>
              <p className="inventor-bio">{mapData[selectedCentury].inventor.bio}</p>
            </div>
           </div>

        </div>
      )}
    </div>
  );
}
export default CenturyMap ;
