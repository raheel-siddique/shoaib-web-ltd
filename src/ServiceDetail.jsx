import { useParams } from "react-router-dom";
import styled from "styled-components";
import { services } from "./utils/constant";



const ServiceDetail=()=>{

   
    const {  serviceName} = useParams();
  const filteredService=services.filter((myServices)=>{
    return myServices.slug === serviceName
  })[0]



const {id,name,description,slug}=filteredService
    return(
        <>



<ServiceDetailWrapper>
      <ServiceImage src={filteredService.image} alt={name} />
      <ServiceContent>
        <ServiceTitle>{name}</ServiceTitle>
        <ServiceDescription>{description}</ServiceDescription>
      </ServiceContent>
    </ServiceDetailWrapper>
        
        
        
        </>
    )
}

export default ServiceDetail




const ServiceDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
`;

const ServiceImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ServiceContent = styled.div`
  max-width: 1200px;
  text-align: center;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ServiceTitle = styled.h1`
  font-size: 3.5rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: bold;
`;

const ServiceDescription = styled.p`
  font-size:1.9rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 30px;
  text-align: justify;
  max-width: 1000px;
  margin: 0 auto;
`;