import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";

const Services = () => {


  const services = [
    {
      id: 1,
      name: "Human Resource Management",
      image: "https://via.placeholder.com/300x200.png?text=Web+Development",
      description:
        "Streamline your HR processes, from talent acquisition to employee development and retention.",
    },
    {
      id: 2,
      name: "Payroll Management",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTcwMjR8MHwxfGFsbHwxfHx8fHx8fHwxNjk3NDYzNDQ1&ixlib=rb-4.0.3&q=80&w=800",
      description:
        "Simplify payroll with automated and accurate solutions, ensuring compliance with regulations and timely salary disbursements.",
    },
    {
      id: 3,
      name: "Business Management Consultancy",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTcwMjR8MHwxfGFsbHwxfHx8fHx8fHwxNjk3NDYzNDQ1&ixlib=rb-4.0.3&q=80&w=800",

      description:
        "Unlock your business's potential with tailored strategies for growth, operational efficiency, and market competitiveness.",
    },
    {
      id: 4,
      name: "Patent and Copyright Services",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTcwMjR8MHwxfGFsbHwxfHx8fHx8fHwxNjk3NDYzNDQ1&ixlib=rb-4.0.3&q=80&w=800",

      description:
        "Safeguard your intellectual property with our expert patent filing, copyright registration, and advisory services.",
    },
    {
      id: 5,
      name: "Compliance and Legal Advisory",
            image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTcwMjR8MHwxfGFsbHwxfHx8fHx8fHwxNjk3NDYzNDQ1&ixlib=rb-4.0.3&q=80&w=800",

      description:
        "Stay ahead of regulatory requirements with our compliance and legal consultancy services, tailored to your business needs",
    },
    {
      id: 6,
      name: "Training and Development Programs",
            image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTcwMjR8MHwxfGFsbHwxfHx8fHx8fHwxNjk3NDYzNDQ1&ixlib=rb-4.0.3&q=80&w=800",

      description:
        "Enhance workforce skills through customized training programs designed for leadership, technical, and operational excellence.",
    },
    {
      id: 7,
      name: "Performance and Productivity Analysis",
            image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTcwMjR8MHwxfGFsbHwxfHx8fHx8fHwxNjk3NDYzNDQ1&ixlib=rb-4.0.3&q=80&w=800",

      description:
        "Maximize efficiency with in-depth analysis and actionable insights to improve performance at every level of your organization",
    },
   
  ];
  console.log(services);

  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Comprehensive Services</h2>
      <div className="container grid grid-three-column">
        {services.map((curElem) => {
          const { id, name, image, description } = curElem;
          return (
            <div key={id} className="card">
              <figure>
                <img src={image} alt={name} />
              </figure>
              <div className="card-data">
                <h3>{name}</h3>
                <p>{description}</p>
                <NavLink to="/service">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;
