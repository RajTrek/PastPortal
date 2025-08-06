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
                image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Ptolemy_-_The_Almagest.jpg'
            },
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/PtolemyWorldMap.jpg'
        },
        '16': {
            title: '16th Century Mercator Projection',
            description: 'The Mercator projection, developed by Gerardus Mercator in 1569, became the standard for nautical navigation due to its ability to represent lines of constant course.',
            inventor: {
                name: 'Gerardus Mercator',
                bio: 'Gerardus Mercator was a Flemish cartographer, geographer, and mathematician known for creating the Mercator projection.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Gerardus_Mercator_2.jpg'
            },
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Mercator_1569.png'
        },
        '17': {
            title: '17th Century World Map by Blaeu',
            description: 'This world map by Willem Blaeu, published in 1606, showcases the geographical knowledge of the time, including the newly discovered territories.',
            inventor: {
                name: 'Willem Blaeu',
                bio: 'Willem Blaeu was a Dutch cartographer and publisher who produced some of the most important maps of the 17th century.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Willem_Blaeu.jpg'
            },
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Blaeu_1645.jpg'
        },
        '18': {
            title: '18th Century Map of North America',
            description: 'This map illustrates the political boundaries and territories of North America in the 18th century, reflecting colonial interests and conflicts.',
            inventor: {
                name: 'John Mitchell',
                bio: 'John Mitchell was an English cartographer known for his detailed maps of North America during the colonial period.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/John_Mitchell_Map_1755.jpg/400px-John_Mitchell_Map_1755.jpg'
            },
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/John_Mitchell_Map_1755.jpg'
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
