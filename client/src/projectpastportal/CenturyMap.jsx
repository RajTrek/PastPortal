import React, { useState } from 'react';
import './CenturyMap.css';

function CenturyMap() {
    const [selectedCentury, setSelectedCentury] = useState('');
    const [zoomLevel, setZoomLevel] = useState(1);

    const centuries = [
        { value: '', label: 'Select a century' },
        { value: '15', label: '15th Century' },
        { value: '16', label: '16th Century' },
        { value: '17', label: '17th Century' },
        { value: '18', label: '18th Century' }
    ];

    const [mapData] = useState({
        '15': {
            title: '15th Century Ptolemaic World Map',
            description: 'This 15th century map is based on the descriptions of Ptolemy, a 2nd century Greco-Roman geographer. It shows the world as known to Europeans before the Age of Exploration.',
            inventor: {
                name: 'Claudius Ptolemy',
                bio: 'Claudius Ptolemy was a Greek mathematician, astronomer, and geographer whose work became the basis for European cartography.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQultMW2hIkallFo3wPT09kWnmf6XhpGJnnIw&sS'
            },
            image: 'https://c8.alamy.com/comp/H9HRKP/martellus-henricus-15th-century-map-of-the-world-H9HRKP.jpg'
        },
        '16': {
            title: '16th Century Mercator Projection',
            description: 'The Mercator projection, developed by Gerardus Mercator in 1569, became the standard for nautical navigation due to its ability to represent lines of constant course.',
            inventor: {
                name: 'Gerardus Mercator',
                bio: 'Gerardus Mercator was a Flemish cartographer, geographer, and mathematician known for creating the Mercator projection.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Gerardo_Mercatore_-_Gerardus_Mercator.jpg'
            },
            image: 'https://media.sciencephoto.com/e0/56/00/73/e0560073-800px-wm.jpg'
        },
        '17': {
            title: '17th Century World Map by Blaeu',
            description: 'This world map by Willem Blaeu, published in 1606, showcases the geographical knowledge of the time, including the newly discovered territories.',
            inventor: {
                name: 'Willem Blaeu',
                bio: 'Willem Blaeu was a Dutch cartographer and publisher who produced some of the most important maps of the 17th century.',
                image: 'https://freeyorkk.b-cdn.net/wp-content/uploads/2016/12/3618020deb973dd690a6a631a6b7939b.jpg'
            },
            image: 'https://m.media-amazon.com/images/I/81tMBpfgz9L._UF1000,1000_QL80_.jpg'
        },
        '18': {
            title: '18th Century Map of North America',
            description: 'This map illustrates the political boundaries and territories of North America in the 18th century, reflecting colonial interests and conflicts.',
            inventor: {
                name: 'John Mitchell',
                bio: 'John Mitchell was an English cartographer known for his detailed maps of North America during the colonial period.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBNsZvDjEEuEVW-CNbTF_AmoPBIxR4vXOnhZMUeFm1U9QQyq0HOjipxmu9dTWGUrqV24&usqp=CAU'
            },
            image: 'https://media.sciencephoto.com/image/e0560050/800wm'
        }
    });

    const handleZoomIn = () => {
        setZoomLevel(prev => Math.min(prev + 0.1, 2));
    };

    const handleZoomOut = () => {
        setZoomLevel(prev => Math.max(prev - 0.1, 0.5));
    };

    return (<>
        <div className="century-map-container">
            <h1>Historical Maps Explorer</h1>
            
            <div className="century-selector">
                <select 
                    value={selectedCentury}
                    onChange={(e) => {
                        setSelectedCentury(e.target.value);
                        setZoomLevel(1);
                    }}
                >
                    {centuries.map((century) => (
                        <option key={century.value} value={century.value}>
                            {century.label}
                        </option>
                    ))}
                </select>
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
                    </div>
                    
                    <div className="inventor-info">
                        <img 
                            src={mapData[selectedCentury].inventor.image}
                            alt="Portrait of map inventor"
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

        
      </>  
    );
}

export default CenturyMap;
