import React from 'react'
import { Container } from 'reactstrap'

const Section = ({ children, grey }) => (
  <section className={grey ? "grey" : ""}>
    {children}
    < style jsx > {`
      @media (max-width: 768px) {
        section {
          padding: 300px 0;
          height: 600px;
        }
      }
      .grey {
        background-color: #ebeff2
      }
      section {
        padding: 50px 0;
      }
    `}
    </style >
  </section >
)

export default Section