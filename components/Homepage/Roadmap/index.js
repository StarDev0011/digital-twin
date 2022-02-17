import { SiteTitle } from "../../../atoms/SiteTitle";
import { SiteContainer } from "../../../atoms/SiteContainer";
import React from 'react';
import { roadmap_data } from "../../../data/roadmap";
import { RoadmapData, RoadmapItem } from "./styles";

const Roadmap = () => {
    return (
        <div>
            <SiteContainer>
                <SiteTitle>L’Dezen x Digital Twin Roadmap</SiteTitle>
                <RoadmapData>
                    {roadmap_data.map((item) => (
                        <RoadmapItem key={item.id}>
                        <div className="processData">
                            <h1>{item.id}</h1>
                            <div className="roadmap_item">
                                <h3>{item.title}</h3>
                                <p>{item.paragraph}</p>
                            </div>
                        </div>
                        </RoadmapItem>
                    ))}
                </RoadmapData>
            </SiteContainer>
        </div>
    )
}

export default Roadmap